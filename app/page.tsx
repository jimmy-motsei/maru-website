import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { FadeUp, StaggerParent, StaggerChild } from "@/components/ui/Animate";
import AssessmentFormSection from "@/components/homepage/AssessmentFormSection";
import NewsletterSection from "@/components/homepage/NewsletterSection";
import PrimaryServicesFilter from "@/components/homepage/PrimaryServicesFilter";
import ImageSplit from "@/components/ui/ImageSplit";
import ImageBand from "@/components/ui/ImageBand";

export const metadata: Metadata = {
  title: "AI & Automation Consultants for Growing SMEs | Maru Online",
  description:
    "We find where your processes are costing you time and money. We build the connections your business is missing. Free assessment.",
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
    description: "We audit your workflows, tools, and data flow. We find where you're losing time and money.",
    outcome: "A diagnostic report, a cost calculation, and a prioritised roadmap.",
    timeline: "24 hours from submission.",
  },
  {
    number: "02",
    name: "Design",
    description: "We design your integration architecture. What systems connect where? What data flows how?",
    outcome: "A documented roadmap with clear ownership and success metrics.",
    timeline: "5–7 business days.",
  },
  {
    number: "03",
    name: "Build",
    description: "We integrate your tools and build the workflows. We test every connection.",
    outcome: "Live workflows that connect your tools. Your team can manage them.",
    timeline: "20–30 days.",
  },
  {
    number: "04",
    name: "Launch & Measure",
    description: "We deploy with your team and measure results against your baseline. 30 days of free support included.",
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
            <span className="label-eyebrow" style={{ marginBottom: "3rem" }}>South Africa&apos;s AI Integration Consultancy</span>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="maru-headline-split" style={{ marginBottom: "2.5rem" }}>
              <span className="maru-headline-split-light">You&apos;re paying for 312 hours</span>
              <br />
              <span className="maru-headline-split-strong">of Busywork Every Year.</span>
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
              Six hours a week. That is how much time the average team loses manually moving data between a CRM, a spreadsheet, an email platform. It adds up to two months of capacity every year spent on tasks that should be automated.
            </p>
          </FadeUp>

          <FadeUp delay={0.19}>
            <h3
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "var(--text-h3-sans)",
                color: "var(--color-ink-inverted)",
                lineHeight: "var(--leading-subheading)",
                maxWidth: "560px",
                marginBottom: "3rem",
              }}
            >
              We don&apos;t sell you new tools. We use AI to configure the connections your business is missing.
            </h3>
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
          SECTION 02 — OPERATIONAL GAP
          bg: canvas (#FAFAF8)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-canvas)" }}
      >
        <div className={innerWide}>
          <FadeUp>
            <span className="label-eyebrow" style={{ marginBottom: "1.5rem" }}>The operational gap</span>
            <h2 style={{ marginBottom: "var(--space-heading-body)" }}>
              <span style={{ fontWeight: 700 }}>Your tools work.</span>
              <br />
              <span style={{ fontWeight: 300 }}>They&apos;re just not talking to each other.</span>
            </h2>
            <p className="body-muted" style={{ maxWidth: "640px", marginBottom: "var(--space-para-section)" }}>
              You already own the right business software. The problem is the manual admin between them—the copy-pasting, the re-entry, and the chasing.
            </p>
            <p className="body-muted" style={{ maxWidth: "640px", marginBottom: "var(--space-section-header-mb)" }}>
              That is where we work. We use AI to configure the connections that turn your separate tools into a single, automated system that creates team capacity and orchestration.
            </p>
          </FadeUp>

          <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginBottom: "var(--space-section-header-mb)" }}>
            {[
              {
                heading: "Your tools don’t talk to each other.",
                body: "Your CRM, email, and accounting platforms work fine—separately. Your team spends every day manually bridging the gaps. That is effort wasted on work that should be automatic.",
              },
              {
                heading: "Manual admin is killing your capacity.",
                body: "Re-entering data and chasing confirmation emails are not \"small tasks.\" They stack up to days of lost productivity every month. We eliminate the busywork that shouldn’t exist.",
              },
              {
                heading: "Decisions made on gut feel.",
                body: "When data lives in five different places, you have no single view of performance. You are making decisions based on last month’s exports that are already out of date.",
              },
              {
                heading: "Manual data handling is a POPIA risk.",
                body: "Inconsistency is exposure. When consent and storage are not automated, they are inconsistent. We build compliance into your workflows so your data is handled correctly every time.",
              },
            ].map((col) => (
              <StaggerChild key={col.heading}>
                <div
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
              These aren&apos;t technology problems. They&apos;re configuration problems. And they&apos;re solvable without replacing the systems your team already knows.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── IMAGE SPLIT — between problem cards and metrics ─────────────── */}
      <ImageSplit
        src="/images/people/integration-gap-image.webp"
        alt="Business team reviewing data and analytics together in a meeting"
        eyebrow="The integration gap"
        heading="Your tools work. Your workflows don't."
        body="Most growing businesses have the right software. The problem is the manual handoffs between them—the copy-pasting, the re-entry, and the chasing. These gaps cost you time and revenue.\n\nThat is where we work. We configure the connections that turn your separate tools into a single, automated system."
        imagePosition="left"
        bg="var(--color-bg-canvas)"
      />

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
        className={`${outerPad} py-24`}
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
              We solve your business problem, not your AI problem. Start with your primary challenge.
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
            <h2>
              <span style={{ fontWeight: 300 }}>Beyond AI Integration —</span>
              <br />
              <span style={{ fontWeight: 700 }}>Full-Spectrum Business Support</span>
            </h2>
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
            <h2>
              <span style={{ fontWeight: 300 }}>Our</span>
              <br />
              <span style={{ fontWeight: 700 }}>4-Step Process</span>
            </h2>
            <p
              className="body-muted"
              style={{ maxWidth: "620px", marginBottom: "var(--space-section-header-mb)" }}
            >
              A structured approach for growing SMEs to implement AI-powered workflows with clarity and measurable results.
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
        overlayText="We don't replace your team. We give them their time back."
        height={420}
      />

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
              <span style={{ fontWeight: 300 }}>Ready to find out</span>
              <br />
              <span style={{ fontWeight: 700 }}>what&apos;s costing you time and money?</span>
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
              Start with a free diagnostic. We&apos;ll show you exactly where you&apos;re losing time and money, what to fix first, and what working with us looks like. No obligation.
            </p>
          </FadeUp>

          <FadeUp delay={0.14}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5" style={{ marginBottom: "1.25rem" }}>
              <Button href="#assessment" variant="primary">
                Get Your Free Diagnostic
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
