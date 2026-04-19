import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { FadeUp, StaggerParent, StaggerChild } from "@/components/ui/Animate";
import AssessmentFormSection from "@/components/homepage/AssessmentFormSection";
import NewsletterSection from "@/components/homepage/NewsletterSection";

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

// ─── Service data ─────────────────────────────────────────────────────────────

const coreServices = [
  {
    variant: "navy" as const,
    name: "Free AI Readiness Assessment",
    forWho: "Businesses with AI tools but no clear integration plan — or no tools yet but unsure where to start.",
    what: "We audit your current workflows, tools, and data flow to find where time and money are being lost. You get a clear diagnostic and a prioritised roadmap.",
    bullets: [
      "Workflow and process audit — what's working, what's costing you",
      "Gap analysis — which tools aren't talking to each other",
      "Cost quantification — exactly how many hours per week you're losing",
      "Prioritised recommendations — ranked by impact and implementation effort",
      "Clear next steps — no ambiguity about what happens next",
    ],
    pricing: "Free | Results delivered within 24 hours",
    why: "We diagnose first. Clarity first — start with quick wins.",
  },
  {
    variant: "gold" as const,
    name: "AI-Powered Workflow Integration",
    forWho: "Businesses ready to connect their tools and stop doing manual admin work.",
    what: "We design, build, and deploy workflows that connect your existing systems. Your tools talk to each other. Your team's admin time drops.",
    bullets: [
      "Workflow architecture based on your assessment findings",
      "Integration across your existing tools — vendor agnostic",
      "Documentation and team training (if needed)",
      "Real-time measurement metrics against your baseline",
      "First month of support included (30 days)",
    ],
    pricing: "From R18,000 fixed | 20–30 days to first workflow live",
    why: "Project based fixed pricing. No \"discovery as we go.\" You know the cost and timeline upfront.",
  },
  {
    variant: "navy" as const,
    name: "Results Measurement & Optimisation",
    forWho: "Businesses that have implemented workflows and want to measure results, find gaps, and optimise over time.",
    what: "We measure your workflows against your baseline: hours saved, costs cut, errors reduced. We identify what's working, what's not, and where to optimize next.",
    bullets: [
      "Baseline measurement against your original workflow",
      "Real-time dashboards showing hours saved and cost impact",
      "Gap analysis — what's working, what needs adjustment",
      "Quarterly optimisation recommendations",
    ],
    pricing: "From R18,000 fixed for 30-day sprint | Ongoing support available",
    why: "If we can't measure it, we can't prove it worked. Measurement is built into every engagement.",
  },
  {
    variant: "gold" as const,
    name: "Site Infrastructure Analysis & Remediation",
    forWho: "Businesses with legacy websites (pre-2020 WordPress, broken CMS) or no website that need clean infrastructure to support lead capture and AI workflows.",
    what: "We audit your site's infrastructure — speed, lead capture mechanisms, CRM integration. If it needs rebuilding, we scope remediation work with automation in mind. Lead capture flows directly into your CRM. No manual entry. No lost leads.",
    bullets: [
      "Site audit and remediation plan",
      "Clean, fast infrastructure that supports AI workflows (Next.js, React, Tailwind CSS tech stack)",
      "POPIA compliant lead capture forms that connect to your CRM",
      "Clear measurement of leads from day one",
    ],
    pricing: "R12,500 – R25,000 fixed | Scoped after initial assessment",
    why: "We don't build AI workflows on broken infrastructure. Your website is the central engine — it sets the foundation for everything that follows.",
  },
  {
    variant: "navy" as const,
    name: "POPIA-Compliant AI Integration",
    forWho: "Regulated sectors (e.g. legal, financial, HR, healthcare) that need AI workflows designed around compliance from day one.",
    what: "Data compliance isn't an afterthought — it's built into your workflow architecture. We design consent-first systems that meet POPIA requirements and audit requirements.",
    bullets: [
      "Data flow mapping and compliance assessment",
      "Consent architecture built into every workflow",
      "Documentation for regulatory purposes",
      "Ongoing compliance monitoring",
    ],
    pricing: "Scoped per engagement | From R12,500",
    why: "In the regulated online space, compliance isn't optional. We build it in from the start.",
  },
  {
    variant: "gold" as const,
    name: "Team Training & Capability Support",
    forWho: "Organisations that want their team to understand, manage, and continuously improve their workflows — not dependent on outside support.",
    what: "We train your team to run, monitor, and adapt the workflows we've built. Knowledge transfer is the goal. Independence is the outcome.",
    bullets: [
      "Hands-on training for every workflow deployed",
      "Plain-language documentation (not technical)",
      "Designated internal owner for each workflow set",
      "30-day free support post-handover",
      "Ongoing support available on retainer if needed",
    ],
    pricing: "Included in every implementation | Standalone: from R4,500/person/day",
    why: "Your team should run the system, not IT. Training ensures that happens.",
  },
];

const foundationServices = [
  {
    name: "Strategy & Consultation",
    forWho: "Businesses that need clarity on their digital direction, market positioning, or technology roadmap before implementing AI workflows.",
    what: "We conduct user research, define your digital roadmap, outline technical strategy, and design prototypes that validate your approach before full development. This is discovery and planning — the foundation for smarter implementation decisions.",
    bullets: [
      "User research and audience insights",
      "Digital roadmap and technology strategy",
      "Technical architecture planning",
      "Prototype design and validation",
      "Go-to-market strategy development",
    ],
    pricing: "Scoped per engagement | From R12,500",
    why: "Rushing into AI without strategy means solving the wrong problems first. We map your competitor landscape, market position and technology needs before building.",
  },
  {
    name: "Design & Development",
    forWho: "Businesses that need a new website, web application, e-commerce platform, or mobile app built to support their AI-powered workflows using modern high-performing tech stacks.",
    what: "We design and build websites, web applications, e-commerce sites, and mobile apps. Every digital product is built with AI integration in mind — lead capture, data collection, workflow automation are baked in from the start.",
    bullets: [
      "Website and web application development",
      "E-commerce platform builds",
      "Mobile app development",
      "Built for AI workflow integration",
      "Performance and conversion optimised",
    ],
    pricing: "Scoped per engagement | From R12,500",
    why: "A digital product is only as good as the workflows it enables and how its data is captured. We build both.",
  },
  {
    name: "Digital Marketing Support",
    forWho: "Businesses that need data-driven insights, strategic marketing direction, or campaign execution to boost online presence and visibility.",
    what: "We provide strategic insights using your website analytics, customer data, and market research. We help you understand how people discover and use your digital presence, and we help develop and execute the campaigns that improve it.",
    bullets: [
      "Website analytics and insights",
      "Campaign strategy and planning",
      "Campaign execution and management",
      "Online visibility optimisation",
      "Data-driven marketing decisions",
    ],
    pricing: "Scoped per engagement | From R8,000/project",
    why: "Marketing without data is guesswork. We turn your analytics into action, and your action into measurable results.",
  },
];

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
        className={`relative min-h-screen flex items-center ${outerPad} pt-28 pb-24`}
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
        <div className={inner}>
          <FadeUp>
            <span className="label-eyebrow">AI &amp; Automation Consultants for Growing SMEs</span>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="maru-headline-split" style={{ marginBottom: "1.5rem" }}>
              <span className="maru-headline-split-light">Grow Your Revenue</span>
              <br />
              <span className="maru-headline-split-strong">with Measurable AI-Powered Systems</span>
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
                maxWidth: "600px",
                marginBottom: "var(--space-section-header-mb)",
              }}
            >
              We find where your processes are bleeding time and money — then build workflows that fix both. AI that integrates with your existing tools &amp; processes.
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
              No obligation. No cost. 24-hour turnaround on results.
            </p>
          </FadeUp>

          {/* Trust bar */}
          <FadeUp delay={0.32}>
            <div
              className="flex flex-col sm:flex-row gap-6 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(61,184,198,0.15)" }}
            >
              {[
                {
                  icon: <IconSearch />,
                  label: "Free diagnostic",
                  description: "Find where you're losing time and money",
                },
                {
                  icon: <IconShield />,
                  label: "Fixed pricing",
                  description: "No surprise costs or scope creep",
                },
                {
                  icon: <IconStar />,
                  label: "Maru Online",
                  description: "20+ years in business and marketing across various industries",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3" style={{ flex: 1 }}>
                  <div style={{ color: "var(--color-cyan)", flexShrink: 0, marginTop: "2px" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "var(--text-body-sm)",
                        color: "var(--color-ink-inverted)",
                        marginBottom: "0.2rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                        fontSize: "var(--text-meta)",
                        color: "rgba(250,250,248,0.6)",
                        marginBottom: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
          SECTION 04 — PRIMARY SERVICES
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
              Six core services designed to cut your operating costs, build stronger digital foundations, and free your team to do what they&apos;re actually paid for.
            </p>
          </FadeUp>

          <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service) => (
              <StaggerChild key={service.name}>
                <div className={service.variant === "navy" ? "card-navy" : "card-gold"} style={{ height: "100%" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-meta)",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: service.variant === "navy" ? "rgba(61,184,198,0.7)" : "var(--color-gold-antique)",
                      marginBottom: "0.5rem",
                      lineHeight: 1.4,
                    }}
                  >
                    For: {service.forWho}
                  </p>

                  <h3 style={{ marginBottom: "0.75rem" }}>{service.name}</h3>

                  <p style={{ marginBottom: "1rem" }}>{service.what}</p>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem 0" }}>
                    {service.bullets.map((bullet) => (
                      <li key={bullet} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                        <span
                          style={{
                            color: service.variant === "navy" ? "var(--color-cyan)" : "var(--color-gold-antique)",
                            fontWeight: 700,
                            flexShrink: 0,
                            fontSize: "var(--text-body-sm)",
                            lineHeight: "1.7",
                          }}
                        >
                          ✓
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--text-body-sm)",
                            fontWeight: 300,
                            color: service.variant === "navy" ? "rgba(250,250,248,0.7)" : "var(--color-ink-secondary)",
                            lineHeight: "var(--leading-body)",
                          }}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <hr
                    className="rule"
                    style={{
                      background: service.variant === "navy" ? "rgba(250,250,248,0.12)" : undefined,
                      marginTop: "auto",
                    }}
                  />

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      fontWeight: 600,
                      color: service.variant === "navy" ? "var(--color-cyan)" : "var(--color-gold-antique)",
                      marginBottom: "0.5rem",
                      marginTop: "0.75rem",
                    }}
                  >
                    {service.pricing}
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-meta)",
                      fontWeight: 300,
                      color: service.variant === "navy" ? "rgba(250,250,248,0.5)" : "var(--color-ink-tertiary)",
                      marginBottom: 0,
                      lineHeight: 1.5,
                      fontStyle: "italic",
                    }}
                  >
                    {service.why}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 05 — FOUNDATION SERVICES
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
              AI-powered workflows work best on strong foundations. If your online strategy needs clarity, your digital presence needs rebuilding, or your marketing needs direction, we handle that too. These aren&apos;t separate from our core AI work — they&apos;re the strategic and technical foundations that make everything else possible.
            </p>
          </FadeUp>

          <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundationServices.map((service) => (
              <StaggerChild key={service.name}>
                <div className="card-gold" style={{ height: "100%" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-meta)",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--color-gold-antique)",
                      marginBottom: "0.5rem",
                      lineHeight: 1.4,
                    }}
                  >
                    For: {service.forWho}
                  </p>

                  <h3 style={{ marginBottom: "0.75rem" }}>{service.name}</h3>

                  <p style={{ marginBottom: "1rem" }}>{service.what}</p>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem 0" }}>
                    {service.bullets.map((bullet) => (
                      <li key={bullet} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                        <span
                          style={{
                            color: "var(--color-gold-antique)",
                            fontWeight: 700,
                            flexShrink: 0,
                            fontSize: "var(--text-body-sm)",
                            lineHeight: "1.7",
                          }}
                        >
                          ✓
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--text-body-sm)",
                            fontWeight: 300,
                            color: "var(--color-ink-secondary)",
                            lineHeight: "var(--leading-body)",
                          }}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <hr className="rule" style={{ marginTop: "auto" }} />

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      fontWeight: 600,
                      color: "var(--color-gold-antique)",
                      marginBottom: "0.5rem",
                      marginTop: "0.75rem",
                    }}
                  >
                    {service.pricing}
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-meta)",
                      fontWeight: 300,
                      color: "var(--color-ink-tertiary)",
                      marginBottom: 0,
                      lineHeight: 1.5,
                      fontStyle: "italic",
                    }}
                  >
                    {service.why}
                  </p>
                </div>
              </StaggerChild>
            ))}

            {/* 4th column — CTA */}
            <StaggerChild>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "2rem",
                  background: "var(--color-bg-navy)",
                  borderRadius: "0 12px 12px 0",
                  borderLeft: "4px solid var(--color-cyan)",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h3-serif)",
                    fontWeight: 400,
                    color: "var(--color-cyan)",
                    lineHeight: "var(--leading-subheading)",
                    letterSpacing: "var(--tracking-tight)",
                    marginBottom: "1rem",
                    borderBottom: "none",
                    paddingBottom: 0,
                  }}
                >
                  Ready to Build Your Foundation?
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body-sm)",
                    fontWeight: 300,
                    color: "rgba(250,250,248,0.75)",
                    lineHeight: "var(--leading-body)",
                    marginBottom: "1.5rem",
                  }}
                >
                  These strategic services lay the groundwork for successful AI integration. Whether you need clarity on direction, a stronger digital product, or smarter marketing, we handle the full scope.
                </p>
                <Button href="#assessment" variant="primary">
                  Get Started — Book a Strategy Call
                </Button>
              </div>
            </StaggerChild>
          </StaggerParent>
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
            <p className="body-on-navy" style={{ marginBottom: "var(--space-section-header-mb)" }}>
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
