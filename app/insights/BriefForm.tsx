'use client'

import Button from "@/components/ui/Button";

export default function BriefForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "480px" }}
    >
      <label
        htmlFor="brief-email"
        style={{
          fontFamily:    "var(--font-body)",
          fontSize:      "var(--text-label)",
          fontWeight:    500,
          letterSpacing: "var(--tracking-eyebrow)",
          textTransform: "uppercase",
          color:         "var(--color-ink-tertiary)",
        }}
      >
        Email address
      </label>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <input
          id="brief-email"
          type="email"
          placeholder="you@yourbusiness.co.za"
          required
          style={{
            flex:            1,
            minWidth:        "200px",
            fontFamily:      "var(--font-body)",
            fontSize:        "var(--text-body)",
            fontWeight:      300,
            color:           "var(--color-ink-primary)",
            backgroundColor: "var(--color-bg-primary)",
            border:          "1px solid var(--color-border-default)",
            borderRadius:    "8px",
            padding:         "0.625rem 1rem",
            outline:         "none",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-cyan)")}
          onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--color-border-default)")}
        />
        <Button type="submit" variant="primary">
          Subscribe
        </Button>
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize:   "var(--text-meta)",
          fontWeight: 300,
          color:      "var(--color-ink-tertiary)",
          margin:     0,
        }}
      >
        Handled in compliance with POPIA. Unsubscribe anytime.
      </p>
    </form>
  );
}
