import React from "react";

/**
 * Badge / pill — a small status or category marker. Cyan tint (default),
 * gold tint (credential, e.g. "POPIA-aligned"), or navy.
 */
export function Badge({ children, tone = "cyan", style, ...rest }) {
  const tones = {
    cyan: { bg: "var(--color-cyan-light)", fg: "var(--color-cyan-dark)" },
    gold: { bg: "var(--color-gold-light)", fg: "var(--color-gold-antique)" },
    navy: { bg: "rgba(26,58,92,0.08)", fg: "var(--color-navy)" },
    whatsapp: { bg: "rgba(37,211,102,0.12)", fg: "#128C4B" },
  };
  const t = tones[tone] || tones.cyan;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-body)",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: t.fg,
        backgroundColor: t.bg,
        padding: "5px 11px",
        borderRadius: "9999px",
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
