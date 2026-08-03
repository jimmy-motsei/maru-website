import React from "react";

/**
 * Maru Button — the system's primary action. Cyan fill with navy ink (primary),
 * cyan outline (secondary), or inline text link with a trailing arrow (tertiary).
 * Labels are uppercase, 0.15em tracked. Minimum 44px tap target.
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [focus, setFocus] = React.useState(false);

  const cyan = "#3DB8C6";
  const cyanDark = "#2DA8B6";
  const navy = "#1A3A5C";

  const sizes = {
    sm: { padding: "8px 18px", fontSize: "11px", minHeight: "38px" },
    md: { padding: "12px 26px", fontSize: "12px", minHeight: "44px" },
    lg: { padding: "16px 32px", fontSize: "13px", minHeight: "52px" },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    borderRadius: "8px",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    width: fullWidth ? "100%" : "auto",
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? "none" : "auto",
    transition:
      "transform 200ms ease-out, background-color 200ms ease-out, color 200ms ease-out, box-shadow 200ms ease-out, border-color 200ms ease-out",
    transform: active ? "scale(0.98)" : hover ? "scale(1.02)" : "scale(1)",
    ...sizes[size],
  };

  const focusRing = focus
    ? "0 0 0 3px rgba(61,184,198,0.45), 0 4px 16px rgba(61,184,198,0.25)"
    : "none";

  const variants = {
    primary: {
      backgroundColor: active || hover ? cyanDark : cyan,
      color: navy,
      boxShadow: focus
        ? focusRing
        : hover
        ? "0 4px 16px rgba(61,184,198,0.35)"
        : "none",
    },
    secondary: {
      backgroundColor: hover ? cyan : "transparent",
      color: hover ? navy : cyan,
      borderColor: cyan,
      boxShadow: focus ? focusRing : hover ? "0 4px 16px rgba(61,184,198,0.2)" : "none",
    },
    tertiary: {
      backgroundColor: "transparent",
      color: hover ? cyanDark : cyan,
      borderRadius: 0,
      padding: "4px 0",
      minHeight: "auto",
      textDecoration: hover ? "underline" : "none",
      textUnderlineOffset: "4px",
      letterSpacing: "0.04em",
      textTransform: "none",
      fontWeight: 600,
      boxShadow: "none",
    },
  };

  const composed = { ...base, ...variants[variant], ...style };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
  };

  const label =
    variant === "tertiary" ? (
      <>
        {children}
        <span aria-hidden="true">→</span>
      </>
    ) : (
      children
    );

  if (href && !disabled) {
    return (
      <a href={href} style={composed} onClick={onClick} {...handlers} {...rest}>
        {label}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      style={composed}
      onClick={onClick}
      {...handlers}
      {...rest}
    >
      {label}
    </button>
  );
}
