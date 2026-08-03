import React from "react";

/**
 * SplitHeadline — Maru's signature display lockup: a light-weight (100) leading
 * phrase and a strong-weight (500) emphasis phrase, optionally on two lines.
 * Renders the Outfit display face at the size you pass via `style.fontSize`.
 */
export function SplitHeadline({
  leadingText,
  emphasisText,
  as = "h2",
  breakBeforeEmphasis = true,
  emphasisTone = "navy",
  style,
  ...rest
}) {
  const Tag = as;
  const emphasisColor =
    emphasisTone === "cyan"
      ? "var(--color-cyan)"
      : emphasisTone === "gold"
      ? "var(--color-gold-antique)"
      : emphasisTone === "inverted"
      ? "var(--color-ink-inverted)"
      : "var(--color-navy)";

  return (
    <Tag
      style={{
        fontFamily: "var(--font-display)",
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
        fontWeight: 100,
        color: "var(--color-navy)",
        margin: 0,
        ...style,
      }}
      {...rest}
    >
      {leadingText}
      {breakBeforeEmphasis ? <br /> : " "}
      <span style={{ fontWeight: 500, color: emphasisColor }}>{emphasisText}</span>
    </Tag>
  );
}
