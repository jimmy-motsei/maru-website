import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { FadeUp, StaggerParent, StaggerChild } from "@/components/ui/Animate";
import AssessmentFormSection from "@/components/homepage/AssessmentFormSection";
import NewsletterSection from "@/components/homepage/NewsletterSection";
import PrimaryServicesFilter from "@/components/homepage/PrimaryServicesFilter";

export const metadata: Metadata = {
  title: "AI & Automation Consultants for Growing SMEs | Maru Online",
  description:
    "We find where your processes are costing you time and money — then build AI-powered workflows that cut costs and free your team. Free assessment.",
};

// ─── Layout constants ─────────────────────────────────────────────────────────
const outerPad = "px-6 md:px-[60px]";
const inner     = "max-w-[900px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";
const innerWide = "max-w-[1100px] mx-auto";


const processPhases = [
  {
    number: "01",
    name: "Diagnose",
    description: "We audit your workflows, tools, and data flow. The goal: find where you're losing time and money. You get a detailed diagnostic report, a cost calculation, and a prioritised roadmap.",
    outcome: "A clear picture of what's broken, why it matters, and what to fix first.",
    timeline: "24 hours from submission to results",
  },
  {
    number: "02",
    name: "Design",
    description: "Based on the audit, we design your integration architecture. What systems connect where? What data flows how? What's the sequence? You get a detailed implementation plan — non-technical, easy to understand and follow.",
    outcome: "A documented roadmap with clear ownership, timelines, and success metrics.",
    timeline: "5–7 business days",
  },
  {
    number: "03",
    name: "Build",
    description: "We integrate your tools, build the workflows, test every connection. Your team learns how to use and manage each workflow as we build. Nothing ships until it's tested and proven to work.",
    outcome: "Live workflows that connect your tools. Your team can manage them.",
    timeline: "20–30 days depending on complexity",
  },
  {
    number: "04",
    name: "Launch & Measure",
    description: "We deploy with your team, measure results against your baseline, and provide 30 days of free support. You see exactly how many hours you saved, how many errors you eliminated, what revenue impact happened.",
    outcome: "Measured results. Real evidence. Confidence in the system.",
    timeline: "First 30 days of operation",
  },
];

// ─── Inline SVGs for trust bar ────────────────────────────────────────────────

function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2L3 5v5c0 4.418 3.134 7.5 7 8 3.866-.5 7-3.582 7-8V5L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          SECTION 01 — HERO
          bg: navy-deep (#0D1B2A)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`relative min-h-screen flex items-center ${outerPad} pt-48 pb-32`}
        style={{ backgroundColor: "var(--color-bg-navy-deep)" }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            border: "1px solid rgba(61,184,198,0.1)",
            pointerEvents: "none",
          }}
        />
        <div className={innerWide}>
          <FadeUp>
            <span className="label-eyebrow" style={{ marginBottom: "3rem" }}>AI &amp; Automation Consultants for Growing SMEs</span>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="maru-headline-split" style={{ marginBottom: "2.5rem" }}>
              <span className="maru-headline-split-light">Unlock the true potential</span>
              <br />
              <span className="maru-headline-split-strong">hidden within your operations.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "var(--text-body)",
                color: "var(--color-ink-inverted-muted)",
                lineHeight: "var(--leading-body-relaxed)",
                maxWidth: "100%",
                marginBottom: "2rem",
              }}
            >
              Every business holds untapped capabilities, waiting to be fully realized. Imagine your existing tools and talented teams working in perfect concert, creating a seamless flow that elevates performance and directs every effort towards remarkable growth. This is the future where your enterprise thrives with renewed purpose and efficiency.
            </p>
          </FadeUp>

          <FadeUp delay={0.19}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "var(--text-body)",
                color: "var(--color-ink-inverted)",
                lineHeight: "var(--leading-body-relaxed)",
                maxWidth: "100%",
                marginBottom: "3rem",
              }}
            >
              Your existing tools, intelligently connected, now orchestrate a seamless flow that elevates performance and accelerates growth.
            </p>
          </FadeUp>

          <FadeUp delay={0.22}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button href="#assessment" variant="primary">
                Get a Free Diagnostic
              </Button>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-meta)",
                fontWeight: 300,
                color: "rgba(250,250,248,0.45)",
                marginTop: "1rem",
                marginBottom: 0,
              }}
            >
              No obligation. No cost. 24-hour turnaround on results.
            </p>
          </FadeUp>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 02 — PROBLEM STATEMENT
          bg: canvas (#FAFAF8)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-canvas)" }}
      >
        <div className={innerNarrow}>
          <FadeUp>
            <h2>The AI Investment Paradox</h2>
          </FadeUp>

          <FadeUp delay={0.06}>
            <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
              73% of SA businesses are investing in AI tools. Only 47% see a return. The gap isn&apos;t the tools — it&apos;s integration. Your spreadsheet doesn&apos;t talk to your CRM. Your CRM doesn&apos;t talk to your email system. Each tool solves one problem. All of them together create a new one: your team spending hours connecting dots.
            </p>
          </FadeUp>

          {/* Problem 1 */}
          <FadeUp delay={0.1}>
            <div style={{ marginBottom: "var(--space-para-section)" }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-ink-primary)",
                  marginBottom: "0.75rem",
                  lineHeight: "var(--leading-subheading)",
                }}
              >
                Buying AI tools without integration is like buying car parts and hoping they&apos;ll assemble themselves.
              </p>
              <p className="body-muted" style={{ marginBottom: 0 }}>
                You end up with expensive tools that don&apos;t talk to each other. Your team still manually moves data between systems. Still sends the same emails twice. Still chases invoices on Friday afternoon. The tool didn&apos;t fail. The integration did.
              </p>
            </div>
          </FadeUp>

          {/* Problem 2 */}
          <FadeUp delay={0.14}>
            <div style={{ marginBottom: "var(--space-para-section)" }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-ink-primary)",
                  marginBottom: "0.75rem",
                  lineHeight: "var(--leading-subheading)",
                }}
              >
                Manual workarounds hide the real cost.
              </p>
              <p className="body-muted" style={{ marginBottom: 0 }}>
                When your CRM doesn&apos;t connect to your website, you manually enter leads. When your email doesn&apos;t connect to your spreadsheet, you manually update your list. These &ldquo;5-minute tasks&rdquo; stack up. Six hours a week. Twenty-six hours a month. 312 hours a year. That&apos;s two months of your team&apos;s time, every year, on busywork.
              </p>
            </div>
          </FadeUp>

          {/* Problem 3 */}
          <FadeUp delay={0.18}>
            <div style={{ marginBottom: "var(--space-section-header-mb)" }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-ink-primary)",
                  marginBottom: "0.75rem",
                  lineHeight: "var(--leading-subheading)",
                }}
              >
                Tool sprawl kills efficiency before it kills your budget.
              </p>
              <p className="body-muted" style={{ marginBottom: 0 }}>
                Each new tool adds switching cost, training time, another password. Your team context-switches across seven systems. Focus breaks. Mistakes happen. Results slow down. By the time you&apos;ve connected everything, you&apos;ve already lost the ROI.
              </p>
            </div>
          </FadeUp>

          {/* Founder quote */}
          <FadeUp delay={0.22}>
            <blockquote
              style={{
                borderLeft: "4px solid var(--color-cyan)",
                paddingLeft: "1.5rem",
                margin: 0,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-h3-serif)",
                  fontWeight: 300,
                  lineHeight: "var(--leading-subheading)",
                  color: "var(--color-ink-primary)",
                  letterSpacing: "var(--tracking-tight)",
                  fontStyle: "italic",
                  marginBottom: "0.75rem",
                }}
              >
                &ldquo;Most businesses don&apos;t have an AI problem. They have an integration problem. That&apos;s exactly what we fix.&rdquo;
              </p>
              <cite
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "var(--text-body-sm)",
                  color: "var(--color-ink-tertiary)",
                  fontStyle: "normal",
                  display: "block",
                }}
              >
                — Jimmy Motsei, Founder, Maru Online
              </cite>
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 03 — METRICS BAR
          bg: white (#FFFFFF)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-16`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={inner}>
          <StaggerParent className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {[
              {
                stat: "Free",
                sub: "Assessment — no cost to find out where you stand",
              },
              {
                stat: "24-Hour",
                sub: "Turnaround on your diagnostic report and clear next steps",
              },
              {
                stat: "30 Days",
                sub: "Average timeline from diagnosis to first automated workflow live",
              },
              {
                stat: "Fixed",
                sub: "Clear pricing at every phase — no surprise invoices, no scope creep",
              },
            ].map((item) => (
              <StaggerChild key={item.stat}>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      fontWeight: 600,
                      color: "var(--color-cyan)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.stat}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-meta)",
                      fontWeight: 300,
                      color: "var(--color-ink-tertiary)",
                      lineHeight: 1.5,
                      marginBottom: 0,
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 04 — PRIMARY SERVICES (filter layout)
          bg: secondary (#F5F4F0)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        id="services"
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className={innerWide}>
          <FadeUp>
            <h2>How We Fix the Integration Gap</h2>
            <p
              className="body-muted"
              style={{ maxWidth: "640px", marginBottom: "var(--space-section-header-mb)" }}
            >
              Start with your primary integration challenge. We&apos;ll recommend a relevant starting point to your solution.
            </p>
          </FadeUp>

          <PrimaryServicesFilter />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 05 — FOUNDATION SERVICES (flush 3-col grid)
          bg: white (#FFFFFF)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={innerWide}>
          <FadeUp>
            <h2>Beyond AI Integration — Full-Spectrum Business Support</h2>
            <p
              className="body-muted"
              style={{ maxWidth: "680px", marginBottom: "var(--space-section-header-mb)" }}
            >
              AI-powered workflows work best on strong foundations. If your strategy needs clarity, your digital presence needs rebuilding, or your marketing needs direction — we handle that too.
            </p>
          </FadeUp>

          {/* Flush 3-column grid — gap IS the divider */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{
              gap: "1px",
              background: "var(--color-border-default)",
              border: "0.5px solid var(--color-border-default)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {[
              {
                ghost: "01",
                name: "Strategy & Consultation",
                description: "Discovery and planning before implementation. We map your competitor landscape, market position, and technology needs before anything is built.",
                deliverables: [
                  "User research and audience insights",
                  "Digital roadmap and technology strategy",
                  "Technical architecture planning",
                  "Prototype design and validation",
                  "Go-to-market strategy development",
                ],
              },
              {
                ghost: "02",
                name: "Design & Development",
                description: "Digital products built with AI integration in mind. Lead capture, data collection, and workflow automation baked in — not retrofitted.",
                deliverables: [
                  "Website and web application development",
                  "E-commerce platform builds",
                  "Mobile app development",
                  "Built for AI workflow integration",
                  "Performance and conversion optimised",
                ],
              },
              {
                ghost: "03",
                name: "Digital Marketing Support",
                description: "Strategic insights from your data — then the campaign execution that acts on what the data reveals. Marketing without data is guesswork.",
                deliverables: [
                  "Website analytics and insights",
                  "Campaign strategy and planning",
                  "Campaign execution and management",
                  "Online visibility optimisation",
                  "Data-driven marketing decisions",
                ],
              },
            ].map((col) => (
              <div
                key={col.ghost}
                style={{
                  background: "var(--color-bg-primary)",
                  padding: "1.75rem 1.5rem",
                }}
              >
                {/* Ghost number */}
                <p
                  style={{
                    fontSize: "32px",
                    fontWeight: 100,
                    color: "rgba(205, 170, 83, 0.30)",
                    lineHeight: 1,
                    marginBottom: "1rem",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {col.ghost}
                </p>

                {/* Service name + gold underline */}
                <p
                  style={{
                    fontSize: "var(--text-h3-sans)",
                    fontWeight: 600,
                    color: "var(--color-ink-primary)",
                    lineHeight: 1.3,
                    marginBottom: "0.75rem",
                    borderBottom: "2px solid var(--color-gold)",
                    paddingBottom: "0.75rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {col.name}
                </p>

                {/* Description */}
                <p className="body-muted" style={{ marginBottom: "1.25rem" }}>
                  {col.description}
                </p>

                {/* Deliverables label */}
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-ink-secondary)",
                    marginBottom: "0.5rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Deliverables
                </p>

                {/* Deliverables list */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.deliverables.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "var(--text-body-sm)",
                        color: "var(--color-ink-secondary)",
                        padding: "4px 0",
                        lineHeight: "var(--leading-body)",
                        display: "flex",
                        gap: "8px",
                        alignItems: "flex-start",
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--color-gold)",
                          fontSize: "var(--text-body-sm)",
                          flexShrink: 0,
                          lineHeight: "var(--leading-body)",
                        }}
                      >
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 06 — FOUR-PHASE PROCESS
          bg: canvas (#FAFAF8)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        id="process"
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-canvas)" }}
      >
        <div className={inner}>
          <FadeUp>
            <h2>Our 4-Step Process to AI Integration Success</h2>
            <p
              className="body-muted"
              style={{ maxWidth: "620px", marginBottom: "var(--space-section-header-mb)" }}
            >
              A structured approach designed to help growing SMEs implement AI-powered workflows with clarity, confidence, and measurable results. Every step builds on the last.
            </p>
          </FadeUp>

          <StaggerParent className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processPhases.map((phase) => (
              <StaggerChild key={phase.number}>
                <div style={{ padding: "2rem", background: "var(--color-bg-primary)", borderRadius: "8px", height: "100%" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 700,
                      color: "var(--color-cyan)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                      display: "block",
                      marginBottom: "1rem",
                      opacity: 0.9,
                    }}
                  >
                    {phase.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h3-serif)",
                      fontWeight: 500,
                      color: "var(--color-ink-primary)",
                      lineHeight: "var(--leading-subheading)",
                      letterSpacing: "var(--tracking-tight)",
                      marginBottom: "0.875rem",
                      borderBottom: "none",
                      paddingBottom: 0,
                    }}
                  >
                    {phase.name}
                  </h3>
                  <p className="body-muted" style={{ marginBottom: "1rem" }}>
                    {phase.description}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      fontWeight: 500,
                      color: "var(--color-ink-primary)",
                      marginBottom: "0.375rem",
                      lineHeight: "var(--leading-body)",
                    }}
                  >
                    {phase.outcome}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-meta)",
                      fontWeight: 300,
                      color: "var(--color-cyan)",
                      marginBottom: 0,
                      letterSpacing: "0.05em",
                    }}
                  >
                    ⏱ {phase.timeline}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>

          <FadeUp delay={0.12}>
            <div
              style={{
                marginTop: "var(--space-section-header-mb)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <p className="body-muted" style={{ marginBottom: 0, maxWidth: "560px" }}>
                This process keeps you informed and in control at every step. No surprises. No waiting to understand what&apos;s happening.
              </p>
              <Button href="#assessment" variant="primary">
                See How It Works — Book Your Free Assessment
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 07 — ASSESSMENT FORM (client component)
          bg: navy (#1A3A5C)
          ════════════════════════════════════════════════════════════════════ */}
      <AssessmentFormSection />

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 08 — NEWSLETTER (client component)
          bg: white (#FFFFFF)
          ════════════════════════════════════════════════════════════════════ */}
      <NewsletterSection />

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 09 — FOOTER CTA
          bg: navy-deep (#0D1B2A)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`relative ${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-navy-deep)" }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            border: "1px solid rgba(61,184,198,0.08)",
            pointerEvents: "none",
          }}
        />
        <div className={innerNarrow}>
          <FadeUp>
            <h2
              className="h2-cta"
              style={{ marginBottom: "var(--space-heading-body)" }}
            >
              Ready to find out what&apos;s costing you time and money?
            </h2>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p
              className="body-on-navy"
              style={{
                marginBottom: "var(--space-section-header-mb)",
                fontWeight: 400,
                color: "var(--color-ink-inverted)",
              }}
            >
              Start with a free assessment. We&apos;ll show you exactly where you&apos;re losing time and money, what to fix first, and what working with us looks like. No obligation.
            </p>
          </FadeUp>

          <FadeUp delay={0.14}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5" style={{ marginBottom: "1.25rem" }}>
              <Button href="#assessment" variant="primary">
                Get Your Free Assessment
              </Button>
              <Button href="#process" variant="tertiary">
                See our four-step process
              </Button>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-meta)",
                fontWeight: 300,
                color: "rgba(250,250,248,0.4)",
                marginBottom: 0,
              }}
            >
              No obligation. POPIA compliant. 24-hour turnaround.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
