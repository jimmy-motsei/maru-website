import React from "react";

/**
 * Input — labelled text field with the brand cyan focus ring. Supports an
 * error state with helper text. Mobile-first 44px target.
 */
export function Input({ label, hint, error, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const borderColor = error ? "#C0392B" : focus ? "var(--color-cyan)" : "var(--color-border-strong)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--color-navy)",
            letterSpacing: "0.01em",
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%",
          minHeight: "44px",
          padding: "11px 14px",
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          fontWeight: 400,
          color: "var(--color-ink-primary)",
          background: "var(--color-bg-primary)",
          border: `1px solid ${borderColor}`,
          borderRadius: "8px",
          outline: "none",
          boxShadow: focus ? "var(--shadow-focus)" : "none",
          transition: "border-color 150ms, box-shadow 150ms",
          boxSizing: "border-box",
        }}
        {...rest}
      />
      {(hint || error) && (
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: error ? "#C0392B" : "var(--color-ink-tertiary)",
          }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
}
