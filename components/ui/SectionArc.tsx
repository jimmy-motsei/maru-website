"use client";

interface SectionArcProps {
  variant?: "dark" | "light";
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm:  { width: 280, height: 280, offset: 70  },
  md:  { width: 420, height: 420, offset: 110 },
  lg:  { width: 560, height: 560, offset: 140 },
};

const colors = {
  dark:  "rgba(61, 184, 198, 0.13)",
  light: "rgba(26, 58, 92, 0.08)",
};

export function SectionArc({
  variant = "dark",
  position = "top-right",
  size = "md",
}: SectionArcProps) {
  const { width, height, offset } = sizes[size];
  const color = colors[variant];

  const positionStyles: React.CSSProperties = (() => {
    switch (position) {
      case "top-right":    return { top: -offset, right: -offset };
      case "top-left":     return { top: -offset, left: -offset };
      case "bottom-right": return { bottom: -offset, right: -offset };
      case "bottom-left":  return { bottom: -offset, left: -offset };
    }
  })();

  return (
    <div
      aria-hidden="true"
      style={{
        position:      "absolute",
        width:         `${width}px`,
        height:        `${height}px`,
        borderRadius:  "50%",
        border:        `1px solid ${color}`,
        pointerEvents: "none",
        zIndex:        0,
        ...positionStyles,
      }}
    />
  );
}
