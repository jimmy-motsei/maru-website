"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export function MaruBriefForm() {
  const [email, setEmail]         = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const inputStyle: React.CSSProperties = {
    flex:          1,
    height:        "48px",
    padding:       "0 1rem",
    borderRadius:  "6px",
    border:        "1px solid var(--color-border-default)",
    fontFamily:    "var(--font-body)",
    fontSize:      "var(--text-body-sm)",
    fontWeight:    300,
    color:         "var(--color-ink-primary)",
    background:    "#fff",
    outline:       "none",
    transition:    "border-color 0.15s ease",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      setSubmitted(true);
    } catch {
      // webhook not yet wired
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          border:       "0.5px solid var(--color-cyan)",
          borderRadius: "8px",
          padding:      "1.5rem",
          background:   "rgba(61,184,198,0.05)",
          textAlign:    "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize:   "var(--text-body-sm)",
            fontWeight: 500,
            color:      "var(--color-ink-primary)",
            margin:     0,
          }}
        >
          You&apos;re in. First issue lands in your inbox within a fortnight.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={inputStyle}
      />
      <Button type="submit" variant="primary" disabled={loading}>
        {loading ? "Subscribing…" : "Subscribe"}
      </Button>
    </form>
  );
}
