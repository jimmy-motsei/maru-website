// Maru — Operations Assessment. Faithful interactive recreation of the live
// multi-step flow: intro → 10 questions (5 areas) → LIVE per-area score preview
// → email gate → confirmation. Aligned to the Maru cyan + type system.
const { Button: ABtn } = window.MaruOnlineDesignSystem_422da4;
const { useState, useEffect } = React;

const CYAN = "#3DB8C6";
const NAVY_INK = "#0D1B2A";

const QUESTIONS = [
  { id: "q1", area: "Process & Workflow", areaIndex: 1, text: "How would you describe the way work actually gets done in your business day-to-day?",
    options: ["We have documented steps and the team follows them consistently", "We have processes but they vary depending on who is handling it", "Things get done but we keep solving the same problems repeatedly", "It's ad hoc — whoever is available figures it out as they go"] },
  { id: "q2", area: "Process & Workflow", areaIndex: 1, text: "What happens when a key team member is unexpectedly unavailable for a week?",
    options: ["Someone else picks it up without skipping a beat — it's all documented", "It usually gets covered but there's significant scrambling", "Things slow down significantly until they're back", "It stalls — only they know how to handle their area"] },
  { id: "q3", area: "Data & Information Flow", areaIndex: 2, text: "Where does your business data live — customer records, job status, financials, communications?",
    options: ["Mostly in one central system — our tools are connected and talk to each other", "In a few separate tools — we move data between them manually when needed", "Spread across email, spreadsheets, and WhatsApp — no single source of truth", "Mostly in people's heads and informal notes"] },
  { id: "q4", area: "Data & Information Flow", areaIndex: 2, text: "How often does information in your business get lost, re-entered, or entered incorrectly?",
    options: ["Rarely — our systems catch errors and we have checks in place", "Occasionally — we usually catch it before it causes a real problem", "Regularly — it's a source of frustration and wasted time", "All the time — it's one of our biggest day-to-day issues"] },
  { id: "q5", area: "Client & Lead Management", areaIndex: 3, text: "When a new enquiry or lead comes in, what actually happens next?",
    options: ["It enters a defined process — automatically logged, assigned, and followed up", "We have a process but it depends on who's available to action it", "Someone handles it personally — how well depends on their current capacity", "It's reactive — we respond when we see it or someone flags it to us"] },
  { id: "q6", area: "Client & Lead Management", areaIndex: 3, text: "How confident are you that every lead gets followed up consistently — not just when it's convenient?",
    options: ["Very — follow-up is systematic and we track where every lead sits", "Reasonably — most leads get follow-up but some slip through", "Not very — follow-up depends on memory or whoever has capacity", "Not at all — we know we're losing leads but haven't fixed the process"] },
  { id: "q7", area: "Visibility & Reporting", areaIndex: 4, text: "How do you get a current view of how the business is actually performing?",
    options: ["From a dashboard or tool that updates automatically", "By pulling reports from our systems — takes some manual effort each time", "By asking the team or checking across different tools separately", "Mostly from instinct and experience — no formal process"] },
  { id: "q8", area: "Visibility & Reporting", areaIndex: 4, text: "When something goes wrong in the business, how do you typically find out?",
    options: ["Our systems flag it before it becomes a real problem", "It comes up during a team check-in or scheduled review", "A client or team member tells us — usually after the fact", "We often only find out once the damage is already done"] },
  { id: "q9", area: "People & Dependency", areaIndex: 5, text: "How reliant is your business on specific individuals to keep day-to-day operations running?",
    options: ["Low — most processes can be handled by any trained team member", "Moderate — some roles are critical but most things can be covered", "High — a few people hold most of the operational knowledge", "Very high — if one or two people left, the business would struggle"] },
  { id: "q10", area: "People & Dependency", areaIndex: 5, text: "Have you made a deliberate attempt to improve or systematise how your business operates?",
    options: ["No — it hasn't been a priority until now", "Yes — we've worked on it internally but haven't got far", "Yes — we brought someone in to help but it didn't fully deliver", "Yes — we have systems in place but they need to work better"] },
];

const AREAS = ["Process & Workflow", "Data & Information Flow", "Client & Lead Management", "Visibility & Reporting", "People & Dependency"];

const STATUS = {
  strong:      { label: "Strong",          colour: "#2B6CB0", bg: "#EBF8FF", border: "#63B3ED" },
  partial:     { label: "Partial",         colour: "#2F855A", bg: "#F0FFF4", border: "#68D391" },
  significant: { label: "Significant gap", colour: "#C05621", bg: "#FFFAF0", border: "#F6AD55" },
  critical:    { label: "Critical gap",    colour: "#E53E3E", bg: "#FFF5F5", border: "#FC8181" },
};

function statusFor(avg) {
  if (avg < 0.75) return "strong";
  if (avg < 1.5) return "partial";
  if (avg < 2.5) return "significant";
  return "critical";
}

function scoreAnswers(answers) {
  // answers: { q1: 0..3, ... }  (index = severity, higher = worse)
  const areaResults = AREAS.map((area) => {
    const qs = QUESTIONS.filter((q) => q.area === area);
    const idxs = qs.map((q) => answers[q.id]).filter((v) => v != null);
    const avg = idxs.reduce((a, b) => a + b, 0) / (idxs.length || 1);
    return { area, status: statusFor(avg) };
  });
  const overall = QUESTIONS.map((q) => answers[q.id]).reduce((a, b) => a + b, 0) / QUESTIONS.length;
  let label, tagline;
  if (overall < 0.75) { label = "Well-systematised"; tagline = "Your operations are in strong shape. The opportunity now is fine-tuning and protecting what works."; }
  else if (overall < 1.5) { label = "Mostly solid, some gaps"; tagline = "The foundations are there. A few targeted connections would remove the friction that's slowing you down."; }
  else if (overall < 2.5) { label = "Significant manual load"; tagline = "Your team is carrying real manual effort. There's clear, recoverable time across several areas."; }
  else { label = "Operating on goodwill"; tagline = "Day-to-day runs on individual effort and memory. This is where integration delivers the biggest, fastest return."; }
  return { areaResults, overall, label, tagline };
}

// ── Logo ────────────────────────────────────────────────────────────────────
function Logo() {
  return <img src="../../assets/brand/maru-logo.png" alt="Maru Online" style={{ height: "26px", width: "auto", filter: "brightness(0) invert(1)" }} />;
}

const mono = { fontFamily: "var(--font-display)", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "11px", fontWeight: 500 };

// ── Question step ─────────────────────────────────────────────────────────────
function QuestionStep({ question, number, total, onAnswer }) {
  const [selected, setSelected] = useState(null);
  function pick(i) { setSelected(i); setTimeout(() => onAnswer(i), 220); }
  const firstInArea = number % 2 === 1;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: firstInArea ? CYAN : "rgba(255,255,255,0.3)" }} />
        <span style={{ ...mono, color: firstInArea ? CYAN : "rgba(255,255,255,0.4)" }}>
          {firstInArea ? `Area ${question.areaIndex} of 5 — ${question.area}` : question.area}
        </span>
      </div>
      <p style={{ ...mono, color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>Question {number} of {total}</p>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 600, color: "#fff", lineHeight: 1.35, margin: "0 0 24px", border: "none", padding: 0 }}>{question.text}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {question.options.map((opt, i) => {
          const on = selected === i;
          return (
            <button key={i} onClick={() => pick(i)}
              style={{
                width: "100%", textAlign: "left", borderRadius: "8px", padding: "16px 20px",
                fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 400, lineHeight: 1.5,
                cursor: "pointer", transition: "all 180ms ease-out",
                border: on ? `1px solid ${CYAN}` : "1px solid rgba(61,184,198,0.3)",
                background: on ? "rgba(61,184,198,0.20)" : "rgba(232,248,250,1)",
                color: NAVY_INK,
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function InfoBox({ children }) {
  return (
    <div style={{ background: "#E8F4F6", border: "1px solid rgba(61,184,198,0.3)", borderRadius: "8px", padding: "24px", marginBottom: "24px" }}>
      {children}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
function MaruAssessment() {
  const [step, setStep] = useState("intro"); // intro | 0..9 | results | gate | done
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step === "intro") setProgress(0);
    else if (typeof step === "number") setProgress(((step + 1) / QUESTIONS.length) * 75);
    else if (step === "results") setProgress(85);
    else if (step === "gate") setProgress(95);
    else if (step === "done") setProgress(100);
  }, [step]);

  function answer(qid, idx) {
    const next = { ...answers, [qid]: idx };
    setAnswers(next);
    const cur = typeof step === "number" ? step : 0;
    if (cur + 1 >= QUESTIONS.length) { setResult(scoreAnswers(next)); setStep("results"); }
    else setStep(cur + 1);
  }

  return (
    <main style={{ position: "relative", minHeight: "100vh", background: "var(--color-bg-navy)", color: "#fff", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(61,184,198,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(61,184,198,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
      {/* progress */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: "3px", background: "#1e2a38" }}>
        <div style={{ height: "100%", background: CYAN, width: `${progress}%`, transition: "width 500ms ease-out" }} />
      </div>
      <div style={{ position: "absolute", top: "24px", left: "24px", zIndex: 20 }}><Logo /></div>

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "672px", margin: "0 auto", padding: "96px 24px 80px" }}>

        {step === "intro" && (
          <div>
            <p style={{ ...mono, color: CYAN, marginBottom: "24px" }}>Maru Online · Operations Assessment</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "30px", fontWeight: 600, color: "#fff", lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.01em" }}>
              Find out where your business is losing time and money to manual processes.
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "18px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: "32px" }}>
              10 questions across 5 operational areas. About 3 minutes.
            </p>
            <InfoBox>
              <p style={{ fontFamily: "var(--font-body)", color: NAVY_INK, fontSize: "16px", fontWeight: 500, lineHeight: 1.6, margin: "0 0 12px" }}>
                Answer based on how things actually work today — not how you want them to work. The more honest your answers, the more useful your result.
              </p>
              <p style={{ fontFamily: "var(--font-body)", color: "#3a4a5c", fontSize: "16px", fontWeight: 300, lineHeight: 1.6, margin: 0 }}>
                You'll receive a structured report showing how your business rates across five areas — process, data flow, lead management, visibility, and people dependency — with a recommended approach for where you sit.
              </p>
            </InfoBox>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "32px" }}>
              {AREAS.map((a, i) => (
                <div key={a} style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "12px 16px" }}>
                  <span style={{ ...mono, color: CYAN, width: "16px" }}>{i + 1}</span>
                  <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>{a}</span>
                </div>
              ))}
            </div>
            <ABtn variant="primary" size="lg" onClick={() => setStep(0)}>Start the assessment</ABtn>
          </div>
        )}

        {typeof step === "number" && (
          <QuestionStep key={step} question={QUESTIONS[step]} number={step + 1} total={QUESTIONS.length} onAnswer={(i) => answer(QUESTIONS[step].id, i)} />
        )}

        {step === "results" && result && (
          <div>
            <p style={{ ...mono, color: CYAN, marginBottom: "24px" }}>Your result</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 600, color: "#fff", margin: "0 0 8px", border: "none", padding: 0 }}>{result.label}</h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: "32px" }}>{result.tagline}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {result.areaResults.map((a) => {
                const cfg = STATUS[a.status];
                return (
                  <div key={a.area} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: "8px", padding: "16px 20px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 500 }}>{a.area}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "11px", letterSpacing: "0.04em", whiteSpace: "nowrap", padding: "4px 12px", borderRadius: "9999px", border: `1px solid ${cfg.border}`, color: cfg.colour, background: cfg.bg }}>{cfg.label}</span>
                  </div>
                );
              })}
            </div>
            <InfoBox>
              <p style={{ fontFamily: "var(--font-body)", color: NAVY_INK, fontWeight: 600, fontSize: "16px", margin: "0 0 8px" }}>Your detailed report goes deeper.</p>
              <p style={{ fontFamily: "var(--font-body)", color: "#3a4a5c", fontWeight: 300, fontSize: "16px", lineHeight: 1.6, margin: 0 }}>
                It breaks down each area — what your answers reveal, the specific issues, and a recommended approach for your stage of business. Enter your details below to receive it.
              </p>
            </InfoBox>
            <ABtn variant="primary" size="lg" fullWidth onClick={() => setStep("gate")}>Get my free detailed report</ABtn>
          </div>
        )}

        {step === "gate" && (
          <div>
            <p style={{ ...mono, color: CYAN, marginBottom: "24px" }}>Your report</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 600, color: "#fff", margin: "0 0 8px", border: "none", padding: 0 }}>Where should we send it?</h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: "32px" }}>
              We'll email you a link to your personalised report — a structured page showing your findings across all five areas with a recommended next step.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); if (name.trim() && email.trim()) setStep("done"); }} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Field label="Your name" value={name} onChange={setName} placeholder="First name is fine" required />
              <Field label="Email address" type="email" value={email} onChange={setEmail} placeholder="you@yourbusiness.com" required />
              <Field label="Business website" optional value={website} onChange={setWebsite} placeholder="yourbusiness.com" />
              <ABtn variant="primary" size="lg" type="submit" fullWidth>Send my report</ABtn>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.5)", fontSize: "12px", textAlign: "center" }}>No spam. Unsubscribe any time. POPIA compliant.</p>
            </form>
          </div>
        )}

        {step === "done" && (
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-flex", background: "rgba(61,184,198,0.10)", border: "1px solid rgba(61,184,198,0.3)", borderRadius: "9999px", padding: "24px", marginBottom: "24px" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke={CYAN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 600, color: "#fff", margin: "0 0 12px", border: "none", padding: 0 }}>Your report is on its way.</h2>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: "0 auto 32px", maxWidth: "440px" }}>
              Check your inbox for a link to your personalised report — your findings across all five operational areas and a recommended next step.
            </p>
            <div style={{ textAlign: "left" }}>
              <InfoBox>
                <p style={{ fontFamily: "var(--font-body)", color: NAVY_INK, fontWeight: 600, fontSize: "16px", margin: "0 0 8px" }}>While you wait:</p>
                <p style={{ fontFamily: "var(--font-body)", color: "#3a4a5c", fontWeight: 300, fontSize: "16px", lineHeight: 1.6, margin: 0 }}>
                  The report will invite you to book a free 30-minute discovery call — where we review your assessment together and tell you honestly whether a full Operations Diagnostic makes sense right now.
                </p>
              </InfoBox>
            </div>
            <button onClick={() => { setStep("intro"); setAnswers({}); setName(""); setEmail(""); setWebsite(""); }} style={{ background: "none", border: "none", color: CYAN, fontFamily: "var(--font-body)", fontSize: "14px", cursor: "pointer" }}>← Restart the assessment</button>
          </div>
        )}
      </div>
    </main>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", required, optional }) {
  const [focus, setFocus] = useState(false);
  return (
    <div>
      <label style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500, color: "#fff", marginBottom: "8px" }}>
        {label}{optional && <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.5)" }}> (optional — helps us personalise your report)</span>}
      </label>
      <input
        type={type} value={value} required={required} placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: "100%", borderRadius: "10px", padding: "12px 16px",
          fontFamily: "var(--font-body)", fontSize: "15px", color: "#fff",
          background: "rgba(255,255,255,0.05)",
          border: `1px solid ${focus ? CYAN : "rgba(255,255,255,0.15)"}`,
          outline: "none", boxSizing: "border-box", transition: "border-color 150ms",
        }}
      />
    </div>
  );
}

window.MaruAssessment = MaruAssessment;
