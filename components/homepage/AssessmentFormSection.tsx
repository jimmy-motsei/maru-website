"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

// Maps handoff dropdown labels to internal q4 scoring keys
const CHALLENGE_OPTIONS = [
  { label: "Too much manual admin work",          value: "reduce-manual-tasks" },
  { label: "Leads aren't converting to clients",  value: "convert-more-leads" },
  { label: "Tools that aren't talking to each other", value: "reduce-manual-tasks" },
  { label: "Can't measure what's working",        value: "better-visibility" },
  { label: "Team adopting new tools is hard",     value: "less-people-dependent" },
  { label: "Not sure where to start",             value: "better-visibility" },
] as const;

// Reasonable defaults for q1/q2/q3/q5 — ensures scoring works for all submissions
const DEFAULTS = {
  q1: "same-problems",
  q2: "repetitive-tasks",
  q3: "defined-manual",
  q5: "no-not-priority",
};

interface FormState {
  name: string;
  email: string;
  website: string;
  challenge: string;
}

const outerPad = "px-6 md:px-[60px]";
const inner    = "max-w-[900px] mx-auto";

export default function AssessmentFormSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    website: "",
    challenge: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const q4Value =
      CHALLENGE_OPTIONS.find((o) => o.label === form.challenge)?.value ??
      "reduce-manual-tasks";

    try {
      const res = await fetch("/api/assessment/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          website: form.website || undefined,
          answers: {
            ...DEFAULTS,
            q4: q4Value,
          },
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-body-sm)",
    fontWeight: 300,
    color: "var(--color-ink-primary)",
    background: "#fff",
    border: "1px solid var(--color-border-default)",
    borderRadius: "6px",
    padding: "0.75rem 1rem",
    lineHeight: 1.5,
    outline: "none",
    transition: "border-color 0.15s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-meta)",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--color-ink-tertiary)",
    display: "block",
    marginBottom: "0.375rem",
  };

  return (
    <section
      id="assessment"
      className={`${outerPad} py-24`}
      style={{ backgroundColor: "var(--color-bg-navy)" }}
    >
      <div className={inner}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: copy ─────────────────────────────────────────── */}
          <div>
            <span className="label-eyebrow">Free AI Readiness Assessment</span>

            <h2
              className="h2-cta"
              style={{ marginBottom: "var(--space-heading-body)" }}
            >
              Find Out Exactly What&apos;s Costing You Time and Money
            </h2>

            <p className="body-on-navy" style={{ marginBottom: "var(--space-para-section)" }}>
              Our free AI Readiness Assessment gives you an initial diagnostic of where your processes are losing time and money. It takes 10 minutes to answer the questions. You get results within 24 hours.
            </p>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "var(--text-body-sm)",
                color: "var(--color-ink-inverted)",
                marginBottom: "0.75rem",
              }}
            >
              After you see the diagnostic, you&apos;ll know:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 var(--space-para-section)" }}>
              {[
                "Which of your tools are working vs. creating more work",
                "Where you're losing the most hours per week",
                "What to fix first — ranked by impact",
                "Whether working with us makes sense",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                  <span className="bullet-cyan" style={{ marginTop: "9px" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      fontWeight: 300,
                      color: "rgba(250,250,248,0.75)",
                      lineHeight: "var(--leading-body)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                fontWeight: 300,
                color: "rgba(250,250,248,0.5)",
                lineHeight: "var(--leading-body)",
                marginBottom: "var(--space-section-header-mb)",
                fontStyle: "italic",
              }}
            >
              Either way, you get clarity. That&apos;s the point.
            </p>

            {/* Proof stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {[
                "Average 3–5 critical gaps identified per assessment",
                "Average 12–18 hours per week recoverable through integration",
              ].map((stat) => (
                <div key={stat} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span className="bullet-cyan" style={{ marginTop: "9px" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      fontWeight: 500,
                      color: "var(--color-ink-inverted)",
                      lineHeight: "var(--leading-body)",
                    }}
                  >
                    {stat}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-meta)",
                fontWeight: 300,
                color: "rgba(250,250,248,0.4)",
                marginBottom: 0,
                letterSpacing: "0.02em",
              }}
            >
              POPIA compliant. No opt-in to marketing — just your results.
            </p>
          </div>

          {/* ── Right: form card ────────────────────────────────────── */}
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "2.5rem",
              boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "1rem 0" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "var(--color-cyan-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="var(--color-cyan)" strokeWidth="1.5" />
                    <path d="M8 12l3 3 5-5" stroke="var(--color-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "var(--text-h3-serif)",
                    color: "var(--color-ink-primary)",
                    marginBottom: "0.75rem",
                    borderBottom: "none",
                    paddingBottom: 0,
                  }}
                >
                  You&apos;re all set.
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body-sm)",
                    fontWeight: 300,
                    color: "var(--color-ink-secondary)",
                    lineHeight: "var(--leading-body)",
                    marginBottom: 0,
                  }}
                >
                  Results delivered within 24 hours. Check your email for your diagnostic and next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "var(--text-h3-serif)",
                    color: "var(--color-ink-primary)",
                    lineHeight: "var(--leading-subheading)",
                    marginBottom: "1.75rem",
                    borderBottom: "none",
                    paddingBottom: 0,
                  }}
                >
                  Get Your Free Assessment
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <label htmlFor="assessment-name" style={labelStyle}>Full Name *</label>
                    <input
                      id="assessment-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="assessment-email" style={labelStyle}>Work Email *</label>
                    <input
                      id="assessment-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="assessment-website" style={labelStyle}>Business Website</label>
                    <input
                      id="assessment-website"
                      name="website"
                      type="text"
                      placeholder="www.company.com"
                      value={form.website}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="assessment-challenge" style={labelStyle}>Your Biggest Challenge *</label>
                    <select
                      id="assessment-challenge"
                      name="challenge"
                      required
                      value={form.challenge}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23718096' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        paddingRight: "2.5rem",
                        cursor: "pointer",
                        color: form.challenge ? "var(--color-ink-primary)" : "var(--color-ink-tertiary)",
                      }}
                    >
                      <option value="" disabled>Select your biggest challenge</option>
                      {CHALLENGE_OPTIONS.map((opt) => (
                        <option key={opt.label} value={opt.label}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {error && (
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-meta)",
                      color: "#C53030",
                      marginTop: "1rem",
                      marginBottom: 0,
                    }}
                  >
                    {error}
                  </p>
                )}

                <div style={{ marginTop: "1.75rem" }}>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                    className="w-full justify-center"
                  >
                    {loading ? "Submitting…" : "Get My Free Assessment"}
                  </Button>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-meta)",
                    fontWeight: 300,
                    color: "var(--color-ink-tertiary)",
                    marginTop: "0.875rem",
                    marginBottom: 0,
                    textAlign: "center",
                    lineHeight: 1.5,
                  }}
                >
                  Results delivered within 24 hours. You&apos;ll get an email with your diagnostic and next steps.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Risk removal */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-sm)",
              fontWeight: 300,
              color: "rgba(250,250,248,0.5)",
              marginBottom: 0,
              fontStyle: "italic",
            }}
          >
            No obligation. If the assessment doesn&apos;t show a clear opportunity, we&apos;ll tell you that — and you&apos;ll still have a clear picture of where your business stands.
          </p>
        </div>
      </div>
    </section>
  );
}
