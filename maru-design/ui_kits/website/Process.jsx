// Maru — How We Work (Process) page. Faithful recreation of app/process/page.tsx:
// hero, principle, image split, tools-we-work-with scroller, four phases with
// prose + per-phase lists, image band, 8-question FAQ, final CTA.
const { Button: WBtn, AccordionFAQ: WFAQ } = window.MaruOnlineDesignSystem_422da4;

const WWRAP = { maxWidth: "1100px", margin: "0 auto" };
const WWRAP_MD = { maxWidth: "900px", margin: "0 auto" };
const WWRAP_NARROW = { maxWidth: "720px", margin: "0 auto" };

const TOOLS = ["chatgpt", "claude", "zapier", "make", "hubspot", "notion", "google", "calendly", "perplexity"];

const PHASES = [
  {
    number: "01", label: "Diagnose", title: "We map the gaps before we configure anything.",
    body: ["You complete a sector-specific intake form. It takes fifteen minutes. We follow up with a short verification call. Within 48 hours, you receive your diagnostic report.", "The report covers your workflows, tools, and site infrastructure. It includes a quantified revenue gap analysis. This is a live document, not a PDF. Whether you proceed or not, the report is yours."],
    items: [
      { leader: "Sector-specific intake brief", body: "Fifteen questions tailored to your industry." },
      { leader: "Verification call", body: "We clarify the brief and confirm scope before work begins." },
      { leader: "Written gap report", body: "A snapshot of what is working and the cost of your current state." },
      { leader: "90-day roadmap", body: "A sequenced action plan so you know what to do next." },
    ],
    note: "The Operations Diagnostic. If you proceed to a full engagement, this fee offsets against the project cost.", bg: "var(--color-bg-primary)",
  },
  {
    number: "02", label: "Design", title: "We scope the work before you commit.",
    body: ["We use the diagnostic findings to build a fixed-scope plan. Every item is specified. We define what we are building, what it connects to, and what it produces. Nothing is vague.", "You review the plan and request adjustments. We do not proceed until you sign off on every element. If your site infrastructure needs work first, the plan addresses it upfront."],
    items: [
      { leader: "Fixed-scope definition", body: "A clear written spec of what will be built and measured." },
      { leader: "Fixed price", body: "Agreed before work begins. No hourly billing. No scope creep." },
      { leader: "Baseline measurement", body: "We establish the \u201cbefore\u201d state so results are provable." },
      { leader: "Stack decision", body: "We document exactly why we chose each tool or connection." },
    ],
    note: null, bg: "var(--color-bg-canvas)",
  },
  {
    number: "03", label: "Build", title: "We configure on solid foundations.",
    body: ["We build exactly what the plan specifies. If your site needs remediation, that happens first. The automation layer follows once the foundation is sound. Every sprint has a defined output.", "Everything we build is tested and documented. Your team receives instructions they can follow without a technical background.", "**POPIA compliance is designed in from the start.**"],
    items: [
      { leader: "Infrastructure first", body: "We resolve site and stack issues before adding automation." },
      { leader: "Custom integration", body: "We connect your CRM, calendar, and email so data passes correctly." },
      { leader: "Automation layer", body: "Workflows that run without human intervention." },
      { leader: "Brand voice calibration", body: "AI outputs designed to use your defined business brand voice." },
      { leader: "Compliance by design", body: "Every data touchpoint is reviewed for POPIA compliance." },
    ],
    note: null, bg: "var(--color-bg-secondary)",
  },
  {
    number: "04", label: "Launch and Measure", title: "You own the system. We track the results.",
    body: ["We track results against your baseline for 30 days after launch. At the end of the period, you receive a results report. It shows what moved, what didn't, and what to watch next.", "This phase is built into every engagement. It is not an optional add-on. We make decisions about further optimisation based on data, not a sales conversation."],
    items: [
      { leader: "Full documentation", body: "Every connection and configuration is documented for your team." },
      { leader: "Hands-on training", body: "We train the people who will actually use the system." },
      { leader: "30-day measurement", body: "We track results against the baseline and report changes." },
      { leader: "Results report", body: "A written report of outcomes, not just a handover checklist." },
    ],
    note: null, bg: "var(--color-bg-primary)",
  },
];

const PROCESS_FAQS = [
  { q: "How long does the whole process take?", a: "The diagnostic takes 48 hours from intake form submission to report delivery. The core engagement — Phases 2 through 4 — typically runs six to ten weeks depending on complexity and whether site remediation is required. The 30-day measurement phase runs after launch." },
  { q: "Do I need to be technical to work with you?", a: "No. We build systems your team can use and maintain without a technical background. Everything is documented in plain language at handover. If something breaks after we've handed over, we're reachable — but the systems are designed not to need us." },
  { q: "What if my business isn't ready for AI implementation?", a: "The diagnostic will tell you. If the honest answer is that your foundation needs work before AI automation makes sense, we'll say so — and we can scope the infrastructure work that needs to happen first, before any automation is layered on top. We'd rather give you a clear picture than sell you something you're not ready for." },
  { q: "I already have AI tools. Do I have to replace them?", a: "Almost certainly not. Our first obligation is to audit what you have and make it work better. We only recommend new tools when there is a genuine capability gap your existing stack cannot fill — and we explain exactly why when that happens." },
  { q: "How many clients do you work with at once?", a: "Maximum five. That's a hard limit, not a soft guideline. It's how we protect the quality of every engagement." },
  { q: "What happens if the results don't meet expectations?", a: "The 30-day measurement phase is where this gets addressed honestly. If something didn't perform as expected, the results report says so and explains why. We don't disappear after handover — the 30-day check-in is built in specifically to catch this and course-correct where needed." },
  { q: "Can I start with just the diagnostic and decide later?", a: "Yes — that's exactly how it's designed. The diagnostic is a complete, standalone deliverable. There is no obligation to proceed to a full engagement. Many clients use the diagnostic report to make an internal case for the investment before committing." },
  { q: "Do you work outside Gauteng, South Africa?", a: "Yes, we do. The diagnostic and most of the engagement work is handled remotely. For clients in Gauteng we can meet in person at key stages. For clients elsewhere in South Africa the process works entirely via video call and shared documents — same quality, same process." },
];

function PhaseList({ items }) {
  return (
    <div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label)", fontWeight: 500, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-ink-tertiary)", marginBottom: "0.75rem" }}>What happens in this phase</p>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        {items.map((b) => (
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

function PhaseSection({ p }) {
  return (
    <section style={{ backgroundColor: p.bg, padding: "64px 24px" }}>
      <div style={WWRAP_MD}>
        <div style={{ marginBottom: "var(--space-section-header-mb)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span className="section-number">{p.number}</span>
            <span className="label-eyebrow-gold" style={{ margin: 0 }}>{p.label}</span>
          </div>
          <h2 style={{ borderBottom: "none", paddingBottom: 0, margin: 0 }}>{p.title}</h2>
        </div>
        <div className="maru-phase-grid">
          <div>
            {p.body.map((para, i) => {
              const bold = para.startsWith("**") && para.endsWith("**");
              const text = bold ? para.slice(2, -2) : para;
              return (
                <p key={i} style={{ fontFamily: "var(--font-body)", fontWeight: bold ? 700 : 300, fontSize: "var(--text-body-sm)", color: bold ? "var(--color-ink-primary)" : "var(--color-ink-secondary)", lineHeight: "var(--leading-body)", marginBottom: i < p.body.length - 1 ? "var(--space-para-section)" : 0 }}>{text}</p>
              );
            })}
            {p.note && (
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-meta)", fontWeight: 300, color: "var(--color-ink-tertiary)", marginTop: "1.5rem", marginBottom: 0, paddingTop: "1rem", borderTop: "1px solid var(--color-border-default)" }}>{p.note}</p>
            )}
          </div>
          <PhaseList items={p.items} />
        </div>
      </div>
    </section>
  );
}

function MaruProcess() {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", backgroundColor: "var(--color-bg-navy)", padding: "120px 24px 88px", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(61,184,198,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(61,184,198,0.12) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-120px", right: "-120px", width: "480px", height: "480px", borderRadius: "50%", border: "1px solid rgba(61,184,198,0.15)", pointerEvents: "none" }} />
        <div style={{ ...WWRAP, position: "relative" }}>
          <span className="label-eyebrow">How we work</span>
          <h1 className="maru-headline-split" style={{ color: "#fff", margin: "1rem 0 0" }}>
            <span className="maru-headline-split-strong">A process built around</span><br />
            <span className="maru-headline-split-light">where your operation has gaps.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body)", color: "var(--color-ink-inverted-muted)", maxWidth: "600px", lineHeight: "var(--leading-body)", margin: "var(--space-heading-body) 0 var(--space-section-header-mb)" }}>
            Every engagement follows the same four phases. Fixed scope, fixed price, clear outcomes at every stage.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px" }}>
            <WBtn variant="primary" size="lg" href="#phases">Start with Assessment</WBtn>
            <WBtn variant="tertiary" href="#phases">See the process</WBtn>
          </div>
        </div>
      </section>

      {/* Principle */}
      <section style={{ backgroundColor: "var(--color-bg-secondary)", padding: "72px 24px" }}>
        <div style={WWRAP_NARROW}>
          <h3 style={{ marginBottom: "var(--space-heading-body)" }}>We start with a diagnostic of your current processes.</h3>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", lineHeight: "var(--leading-body)", margin: 0, fontStyle: "italic" }}>
            &ldquo;Building the wrong thing faster is still building the wrong thing.&rdquo;
          </p>
        </div>
      </section>

      {/* Image split */}
      <section style={{ backgroundColor: "var(--color-bg-canvas)" }}>
        <div className="maru-split">
          <div className="maru-split-img" style={{ backgroundImage: "url(../../assets/illustrations/tech-setup.jpg)" }} />
          <div className="maru-split-text">
            <span className="label-eyebrow" style={{ marginBottom: "1rem" }}>Diagnostic first</span>
            <h2 style={{ borderBottom: "none", paddingBottom: 0, margin: "0 0 1rem" }}>We audit your workflows before we touch your tools.</h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "var(--text-body-sm)", color: "var(--color-ink-secondary)", lineHeight: "var(--leading-body)", margin: 0 }}>
              Building automation on top of broken infrastructure just breaks faster. We map how your business actually operates — the manual steps, the data handoffs, the gaps — before a single workflow is configured.
            </p>
          </div>
        </div>
      </section>

      {/* Tools scroller */}
      <section style={{ backgroundColor: "var(--color-bg-secondary)", padding: "32px 24px 40px", overflow: "hidden" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-label)", fontWeight: 500, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-ink-tertiary)", margin: "0 0 24px", textAlign: "center" }}>Tools we work with</p>
        <div style={{ display: "flex", gap: "48px", alignItems: "center", justifyContent: "center", flexWrap: "wrap", maxWidth: "900px", margin: "0 auto" }}>
          {TOOLS.map((t) => (
            <img key={t} src={`../../assets/tools/${t}.svg`} alt={t} style={{ height: "30px", width: "auto", opacity: 0.8 }} />
          ))}
        </div>
      </section>

      <div id="phases" />
      {PHASES.map((p) => <PhaseSection key={p.number} p={p} />)}

      {/* Image band */}
      <section style={{ position: "relative", height: "380px", overflow: "hidden" }}>
        <img src="../../assets/illustrations/integration-looks-like.png" alt="Team collaborating in a professional setting" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(13,27,42,0.9) 0%, rgba(13,27,42,0.6) 60%, rgba(13,27,42,0.4) 100%)" }} />
        <div style={{ ...WWRAP, position: "relative", height: "100%", display: "flex", alignItems: "center", padding: "0 24px" }}>
          <h2 style={{ color: "#fff", borderBottom: "none", paddingBottom: 0, margin: 0, maxWidth: "680px" }}>
            <span style={{ fontWeight: 300 }}>Every phase has a defined output.</span><br />
            <span style={{ fontWeight: 700 }}>You always know what's happening and what comes next.</span>
          </h2>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--color-bg-secondary)", padding: "64px 24px" }}>
        <div style={WWRAP_MD}>
          <div style={{ marginBottom: "var(--space-section-header-mb)" }}>
            <span className="label-eyebrow-gold">Common questions</span>
            <h2 style={{ borderBottom: "none", paddingBottom: 0, margin: "0.5rem 0 0" }}>
              <span style={{ fontWeight: 300 }}>How the process works</span><br />
              <span style={{ fontWeight: 700 }}>in practice</span>
            </h2>
          </div>
          <WFAQ items={PROCESS_FAQS} />
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ position: "relative", backgroundColor: "var(--color-bg-navy)", padding: "64px 24px", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "320px", height: "320px", borderRadius: "50%", border: "1px solid rgba(61,184,198,0.12)", pointerEvents: "none" }} />
        <div style={{ ...WWRAP_NARROW, position: "relative" }}>
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
            <WBtn variant="primary" size="lg" href="#">Start with Assessment</WBtn>
            <WBtn variant="tertiary" href="#" style={{ color: "var(--color-cyan)" }}>Book a 20-minute call</WBtn>
          </div>
        </div>
      </section>
    </div>
  );
}

window.MaruProcess = MaruProcess;
