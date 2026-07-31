/**
 * MaruM — the Maru brand mark as a dimensional hero object.
 * Uses the real icon (public/images/brand/maru-mark-reversed.png) with a
 * layered depth treatment: dark extrusion echo behind, glowing mark in
 * front, slow mystical drift. Decorative only.
 */

const MARK = "/images/brand/maru-mark-reversed.png";

export default function MaruM({ className = "" }: { className?: string }) {
  return (
    <div className={`maru-m-float relative ${className}`.trim()}>
      {/* extrusion echo — offset, darkened, softened */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={MARK}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain"
        style={{
          transform: "translate(34px, -28px)",
          filter: "blur(7px) brightness(0.35)",
          opacity: 0.55,
        }}
      />
      {/* the mark — teal glow rim */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={MARK}
        alt=""
        aria-hidden="true"
        className="relative h-full w-full object-contain"
        style={{
          filter:
            "drop-shadow(0 0 42px rgba(61,184,198,0.35)) drop-shadow(0 24px 64px rgba(6,14,21,0.5))",
        }}
      />
    </div>
  );
}
