'use client';

/**
 * StatFigure — one cell of the metrics band.
 *
 * The band was four static words on white, so it read as wallpaper. Each cell
 * now enters on scroll: icon, then figure, then a gold rule drawing outward,
 * then the label. Numeric figures count up; word figures ("Free", "Fixed")
 * get the same entrance without the count, so the row stays one system.
 *
 * The whole row is driven by a single observer on the parent grid — see
 * StatBand — so the four cells stagger together rather than firing
 * independently as each scrolls past.
 */

import { useEffect, useRef, useState } from 'react';
import Glyph, { type GlyphName } from './Glyph';

export type Stat = {
  icon: GlyphName;
  /** Numeric figures count up from 0; omit for a word figure. */
  count?: number;
  /** Rendered after the count, or used alone as a word figure. */
  suffix?: string;
  label: string;
};

const DURATION = 1100;

/** easeOutExpo — fast out of the gate, long settle. Reads as "landing on" a number. */
const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function StatFigure({
  stat,
  index,
  live,
}: {
  stat: Stat;
  index: number;
  live: boolean;
}) {
  const [shown, setShown] = useState(stat.count ?? 0);
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!live || stat.count === undefined) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(stat.count);
      return;
    }

    const target = stat.count;
    const delay = 220 + index * 110;
    let start: number | null = null;

    /* rAF is throttled or suspended in a background tab, which would otherwise
       strand the figure at whatever frame it reached — a metrics band reading
       "1 hr" is worse than one that never animated. Any interruption lands the
       real number immediately. */
    const settle = () => setShown(target);

    const timer = window.setTimeout(() => {
      if (document.hidden) {
        settle();
        return;
      }
      const step = (now: number) => {
        if (start === null) start = now;
        const p = Math.min((now - start) / DURATION, 1);
        setShown(Math.round(ease(p) * target));
        if (p < 1) raf.current = requestAnimationFrame(step);
        else settle();
      };
      setShown(0);
      raf.current = requestAnimationFrame(step);
    }, delay);

    document.addEventListener('visibilitychange', settle);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', settle);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [live, stat.count, index]);

  return (
    <div className="stat-cell" style={{ ['--i' as string]: index }}>
      <span className="stat-icon">
        <Glyph name={stat.icon} size={22} />
      </span>

      <p className="stat-figure">
        {stat.count !== undefined && (
          <span className="stat-num">{shown}</span>
        )}
        {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
      </p>

      <span className="stat-rule" aria-hidden="true" />

      <p className="stat-label">{stat.label}</p>
    </div>
  );
}
