/**
 * MaruM — dimensional "M" brand object for dark hero sections.
 * An extruded, floating M: teal-to-navy front face, gold rim light,
 * layered extrusion shadow, slow drift + glow. Decorative only.
 */

const FRONT =
  "40,420 40,60 130,60 240,230 350,60 440,60 440,420 355,420 355,205 262,345 218,345 125,205 125,420";

export default function MaruM({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 520"
      className={`maru-m-float ${className}`.trim()}
    >
      <defs>
        <linearGradient id="maruMFace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(61,184,198,0.20)" />
          <stop offset="55%" stopColor="rgba(26,58,92,0.35)" />
          <stop offset="100%" stopColor="rgba(13,27,42,0.45)" />
        </linearGradient>
        <linearGradient id="maruMRim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(214,183,106,0.55)" />
          <stop offset="100%" stopColor="rgba(205,170,83,0.12)" />
        </linearGradient>
        <filter id="maruMGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* deep extrusion layer */}
      <polygon
        points={FRONT}
        transform="translate(52, -44)"
        fill="rgba(6,14,21,0.35)"
      />
      {/* mid extrusion layer */}
      <polygon
        points={FRONT}
        transform="translate(26, -22)"
        fill="rgba(61,184,198,0.07)"
        stroke="rgba(250,250,248,0.05)"
        strokeWidth="1"
      />
      {/* front face — gold rim light, glow */}
      <g filter="url(#maruMGlow)">
        <polygon
          points={FRONT}
          fill="url(#maruMFace)"
          stroke="url(#maruMRim)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
