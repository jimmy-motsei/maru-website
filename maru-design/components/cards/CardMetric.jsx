import React from "react";

/**
 * CardMetric — a single stat. Numerals are a brand asset, so the value renders
 * large in the Outfit display face over a small uppercase label. The building
 * block of the Free / 24-Hour / 30 Days / Fixed stat row.
 */
export function CardMetric({ value, label, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: "var(--color-bg-primary)",
        border: hover ? "1px solid var(--color-cyan)" : "1px solid var(--color-border-default)",
        borderRadius: "8px",
        padding: "1.5rem",
        boxShadow: hover ? "0 8px 24px rgba(0,0,0,0.10)" : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hover ? "translateY(-2px)" : "none",
        transition: "transform 300ms ease-out, box-shadow 300ms ease-out, border-color 300ms ease-out",
        ...style,
      }}
      {...rest}
    >
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "38px",
          fontWeight: 600,
          color: "var(--color-navy)",
          lineHeight: 1,
          margin: "0 0 8px",
          letterSpacing: "-0.01em",
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-ink-tertiary)",
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        {label}
      </p>
    </div>
  );
}
