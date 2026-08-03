import React from "react";

/**
 * CardFeature — white feature tile with a cyan icon chip, title and body.
 * Flat (no radius), hairline border, lifts to a faint cyan wash on hover.
 * The default card for service / benefit grids on light sections.
 */
export function CardFeature({ icon, title, body, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1.75rem",
        background: hover ? "rgba(61,184,198,0.08)" : "var(--color-bg-primary)",
        border: hover ? "1px solid var(--color-cyan)" : "1px solid var(--color-border-default)",
        boxShadow: hover ? "0 8px 24px rgba(0,0,0,0.10)" : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hover ? "translateY(-2px)" : "none",
        transition: "transform 300ms ease-out, box-shadow 300ms ease-out, border-color 300ms ease-out, background-color 300ms ease-out",
        ...style,
      }}
      {...rest}
    >
      {icon && (
        <div
          style={{
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: hover ? "var(--color-cyan)" : "rgba(61,184,198,0.1)",
            color: hover ? "#FFFFFF" : "var(--color-cyan)",
            transition: "background-color 200ms, color 200ms",
          }}
        >
          {icon}
        </div>
      )}
      <h3
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "18px",
          color: "var(--color-navy)",
          lineHeight: 1.35,
          margin: 0,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "15px",
          color: "var(--color-ink-secondary)",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {body}
      </p>
    </div>
  );
}
