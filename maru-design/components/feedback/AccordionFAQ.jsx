import React from "react";

/**
 * AccordionFAQ — hairline-divided list of questions. The question sits in cyan
 * Outfit; a + icon rotates to × on open and the answer expands smoothly.
 */
export function AccordionFAQ({ items = [], style, ...rest }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", ...style }} {...rest}>
      {items.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderTop: "1px solid var(--color-border-default)" }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1.5rem",
                padding: "1.5rem 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-h3-serif)",
                  fontWeight: 600,
                  color: "var(--color-cyan)",
                  lineHeight: "var(--leading-subheading)",
                }}
              >
                {faq.q}
              </span>
              <span
                style={{
                  flexShrink: 0,
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-cyan)",
                  transition: "transform 0.3s ease",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    margin: 0,
                    paddingBottom: "1.5rem",
                    maxWidth: "640px",
                    fontSize: "var(--text-body-sm)",
                    fontWeight: 300,
                    color: "var(--color-ink-secondary)",
                    lineHeight: "var(--leading-body)",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div style={{ borderTop: "1px solid var(--color-border-default)" }} />
    </div>
  );
}
