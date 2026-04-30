/**
 * Maru Online — Assessment Submission API Route
 * File: app/api/assessment/submit/route.ts
 *
 * Orchestration flow:
 * 1. Validate submission
 * 2. Calculate score + select rich template
 * 3. Gemini synthesis (assessment answers → personalised observations JSON)
 * 4. Store report in DB → generate token → build report URL
 * 5. Brevo: contact upsert
 * 6. Brevo: Email A to prospect (report link)
 * 7. Brevo: Email B to hello@maruonline.com (Jimmy's brief)
 * 8. Return report URL to client
 *
 * Error handling: each step degrades gracefully.
 * If Gemini fails → report uses template only (no personalised observations).
 * If DB store fails → report URL falls back to static assessment page.
 * If Brevo fails → log error, do not block response.
 */

import { NextRequest, NextResponse } from "next/server";
import { calculateScore, getPainTag } from "@/lib/assessment/scoring";
import { buildSynthesisPrompt, SynthesisOutput } from "@/lib/assessment/synthesisPrompt";
import { getFullTemplate } from "@/lib/assessment/reportTemplates";
import { dbLeadEngine } from "@/lib/db";
import { operationsReports } from "@/lib/db/schema/lead-engine";

// ── Types ──────────────────────────────────────────────────────────────────

interface SubmissionBody {
  answers: {
    q1: string;
    q2: string;
    q3: string;
    q4: string;
    q5: string;
  };
  name: string;
  email: string;
  website?: string;
}

// ── Main handler ───────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // ── 1. Parse and validate ──────────────────────────────────────────────
    const body: SubmissionBody = await req.json();

    if (!body.answers || !body.name || !body.email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // ── 2. Score + template selection ─────────────────────────────────────
    const scoreResult = calculateScore(body.answers);
    const painTag = getPainTag(body.answers.q4);
    const template = getFullTemplate(scoreResult.level, painTag, scoreResult.segmentB);

    // ── 3. Gemini synthesis (personalised observations — optional) ─────────
    let synthesis: SynthesisOutput | null = null;
    try {
      synthesis = await runSynthesis(body.answers, scoreResult.level);
    } catch (err) {
      console.error("Gemini synthesis failed:", err);
      // Report continues using template-only — no observations block shown
    }

    // ── 4. Store report + generate URL ────────────────────────────────────
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://maruonline.com");

    let reportUrl = `${baseUrl}/operations-assessment`;
    try {
      const rows = await dbLeadEngine
        .insert(operationsReports)
        .values({
          name: body.name,
          email: body.email,
          website: body.website ?? null,
          level: scoreResult.level,
          levelLabel: scoreResult.label,
          painTag,
          segmentB: scoreResult.segmentB,
          answers: body.answers,
          template: template as unknown as Record<string, unknown>,
          synthesis: synthesis?.objectA ? (synthesis.objectA as Record<string, unknown>) : null,
        })
        .returning({ token: operationsReports.token });

      if (rows[0]?.token) {
        reportUrl = `${baseUrl}/report/${rows[0].token}`;
      }
    } catch (err) {
      console.error("DB report store failed:", err);
      // Falls back to static URL — emails still go out
    }

    // ── 5. Brevo contact upsert (fire and forget) ─────────────────────────
    upsertBrevoContact({
      name: body.name,
      email: body.email,
      level: scoreResult.level,
      levelLabel: scoreResult.label,
      painTag,
      reportUrl,
    }).catch((err) => console.error("Brevo contact upsert failed:", err));

    // ── 6 & 7. Brevo emails (fire and forget) ─────────────────────────────
    fireBrevoEmails({
      name: body.name,
      email: body.email,
      website: body.website,
      level: scoreResult.level,
      levelLabel: scoreResult.label,
      reportUrl,
      painTag,
      segmentB: scoreResult.segmentB,
      jimmyBrief: synthesis?.objectB ?? null,
      answers: body.answers,
    }).catch((err) => console.error("Brevo send failed:", err));

    // ── 8. Return to client ────────────────────────────────────────────────
    return NextResponse.json({
      success: true,
      level: scoreResult.level,
      label: scoreResult.label,
      reportUrl,
    });

  } catch (err) {
    console.error("Assessment submission error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// ── Gemini synthesis ───────────────────────────────────────────────────────

async function runSynthesis(
  answers: SubmissionBody["answers"],
  level: 1 | 2 | 3
): Promise<SynthesisOutput> {
  const prompt = buildSynthesisPrompt(answers, level, "");

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 2000,
          responseMimeType: "application/json",
        },
      }),
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API error: ${response.status} — ${errText}`);
  }

  const data = await response.json();
  const candidate = data.candidates?.[0];
  if (!candidate) throw new Error(`Gemini returned no candidates`);

  const rawText = candidate.content?.parts?.[0]?.text ?? "";
  if (!rawText) throw new Error(`Gemini returned empty text. FinishReason: ${candidate.finishReason}`);

  const cleaned = rawText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
  return JSON.parse(cleaned) as SynthesisOutput;
}

// ── Brevo contact upsert ───────────────────────────────────────────────────

const BREVO_ASSESSMENT_LIST_ID = 21;

async function upsertBrevoContact(params: {
  name: string;
  email: string;
  level: number;
  levelLabel: string;
  painTag: string;
  reportUrl: string;
}) {
  const { name, email, level, levelLabel, painTag, reportUrl } = params;
  const firstName = name.trim().split(" ")[0];
  const lastName = name.trim().split(" ").slice(1).join(" ") || "";

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": (process.env.BREVO_API_KEY ?? "").trim(),
    },
    body: JSON.stringify({
      email,
      updateEnabled: true,
      listIds: [BREVO_ASSESSMENT_LIST_ID],
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        ASSESSMENT_LEVEL: level,
        ASSESSMENT_LABEL: levelLabel,
        PAIN_TAG: painTag,
        REPORT_URL: reportUrl,
        ASSESSMENT_DATE: new Date().toISOString().split("T")[0],
      },
    }),
  });
  const body = await res.json();
  console.log("Brevo contact upsert response:", res.status, JSON.stringify(body));
}

// ── Brevo emails ───────────────────────────────────────────────────────────

interface BrevoEmailParams {
  name: string;
  email: string;
  website?: string;
  level: 1 | 2 | 3;
  levelLabel: string;
  reportUrl: string;
  painTag: string;
  segmentB: boolean;
  jimmyBrief: SynthesisOutput["objectB"] | null;
  answers: SubmissionBody["answers"];
}

async function fireBrevoEmails(params: BrevoEmailParams) {
  await Promise.allSettled([
    sendProspectEmail(params),
    sendJimmyBriefEmail(params),
  ]);
}

async function sendProspectEmail(params: BrevoEmailParams) {
  const { name, email, level, levelLabel, reportUrl, painTag, segmentB } = params;

  const templateId1 = parseInt(process.env.BREVO_TEMPLATE_LEVEL_1 ?? "0");
  const templateId2 = parseInt(process.env.BREVO_TEMPLATE_LEVEL_2 ?? "0");
  const templateId3 = parseInt(process.env.BREVO_TEMPLATE_LEVEL_3 ?? "0");

  if (!templateId1 || !templateId2 || !templateId3) {
    throw new Error("Brevo template IDs not configured — check BREVO_TEMPLATE_LEVEL_1/2/3 env vars");
  }

  const templateIds: Record<number, number> = {
    1: templateId1,
    2: templateId2,
    3: templateId3,
  };

  const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": (process.env.BREVO_API_KEY ?? "").trim(),
    },
    body: JSON.stringify({
      sender: { name: "Maru Online", email: "hello@maruonline.com" },
      to: [{ email, name }],
      templateId: templateIds[level],
      params: {
        FIRSTNAME: name,
        LEVEL_LABEL: levelLabel,
        REPORT_URL: reportUrl,
        PAIN_TAG: painTag,
      },
      tags: [`level-${level}`, painTag, segmentB ? "segment-b" : "segment-standard"],
    }),
  });
  const brevoBody = await brevoRes.json();
  console.log("Brevo prospect email response:", brevoRes.status, JSON.stringify(brevoBody));
}

async function sendJimmyBriefEmail(params: BrevoEmailParams) {
  const { name, email, website, level, levelLabel, reportUrl, segmentB, jimmyBrief, answers } = params;

  const briefHtml = buildJimmyBriefHtml({
    name, email, website, level, levelLabel, reportUrl, segmentB, jimmyBrief, answers,
  });

  const jimmyRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": (process.env.BREVO_API_KEY ?? "").trim(),
    },
    body: JSON.stringify({
      sender: { name: "Maru Online", email: "hello@maruonline.com" },
      to: [{ email: "hello@maruonline.com", name: "Maru Online" }],
      subject: `New diagnostic: ${name} — ${levelLabel}${segmentB ? " ⚠️ Segment B" : ""}`,
      htmlContent: briefHtml,
      replyTo: { email, name },
    }),
  });
  const jimmyBody = await jimmyRes.json();
  console.log("Brevo Jimmy brief email response:", jimmyRes.status, JSON.stringify(jimmyBody));
}

function buildJimmyBriefHtml(params: {
  name: string;
  email: string;
  website?: string;
  level: number;
  levelLabel: string;
  reportUrl: string;
  segmentB: boolean;
  jimmyBrief: SynthesisOutput["objectB"] | null;
  answers: SubmissionBody["answers"];
}): string {
  const { name, email, website, levelLabel, reportUrl, segmentB, jimmyBrief, answers } = params;

  const flagBanner = segmentB
    ? `<div style="background:#fff3cd;border:1px solid #ffc107;padding:12px 16px;border-radius:4px;margin-bottom:16px;">
        <strong>⚠️ Segment B flag:</strong> Prospect has prior external implementation attempt. Probe budget expectations and change-readiness before progressing.
       </div>`
    : "";

  const briefSection = jimmyBrief
    ? `
      <h2 style="font-size:16px;margin:24px 0 8px;">AI-Generated Brief</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;width:30%;background:#f9f9f9;">Business</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${jimmyBrief.business_summary}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Segment</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${jimmyBrief.segment}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Primary pain</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${jimmyBrief.primary_pain}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Integration gap</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${jimmyBrief.integration_gap}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Tech signals</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${jimmyBrief.tech_signals}</td></tr>
        <tr style="background:#e8f4fd;"><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;">Open with</td><td style="padding:8px 12px;border:1px solid #e0e0e0;font-style:italic;">"${jimmyBrief.conversation_opener}"</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Probe 1</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${jimmyBrief.probes[0]}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Probe 2</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${jimmyBrief.probes[1]}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Flag</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${jimmyBrief.flag}</td></tr>
      </table>
    `
    : `<p style="color:#666;font-size:14px;">AI brief unavailable for this submission — review assessment answers below.</p>`;

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:680px;margin:0 auto;padding:32px 24px;color:#1a1a1a;">
      <h1 style="font-size:20px;margin:0 0 4px;">New Diagnostic: ${name}</h1>
      <p style="color:#666;font-size:14px;margin:0 0 24px;">${levelLabel} · ${new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>

      ${flagBanner}

      <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px;">
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;width:30%;background:#f9f9f9;">Name</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${name}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Email</td><td style="padding:8px 12px;border:1px solid #e0e0e0;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Website</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${website ? `<a href="${website}">${website}</a>` : "Not provided"}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Level</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${levelLabel}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Report</td><td style="padding:8px 12px;border:1px solid #e0e0e0;"><a href="${reportUrl}">View report →</a></td></tr>
      </table>

      ${briefSection}

      <h2 style="font-size:16px;margin:24px 0 8px;">Assessment Answers</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;width:30%;background:#f9f9f9;">Q1 — Operations</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${answers.q1}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Q2 — Time lost</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${answers.q2}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Q3 — Client intake</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${answers.q3}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Q4 — Fix in 6 months</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${answers.q4}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Q5 — Prior attempts</td><td style="padding:8px 12px;border:1px solid #e0e0e0;">${answers.q5}</td></tr>
      </table>

      <p style="margin-top:32px;font-size:12px;color:#999;">This email was generated automatically by the Maru Online assessment tool. Reply to this email to contact ${name} directly.</p>
    </div>
  `;
}

// ── Utilities ──────────────────────────────────────────────────────────────

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
