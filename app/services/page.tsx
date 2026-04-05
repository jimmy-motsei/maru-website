import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CardNavy from "@/components/ui/CardNavy";
import ListItem from "@/components/ui/ListItem";
import ListGroup from "@/components/ui/ListGroup";

export const metadata: Metadata = {
  title: "Services | Maru Online",
  description:
    "Four structured services to turn your existing AI tools into a connected revenue system. Fixed-scope engagements from R8,500. POPIA-compliant by design.",
};

const outerPad    = "px-6 md:px-[60px]";
const inner       = "max-w-[900px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";

// ─── Service data ─────────────────────────────────────────────────────────────

const services = [
  {
    id:          "diagnostic",
    label:       "01",
    title:       "AI Revenue Diagnostic",
    tagline:     "Find out exactly what's broken and what it's costing you.",
    description: "A structured audit of your business, your tools, and the gaps between them. You receive a written report — delivered within 48 hours — that maps your integration failures, quantifies the cost in Rands, and tells you exactly what to fix first. This is where every engagement starts, without exception.",
    bullets: [
      { leader: "Sector-specific intake",   body: "A structured brief tailored to your industry — medico legal, HR & recruitment, or conference & events." },
      { leader: "Verification call",         body: "A 30–45 minute call to clarify the brief, ask the right questions, and confirm scope." },
      { leader: "Written gap report",        body: "A clear document naming your integration failures, the cost of each, and the fix priority order." },
      { leader: "90-day roadmap",            body: "A sequenced action plan so you know exactly what to do and in what order." },
    ],
    pricing:     "R4,500",
    note:        "If you proceed to a full engagement, this fee offsets against the project cost.",
    href:        "/services/ai-revenue-diagnostic",
    bg:          "var(--color-bg-primary)",
  },
  {
    id:          "build",
    label:       "02",
    title:       "Custom AI Solution Build",
    tagline:     "We build the integration. You own it when we're done.",
    description: "Fixed-scope implementation based on what the diagnostic found. We connect your tools, automate the workflows that are costing you, and build the system to your stack — not ours. Site infrastructure first if needed, then the automation layer on top. We don't build on broken foundations.",
    bullets: [
      { leader: "Custom integration build",  body: "Connecting your existing tools — CRM, calendar, email, forms — so they pass information correctly." },
      { leader: "Automation layer",          body: "The workflows that run without human intervention: follow-ups, confirmations, handoffs, notifications." },
      { leader: "Brand voice training",      body: "AI outputs calibrated to sound like your business, not like a generic chatbot." },
      { leader: "POPIA compliance built in", body: "Every data touchpoint designed for compliance before a line of code is written." },
    ],
    pricing:     "From R45,000",
    note:        "Fixed price. Scoped after the diagnostic — no surprises.",
    href:        "/services/custom-ai-solution-build",
    bg:          "var(--color-bg-canvas)",
  },
  {
    id:          "training",
    label:       "03",
    title:       "AI Training & Capability Building",
    tagline:     "Your team needs to be able to use the system, not depend on us to run it.",
    description: "Hands-on training that improves how your team uses AI tools day to day — output quality, adoption, prompt discipline, and workflow execution. Delivered as workshops, not slide decks. We train the people who will actually be using the system.",
    bullets: [
      { leader: "Hands-on workshops",       body: "Practical sessions built around your actual tools, not generic AI theory." },
      { leader: "Prompt engineering",       body: "Teaching your team to get consistent, high-quality outputs from the tools you already have." },
      { leader: "Workflow adoption",        body: "Getting the new workflows embedded in how the team actually works — not just documented." },
      { leader: "30-day follow-up support", body: "A structured support window after training to catch issues before they become habits." },
    ],
    pricing:     "From R15,000",
    note:        "Scoped per engagement. Can be standalone or follow a build.",
    href:        "/services/ai-training-capability-building",
    bg:          "var(--color-bg-primary)",
  },
  {
    id:          "support",
    label:       "04",
    title:       "Ongoing AI Support & Optimisation",
    tagline:     "Systems drift. Tools update. Compliance requirements change.",
    description: "Monthly retainer to keep your AI systems performing, compliant, and aligned with how your business is actually running. We monitor, adjust, and report — so you don't have to manage the infrastructure yourself.",
    bullets: [
      { leader: "Monthly performance review", body: "We check what's working, what's drifted, and what needs adjustment." },
      { leader: "Priority support",           body: "Direct access when something breaks or a workflow needs changing quickly." },
      { leader: "Quarterly strategy session", body: "A structured session to review results and plan the next quarter's optimisation priorities." },
      { leader: "Compliance monitoring",      body: "Ongoing POPIA review as your data flows and tool stack evolve." },
    ],
    pricing:     "From R8,500 / month",
    note:        "Available to clients who have completed a build engagement.",
    href:        "/services/ongoing-ai-support-optimization",
    bg:          "var(--color-bg-canvas)",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`min-h-[70vh] flex items-center ${outerPad} pt-32 pb-24`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            border: "1px solid rgba(61,184,198,0.15)",
            pointerEvents: "none",
          }}
        />
        <div className={inner}>
          <span className="label-eyebrow">Services</span>
          <h1>
            AI tools don&apos;t create ROI.<br />
            Integrated AI systems do.
          </h1>
          <p
            className="font-body font-light text-lg max-w-[600px]"
            style={{
              color: "var(--color-ink-inverted-muted)",
              marginBottom: "var(--space-section-header-mb)",
              lineHeight: "var(--leading-body)",
            }}
          >
            Four structured services. One integrated system. Built for your
            stack, your team, and your revenue targets. Every engagement is
            fixed-scope and priced before work begins.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Button href="/contact" variant="primary">
              Start with a diagnostic
            </Button>
            <Button href="#services" variant="tertiary">
              See all services
            </Button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          INTRO — fixed-scope principle
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-20`}
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className={innerNarrow}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h3-serif)",
              fontWeight: 400,
              lineHeight: "var(--leading-subheading)",
              color: "var(--color-ink-primary)",
              letterSpacing: "var(--tracking-tight)",
              margin: 0,
            }}
          >
            Every engagement is fixed-scope and priced before work begins. We
            start with a diagnostic so you know exactly what&apos;s broken — and
            what fixing it is worth — before you commit to anything.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SERVICE SECTIONS — alternating bg
          ════════════════════════════════════════════════════════════════════ */}
      {services.map((service) => (
        <section
          id={service.id === "diagnostic" ? "services" : service.id}
          key={service.id}
          className={`${outerPad} py-24`}
          style={{ backgroundColor: service.bg }}
        >
          <div className={inner}>
            {/* Header */}
            <div style={{ marginBottom: "var(--space-section-header-mb)" }}>
              <span
                className="label-eyebrow-gold"
                style={{ marginBottom: "0.75rem" }}
              >
                {service.label} — {service.title}
              </span>
              <h2>{service.title}</h2>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-h3-serif)",
                  fontWeight: 400,
                  lineHeight: "var(--leading-subheading)",
                  color: "var(--color-ink-primary)",
                  letterSpacing: "var(--tracking-tight)",
                  margin: 0,
                }}
              >
                {service.tagline}
              </p>
            </div>

            {/* 2-col: description + bullets */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-start">
              {/* Left — description + pricing */}
              <div>
                <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
                  {service.description}
                </p>

                {/* Pricing block */}
                <div
                  style={{
                    borderTop: "1px solid var(--color-border-default)",
                    paddingTop: "1.25rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      fontWeight: 600,
                      color: "var(--color-navy)",
                      lineHeight: 1,
                      marginBottom: "0.375rem",
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
                      margin: 0,
                    }}
                  >
                    {service.note}
                  </p>
                </div>

                <div style={{ marginTop: "1.5rem" }}>
                  <Button href={service.href} variant="secondary">
                    Learn more
                  </Button>
                </div>
              </div>

              {/* Right — what's included */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-label)",
                    fontWeight: 500,
                    letterSpacing: "var(--tracking-eyebrow)",
                    textTransform: "uppercase",
                    color: "var(--color-ink-tertiary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  What&apos;s included
                </p>
                <ListGroup>
                  {service.bullets.map((b) => (
                    <ListItem key={b.leader} leader={b.leader} body={b.body} />
                  ))}
                </ListGroup>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ════════════════════════════════════════════════════════════════════
          TESTIMONIALS — two navy cards
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className={inner}>
          <h2>What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            <CardNavy label="Client" title="Sound Studio, Johannesburg">
              <p>
                &ldquo;Since the site went live we&apos;ve been getting more
                business opportunities than before.&rdquo;
              </p>
              <p
                style={{
                  marginTop: "0.75rem",
                  marginBottom: 0,
                  fontSize: "var(--text-meta)",
                  color: "rgba(250,250,248,0.5)",
                }}
              >
                — Founder, Sound Studio (Johannesburg)
              </p>
            </CardNavy>
            <CardNavy label="Client" title="Seokane Inc">
              <p>
                &ldquo;[Seokane Inc quote about quality of work and brand
                capture]&rdquo;
              </p>
              <p
                style={{
                  marginTop: "0.75rem",
                  marginBottom: 0,
                  fontSize: "var(--text-meta)",
                  color: "rgba(250,250,248,0.5)",
                }}
              >
                — [Name], Seokane Inc ·{" "}
                <em>Placeholder — replace on receipt</em>
              </p>
            </CardNavy>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA — navy
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            border: "1px solid rgba(61,184,198,0.12)",
            pointerEvents: "none",
          }}
        />
        <div className={innerNarrow}>
          <span className="label-eyebrow">Not sure where to start?</span>
          <h2
            style={{
              color: "var(--color-ink-inverted)",
              border: "none",
              padding: 0,
              marginBottom: "var(--space-heading-body)",
            }}
          >
            The diagnostic is the right first step — for every business.
          </h2>
          <p className="body-on-navy" style={{ marginBottom: "var(--space-para-section)" }}>
            We don&apos;t recommend a service until we know what your business
            actually needs. The diagnostic gives us — and you — a clear picture
            before any further commitment is made.
          </p>
          <hr
            className="rule"
            style={{
              background: "rgba(250,250,248,0.15)",
              marginBottom: "var(--space-para-section)",
            }}
          />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button href="/contact" variant="primary">
              Start with a diagnostic
            </Button>
            <Button href="/booking" variant="tertiary">
              Book a 20-minute call — no pitch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
