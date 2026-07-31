import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { FadeUp, StaggerParent, StaggerChild } from "@/components/ui/Animate";
import AssessmentFormSection from "@/components/homepage/AssessmentFormSection";
import PrimaryServicesFilter from "@/components/homepage/PrimaryServicesFilter";
import ImageSplit from "@/components/ui/ImageSplit";
import ImageBand from "@/components/ui/ImageBand";
import { BGPattern } from "@/components/ui/bg-pattern";

export const metadata: Metadata = {
  title: "Cut Your Operating Costs With AI-Powered Workflows | Maru Online",
  description:
    "We help businesses cut operating costs by building AI-powered workflows where it matters most. Free 30-minute discovery call — no pitch, just a conversation.",
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
    description: "We audit your workflows and tools to find where you're losing time and money.",
    outcome: "A diagnostic report, a cost calculation, and a prioritised roadmap.",
    timeline: "24 hours from submission.",
  },
  {
    number: "02",
    name: "Design",
    description: "We map what connects where, and how your data flows.",
    outcome: "A documented roadmap with clear ownership and success metrics.",
    timeline: "5–7 business days.",
  },
  {
    number: "03",
    name: "Build",
    description: "We connect your tools, build the workflows, and test every connection.",
    outcome: "Live workflows that connect your tools. Your team can manage them.",
    timeline: "20–30 days.",
  },
  {
    number: "04",
    name: "Launch & Measure",
    description: "We launch with your team and measure results against your baseline. 30 days of support included.",
    outcome: "Measured results. Real evidence of time and money saved.",
    timeline: "First 30 days of operation.",
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
        className={`relative min-h-screen flex items-center ${outerPad} pt-28 sm:pt-36 md:pt-48 pb-16 sm:pb-24 md:pb-32`}
        style={{ background: "var(--gradient-hero)" }}
      >
        <BGPattern
          variant="grid"
          mask="fade-edges"
          size={40}
          fill="rgba(61, 184, 198, 0.101)"
          className="pointer-events-none"
        />
        {/* Isometric prism — dimensional background object (Warm Stone depth system) */}
        <svg
          aria-hidden="true"
          className="hidden sm:block"
          viewBox="0 0 480 480"
          style={{
            position: "absolute",
            top: "-60px",
            right: "-80px",
            width: "520px",
            height: "520px",
            pointerEvents: "none",
            transform: "rotate(12deg)",
            filter: "drop-shadow(0 48px 96px rgba(6, 14, 21, 0.45))",
            opacity: 0.9,
          }}
        >
          {/* top face — gold tint */}
          <polygon
            points="240,40 413,140 240,240 67,140"
            fill="rgba(205,170,83,0.10)"
            stroke="rgba(250,250,248,0.16)"
            strokeWidth="1"
          />
          {/* right face — teal tint */}
          <polygon
            points="413,140 413,340 240,440 240,240"
            fill="rgba(61,184,198,0.06)"
            stroke="rgba(250,250,248,0.10)"
            strokeWidth="1"
          />
          {/* left face — faint light */}
          <polygon
            points="67,140 240,240 240,440 67,340"
            fill="rgba(250,250,248,0.035)"
            stroke="rgba(250,250,248,0.08)"
            strokeWidth="1"
          />
        </svg>
        <div className={innerWide}>
          <FadeUp>
            <span className="label-eyebrow" style={{ marginBottom: "3rem" }}>AI Implementation Consultancy</span>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="maru-headline-split" style={{ marginBottom: "2.5rem" }}>
              <span className="maru-headline-split-light">AI-Powered Workflows That</span>
              <br />
              <span className="maru-headline-split-strong">Cut Your Operating Costs</span>
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
                maxWidth: "640px",
                marginBottom: "2rem",
              }}
            >
              We find the manual tasks eating your team&apos;s time and replace them with AI workflows that actually work.
            </p>
          </FadeUp>

          <FadeUp delay={0.22}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4" style={{ marginTop: "1rem" }}>
              <Button href="/booking" variant="primary" className="w-full sm:w-auto justify-center">
                Book a Free Discovery Call
              </Button>
              <Button href="/assessments/lead-score" variant="secondary" className="w-full sm:w-auto justify-center">
                Try Our Free Website Lead Grader →
              </Button>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 02 — OPERATIONAL GAP
          bg: canvas (#FAFAF8)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-28`}
        style={{ background: "var(--gradient-surface)" }}
      >
        <div className={innerWide}>
          <FadeUp>
            <span className="label-eyebrow" style={{ marginBottom: "1.5rem" }}>The operational gap</span>
            <h2 style={{ marginBottom: "var(--space-section-header-mb)" }}>
              <span style={{ fontWeight: 700 }}>Your tools work.</span>
              <br />
              <span style={{ fontWeight: 300 }}>Your workflows don&apos;t.</span>
            </h2>
          </FadeUp>

          <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginBottom: "var(--space-section-header-mb)" }}>
            {[
              {
                heading: "Your tools don’t talk to each other.",
                body: "CRM, email, accounting — all working, all separate. Your team pays the difference in manual effort.",
              },
              {
                heading: "Manual admin is killing your capacity.",
                body: "Re-entering data and chasing confirmations stack into days of lost productivity every month.",
              },
              {
                heading: "You’re making decisions on stale data.",
                body: "Information split across five systems means you’re always working from last month’s export.",
              },
              {
                heading: "Manual data handling is a POPIA risk.",
                body: "Inconsistent consent and storage are exposure. We build compliance in from the start.",
              },
            ].map((col) => (
              <StaggerChild key={col.heading}>
                <div
                  className="card-lift"
                  style={{
                    background: "var(--color-bg-primary)",
                    border: "0.5px solid var(--color-border-default)",
                    borderTop: "3px solid var(--color-cyan)",
                    borderRadius: "8px",
                    padding: "1.5rem 1.25rem",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "var(--text-body-sm)",
                      color: "var(--color-ink-primary)",
                      marginBottom: "0.625rem",
                      lineHeight: "var(--leading-subheading)",
                    }}
                  >
                    {col.heading}
                  </p>
                  <p className="body-muted" style={{ marginBottom: 0 }}>
                    {col.body}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>

          <FadeUp delay={0.16}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                fontWeight: 500,
                color: "var(--color-ink-primary)",
                borderLeft: "4px solid var(--color-cyan)",
                paddingLeft: "1.25rem",
                margin: 0,
                lineHeight: "var(--leading-body)",
              }}
            >
              These are configuration problems. We fix them without replacing a single system you already use.
            </p>
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
                sub: "Assessment — no cost to find where you stand",
              },
              {
                stat: "24-Hour",
                sub: "Turnaround on your diagnostic report",
              },
              {
                stat: "30 Days",
                sub: "Average timeline to first automated workflow live",
              },
              {
                stat: "Fixed",
                sub: "Clear pricing at every phase — no surprise invoices",
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
        className={`${outerPad} py-28`}
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className={innerWide}>
          <FadeUp>
            <h2>
              <span style={{ fontWeight: 300 }}>How We Fix</span>
              <br />
              <span style={{ fontWeight: 700 }}>the Integration Gap</span>
            </h2>
            <p
              className="body-muted"
              style={{ maxWidth: "640px", marginBottom: "var(--space-section-header-mb)" }}
            >
              Six services. One starting point — the free assessment.
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
        className={`${outerPad} py-28`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={innerWide}>
          <FadeUp>
            <h2>
              <span style={{ fontWeight: 300 }}>Beyond AI Integration —</span>
              <br />
              <span style={{ fontWeight: 700 }}>Full-Spectrum Business Support</span>
            </h2>
            <p
              className="body-muted"
              style={{ maxWidth: "680px", marginBottom: "var(--space-section-header-mb)" }}
            >
              Strong workflows need strong foundations — strategy, build, and marketing included.
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
                description: "We map your market position, technology needs, and competitor landscape before anything gets built.",
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
                description: "Digital products built for AI integration from day one — lead capture, data collection, and workflow automation baked in.",
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
                description: "Strategic insights from your data, then the campaign execution that acts on what the data reveals.",
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
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "10px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-cyan)",
                    background: "rgba(61, 184, 198, 0.10)",
                    border: "1px solid rgba(61, 184, 198, 0.25)",
                    borderRadius: "4px",
                    padding: "3px 8px",
                    marginBottom: "0.75rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Deliverables
                </span>

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
        className={`${outerPad} py-28`}
        style={{ background: "var(--gradient-surface)" }}
      >
        <div className={inner}>
          <FadeUp>
            <h2 style={{ marginBottom: "var(--space-section-header-mb)", fontWeight: 700 }}>
              Our 4-Step Process
            </h2>
          </FadeUp>

          <StaggerParent className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processPhases.map((phase) => (
              <StaggerChild key={phase.number}>
                <div className="card-lift" style={{ padding: "2rem", background: "var(--color-bg-primary)", borderRadius: "8px", height: "100%" }}>
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
                Four steps. Fixed price. Measured outcome.
              </p>
              <Button href="/operations-assessment" variant="primary" className="w-full sm:w-auto justify-center">
                Get My Free Assessment
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── IMAGE BAND — between process and assessment form ────────────── */}
      <ImageBand
        src="/images/people/replace-team.png"
        alt="Two professionals celebrating a win together in the office"
        overlayText={
          <>
            <span style={{ display: 'block', fontWeight: 300 }}>We don&apos;t replace your team.</span>
            <span style={{ display: 'block', fontWeight: 700 }}>We give them their time back.</span>
          </>
        }
        height={420}
      />

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 07 — ASSESSMENT FORM (client component)
          bg: navy (#1A3A5C)
          ════════════════════════════════════════════════════════════════════ */}
      <AssessmentFormSection />

    </>
  );
}
