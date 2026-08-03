import React from "react";

/**
 * CardNavy — dark navy panel with a cyan left-rail and cyan title. Use for
 * "what you get" / current-state statements on light pages. Lifts on hover.
 */
export function CardNavy({ label, title, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--color-bg-navy)",
        border: "1px solid rgba(61,184,198,0.15)",
        borderLeft: "4px solid var(--color-cyan)",
        borderRadius: "0 12px 12px 0",
        padding: "2rem 2.25rem",
        boxShadow: hover
          ? "0 8px 28px rgba(0,0,0,0.40), 0 0 16px rgba(61,184,198,0.10)"
          : "0 4px 16px rgba(0,0,0,0.30)",
        borderColor: hover ? "rgba(61,184,198,0.35)" : "rgba(61,184,198,0.15)",
        transform: hover ? "translateY(-2px) scale(1.015)" : "none",
        transition: "transform 300ms ease-out, box-shadow 300ms ease-out, border-color 300ms ease-out",
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
            color: "var(--color-cyan)",
            display: "block",
            marginBottom: "0.75rem",
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
            fontWeight: 400,
            color: "var(--color-cyan)",
            lineHeight: "var(--leading-heading)",
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
          fontSize: "var(--text-body)",
          fontWeight: 300,
          color: "rgba(250,250,248,0.75)",
          lineHeight: "var(--leading-body)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
