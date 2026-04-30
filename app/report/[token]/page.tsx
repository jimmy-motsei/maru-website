import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { ReportTemplate } from "@/lib/assessment/reportTemplates";
import type { SynthesisOutput } from "@/lib/assessment/synthesisPrompt";

// ── Types ──────────────────────────────────────────────────────────────────

interface ReportData {
  name: string;
  level: 1 | 2 | 3;
  levelLabel: string;
  painTag: string;
  segmentB: boolean;
  answers: Record<string, string>;
  template: ReportTemplate & { segmentBOverlay?: string };
  synthesis: SynthesisOutput["objectA"] | null;
  createdAt: string;
}

// ── Metadata ───────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ token: string }>;
}): Promise<Metadata> {
  const { token } = await params;
  const data = await fetchReport(token);
  if (!data) return { title: "Report Not Found — Maru Online" };
  return {
    title: `Operations Assessment Report — Maru Online`,
    description: `Your personalised operations assessment from Maru Online.`,
    robots: { index: false, follow: false },
  };
}

// ── Data fetching ──────────────────────────────────────────────────────────

async function fetchReport(token: string): Promise<ReportData | null> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  try {
    const res = await fetch(`${baseUrl}/api/report/${token}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ── Level colours ──────────────────────────────────────────────────────────

const levelStyles: Record<number, { pill: string; accent: string }> = {
  1: { pill: "bg-[#FDF8EE] text-[#7A5C1E] border border-[#CDAA53]/40", accent: "#CDAA53" },
  2: { pill: "bg-[#E8F8FA] text-[#1A6B75] border border-[#3DB8C6]/40", accent: "#3DB8C6" },
  3: { pill: "bg-[#EEF4FF] text-[#1D4068] border border-[#1A3A5C]/30", accent: "#1A3A5C" },
};

// ── Page ───────────────────────────────────────────────────────────────────

export default async function ReportPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const data = await fetchReport(token);

  if (!data) notFound();

  const { name, level, levelLabel, template, synthesis, segmentB } = data;
  const style = levelStyles[level] ?? levelStyles[2];
  const firstName = name.trim().split(" ")[0];

  const calendlyUrl = "https://calendly.com/hello-maruonline/discovery-call";

  return (
    <div className="min-h-screen bg-[#FAFAF8]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="bg-[#0D1B2A] border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-semibold text-lg tracking-tight">
            <span className="text-[#3DB8C6]">M</span>
            <span className="text-white">aru Online</span>
          </Link>
          <span className="text-xs font-mono text-white/40 tracking-widest uppercase hidden sm:block">
            Operations Assessment
          </span>
        </div>
      </header>

      {/* ── Report banner ───────────────────────────────────────────────── */}
      <div className="bg-[#0D1B2A] border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <p className="text-xs font-mono text-[#3DB8C6] tracking-widest uppercase mb-3">
            Your Report
          </p>
          <h1 className="text-2xl font-semibold text-white leading-snug mb-3">
            Hi {firstName}, here&apos;s what your assessment reveals.
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`inline-block text-xs font-mono px-3 py-1 rounded-full tracking-wider uppercase ${style.pill}`}>
              {levelLabel}
            </span>
            <span className="text-white/40 text-xs">
              Prepared by Maru Online
            </span>
          </div>
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────────────────────── */}
      <main className="max-w-3xl mx-auto px-6 py-12">

        {/* Intro / situation framing */}
        <Section label="Your situation">
          <p className="text-[#1A2B3C] text-base leading-relaxed">
            {template.intro}
          </p>
        </Section>

        <Divider />

        {/* Insight 1: Primary friction */}
        <Section label="The pattern we see">
          <p className="text-[#1A2B3C] text-base leading-relaxed">
            {template.insight1}
          </p>
        </Section>

        <Divider />

        {/* Insight 2: Downstream cost */}
        <Section label="What this costs you">
          <p className="text-[#1A2B3C] text-base leading-relaxed">
            {template.insight2}
          </p>
        </Section>

        <Divider />

        {/* Insight 3: What becomes possible */}
        <Section label="What changes when it&apos;s fixed">
          <p className="text-[#1A2B3C] text-base leading-relaxed">
            {template.insight3}
          </p>
        </Section>

        {/* Segment B overlay */}
        {segmentB && template.segmentBOverlay && (
          <>
            <Divider />
            <div className="bg-[#FDF8EE] border border-[#CDAA53]/30 rounded-lg p-6">
              <p className="text-xs font-mono text-[#7A5C1E] tracking-widest uppercase mb-3">
                A note on prior attempts
              </p>
              <p className="text-[#3A2B0C] text-base leading-relaxed">
                {template.segmentBOverlay}
              </p>
            </div>
          </>
        )}

        {/* Synthesis observations (Gemini personalisation — shown if available) */}
        {synthesis && (
          <>
            <Divider />
            <Section label="Based on your specific answers">
              <div className="space-y-4">
                <Observation text={synthesis.observation1} />
                <Observation text={synthesis.observation2} />
                <Observation text={synthesis.observation3} />
                {synthesis.siteObservation && (
                  <Observation text={synthesis.siteObservation} />
                )}
              </div>
            </Section>
          </>
        )}

        <Divider />

        {/* What this assessment tells us */}
        <Section label="What this assessment tells us">
          <p className="text-[#1A2B3C] text-base leading-relaxed mb-4">
            The Operations Assessment gives us a picture of how your business currently organises its work — where processes are defined, where they depend on specific people, and where things tend to stall. It is not a full diagnosis. It is a starting point.
          </p>
          <p className="text-[#4A5568] text-base leading-relaxed">
            Think of it as the intake. The real work — and the most useful conversation — happens in the discovery call.
          </p>
        </Section>

        <Divider />

        {/* Discovery call section */}
        <section className="bg-[#0D1B2A] rounded-xl p-8 mb-8">
          <p className="text-xs font-mono text-[#3DB8C6] tracking-widest uppercase mb-4">
            Next step
          </p>
          <h2 className="text-xl font-semibold text-white leading-snug mb-4">
            Book a free 30-minute discovery call.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-4">
            We will have reviewed your assessment before we speak. On the call, we go deeper — asking direct questions about where time is actually going, where information gets stuck, and where the manual work is concentrated.
          </p>
          <p className="text-white/70 text-base leading-relaxed mb-6">
            At the end of the call we will tell you honestly whether an Operations Diagnostic makes sense for your business right now. If it does not, we will say so directly.
          </p>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3DB8C6] text-[#0D1B2A] font-semibold px-8 py-4 rounded-lg text-base hover:bg-[#2DA8B6] transition-colors"
          >
            Book your discovery call →
          </a>
        </section>

        {/* Diagnostic explainer */}
        <Section label="If the fit is there — the Operations Diagnostic">
          <p className="text-[#1A2B3C] text-base leading-relaxed mb-4">
            The Operations Diagnostic is a structured engagement we propose after the discovery call, if both sides agree it is the right next step. It goes deep into how your business actually operates — mapping where the friction is, what it is costing you, and where targeted integration would have the most impact.
          </p>
          <p className="text-[#4A5568] text-base leading-relaxed">
            The output is a written report: the three highest-leverage integration opportunities in your business, ranked by impact, with a recommended first step and a realistic scope and timeline. Delivered within five working days of the engagement starting.
          </p>
        </Section>

        <Divider />

        {/* Secondary CTA */}
        <div className="bg-[#E8F8FA] border border-[#3DB8C6]/30 rounded-lg p-6 mb-8">
          <p className="text-[#0D1B2A] font-semibold mb-2">
            Not ready to book yet?
          </p>
          <p className="text-[#2D4A60] text-base leading-relaxed mb-4">
            Reply to your report email and tell us what is going on in the business. We will take it from there.
          </p>
          <a
            href="mailto:hello@maruonline.com"
            className="text-[#1A6B75] text-sm font-semibold hover:underline"
          >
            Email hello@maruonline.com →
          </a>
        </div>

        {/* Footer */}
        <p className="text-[#A0AEC0] text-xs text-center leading-relaxed">
          This report was prepared by Maru Online.{" "}
          <a href="mailto:hello@maruonline.com" className="hover:underline">
            hello@maruonline.com
          </a>
          {" "}·{" "}
          <Link href="/" className="hover:underline">maruonline.com</Link>
        </p>

      </main>
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <p
        className="text-xs font-mono text-[#3DB8C6] tracking-widest uppercase mb-3"
        dangerouslySetInnerHTML={{ __html: label }}
      />
      {children}
    </section>
  );
}

function Divider() {
  return <hr className="border-[#E2E8F0] mb-8" />;
}

function Observation({ text }: { text: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3DB8C6] flex-shrink-0" />
      <p className="text-[#2D4A60] text-base leading-relaxed">{text}</p>
    </div>
  );
}
