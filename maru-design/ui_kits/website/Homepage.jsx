// Maru — Homepage. Faithful recreation of the live homepage composition and the
// LATEST copy (hero "312 hours of Busywork", operational-gap cards, 6-service
// filter, foundation services, 4-step process, assessment form). Uses the Maru
// design-system bundle for Button + WhatsApp; bespoke section layout is inline.
const DS = window.MaruOnlineDesignSystem_422da4;
const { Button, WhatsAppButton } = DS;

const WRAP = { maxWidth: "1200px", margin: "0 auto" };
const WRAP_MD = { maxWidth: "900px", margin: "0 auto" };
const PAD = "64px 24px";

// ── Reusable bits ─────────────────────────────────────────────────────────────
function Eyebrow({ children, style }) {
  return <span className="label-eyebrow" style={style}>{children}</span>;
}

function CheckCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "3px" }}>
      <circle cx="8" cy="8" r="7" stroke="var(--color-cyan)" strokeWidth="1.2" />
      <path d="M5 8l2.5 2.5 3.5-4" stroke="var(--color-cyan)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── 01 · Hero ───────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        backgroundColor: "var(--color-bg-navy-deep)",
        padding: "120px 24px 96px",
        overflow: "hidden",
      }}
    >
      {/* grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(61,184,198,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(61,184,198,0.10) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
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
      <div style={{ ...WRAP, position: "relative" }}>
        <Eyebrow style={{ marginBottom: "2.5rem" }}>AI Integration Consultancy</Eyebrow>

        <h1 className="maru-headline-split" style={{ marginBottom: "2.5rem", color: "#fff" }}>
          <span className="maru-headline-split-light">You&rsquo;re paying for 312 hours</span>
          <br />
          <span className="maru-headline-split-strong">of Busywork Every Year.</span>
        </h1>

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
          Six hours a week. That&rsquo;s how much time the average team loses manually moving data between a CRM, a spreadsheet, an email platform.
        </p>

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
          We don&rsquo;t sell you new tools. We use AI to configure the connections your business is missing.
        </h3>

        <Button variant="primary" size="lg" href="#assessment">Get a Free Assessment</Button>
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
      </div>
    </section>
  );
}

// ── 02 · Operational gap ──────────────────────────────────────────────────────
const GAP_CARDS = [
  { heading: "Your tools don\u2019t talk to each other.", body: "Your CRM, email, and accounting software all work — separately. Your team pays the difference in manual effort, every day." },
  { heading: "Manual admin is killing your capacity.", body: "Re-entering data and chasing confirmations aren\u2019t small tasks. They stack into days of lost productivity every month." },
  { heading: "You\u2019re making decisions on stale data.", body: "When information lives across five systems, you\u2019re always working from last month\u2019s export. Never from right now." },
  { heading: "Manual data handling is a POPIA risk.", body: "Inconsistent consent and storage aren\u2019t just inefficient — they\u2019re exposure. We build compliance in from the start." },
];

function OperationalGap() {
  return (
    <section style={{ backgroundColor: "var(--color-bg-canvas)", padding: PAD }}>
      <div style={WRAP}>
        <Eyebrow style={{ marginBottom: "1.5rem" }}>The operational gap</Eyebrow>
        <h2 style={{ marginBottom: "var(--space-section-header-mb)", borderBottom: "none", paddingBottom: 0 }}>
          <span style={{ fontWeight: 700 }}>Your tools work.</span>
          <br />
          <span style={{ fontWeight: 300 }}>Your workflows don&rsquo;t.</span>
        </h2>

        <div className="maru-grid-4" style={{ marginBottom: "var(--space-section-header-mb)" }}>
          {GAP_CARDS.map((c) => (
            <div
              key={c.heading}
              style={{
                background: "var(--color-bg-primary)",
                border: "0.5px solid var(--color-border-default)",
                borderTop: "3px solid var(--color-cyan)",
                borderRadius: "8px",
                padding: "1.5rem 1.25rem",
                height: "100%",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--text-body-sm)", color: "var(--color-ink-primary)", marginBottom: "0.625rem", lineHeight: "var(--leading-subheading)" }}>
                {c.heading}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", lineHeight: "var(--leading-body)", margin: 0 }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>

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
          These are configuration problems — solvable without replacing a single system your team already uses.
        </p>
      </div>
    </section>
  );
}

// ── 03 · Metrics bar ──────────────────────────────────────────────────────────
const METRICS = [
  { stat: "Free", sub: "Assessment — no cost to find where you stand" },
  { stat: "24-Hour", sub: "Turnaround on your diagnostic report" },
  { stat: "30 Days", sub: "Average timeline to first automated workflow live" },
  { stat: "Fixed", sub: "Clear pricing at every phase — no surprise invoices" },
];

function MetricsBar() {
  return (
    <section style={{ backgroundColor: "var(--color-bg-primary)", padding: "48px 24px" }}>
      <div style={WRAP_MD}>
        <div className="maru-grid-4">
          {METRICS.map((m) => (
            <div key={m.stat} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, color: "var(--color-cyan)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "0.5rem" }}>
                {m.stat}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-meta)", fontWeight: 300, color: "var(--color-ink-tertiary)", lineHeight: 1.5, margin: 0 }}>
                {m.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 04 · Primary services ─────────────────────────────────────────────────────
const SERVICES = [
  { tag: "Free entry point", tagColor: "cyan", number: "01", name: "Operations Diagnostic", body: "Recommended first step. We find exactly where you're losing time and money before prescribing anything." },
  { tag: "Core", tagColor: "cyan", number: "02", name: "AI-Powered Workflow Integration", body: "For businesses ready to connect tools and stop manual admin. Fixed price, vendor-agnostic." },
  { tag: "Ongoing", tagColor: "cyan", number: "03", name: "Results Measurement & Optimisation", body: "Workflows running but no evidence of impact. We measure and optimise against your baseline." },
  { tag: "Foundation", tagColor: "gold", number: "04", name: "Site Infrastructure Analysis & Remediation", body: "Legacy or broken sites that need clean infrastructure before AI workflows can run." },
  { tag: "Compliance", tagColor: "gold", number: "05", name: "POPIA-Compliant AI Integration", body: "For legal, financial, and healthcare sectors. Compliance built in from day one." },
  { tag: "Support", tagColor: "cyan", number: "06", name: "Team Training & Capability Support", body: "Onboarding for teams to ensure adoption. Your team runs the system — not IT." },
];

function PrimaryServices() {
  return (
    <section id="services" style={{ backgroundColor: "var(--color-bg-secondary)", padding: PAD }}>
      <div style={WRAP}>
        <h2 style={{ borderBottom: "none", paddingBottom: 0, marginBottom: "1rem" }}>
          <span style={{ fontWeight: 300 }}>How We Fix</span>
          <br />
          <span style={{ fontWeight: 700 }}>the Integration Gap</span>
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", maxWidth: "640px", marginBottom: "var(--space-section-header-mb)" }}>
          Six services. One starting point — the free assessment.
        </p>

        <div className="maru-grid-2">
          {SERVICES.map((s) => {
            const cyan = s.tagColor === "cyan";
            return (
              <div
                key={s.number}
                style={{
                  border: "0.5px solid var(--color-border-default)",
                  borderRadius: "8px",
                  padding: "1.25rem 1.5rem",
                  background: "var(--color-bg-primary)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <span
                  style={{
                    background: cyan ? "rgba(61,184,198,0.10)" : "rgba(205,170,83,0.10)",
                    color: cyan ? "var(--color-cyan)" : "var(--color-gold)",
                    fontSize: "10px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    padding: "2px 8px",
                    borderRadius: "3px",
                    display: "inline-block",
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.tag}
                </span>
                <p style={{ color: "var(--color-cyan)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", margin: "0 0 0.375rem", fontFamily: "var(--font-body)" }}>{s.number}</p>
                <p style={{ fontSize: "var(--text-h3-sans)", fontWeight: 600, color: "var(--color-ink-primary)", fontFamily: "var(--font-body)", margin: "0 0 0.5rem", lineHeight: 1.3 }}>{s.name}</p>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", lineHeight: "var(--leading-body)", margin: 0 }}>{s.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── 05 · Foundation services ──────────────────────────────────────────────────
const FOUNDATION = [
  { ghost: "01", name: "Strategy & Consultation", description: "We map your market position, technology needs, and competitor landscape before anything gets built.", deliverables: ["User research and audience insights", "Digital roadmap and technology strategy", "Technical architecture planning", "Prototype design and validation", "Go-to-market strategy development"] },
  { ghost: "02", name: "Design & Development", description: "Digital products built for AI integration from day one — lead capture, data collection, and workflow automation baked in.", deliverables: ["Website and web application development", "E-commerce platform builds", "Mobile app development", "Built for AI workflow integration", "Performance and conversion optimised"] },
  { ghost: "03", name: "Digital Marketing Support", description: "Strategic insights from your data, then the campaign execution that acts on what the data reveals.", deliverables: ["Website analytics and insights", "Campaign strategy and planning", "Campaign execution and management", "Online visibility optimisation", "Data-driven marketing decisions"] },
];

function FoundationServices() {
  return (
    <section style={{ backgroundColor: "var(--color-bg-primary)", padding: PAD }}>
      <div style={WRAP}>
        <h2 style={{ borderBottom: "none", paddingBottom: 0, marginBottom: "1rem" }}>
          <span style={{ fontWeight: 300 }}>Beyond AI Integration —</span>
          <br />
          <span style={{ fontWeight: 700 }}>Full-Spectrum Business Support</span>
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", maxWidth: "680px", marginBottom: "var(--space-section-header-mb)" }}>
          Strong workflows need strong foundations. We handle the strategy, build, and marketing that makes integration possible.
        </p>

        <div
          className="maru-grid-3-flush"
          style={{ background: "var(--color-border-default)", border: "0.5px solid var(--color-border-default)", borderRadius: "8px", overflow: "hidden" }}
        >
          {FOUNDATION.map((col) => (
            <div key={col.ghost} style={{ background: "var(--color-bg-primary)", padding: "1.75rem 1.5rem" }}>
              <p style={{ fontSize: "32px", fontWeight: 100, color: "rgba(205,170,83,0.30)", lineHeight: 1, marginBottom: "1rem", fontFamily: "var(--font-display)" }}>{col.ghost}</p>
              <p style={{ fontSize: "var(--text-h3-sans)", fontWeight: 600, color: "var(--color-ink-primary)", lineHeight: 1.3, marginBottom: "0.75rem", borderBottom: "2px solid var(--color-gold)", paddingBottom: "0.75rem", fontFamily: "var(--font-body)" }}>{col.name}</p>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", lineHeight: "var(--leading-body)", marginBottom: "1.25rem" }}>{col.description}</p>
              <span style={{ display: "inline-block", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-cyan)", background: "rgba(61,184,198,0.10)", border: "1px solid rgba(61,184,198,0.25)", borderRadius: "4px", padding: "3px 8px", marginBottom: "0.75rem", fontFamily: "var(--font-body)" }}>Deliverables</span>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.deliverables.map((d) => (
                  <li key={d} style={{ fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", padding: "4px 0", lineHeight: "var(--leading-body)", display: "flex", gap: "8px", alignItems: "flex-start", fontFamily: "var(--font-body)", fontWeight: 300 }}>
                    <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>&rarr;</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 06 · Process ──────────────────────────────────────────────────────────────
const PHASES = [
  { number: "01", name: "Diagnose", description: "We audit your workflows, tools, and data flow. We find where you're losing time and money.", outcome: "A diagnostic report, a cost calculation, and a prioritised roadmap.", timeline: "24 hours from submission." },
  { number: "02", name: "Design", description: "We design your integration architecture. What systems connect where? What data flows how?", outcome: "A documented roadmap with clear ownership and success metrics.", timeline: "5–7 business days." },
  { number: "03", name: "Build", description: "We integrate your tools and build the workflows. We test every connection.", outcome: "Live workflows that connect your tools. Your team can manage them.", timeline: "20–30 days." },
  { number: "04", name: "Launch & Measure", description: "We deploy with your team and measure results against your baseline. 30 days of free support included.", outcome: "Measured results. Real evidence of time and money saved.", timeline: "First 30 days of operation." },
];

function Process() {
  return (
    <section id="process" style={{ backgroundColor: "var(--color-bg-canvas)", padding: PAD }}>
      <div style={WRAP_MD}>
        <h2 style={{ marginBottom: "var(--space-section-header-mb)", fontWeight: 700, borderBottom: "none", paddingBottom: 0 }}>Our 4-Step Process</h2>

        <div className="maru-grid-2">
          {PHASES.map((p) => (
            <div key={p.number} style={{ padding: "2rem", background: "var(--color-bg-primary)", borderRadius: "8px", height: "100%", boxShadow: "var(--shadow-card)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--color-cyan)", letterSpacing: "-0.02em", lineHeight: 1, display: "block", marginBottom: "1rem", opacity: 0.9 }}>{p.number}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3-serif)", fontWeight: 500, color: "var(--color-ink-primary)", lineHeight: "var(--leading-subheading)", letterSpacing: "var(--tracking-tight)", marginBottom: "0.875rem" }}>{p.name}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", lineHeight: "var(--leading-body)", marginBottom: "1rem" }}>{p.description}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", fontWeight: 500, color: "var(--color-ink-primary)", marginBottom: "0.375rem", lineHeight: "var(--leading-body)" }}>{p.outcome}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-meta)", fontWeight: 300, color: "var(--color-cyan)", margin: 0, letterSpacing: "0.05em" }}>&#9201; {p.timeline}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "var(--space-section-header-mb)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", margin: 0, maxWidth: "560px" }}>Four steps. Fixed price. Measured outcome.</p>
          <Button variant="primary" size="lg" href="#assessment">Get My Free Assessment</Button>
        </div>
      </div>
    </section>
  );
}

// ── Image band ────────────────────────────────────────────────────────────────
function ImageBand() {
  return (
    <section style={{ position: "relative", height: "420px", overflow: "hidden" }}>
      <img src="../../assets/illustrations/tech-setup.jpg" alt="A team at work" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(13,27,42,0.88) 0%, rgba(13,27,42,0.55) 60%, rgba(13,27,42,0.35) 100%)" }} />
      <div style={{ ...WRAP, position: "relative", height: "100%", display: "flex", alignItems: "center", padding: "0 24px" }}>
        <h2 style={{ color: "#fff", borderBottom: "none", paddingBottom: 0, margin: 0, maxWidth: "640px" }}>
          <span style={{ display: "block", fontWeight: 300 }}>We don&rsquo;t replace your team.</span>
          <span style={{ display: "block", fontWeight: 700 }}>We give them their time back.</span>
        </h2>
      </div>
    </section>
  );
}

// ── 07 · Assessment form ──────────────────────────────────────────────────────
function AssessmentForm() {
  const proof = [
    "Average 3–5 critical gaps identified per assessment",
    "Average 12–18 hours per week recoverable through integration",
  ];
  const points = [
    "See your score live as you go",
    "Detailed report delivered within 24 hours",
    "No sign-up required to begin",
  ];
  return (
    <section id="assessment" style={{ backgroundColor: "var(--color-bg-navy)", padding: PAD }}>
      <div style={WRAP_MD}>
        <div className="maru-assess-grid">
          <div>
            <Eyebrow>Free Business Diagnostic</Eyebrow>
            <h2 style={{ color: "var(--color-ink-inverted)", borderBottom: "none", paddingBottom: 0, marginBottom: "var(--space-heading-body)", marginTop: "0.5rem" }}>
              <span style={{ display: "block", fontWeight: 300 }}>Find Out Exactly What&rsquo;s</span>
              <span style={{ display: "block", fontWeight: 700 }}>Costing You Time and Money</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body)", color: "rgba(250,250,248,0.75)", lineHeight: "var(--leading-body)", marginBottom: "var(--space-para-section)" }}>
              Our free assessment shows you exactly where your processes are losing capacity. Ten minutes. Results within 24 hours.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", fontWeight: 300, color: "rgba(250,250,248,0.5)", lineHeight: "var(--leading-body)", marginBottom: "var(--space-section-header-mb)", fontStyle: "italic" }}>
              Either way, you get clarity. That&rsquo;s the point.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {proof.map((s) => (
                <div key={s} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ width: "10px", height: "10px", background: "var(--color-cyan)", borderRadius: "50%", marginTop: "9px", flexShrink: 0, display: "block" }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", fontWeight: 500, color: "var(--color-ink-inverted)", lineHeight: "var(--leading-body)" }}>{s}</span>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-meta)", fontWeight: 300, color: "rgba(250,250,248,0.4)", margin: 0, letterSpacing: "0.02em" }}>
              POPIA compliant. No opt-in to marketing — just your results.
            </p>
          </div>

          <div>
            <div style={{ background: "#fff", borderRadius: "12px", padding: "2.5rem", boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-h3-serif)", color: "var(--color-ink-primary)", lineHeight: "var(--leading-subheading)", marginBottom: "1.25rem" }}>Get Your Free Assessment</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", fontWeight: 300, color: "var(--color-ink-secondary)", lineHeight: "var(--leading-body)", marginBottom: "1.5rem" }}>
                Answer 10 questions about your operations. Takes about 10 minutes. We pinpoint exactly where your business is leaking time and money — and what to do about it.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem" }}>
                {points.map((p) => (
                  <div key={p} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                    <CheckCircle />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", fontWeight: 300, color: "var(--color-ink-secondary)", lineHeight: 1.5 }}>{p}</span>
                  </div>
                ))}
              </div>
              <Button variant="primary" size="lg" href="#" fullWidth>Start Your Free Assessment</Button>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-meta)", fontWeight: 300, color: "var(--color-ink-tertiary)", marginTop: "0.875rem", marginBottom: 0, textAlign: "center", lineHeight: 1.5 }}>
                Free. No obligation. Results within 24 hours.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", fontWeight: 300, color: "rgba(250,250,248,0.5)", margin: 0, fontStyle: "italic" }}>
            No obligation. If there&rsquo;s no clear opportunity, we&rsquo;ll tell you — and you&rsquo;ll still walk away with a clear picture of where you stand.
          </p>
        </div>
      </div>
    </section>
  );
}

function MaruHomepage() {
  return (
    <div>
      <Hero />
      <OperationalGap />
      <MetricsBar />
      <PrimaryServices />
      <FoundationServices />
      <Process />
      <ImageBand />
      <AssessmentForm />
    </div>
  );
}

window.MaruHomepage = MaruHomepage;
