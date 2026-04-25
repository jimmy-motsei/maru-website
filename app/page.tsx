import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { FadeUp, StaggerParent, StaggerChild } from "@/components/ui/Animate";
import AssessmentFormSection from "@/components/homepage/AssessmentFormSection";
import PrimaryServicesFilter from "@/components/homepage/PrimaryServicesFilter";
import OperationalGap from "@/components/homepage/OperationalGap";
import ApproachSection from "@/components/homepage/ApproachSection";

export const metadata: Metadata = {
  title: "AI & Workflow Integration Consultants for SMEs | Maru",
  description:
    "We connect your existing tools and configure the workflows your business is missing. Free AI readiness assessment for growing South African SMEs.",
  openGraph: {
    title: "Your tools work. They just don't work together. — Maru Online",
    description:
      "We configure the connections between your existing tools — so your systems share data and your team stops the manual handoffs. Free assessment.",
    url: "https://maruonline.com",
  },
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
    description: "We audit your tools, workflows, and data flow. You get a diagnostic report and a prioritised roadmap.",
  },
  {
    number: "02",
    name: "Design",
    description: "We design your integration architecture — which systems connect where, in what sequence, with what data. You get a documented implementation plan.",
  },
  {
    number: "03",
    name: "Build",
    description: "We configure the integrations, build the workflows, and test every connection. Nothing goes live until it's proven to work.",
  },
  {
    number: "04",
    name: "Launch & Measure",
    description: "We deploy with your team and measure results against your pre-integration baseline for the first 30 days.",
  },
];

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
            <span className="label-eyebrow" style={{ marginBottom: "3rem" }}>
              AI &amp; Workflow Integration Consultants for Growing SMEs
            </span>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="maru-headline-split" style={{ marginBottom: "2.5rem" }}>
              <span className="maru-headline-split-light">Your tools work.</span>
              <br />
              <span className="maru-headline-split-strong">They just don&apos;t work together.</span>
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
                maxWidth: "680px",
                marginBottom: "3rem",
              }}
            >
              We configure the connections your business is missing — so your systems share data, your team stops the manual handoffs, and your operation runs the way it should.
            </p>
          </FadeUp>

          <FadeUp delay={0.22}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button href="#assessment" variant="primary">
                Get Your Free Assessment
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
              No obligation. No cost. Results within 24 hours.
            </p>
          </FadeUp>

          {/* Trust bar */}
          <FadeUp delay={0.28}>
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              style={{
                marginTop: "4rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(250,250,248,0.1)",
              }}
            >
              {[
                {
                  label: "Free to start",
                  description: "Assessment at no cost — clarity before commitment",
                },
                {
                  label: "Fixed scope",
                  description: "Defined deliverables and pricing from day one",
                },
                {
                  label: "Platform-agnostic",
                  description: "We work with your existing tools — no forced migrations",
                },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      fontWeight: 600,
                      color: "var(--color-ink-inverted)",
                      marginBottom: "0.25rem",
                      lineHeight: "var(--leading-body)",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-meta)",
                      fontWeight: 300,
                      color: "var(--color-ink-inverted-muted)",
                      marginBottom: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 02 — OPERATIONAL GAP
          bg: canvas (#FAFAF8)
          ════════════════════════════════════════════════════════════════════ */}
      <OperationalGap />

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 03 — THE APPROACH
          bg: navy-deep (#0D1B2A)
          ════════════════════════════════════════════════════════════════════ */}
      <ApproachSection />

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 04 — PRIMARY SERVICES (scan format)
          bg: secondary (#F5F4F0)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        id="services"
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className={innerWide}>
          <FadeUp>
            <h2>What we do</h2>
            <p
              className="body-muted"
              style={{ maxWidth: "620px", marginBottom: "var(--space-section-header-mb)" }}
            >
              Six services. One entry point. The Operations Diagnostic tells us — and you — where to start.
            </p>
          </FadeUp>

          <PrimaryServicesFilter />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 04B — OPERATIONS DIAGNOSTIC TEASER
          bg: navy (#1A3A5C)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <div className={inner}>
          <FadeUp>
            <span className="label-eyebrow" style={{ marginBottom: "1.5rem" }}>
              Free Operations Diagnostic
            </span>

            <h2
              className="h2-cta"
              style={{ marginBottom: "var(--space-heading-body)" }}
            >
              Five questions. Instant result. Clear next step.
            </h2>

            <p className="body-on-navy" style={{ marginBottom: "var(--space-section-header-mb)", maxWidth: "620px" }}>
              The Operations Diagnostic maps where your business is losing time to manual processes — and tells you exactly what to address first. Takes two minutes. No email required to see your result.
            </p>
          </FadeUp>

          {/* How it works — 3 steps */}
          <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: "var(--space-section-header-mb)" }}>
            {[
              {
                number: "01",
                heading: "Answer five questions",
                body: "About how your business currently operates — how work flows in, where time goes, and what you'd fix first.",
              },
              {
                number: "02",
                heading: "See your result instantly",
                body: "We map your answers to one of three operational stages. You see the result immediately — no email required.",
              },
              {
                number: "03",
                heading: "Get your full report",
                body: "Enter your email and we send a detailed Notion report — personalised observations and a recommended next step.",
              },
            ].map((step) => (
              <StaggerChild key={step.number}>
                <div
                  style={{
                    borderTop: "2px solid var(--color-cyan)",
                    paddingTop: "1.25rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-meta)",
                      fontWeight: 500,
                      color: "var(--color-cyan)",
                      letterSpacing: "0.1em",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {step.number}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      fontWeight: 600,
                      color: "var(--color-ink-inverted)",
                      marginBottom: "0.5rem",
                      lineHeight: "var(--leading-subheading)",
                    }}
                  >
                    {step.heading}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      fontWeight: 300,
                      color: "var(--color-ink-inverted-muted)",
                      lineHeight: "var(--leading-body)",
                      marginBottom: 0,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>

          {/* The three result stages */}
          <FadeUp delay={0.1}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-meta)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(250,250,248,0.4)",
                marginBottom: "1rem",
              }}
            >
              The three result stages
            </p>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-[1px]"
              style={{
                background: "rgba(250,250,248,0.08)",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "var(--space-section-header-mb)",
              }}
            >
              {[
                {
                  stage: "Early Stage",
                  description: "Processes are informal. The opportunity is building the right foundation before adding tools on top.",
                },
                {
                  stage: "Building",
                  description: "Structure exists. The gaps are in the connections — manual steps between tools that should be automatic.",
                },
                {
                  stage: "Primed",
                  description: "Systems are mature. The opportunity is in targeted optimisation — compounding what&apos;s already working.",
                },
              ].map((band) => (
                <div
                  key={band.stage}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      fontWeight: 600,
                      color: "var(--color-ink-inverted)",
                      marginBottom: "0.5rem",
                      lineHeight: "var(--leading-subheading)",
                    }}
                  >
                    {band.stage}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      fontWeight: 300,
                      color: "var(--color-ink-inverted-muted)",
                      lineHeight: "var(--leading-body)",
                      marginBottom: 0,
                    }}
                  >
                    {band.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={0.14}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button href="/ai-readiness" variant="primary">
                Take the Operations Diagnostic
              </Button>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-meta)",
                  fontWeight: 300,
                  color: "rgba(250,250,248,0.4)",
                  marginBottom: 0,
                }}
              >
                Free. Two minutes. No email required to see your result.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 04C — FOUNDATION SERVICES (scan format)
          bg: cyan-light (#E8F8FA)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-cyan-light)" }}
      >
        <div className={innerWide}>
          <FadeUp>
            <h2>When the foundation needs work first</h2>
            <p
              className="body-muted"
              style={{ maxWidth: "680px", marginBottom: "var(--space-section-header-mb)" }}
            >
              Sometimes the integration gaps go deeper than workflows. If your digital infrastructure, strategy, or market presence needs strengthening, we handle that too — with AI integration in mind from the start.
            </p>
          </FadeUp>

          <div
            className="grid grid-cols-1 md:grid-cols-4"
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
                description: "We map your digital direction, technology requirements, and integration roadmap before implementation begins.",
              },
              {
                ghost: "02",
                name: "Design & Development",
                description: "We build websites and web applications with lead capture, data collection, and workflow automation built in from the start.",
              },
              {
                ghost: "03",
                name: "Digital Marketing",
                description: "We turn your analytics and customer data into campaigns that improve visibility and generate leads your workflows can actually process.",
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
                <p className="body-muted" style={{ marginBottom: 0 }}>
                  {col.description}
                </p>
              </div>
            ))}

            {/* 4th column CTA — desktop only */}
            <div
              style={{
                background: "var(--color-bg-secondary)",
                padding: "1.75rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-h3-sans)",
                  fontWeight: 600,
                  color: "var(--color-ink-primary)",
                  lineHeight: 1.3,
                  marginBottom: "0.75rem",
                }}
              >
                Not sure which applies to you?
              </p>
              <p className="body-muted" style={{ marginBottom: "1.25rem" }}>
                The assessment covers this. After we&apos;ve mapped your current setup, we&apos;ll tell you exactly which services are relevant — and which aren&apos;t.
              </p>
              <Button href="#assessment" variant="secondary">
                Start with the free assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 05 — PROCESS (name + one sentence per phase)
          bg: canvas (#FAFAF8)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        id="process"
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-canvas)" }}
      >
        <div className={inner}>
          <FadeUp>
            <h2>How an engagement works</h2>
            <p
              className="body-muted"
              style={{ maxWidth: "560px", marginBottom: "var(--space-section-header-mb)" }}
            >
              Four phases. Named deliverables at each step. You always know what&apos;s happening and what comes next.
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
                  <p className="body-muted" style={{ marginBottom: 0 }}>
                    {phase.description}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>

          <FadeUp delay={0.12}>
            <p
              className="body-muted"
              style={{ marginTop: "var(--space-section-header-mb)", marginBottom: 0, maxWidth: "480px" }}
            >
              The assessment is Phase 01. It&apos;s free. It&apos;s where everything starts.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 06 — ASSESSMENT FORM (client component)
          bg: navy (#1A3A5C)
          ════════════════════════════════════════════════════════════════════ */}
      <AssessmentFormSection />
    </>
  );
}
