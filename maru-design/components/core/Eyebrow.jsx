import React from "react";

/**
 * Eyebrow — the small uppercase kicker above a headline. Cyan by default
 * (interactive register) or gold (credential register). 11px / 500 / 0.2em.
 */
export function Eyebrow({ children, tone = "cyan", style, ...rest }) {
  const color = tone === "gold" ? "var(--color-gold-antique)" : "var(--color-cyan)";
  return (
    <span
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-label)",
        fontWeight: 500,
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color,
        display: "block",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
