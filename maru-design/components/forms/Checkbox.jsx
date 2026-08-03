import React from "react";

/** Checkbox — square control that fills cyan when checked, with label. */
export function Checkbox({ label, checked, defaultChecked, onChange, id, style, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const inputId = id || (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  const toggle = (e) => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };

  return (
    <label
      htmlFor={inputId}
      style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer", ...style }}
    >
      <span
        style={{
          position: "relative",
          flexShrink: 0,
          width: "20px",
          height: "20px",
          marginTop: "2px",
          borderRadius: "4px",
          border: on ? "1px solid var(--color-cyan)" : "1px solid var(--color-border-strong)",
          background: on ? "var(--color-cyan)" : "var(--color-bg-primary)",
          transition: "background-color 150ms, border-color 150ms",
        }}
      >
        <input
          id={inputId}
          type="checkbox"
          checked={isControlled ? checked : undefined}
          defaultChecked={isControlled ? undefined : defaultChecked}
          onChange={toggle}
          style={{ position: "absolute", opacity: 0, width: "100%", height: "100%", margin: 0, cursor: "pointer" }}
          {...rest}
        />
        {on && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A3A5C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", inset: 0 }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      {label && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--color-ink-secondary)", lineHeight: 1.5 }}>
          {label}
        </span>
      )}
    </label>
  );
}
