"use client";

interface BlueprintBackgroundProps {
  variant?: "dark" | "light";
  opacity?: number;
  className?: string;
}

export function BlueprintBackground({
  variant = "dark",
  opacity = 0.05,
  className = "",
}: BlueprintBackgroundProps) {
  const strokeColor =
    variant === "dark"
      ? `rgba(61, 184, 198, ${opacity})`
      : `rgba(26, 58, 92, ${opacity})`;

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute right-0 top-0 h-full w-2/3"
        viewBox="0 0 800 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)",
        }}
      >
        {/* Grid lines — horizontal */}
        {Array.from({ length: 20 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 45} x2="800" y2={i * 45} stroke={strokeColor} strokeWidth="0.5" />
        ))}
        {/* Grid lines — vertical */}
        {Array.from({ length: 18 }, (_, i) => (
          <line key={`v${i}`} x1={i * 45} y1="0" x2={i * 45} y2="900" stroke={strokeColor} strokeWidth="0.5" />
        ))}

        {/* Large arc — echoes SectionArc motif */}
        <circle cx="650" cy="250" r="200" stroke={strokeColor} strokeWidth="1" fill="none" />
        <circle cx="650" cy="250" r="180" stroke={strokeColor} strokeWidth="0.5" fill="none" strokeDasharray="8 6" />

        {/* Secondary arc */}
        <circle cx="350" cy="650" r="150" stroke={strokeColor} strokeWidth="0.5" fill="none" />

        {/* Dimension lines */}
        <line x1="400" y1="100" x2="700" y2="100" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="400" y1="95" x2="400" y2="105" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="700" y1="95" x2="700" y2="105" stroke={strokeColor} strokeWidth="0.5" />

        {/* Cross marks */}
        <line x1="495" y1="440" x2="505" y2="450" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="505" y1="440" x2="495" y2="450" stroke={strokeColor} strokeWidth="0.5" />

        {/* Spiral staircase reference — concentric arcs */}
        <path d="M 200 800 A 120 120 0 0 1 320 680" stroke={strokeColor} strokeWidth="0.5" fill="none" />
        <path d="M 210 790 A 100 100 0 0 1 310 690" stroke={strokeColor} strokeWidth="0.5" fill="none" />
        <path d="M 220 780 A 80 80 0 0 1 300 700" stroke={strokeColor} strokeWidth="0.5" fill="none" />

        {/* Angular structural lines */}
        <line x1="100" y1="300" x2="300" y2="500" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="600" y1="500" x2="750" y2="700" stroke={strokeColor} strokeWidth="0.5" />
      </svg>
    </div>
  );
}
