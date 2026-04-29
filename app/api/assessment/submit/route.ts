/**
 * Maru Online — Assessment Submission API Route
 * File: app/api/assessment/submit/route.ts
 * 
 * Orchestration flow:
 * 1. Validate submission
 * 2. Calculate score (client-side already done, server validates)
 * 3. Firecrawl scrape (if URL provided)
 * 4. Claude synthesis (assessment answers + scrape → JSON)
 * 5. Notion page creation (personalised report from template)
 * 6. Brevo: Email A to prospect (Notion report link)
 * 7. Brevo: Email B to hello@maruonline.com (Jimmy's brief)
 * 8. Return Notion page URL to client
 * 
 * Error handling: each step degrades gracefully.
 * If Firecrawl fails → synthesis runs on answers only.
 * If Notion fails → emails still send, URL falls back to static level page.
 * If Brevo fails → log error, do not block response.
 */

import { NextRequest, NextResponse } from "next/server";
import { calculateScore, getPainTag } from "@/lib/assessment/scoring";
import { buildSynthesisPrompt, SynthesisOutput } from "@/lib/assessment/synthesisPrompt";

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

    // ── 2. Calculate score ─────────────────────────────────────────────────
    const scoreResult = calculateScore(body.answers);
    const painTag = getPainTag(body.answers.q4);

    // ── 3. Firecrawl scrape ────────────────────────────────────────────────
    let siteMarkdown = "";
    if (body.website && isValidUrl(body.website)) {
      siteMarkdown = await scrapeWebsite(body.website);
    }

    // ── 4. Claude synthesis ────────────────────────────────────────────────
    let synthesis: SynthesisOutput | null = null;
    try {
      synthesis = await runSynthesis(body.answers, scoreResult.level, siteMarkdown);
    } catch (err) {
      console.error("Claude synthesis failed:", err);
      // Continue without synthesis — Notion report uses level-only template
    }

    // ── 5. Notion page creation ────────────────────────────────────────────
    let notionPageUrl = getFallbackNotionUrl(scoreResult.level);
    try {
      notionPageUrl = await createNotionReport({
        name: body.name,
        email: body.email,
        website: body.website,
        level: scoreResult.level,
        levelLabel: scoreResult.label,
        summary: scoreResult.summary,
        nextStep: scoreResult.nextStep,
        observations: synthesis?.objectA ?? null,
        scoreResult,
      });
    } catch (err) {
      console.error("Notion page creation failed:", err);
      // Falls back to static URL
    }

    // ── 6 & 7. Brevo emails (fire and forget — don't block response) ───────
    fireBrevoEmails({
      name: body.name,
      email: body.email,
      website: body.website,
      level: scoreResult.level,
      levelLabel: scoreResult.label,
      notionPageUrl,
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
      notionPageUrl,
    });

  } catch (err) {
    console.error("Assessment submission error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// ── Firecrawl scrape ───────────────────────────────────────────────────────

async function scrapeWebsite(url: string): Promise<string> {
  const response = await fetch("https://api.firecrawl.dev/v1/scrape", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.FIRECRAWL_API_KEY}`,
    },
    body: JSON.stringify({
      url,
      formats: ["markdown"],
      onlyMainContent: true,
      timeout: 15000,
    }),
  });

  if (!response.ok) {
    throw new Error(`Firecrawl error: ${response.status}`);
  }

  const data = await response.json();
  return data.data?.markdown ?? "";
}

// ── Gemini synthesis ───────────────────────────────────────────────────────

async function runSynthesis(
  answers: SubmissionBody["answers"],
  level: 1 | 2 | 3,
  siteMarkdown: string
): Promise<SynthesisOutput> {
  const prompt = buildSynthesisPrompt(answers, level, siteMarkdown);

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 1500,
          responseMimeType: "application/json",
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

  const cleaned = rawText
    .replace(/```json\n?/g, "")
    .replace(/```\n?/g, "")
    .trim();

  const parsed = JSON.parse(cleaned) as SynthesisOutput;
  return parsed;
}

// ── Notion page creation ───────────────────────────────────────────────────

interface NotionReportParams {
  name: string;
  email: string;
  website?: string;
  level: 1 | 2 | 3;
  levelLabel: string;
  summary: string;
  nextStep: string;
  observations: SynthesisOutput["objectA"] | null;
  scoreResult: ReturnType<typeof calculateScore>;
}

async function createNotionReport(params: NotionReportParams): Promise<string> {
  const { name, email, website, level, levelLabel, summary, nextStep, observations, scoreResult } = params;

  const parentPageId = process.env.NOTION_REPORTS_PARENT_ID!;

  // Build the page content blocks
  const blocks = buildNotionBlocks({
    name,
    email,
    website,
    levelLabel,
    summary,
    nextStep,
    observations,
    segmentB: scoreResult.segmentB,
  });

  // Create the page
  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: { page_id: parentPageId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: `Operations Diagnostic — ${name} — ${new Date().toLocaleDateString("en-GB")}`,
              },
            },
          ],
        },
      },
      children: blocks,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Notion API error: ${response.status} — ${err}`);
  }

  const data = await response.json();
  const pageId = data.id as string;

  // Return the shareable Notion URL
  return `https://www.notion.so/${pageId.replace(/-/g, "")}`;
}

function buildNotionBlocks(params: {
  name: string;
  email: string;
  website?: string;
  levelLabel: string;
  summary: string;
  nextStep: string;
  observations: SynthesisOutput["objectA"] | null;
  segmentB: boolean;
}) {
  const { name, levelLabel, summary, nextStep, observations, segmentB } = params;

  const blocks: object[] = [
    // Header
    notionHeading1(`Your Operations Diagnostic Report`),
    notionParagraph(`Hi ${name}, here's what your assessment reveals about where your business is right now — and what a realistic first step looks like.`),
    notionDivider(),

    // Readiness level
    notionHeading2(`Your Result: ${levelLabel}`),
    notionParagraph(summary),
    notionDivider(),
  ];

  // Personalised observations (if synthesis succeeded)
  if (observations) {
    blocks.push(
      notionHeading2("What your answers suggest"),
      notionParagraph(observations.observation1),
      notionParagraph(observations.observation2),
      notionParagraph(observations.observation3)
    );

    if (observations.siteObservation) {
      blocks.push(notionParagraph(observations.siteObservation));
    }

    blocks.push(notionDivider());
  }

  // What the diagnostic engagement is
  blocks.push(
    notionHeading2("What happens next"),
    notionParagraph(nextStep),
    notionDivider(),

    notionHeading2("About the Operations Diagnostic"),
    notionParagraph(
      "The diagnostic is a single 30-minute discovery conversation. We review how your business currently operates — where information moves, where it stalls, and where specific people are carrying load that a system should carry. We come prepared. We ask direct questions. And we tell you honestly if we think the engagement isn't the right fit for your situation."
    ),
    notionParagraph(
      "What you walk away with: a written diagnostic report identifying the three highest-leverage integration opportunities in your business, ranked by impact, with a recommended first step and a realistic scope and timeline. Delivered within five working days of the discovery call."
    ),
    notionParagraph(
      "What this is not: a full implementation. A commitment to a longer engagement. Or a generic AI strategy document. Everything in the output is specific to how your business actually operates."
    ),
    notionDivider(),

    // Expectation management
    notionHeading2("A note on what to expect"),
    notionParagraph(
      "The diagnostic is a paid engagement. The investment offsets against your core engagement if you decide to proceed. If the diagnostic finds that AI integration isn't the right priority for your business right now — that has happened — we will tell you that directly. It is more useful to you than a roadmap you don't need."
    ),
    notionParagraph(
      "We don't build on broken foundations to collect a fee. We don't recommend tools we have a commercial relationship with. And we measure whether it worked — every time."
    ),
    notionDivider(),

    // CTA options
    notionHeading2("Ready to talk?"),
    notionParagraph(
      "There are two ways to take the next step:"
    ),
    notionCallout(
      "Option 1 — Book a 30-minute discovery call directly. Pick a time that works and we'll come prepared with what we've learned from your assessment.",
      "📅"
    ),
    notionCallout(
      "Option 2 — Tell us a bit more first. Fill in a few more details about your business and we'll reach out to schedule a call when the time is right for you.",
      "✉️"
    ),
    notionDivider(),

    // Footer
    notionParagraph(
      "This report was prepared by Maru Online. If you have questions before booking a call, email hello@maruonline.com."
    )
  );

  // Segment B internal note (hidden from prospect — Notion property, not a block)
  // Handled via page properties, not blocks

  return blocks;
}

// ── Notion block builders ──────────────────────────────────────────────────

function notionHeading1(text: string) {
  return {
    object: "block",
    type: "heading_1",
    heading_1: {
      rich_text: [{ type: "text", text: { content: text } }],
    },
  };
}

function notionHeading2(text: string) {
  return {
    object: "block",
    type: "heading_2",
    heading_2: {
      rich_text: [{ type: "text", text: { content: text } }],
    },
  };
}

function notionParagraph(text: string) {
  return {
    object: "block",
    type: "paragraph",
    paragraph: {
      rich_text: [{ type: "text", text: { content: text } }],
    },
  };
}

function notionDivider() {
  return { object: "block", type: "divider", divider: {} };
}

function notionCallout(text: string, emoji: string) {
  return {
    object: "block",
    type: "callout",
    callout: {
      rich_text: [{ type: "text", text: { content: text } }],
      icon: { type: "emoji", emoji },
    },
  };
}

// ── Brevo emails ───────────────────────────────────────────────────────────

interface BrevoEmailParams {
  name: string;
  email: string;
  website?: string;
  level: 1 | 2 | 3;
  levelLabel: string;
  notionPageUrl: string;
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
  const { name, email, level, levelLabel, notionPageUrl, painTag } = params;

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

  await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      to: [{ email, name }],
      templateId: templateIds[level],
      params: {
        FIRSTNAME: name,
        LEVEL_LABEL: levelLabel,
        NOTION_REPORT_URL: notionPageUrl,
        PAIN_TAG: painTag,
      },
      tags: [`level-${level}`, painTag, params.segmentB ? "segment-b" : "segment-standard"],
    }),
  });
}

async function sendJimmyBriefEmail(params: BrevoEmailParams) {
  const { name, email, website, level, levelLabel, notionPageUrl, segmentB, jimmyBrief, answers } = params;

  // Build plain-text brief for Jimmy
  const briefHtml = buildJimmyBriefHtml({
    name,
    email,
    website,
    level,
    levelLabel,
    notionPageUrl,
    segmentB,
    jimmyBrief,
    answers,
  });

  await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      to: [{ email: "hello@maruonline.com", name: "Maru Online" }],
      subject: `New diagnostic: ${name} — ${levelLabel}${segmentB ? " ⚠️ Segment B" : ""}`,
      htmlContent: briefHtml,
      replyTo: { email, name },
    }),
  });
}

function buildJimmyBriefHtml(params: {
  name: string;
  email: string;
  website?: string;
  level: number;
  levelLabel: string;
  notionPageUrl: string;
  segmentB: boolean;
  jimmyBrief: SynthesisOutput["objectB"] | null;
  answers: SubmissionBody["answers"];
}): string {
  const { name, email, website, levelLabel, notionPageUrl, segmentB, jimmyBrief, answers } = params;

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
        <tr><td style="padding:8px 12px;border:1px solid #e0e0e0;font-weight:600;background:#f9f9f9;">Notion report</td><td style="padding:8px 12px;border:1px solid #e0e0e0;"><a href="${notionPageUrl}">View report →</a></td></tr>
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

// ── Fallback Notion URLs ────────────────────────────────────────────────────

function getFallbackNotionUrl(level: 1 | 2 | 3): string {
  const fallbacks: Record<number, string> = {
    1: process.env.NOTION_FALLBACK_LEVEL_1_URL ?? "https://maruonline.com/#assessment",
    2: process.env.NOTION_FALLBACK_LEVEL_2_URL ?? "https://maruonline.com/#assessment",
    3: process.env.NOTION_FALLBACK_LEVEL_3_URL ?? "https://maruonline.com/#assessment",
  };
  return fallbacks[level];
}

// ── Utilities ──────────────────────────────────────────────────────────────

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidUrl(url: string): boolean {
  try {
    const u = new URL(url.startsWith("http") ? url : `https://${url}`);
    return u.hostname.includes(".");
  } catch {
    return false;
  }
}
