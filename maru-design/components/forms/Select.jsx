import React from "react";

/** Select — labelled dropdown with a custom chevron and cyan focus ring. */
export function Select({ label, hint, error, id, children, options, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const borderColor = error ? "#C0392B" : focus ? "var(--color-cyan)" : "var(--color-border-strong)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, color: "var(--color-navy)" }}>
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <select
          id={inputId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: "100%",
            minHeight: "44px",
            padding: "11px 40px 11px 14px",
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--color-ink-primary)",
            background: "var(--color-bg-primary)",
            border: `1px solid ${borderColor}`,
            borderRadius: "8px",
            outline: "none",
            appearance: "none",
            boxShadow: focus ? "var(--shadow-focus)" : "none",
            transition: "border-color 150ms, box-shadow 150ms",
            boxSizing: "border-box",
            cursor: "pointer",
          }}
          {...rest}
        >
          {options
            ? options.map((o) =>
                typeof o === "string" ? (
                  <option key={o} value={o}>{o}</option>
                ) : (
                  <option key={o.value} value={o.value}>{o.label}</option>
                )
              )
            : children}
        </select>
        <span style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--color-ink-tertiary)" }} aria-hidden="true">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {(hint || error) && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: error ? "#C0392B" : "var(--color-ink-tertiary)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
