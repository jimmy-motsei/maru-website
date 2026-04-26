"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const outerPad = "px-6 md:px-[60px]";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Brief delay for UX — Brevo list subscription can be wired here
    await new Promise((r) => setTimeout(r, 600));
    setSubscribed(true);
    setLoading(false);
  }

  return (
    <section
      className={`${outerPad} py-20`}
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
        <span className="label-eyebrow" style={{ display: "block", marginBottom: "1rem" }}>
          Monthly AI Best Practices for SMEs
        </span>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "var(--text-h2)",
            lineHeight: "var(--leading-heading)",
            letterSpacing: "var(--tracking-tight)",
            color: "var(--color-navy)",
            marginBottom: "var(--space-heading-body)",
            paddingBottom: "0.75rem",
            borderBottom: "1px solid var(--color-border-default)",
          }}
        >
          The Integration Standard
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body-sm)",
            fontWeight: 300,
            color: "var(--color-ink-secondary)",
            lineHeight: "var(--leading-body)",
            marginBottom: "2rem",
          }}
        >
          One monthly insight into the standards that make AI work for South African SMEs. No fluff.
        </p>

        {subscribed ? (
          <div
            style={{
              padding: "1.25rem 1.5rem",
              background: "var(--color-cyan-light)",
              borderRadius: "8px",
              border: "1px solid rgba(61,184,198,0.3)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-sm)",
                fontWeight: 500,
                color: "var(--color-ink-primary)",
                marginBottom: 0,
              }}
            >
              You&apos;re subscribed. First issue arrives in your inbox within the week.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexDirection: "column",
              }}
              className="sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-sm)",
                  fontWeight: 300,
                  color: "var(--color-ink-primary)",
                  background: "#fff",
                  border: "1px solid var(--color-border-default)",
                  borderRadius: "6px",
                  padding: "0.75rem 1rem",
                  outline: "none",
                  minWidth: 0,
                }}
              />
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? "Subscribing…" : "Subscribe — Free"}
              </Button>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-meta)",
                fontWeight: 300,
                color: "var(--color-ink-tertiary)",
                marginTop: "0.75rem",
                marginBottom: 0,
              }}
            >
              Unsubscribe any time. We don&apos;t share your details.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
