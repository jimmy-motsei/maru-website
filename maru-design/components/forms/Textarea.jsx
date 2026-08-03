import React from "react";

/** Textarea — labelled multi-line field, same chrome as Input. */
export function Textarea({ label, hint, error, id, rows = 4, style, ...rest }) {
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
          }}
        >
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        rows={rows}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%",
          padding: "12px 14px",
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          color: "var(--color-ink-primary)",
          background: "var(--color-bg-primary)",
          border: `1px solid ${borderColor}`,
          borderRadius: "8px",
          outline: "none",
          resize: "vertical",
          boxShadow: focus ? "var(--shadow-focus)" : "none",
          transition: "border-color 150ms, box-shadow 150ms",
          boxSizing: "border-box",
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: error ? "#C0392B" : "var(--color-ink-tertiary)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
