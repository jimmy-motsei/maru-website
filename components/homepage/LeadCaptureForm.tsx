"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const CHALLENGES = [
  "Too much manual admin work",
  "Leads not converting to clients",
  "Process tools not talking to each other",
  "Can't measure what's working and what's not",
  "Staff adoption of new tools",
  "Not sure where to start",
];

export function LeadCaptureForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [biggestChallenge, setBiggestChallenge] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    setFormState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, companyWebsite, biggestChallenge }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setFormState("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again or email hello@maruonline.com");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="text-center py-8">
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
          style={{ background: "rgba(61,184,198,0.12)", border: "1px solid rgba(61,184,198,0.3)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="#04B3CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3
          className="font-sans font-semibold text-xl mb-2"
          style={{ color: "var(--color-ink-inverted)" }}
        >
          You&apos;re booked in.
        </h3>
        <p className="text-sm" style={{ color: "rgba(250,250,248,0.55)" }}>
          We&apos;ll be in touch within one business day to confirm your assessment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          className="block text-xs font-mono uppercase tracking-wider mb-1.5"
          style={{ color: "rgba(250,250,248,0.5)" }}
        >
          Full Name
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your name"
          required
          className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "var(--color-ink-inverted)",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgba(61,184,198,0.7)";
            e.currentTarget.style.boxShadow = "0 0 0 2px rgba(61,184,198,0.15)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      <div>
        <label
          className="block text-xs font-mono uppercase tracking-wider mb-1.5"
          style={{ color: "rgba(250,250,248,0.5)" }}
        >
          Work Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourbusiness.com"
          required
          className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "var(--color-ink-inverted)",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgba(61,184,198,0.7)";
            e.currentTarget.style.boxShadow = "0 0 0 2px rgba(61,184,198,0.15)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      <div>
        <label
          className="block text-xs font-mono uppercase tracking-wider mb-1.5"
          style={{ color: "rgba(250,250,248,0.5)" }}
        >
          Business Website{" "}
          <span className="font-sans normal-case" style={{ color: "rgba(250,250,248,0.3)" }}>
            (optional)
          </span>
        </label>
        <input
          type="text"
          value={companyWebsite}
          onChange={(e) => setCompanyWebsite(e.target.value)}
          placeholder="yourbusiness.com"
          className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "var(--color-ink-inverted)",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgba(61,184,198,0.7)";
            e.currentTarget.style.boxShadow = "0 0 0 2px rgba(61,184,198,0.15)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      <div>
        <label
          className="block text-xs font-mono uppercase tracking-wider mb-1.5"
          style={{ color: "rgba(250,250,248,0.5)" }}
        >
          Biggest Challenge
        </label>
        <select
          value={biggestChallenge}
          onChange={(e) => setBiggestChallenge(e.target.value)}
          className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: biggestChallenge ? "var(--color-ink-inverted)" : "rgba(250,250,248,0.4)",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgba(61,184,198,0.7)";
            e.currentTarget.style.boxShadow = "0 0 0 2px rgba(61,184,198,0.15)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <option value="" disabled style={{ background: "#1a1a1a" }}>Select your biggest challenge</option>
          {CHALLENGES.map((c) => (
            <option key={c} value={c} style={{ background: "#1a1a1a", color: "#fff" }}>{c}</option>
          ))}
        </select>
      </div>

      {formState === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full font-semibold text-sm px-8 py-4 rounded-lg transition-all mt-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        style={{
          background: "var(--color-cyan)",
          color: "var(--color-bg-navy)",
        }}
      >
        {formState === "submitting" ? "Booking your assessment…" : "Book My Free Assessment"}
      </button>

      <p className="text-xs text-center" style={{ color: "rgba(250,250,248,0.35)" }}>
        We&apos;ll send your assessment results by email. POPIA compliant. No obligation.
      </p>
    </form>
  );
}
