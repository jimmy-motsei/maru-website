// Maru — Services page. Faithful recreation of app/services/page.tsx: hero,
// "what integrated AI looks like" image split, fixed-scope principle, four
// alternating service sections with included-lists + pricing, and final CTA.
const { Button: SBtn } = window.MaruOnlineDesignSystem_422da4;

const SWRAP = { maxWidth: "1100px", margin: "0 auto" };
const SWRAP_MD = { maxWidth: "900px", margin: "0 auto" };
const SWRAP_NARROW = { maxWidth: "720px", margin: "0 auto" };

const SERVICES = [
  {
    id: "diagnostic", label: "01", title: "Operations Diagnostic",
    tagline: "Map where your operation has gaps — before configuring anything.",
    description: "A structured audit of your current workflows, tools, and data connections. You receive a written report — delivered within 48 hours — that maps where information isn't flowing, quantifies what that's costing, and tells you exactly what to configure first. This is where every engagement starts.",
    bullets: [
      { leader: "Sector-specific intake", body: "A structured brief tailored to your industry — medico legal, HR & recruitment, or conference & events." },
      { leader: "Verification call", body: "A 30–45 minute call to clarify the brief, ask the right questions, and confirm scope." },
      { leader: "Written gap report", body: "A clear document mapping where your workflows aren't connected, the cost of each gap, and the configuration priority order." },
      { leader: "90-day roadmap", body: "A sequenced action plan so you know exactly what to configure and in what order." },
    ],
    pricing: "R4,500", note: "If you proceed to a full engagement, this fee offsets against the project cost.", bg: "var(--color-bg-primary)",
  },
  {
    id: "build", label: "02", title: "Workflow Integration",
    tagline: "Connect your existing tools. Configure the workflows between them.",
    description: "Fixed-scope implementation built around what the diagnostic found. We configure the connections between your tools, extend what's already working, and build the automation layer on top. Vendor-agnostic. Your stack stays — we connect it.",
    bullets: [
      { leader: "Custom integration build", body: "Connecting your existing tools — CRM, calendar, email, forms — so they pass information correctly." },
      { leader: "Automation layer", body: "The workflows that run without human intervention: follow-ups, confirmations, handoffs, notifications." },
      { leader: "Brand voice training", body: "AI outputs calibrated to sound like your business, not like a generic chatbot." },
      { leader: "POPIA compliance built in", body: "Every data touchpoint designed for compliance before a line of code is written." },
    ],
    pricing: "From R35,000", note: "Fixed price. Scoped after the diagnostic — no surprises.", bg: "var(--color-bg-canvas)",
  },
  {
    id: "training", label: "03", title: "Team Training & Handover",
    tagline: "Your team runs the system. Not us.",
    description: "Hands-on training built around the specific workflows we've configured. Your team learns how to use, manage, and adapt the system — so the capability stays in the business after we hand over.",
    bullets: [
      { leader: "Hands-on workshops", body: "Practical sessions built around your actual tools, not generic AI theory." },
      { leader: "Prompt engineering", body: "Teaching your team to get consistent, high-quality outputs from the tools you already have." },
      { leader: "Workflow adoption", body: "Getting the new workflows embedded in how the team actually works — not just documented." },
      { leader: "30-day follow-up support", body: "A structured support window after training to catch issues before they become habits." },
    ],
    pricing: "From R15,000", note: "Scoped per engagement. Can be standalone or follow a build.", bg: "var(--color-bg-primary)",
  },
  {
    id: "support", label: "04", title: "Results Optimisation",
    tagline: "A second sprint when the first one shows what's next.",
    description: "A fixed-scope optimisation engagement triggered by what the 30-day measurement phase surfaces. Not a retainer — a defined sprint built around specific opportunities the data identified.",
    bullets: [
      { leader: "Data-led scope", body: "Built around what the 30-day measurement report surfaced — not assumptions." },
      { leader: "Fixed-scope sprint", body: "Defined deliverables, defined timeline, agreed before work begins." },
      { leader: "Compliance review", body: "Ongoing POPIA review as your data flows and tool stack evolve." },
      { leader: "Updated results baseline", body: "A new measurement baseline set after the optimisation sprint completes." },
    ],
    pricing: "From R8,500", note: "Available to clients who have completed a build engagement.", bg: "var(--color-bg-canvas)",
  },
];

function IncludedList({ bullets }) {
  return (
    <div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label)", fontWeight: 500, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-ink-tertiary)", marginBottom: "0.75rem" }}>What's included</p>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        {bullets.map((b) => (
          <li key={b.leader} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-cyan)", marginTop: "8px", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-subheading)" }}>
              <strong style={{ color: "var(--color-navy)", fontWeight: 600 }}>{b.leader}.</strong>{" "}
              <span style={{ fontWeight: 300, color: "var(--color-ink-secondary)" }}>{b.body}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceSection({ s }) {
  return (
    <section id={s.id} style={{ backgroundColor: s.bg, padding: "64px 24px" }}>
      <div style={SWRAP_MD}>
        <div style={{ marginBottom: "var(--space-section-header-mb)" }}>
          <span className="label-eyebrow-gold" style={{ marginBottom: "0.75rem" }}>{s.label} — {s.title}</span>
          <h2 style={{ borderBottom: "none", paddingBottom: 0, margin: "0 0 0.75rem" }}>{s.title}</h2>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3-serif)", fontWeight: 400, lineHeight: "var(--leading-subheading)", color: "var(--color-ink-primary)", letterSpacing: "var(--tracking-tight)", margin: 0 }}>{s.tagline}</p>
        </div>
        <div className="maru-svc-grid">
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", lineHeight: "var(--leading-body)", marginBottom: "var(--space-para-section)" }}>{s.description}</p>
            <div style={{ borderTop: "1px solid var(--color-border-default)", paddingTop: "1.25rem" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 600, color: "var(--color-navy)", lineHeight: 1, marginBottom: "0.375rem" }}>{s.pricing}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-meta)", fontWeight: 300, color: "var(--color-ink-tertiary)", margin: 0 }}>{s.note}</p>
            </div>
            <div style={{ marginTop: "1.5rem" }}><SBtn variant="secondary">Learn more</SBtn></div>
          </div>
          <IncludedList bullets={s.bullets} />
        </div>
      </div>
    </section>
  );
}

function MaruServices() {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", backgroundColor: "var(--color-bg-navy)", padding: "120px 24px 88px", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(61,184,198,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(61,184,198,0.12) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-120px", right: "-120px", width: "480px", height: "480px", borderRadius: "50%", border: "1px solid rgba(61,184,198,0.15)", pointerEvents: "none" }} />
        <div style={{ ...SWRAP, position: "relative" }}>
          <span className="label-eyebrow">Services</span>
          <h1 className="maru-headline-split" style={{ color: "#fff", margin: "1rem 0 0" }}>
            <span className="maru-headline-split-strong">AI tools don't create ROI.</span><br />
            <span className="maru-headline-split-light">Integrated AI systems do.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body)", color: "var(--color-ink-inverted-muted)", maxWidth: "600px", lineHeight: "var(--leading-body)", margin: "var(--space-heading-body) 0 var(--space-section-header-mb)" }}>
            We build AI workflows that connect what you already have — and measure what changes. Every engagement is fixed-scope and priced before work begins.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px" }}>
            <SBtn variant="primary" size="lg" href="#services">Start with Assessment</SBtn>
            <SBtn variant="tertiary" href="#services">See all services</SBtn>
          </div>
        </div>
      </section>

      {/* Image split */}
      <section style={{ backgroundColor: "var(--color-bg-primary)" }}>
        <div className="maru-split">
          <div className="maru-split-text">
            <span className="label-eyebrow" style={{ marginBottom: "1rem" }}>Integrated AI in practice</span>
            <h2 style={{ borderBottom: "none", paddingBottom: 0, margin: "0 0 1rem" }}>What integrated AI actually looks like.</h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", lineHeight: "var(--leading-body)", margin: 0 }}>
              Leads captured in your CRM automatically. Follow-up emails triggered without anyone pressing send. Invoices generated the moment a job is marked complete. Reports that update themselves. This is what connected systems deliver.
            </p>
          </div>
          <div className="maru-split-img" style={{ backgroundImage: "url(../../assets/illustrations/integration-looks-like.png)" }} />
        </div>
      </section>

      {/* Principle */}
      <section style={{ backgroundColor: "var(--color-bg-secondary)", padding: "72px 24px" }}>
        <div style={SWRAP_NARROW}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", lineHeight: "var(--leading-body)", margin: 0 }}>
            We identify where information isn't flowing automatically and configure the connections that make it happen. We only recommend new tools when there's a genuine capability gap your existing stack can't fill — and we'll tell you plainly when that's the case.
          </p>
        </div>
      </section>

      <div id="services" />
      {SERVICES.map((s) => <ServiceSection key={s.id} s={s} />)}

      {/* Image band */}
      <section style={{ position: "relative", height: "400px", overflow: "hidden" }}>
        <img src="../../assets/illustrations/tech-setup.jpg" alt="South African professionals working together" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(13,27,42,0.9) 0%, rgba(13,27,42,0.6) 60%, rgba(13,27,42,0.4) 100%)" }} />
        <div style={{ ...SWRAP, position: "relative", height: "100%", display: "flex", alignItems: "center", padding: "0 24px" }}>
          <h2 style={{ color: "#fff", borderBottom: "none", paddingBottom: 0, margin: 0, maxWidth: "680px" }}>
            <span style={{ fontWeight: 300 }}>Vendor-agnostic.</span> <span style={{ fontWeight: 700 }}>Your tools stay.</span><br />
            <span style={{ fontWeight: 300 }}>We configure the connections between them.</span>
          </h2>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ position: "relative", backgroundColor: "var(--color-bg-navy)", padding: "64px 24px", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "320px", height: "320px", borderRadius: "50%", border: "1px solid rgba(61,184,198,0.12)", pointerEvents: "none" }} />
        <div style={{ ...SWRAP_NARROW, position: "relative" }}>
          <span className="label-eyebrow">The right place to start</span>
          <h2 style={{ color: "var(--color-ink-inverted)", border: "none", padding: 0, margin: "0.5rem 0 var(--space-heading-body)" }}>
            <span style={{ fontWeight: 300 }}>The right place to start is</span><br />
            <span style={{ fontWeight: 700 }}>a conversation about where your operation has gaps.</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body)", color: "rgba(250,250,248,0.75)", lineHeight: "var(--leading-body)", marginBottom: "var(--space-para-section)" }}>
            The Operations Diagnostic is where every engagement starts — a structured audit of your current setup, a clear picture of what to configure first, and a written report delivered within 48 hours.
          </p>
          <hr style={{ width: "100%", height: "1px", background: "rgba(250,250,248,0.15)", border: "none", marginBottom: "var(--space-para-section)" }} />
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px" }}>
            <SBtn variant="primary" size="lg" href="#">Start with Assessment</SBtn>
            <SBtn variant="tertiary" href="#" style={{ color: "var(--color-cyan)" }}>Book a 20-minute call</SBtn>
          </div>
        </div>
      </section>
    </div>
  );
}

window.MaruServices = MaruServices;
