// Maru — Pricing page. Faithful recreation of app/pricing/page.tsx with the
// real engagement data and FAQ copy. Reuses Header/Footer and the AccordionFAQ
// from the design-system bundle.
const PricingDS = window.MaruOnlineDesignSystem_422da4;
const { Button: PBtn, AccordionFAQ: PFAQ } = PricingDS;

const PWRAP = { maxWidth: "1100px", margin: "0 auto" };
const PWRAP_MD = { maxWidth: "900px", margin: "0 auto" };
const PWRAP_NARROW = { maxWidth: "720px", margin: "0 auto" };

const ENGAGEMENTS = [
  {
    label: "01", badge: "Start here", featured: false,
    title: "Operations Diagnostic", price: "R4,500", note: "Offsets against build cost if you proceed.", scope: "48 hours",
    body: "A structured audit of your workflows, tools, and data connections. You receive a written report that maps your gaps and tells you exactly what to configure first.",
    items: [
      { leader: "Intake brief", body: "Structured questions tailored to your industry." },
      { leader: "Verification call", body: "A 30-minute call to clarify the brief and confirm scope." },
      { leader: "Gap report", body: "Named failures, cost per gap, and fix priority." },
      { leader: "90-day roadmap", body: "A sequenced action plan for your next steps." },
    ],
  },
  {
    label: "02", badge: "Most common", featured: true,
    title: "Workflow Integration", price: "From R35,000", note: "Fixed price. Scoped after the diagnostic.", scope: "4–8 weeks",
    body: "Implementation built around the diagnostic findings. We configure the connections between your tools and build the automation layer. We work with your existing stack.",
    items: [
      { leader: "Custom integration", body: "Connecting your CRM, calendar, and email correctly." },
      { leader: "Automation layer", body: "Workflows that run without human intervention." },
      { leader: "Brand voice training", body: "AI outputs calibrated to sound like your business." },
      { leader: "POPIA compliance", body: "Every data touchpoint is designed for compliance first." },
    ],
  },
  {
    label: "03", badge: "", featured: false,
    title: "Team Training & Handover", price: "From R15,000", note: "Can be standalone or follow a build.", scope: "Scoped per engagement",
    body: "Hands-on training built around your specific workflows. Your team learns how to use and manage the system. The capability stays in your business after we hand over.",
    items: [
      { leader: "Hands-on workshops", body: "Built around your tools, not generic theory." },
      { leader: "Prompt engineering", body: "High-quality outputs from the tools you have." },
      { leader: "Workflow adoption", body: "Getting new workflows embedded in daily work." },
      { leader: "Follow-up support", body: "30 days of support to catch issues early." },
    ],
  },
];

const PRICING_FAQS = [
  { q: "Why do I have to pay for the diagnostic?", a: "Because it is real work that produces a real deliverable. A free call tells you what we think is wrong. A paid diagnostic tells you exactly what is wrong and what it is costing you. It ensures we are both serious about the conversation." },
  { q: "What if I decide not to proceed after the diagnostic?", a: "That is fine. The report is yours. You walk away with a clear picture of your gaps and a prioritised action plan. You can act on it yourself or take it elsewhere. We would rather you have clarity than commit to an engagement you are not ready for." },
  { q: "Why don't you publish a full engagement price?", a: "Every engagement is scoped to what the diagnostic finds. A single number would either undersell complex work or oversell simple work. We guarantee the price is fixed before you commit. No surprises. No scope creep." },
  { q: "Do you offer payment plans?", a: "The diagnostic is payable upfront. For the core engagement, we can discuss a milestone-based structure. Typically, this is 50% on sign-off and 50% on delivery. We can work something out during the scoping conversation." },
];

function EngagementCard({ eng }) {
  return (
    <div
      style={{
        backgroundColor: eng.featured ? "var(--color-bg-canvas)" : "var(--color-bg-primary)",
        border: eng.featured ? "1px solid var(--color-cyan)" : "1px solid var(--color-border-default)",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", padding: "1.75rem 2rem", borderBottom: "1px solid var(--color-border-default)" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
            <span className="section-number">{eng.label}</span>
            {eng.badge && (
              <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label)", fontWeight: 500, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: eng.featured ? "var(--color-cyan)" : "var(--color-gold-antique)", backgroundColor: eng.featured ? "var(--color-cyan-light)" : "var(--color-gold-light)", borderRadius: "4px", padding: "0.2rem 0.5rem" }}>{eng.badge}</span>
            )}
          </div>
          <h3 style={{ margin: 0 }}>{eng.title}</h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-meta)", fontWeight: 300, color: "var(--color-ink-tertiary)", margin: "0.25rem 0 0" }}>{eng.scope}</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 600, color: "var(--color-navy)", lineHeight: 1, marginBottom: "0.25rem" }}>{eng.price}</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-meta)", fontWeight: 300, color: "var(--color-ink-tertiary)", margin: 0 }}>{eng.note}</p>
        </div>
      </div>
      <div className="maru-pricing-body" style={{ padding: "1.75rem 2rem" }}>
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", lineHeight: "var(--leading-body)", marginBottom: "1.5rem" }}>{eng.body}</p>
          <PBtn variant="secondary">Learn more</PBtn>
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label)", fontWeight: 500, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-ink-tertiary)", marginBottom: "0.75rem" }}>What's included</p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {eng.items.map((it) => (
              <li key={it.leader} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-cyan)", marginTop: "8px", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-subheading)" }}>
                  <strong style={{ color: "var(--color-navy)", fontWeight: 600 }}>{it.leader}.</strong>{" "}
                  <span style={{ fontWeight: 300, color: "var(--color-ink-secondary)" }}>{it.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MaruPricing() {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", backgroundColor: "var(--color-bg-navy)", padding: "120px 24px 88px", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(61,184,198,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(61,184,198,0.12) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-120px", right: "-120px", width: "480px", height: "480px", borderRadius: "50%", border: "1px solid rgba(61,184,198,0.15)", pointerEvents: "none" }} />
        <div style={{ ...PWRAP, position: "relative" }}>
          <span className="label-eyebrow">Pricing</span>
          <h1 className="maru-headline-split" style={{ color: "#fff", margin: "1rem 0 0" }}>
            <span className="maru-headline-split-strong">One fixed price to start.</span><br />
            <span className="maru-headline-split-light">No surprises after that.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body)", color: "var(--color-ink-inverted-muted)", maxWidth: "600px", lineHeight: "var(--leading-body)", margin: "var(--space-heading-body) 0 var(--space-section-header-mb)" }}>
            Every Maru engagement begins with the Operations Diagnostic. Fixed scope, fixed price, clear deliverables.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px" }}>
            <PBtn variant="primary" size="lg" href="#assessment">Start with Assessment</PBtn>
            <PBtn variant="tertiary" href="#engagements">See all pricing</PBtn>
          </div>
        </div>
      </section>

      {/* Principle */}
      <section style={{ backgroundColor: "var(--color-bg-secondary)", padding: "80px 24px" }}>
        <div style={PWRAP_NARROW}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3-serif)", fontWeight: 400, lineHeight: "var(--leading-subheading)", color: "var(--color-ink-primary)", letterSpacing: "var(--tracking-tight)", margin: 0 }}>
            If you have already invested in AI tools, you don't need more tools. You need the ones you have to work together. The diagnostic is where that starts. If you proceed to a full engagement, the diagnostic fee offsets against the project cost.
          </p>
        </div>
      </section>

      {/* Engagements */}
      <section id="engagements" style={{ backgroundColor: "var(--color-bg-primary)", padding: "64px 24px" }}>
        <div style={PWRAP_MD}>
          <div style={{ marginBottom: "var(--space-section-header-mb)" }}>
            <span className="label-eyebrow-gold">Engagements</span>
            <h2 style={{ borderBottom: "none", paddingBottom: 0, margin: "0.5rem 0 1rem" }}>
              <span style={{ fontWeight: 300 }}>Start here.</span><br />
              <span style={{ fontWeight: 700 }}>Build from what we find.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", margin: 0, maxWidth: "560px" }}>
              All three engagements are fixed-scope. We agree on the price before work begins. Start with the diagnostic. Everything else is scoped from what it finds.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {ENGAGEMENTS.map((eng) => <EngagementCard key={eng.label} eng={eng} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--color-bg-secondary)", padding: "64px 24px" }}>
        <div style={PWRAP_MD}>
          <div style={{ marginBottom: "var(--space-section-header-mb)" }}>
            <span className="label-eyebrow-gold">Common questions</span>
            <h2 style={{ borderBottom: "none", paddingBottom: 0, margin: "0.5rem 0 0" }}>
              <span style={{ fontWeight: 300 }}>A note on</span><br />
              <span style={{ fontWeight: 700 }}>how we price</span>
            </h2>
          </div>
          <PFAQ items={PRICING_FAQS} />
        </div>
      </section>

      {/* Final CTA */}
      <section id="assessment" style={{ position: "relative", backgroundColor: "var(--color-bg-navy)", padding: "64px 24px", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "320px", height: "320px", borderRadius: "50%", border: "1px solid rgba(61,184,198,0.12)", pointerEvents: "none" }} />
        <div style={{ ...PWRAP_NARROW, position: "relative" }}>
          <span className="label-eyebrow">The diagnostic</span>
          <h2 style={{ color: "var(--color-ink-inverted)", border: "none", padding: 0, margin: "0.5rem 0 var(--space-heading-body)" }}>
            <span style={{ fontWeight: 300 }}>Start with</span><br />
            <span style={{ fontWeight: 700 }}>a Diagnostic</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body)", color: "rgba(250,250,248,0.75)", lineHeight: "var(--leading-body)", marginBottom: "var(--space-para-section)" }}>
            It takes 15 minutes. A written report delivered in 48 hours.
          </p>
          <hr style={{ width: "100%", height: "1px", background: "rgba(250,250,248,0.15)", border: "none", marginBottom: "var(--space-para-section)" }} />
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px" }}>
            <PBtn variant="primary" size="lg" href="#">Start with Assessment</PBtn>
            <PBtn variant="tertiary" href="#" style={{ color: "var(--color-cyan)" }}>Book a 20-minute call</PBtn>
          </div>
        </div>
      </section>
    </div>
  );
}

window.MaruPricing = MaruPricing;
