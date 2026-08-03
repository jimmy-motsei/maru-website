import React from "react";

/**
 * ServiceCard — navy service tile with a title, description, and a cyan circular
 * arrow affordance that scales on hover. Links through to a service detail page.
 */
export function ServiceCard({ title, description, href = "#", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "2rem",
        textDecoration: "none",
        background: hover ? "#16324f" : "var(--color-bg-navy)",
        boxShadow: hover
          ? "0 8px 28px rgba(0,0,0,0.45)"
          : "0 4px 16px rgba(0,0,0,0.30)",
        transform: hover ? "translateY(-2px)" : "none",
        transition: "transform 300ms ease-out, box-shadow 300ms ease-out, background-color 300ms ease-out",
        ...style,
      }}
      {...rest}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: "20px",
          color: "var(--color-ink-inverted)",
          margin: "0 0 1.25rem",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "16px",
          color: "rgba(250,250,248,0.75)",
          lineHeight: 1.65,
          margin: "0 0 2rem",
          flex: 1,
        }}
      >
        {description}
      </p>
      <span
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "9999px",
          background: "var(--color-cyan)",
          color: "var(--color-navy)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: hover ? "scale(1.15)" : "scale(1)",
          transition: "transform 200ms ease-out",
        }}
        aria-hidden="true"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </a>
  );
}
