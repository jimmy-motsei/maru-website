'use client';

/**
 * DisconnectDiagram — the "what Maru actually does" picture.
 *
 * Five systems a South African SME already runs, sitting isolated. On scroll
 * they converge through a single Maru hub into one live view. It states the
 * business model — we connect what you already have — without a sentence of
 * explanation, and it shows the outcome rather than the internal process.
 *
 * Used once per page, at section scale. Two layouts share one node list:
 * horizontal convergence on >=sm, vertical stack below.
 *
 * Motion is scroll-triggered once, then settles. Under prefers-reduced-motion
 * the connected state renders immediately with no animation.
 */

import { useEffect, useRef, useState } from 'react';

type Node = { id: string; label: string };

const NODES: Node[] = [
  { id: 'crm',      label: 'CRM' },
  { id: 'email',    label: 'EMAIL' },
  { id: 'sheets',   label: 'SPREADSHEETS' },
  { id: 'invoices', label: 'INVOICING' },
  { id: 'whatsapp', label: 'WHATSAPP' },
];

/** Desktop geometry — viewBox 0 0 1000 400 */
const D = {
  boxW: 176,
  boxH: 46,
  boxX: 24,
  /** vertical centre of each source box, evenly distributed */
  rowY: [56, 128, 200, 272, 344],
  hubX: 520,
  hubY: 200,
  hubR: 13,
  outX: 742,
  outY: 148,
  outW: 234,
  outH: 104,
};

/** Mobile geometry — viewBox 0 0 340 620 */
const M = {
  boxW: 132,
  boxH: 40,
  colX: 18,
  rowY: [30, 96, 162, 228, 294],
  hubX: 170,
  hubY: 430,
  hubR: 12,
  outX: 62,
  outY: 522,
  outW: 216,
  outH: 78,
};

export default function DisconnectDiagram({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setLive(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLive(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`dd ${live ? 'dd-live' : ''} ${className}`.trim()}>
      {/* ── Desktop / tablet — horizontal convergence ─────────────────── */}
      <svg
        className="dd-svg dd-desktop"
        viewBox="0 0 1000 400"
        role="img"
        aria-label="Five business systems — CRM, email, spreadsheets, invoicing and WhatsApp — sitting disconnected, then joined through Maru into a single live view."
      >
        {/* converging links — drawn behind everything */}
        {D.rowY.map((y, i) => (
          <path
            key={`d-link-${NODES[i].id}`}
            className="dd-link"
            style={{ ['--i' as string]: i }}
            d={`M ${D.boxX + D.boxW} ${y} C ${D.boxX + D.boxW + 130} ${y}, ${D.hubX - 130} ${D.hubY}, ${D.hubX - D.hubR} ${D.hubY}`}
          />
        ))}
        {/* the stubs that go nowhere — the "before" state */}
        {D.rowY.map((y, i) => (
          <path
            key={`d-stub-${NODES[i].id}`}
            className="dd-stub"
            d={`M ${D.boxX + D.boxW} ${y} L ${D.boxX + D.boxW + 34} ${y}`}
          />
        ))}

        {/* source systems */}
        {NODES.map((n, i) => (
          <g key={`d-node-${n.id}`} className="dd-node" style={{ ['--i' as string]: i }}>
            <rect
              className="dd-box"
              x={D.boxX}
              y={D.rowY[i] - D.boxH / 2}
              width={D.boxW}
              height={D.boxH}
              rx="7"
            />
            <text className="dd-label" x={D.boxX + 18} y={D.rowY[i] + 4}>
              {n.label}
            </text>
          </g>
        ))}

        {/* hub → output */}
        <path
          className="dd-link dd-link-out"
          style={{ ['--i' as string]: 5 }}
          d={`M ${D.hubX + D.hubR} ${D.hubY} L ${D.outX} ${D.hubY}`}
        />

        {/* the Maru hub */}
        <g className="dd-hub">
          <circle className="dd-hub-halo" cx={D.hubX} cy={D.hubY} r={D.hubR + 13} />
          <circle className="dd-hub-core" cx={D.hubX} cy={D.hubY} r={D.hubR} />
        </g>

        {/* the outcome */}
        <g className="dd-out">
          <rect
            className="dd-out-box"
            x={D.outX}
            y={D.outY}
            width={D.outW}
            height={D.outH}
            rx="9"
          />
          <text className="dd-out-title" x={D.outX + 22} y={D.outY + 42}>
            One live view
          </text>
          <text className="dd-out-sub" x={D.outX + 22} y={D.outY + 70}>
            Current. Not last month&apos;s export.
          </text>
        </g>
      </svg>

      {/* ── Mobile — vertical stack ───────────────────────────────────── */}
      <svg
        className="dd-svg dd-mobile"
        viewBox="0 0 340 620"
        role="img"
        aria-label="Five business systems — CRM, email, spreadsheets, invoicing and WhatsApp — sitting disconnected, then joined through Maru into a single live view."
      >
        {M.rowY.map((y, i) => (
          <path
            key={`m-link-${NODES[i].id}`}
            className="dd-link"
            style={{ ['--i' as string]: i }}
            d={`M ${M.colX + M.boxW / 2} ${y + M.boxH / 2} C ${M.colX + M.boxW / 2} ${y + 130}, ${M.hubX} ${M.hubY - 150}, ${M.hubX} ${M.hubY - M.hubR}`}
          />
        ))}
        {M.rowY.map((y, i) => (
          <path
            key={`m-stub-${NODES[i].id}`}
            className="dd-stub"
            d={`M ${M.colX + M.boxW / 2} ${y + M.boxH / 2} L ${M.colX + M.boxW / 2} ${y + M.boxH / 2 + 22}`}
          />
        ))}

        {NODES.map((n, i) => (
          <g key={`m-node-${n.id}`} className="dd-node" style={{ ['--i' as string]: i }}>
            <rect
              className="dd-box"
              x={M.colX}
              y={M.rowY[i]}
              width={M.boxW}
              height={M.boxH}
              rx="6"
            />
            <text className="dd-label dd-label-sm" x={M.colX + 13} y={M.rowY[i] + M.boxH / 2 + 3}>
              {n.label}
            </text>
          </g>
        ))}

        <path
          className="dd-link dd-link-out"
          style={{ ['--i' as string]: 5 }}
          d={`M ${M.hubX} ${M.hubY + M.hubR} L ${M.hubX} ${M.outY}`}
        />

        <g className="dd-hub">
          <circle className="dd-hub-halo" cx={M.hubX} cy={M.hubY} r={M.hubR + 12} />
          <circle className="dd-hub-core" cx={M.hubX} cy={M.hubY} r={M.hubR} />
        </g>

        <g className="dd-out">
          <rect
            className="dd-out-box"
            x={M.outX}
            y={M.outY}
            width={M.outW}
            height={M.outH}
            rx="8"
          />
          <text className="dd-out-title dd-out-title-sm" x={M.outX + M.outW / 2} y={M.outY + 34}>
            One live view
          </text>
          <text className="dd-out-sub dd-out-sub-sm" x={M.outX + M.outW / 2} y={M.outY + 58}>
            Current, not last month&apos;s export.
          </text>
        </g>
      </svg>
    </div>
  );
}
