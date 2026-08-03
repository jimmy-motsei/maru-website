import React from "react";

/**
 * CardGold — light gold-tint panel with an antique-gold left-rail. The system's
 * credential register: reserve it for proof, results, and trust statements
 * (case results, guarantees, POPIA notes). Gold is never an interactive accent.
 */
export function CardGold({ label, title, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--color-gold-light)",
        border: "1px solid var(--color-gold-antique-border)",
        borderLeft: "4px solid var(--color-gold-antique)",
        borderRadius: "0 8px 8px 0",
        padding: "2rem 2.25rem",
        boxShadow: hover ? "0 8px 24px rgba(0,0,0,0.10)" : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hover ? "translateY(-2px) scale(1.015)" : "none",
        transition: "transform 300ms ease-out, box-shadow 300ms ease-out",
        ...style,
      }}
      {...rest}
    >
      {label && (
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-label)",
            fontWeight: 500,
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color: "var(--color-gold-antique)",
            display: "block",
            marginBottom: "0.5rem",
          }}
        >
          {label}
        </span>
      )}
      {title && (
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-h3-serif)",
            fontWeight: 500,
            color: "var(--color-gold-antique)",
            lineHeight: "var(--leading-subheading)",
            letterSpacing: "var(--tracking-tight)",
            margin: "0 0 1rem",
          }}
        >
          {title}
        </h3>
      )}
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body-sm)",
          fontWeight: 300,
          color: "var(--color-ink-secondary)",
          lineHeight: "var(--leading-body)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
