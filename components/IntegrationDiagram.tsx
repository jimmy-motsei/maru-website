export default function IntegrationDiagram() {
  return (
    <svg
      width="100%"
      viewBox="0 0 680 420"
      role="img"
      aria-labelledby="diag-title diag-desc"
      style={{ display: 'block', maxWidth: '100%' }}
    >
      <title id="diag-title">Maru integration diagram</title>
      <desc id="diag-desc">
        Before and after: fragmented business tools on the left connected through
        Maru's integration layer in the centre to a unified automated system on the right.
      </desc>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* Column labels */}
      <text x="100" y="28" textAnchor="middle" fontSize="12" fill="var(--color-ink-tertiary)" fontFamily="var(--font-body)">Before</text>
      <text x="340" y="28" textAnchor="middle" fontSize="12" fill="var(--color-ink-tertiary)" fontFamily="var(--font-body)">Maru</text>
      <text x="580" y="28" textAnchor="middle" fontSize="12" fill="var(--color-ink-tertiary)" fontFamily="var(--font-body)">After</text>

      {/* Divider lines */}
      <line x1="218" y1="16" x2="218" y2="404" stroke="var(--color-border-subtle)" strokeWidth="0.5" strokeDasharray="4 4"/>
      <line x1="462" y1="16" x2="462" y2="404" stroke="var(--color-border-subtle)" strokeWidth="0.5" strokeDasharray="4 4"/>

      {/* LEFT: Disconnected tools */}

      <rect x="28" y="52" width="144" height="44" rx="6" fill="var(--color-bg-tertiary)" stroke="var(--color-border-default)" strokeWidth="0.5"/>
      <text x="100" y="70" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="var(--color-ink-primary)" fontFamily="var(--font-body)">CRM</text>
      <text x="100" y="86" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="var(--color-ink-tertiary)" fontFamily="var(--font-body)">Contact records</text>

      <rect x="28" y="136" width="144" height="44" rx="6" fill="var(--color-bg-tertiary)" stroke="var(--color-border-default)" strokeWidth="0.5"/>
      <text x="100" y="154" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="var(--color-ink-primary)" fontFamily="var(--font-body)">Email platform</text>
      <text x="100" y="170" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="var(--color-ink-tertiary)" fontFamily="var(--font-body)">Campaigns, follow-ups</text>

      <rect x="28" y="220" width="144" height="44" rx="6" fill="var(--color-bg-tertiary)" stroke="var(--color-border-default)" strokeWidth="0.5"/>
      <text x="100" y="238" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="var(--color-ink-primary)" fontFamily="var(--font-body)">Spreadsheet</text>
      <text x="100" y="254" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="var(--color-ink-tertiary)" fontFamily="var(--font-body)">Manual reports</text>

      <rect x="28" y="304" width="144" height="44" rx="6" fill="var(--color-bg-tertiary)" stroke="var(--color-border-default)" strokeWidth="0.5"/>
      <text x="100" y="322" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="var(--color-ink-primary)" fontFamily="var(--font-body)">Accounting</text>
      <text x="100" y="338" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="var(--color-ink-tertiary)" fontFamily="var(--font-body)">Invoices, billing</text>

      {/* Broken connectors */}
      <line x1="100" y1="96" x2="100" y2="136" stroke="#E24B4A" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
      <line x1="100" y1="180" x2="100" y2="220" stroke="#E24B4A" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
      <line x1="100" y1="264" x2="100" y2="304" stroke="#E24B4A" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
      <text x="112" y="120" fontSize="12" fill="#E24B4A" opacity="0.6" fontFamily="var(--font-body)">✕</text>
      <text x="112" y="204" fontSize="12" fill="#E24B4A" opacity="0.6" fontFamily="var(--font-body)">✕</text>
      <text x="112" y="288" fontSize="12" fill="#E24B4A" opacity="0.6" fontFamily="var(--font-body)">✕</text>

      {/* CENTRE: Maru integration layer */}
      <rect x="256" y="158" width="168" height="80" rx="10" fill="var(--color-cyan-light)" stroke="var(--color-cyan)" strokeWidth="1"/>
      <text x="340" y="186" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="var(--color-ink-primary)" fontFamily="var(--font-display)">Maru</text>
      <text x="340" y="207" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="var(--color-ink-secondary)" fontFamily="var(--font-body)">Integration layer</text>
      <text x="340" y="224" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="var(--color-ink-secondary)" fontFamily="var(--font-body)">Vendor-agnostic</text>

      {/* Arrows: left to centre */}
      <line x1="172" y1="74" x2="252" y2="185" stroke="var(--color-border-strong)" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="172" y1="158" x2="254" y2="190" stroke="var(--color-border-strong)" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="172" y1="242" x2="254" y2="208" stroke="var(--color-border-strong)" strokeWidth="1" markerEnd="url(#arrow)"/>
      <line x1="172" y1="326" x2="252" y2="222" stroke="var(--color-border-strong)" strokeWidth="1" markerEnd="url(#arrow)"/>

      {/* RIGHT: Connected outputs */}

      <rect x="508" y="52" width="148" height="44" rx="6" fill="var(--color-cyan-light)" stroke="var(--color-cyan-dark)" strokeWidth="0.5"/>
      <text x="582" y="70" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="var(--color-ink-primary)" fontFamily="var(--font-body)">Auto follow-ups</text>
      <text x="582" y="86" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="var(--color-ink-secondary)" fontFamily="var(--font-body)">Zero manual chasing</text>

      <rect x="508" y="136" width="148" height="44" rx="6" fill="var(--color-cyan-light)" stroke="var(--color-cyan-dark)" strokeWidth="0.5"/>
      <text x="582" y="154" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="var(--color-ink-primary)" fontFamily="var(--font-body)">Live reporting</text>
      <text x="582" y="170" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="var(--color-ink-secondary)" fontFamily="var(--font-body)">One view, all data</text>

      <rect x="508" y="220" width="148" height="44" rx="6" fill="var(--color-cyan-light)" stroke="var(--color-cyan-dark)" strokeWidth="0.5"/>
      <text x="582" y="238" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="var(--color-ink-primary)" fontFamily="var(--font-body)">POPIA compliant</text>
      <text x="582" y="254" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="var(--color-ink-secondary)" fontFamily="var(--font-body)">Built into every flow</text>

      <rect x="508" y="304" width="148" height="44" rx="6" fill="var(--color-cyan-light)" stroke="var(--color-cyan-dark)" strokeWidth="0.5"/>
      <text x="582" y="322" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="var(--color-ink-primary)" fontFamily="var(--font-body)">Auto invoicing</text>
      <text x="582" y="338" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="var(--color-ink-secondary)" fontFamily="var(--font-body)">No Friday admin</text>

      {/* Arrows: centre to right */}
      <line x1="424" y1="185" x2="506" y2="74" stroke="var(--color-cyan)" strokeWidth="1.2" markerEnd="url(#arrow)" opacity="0.7"/>
      <line x1="424" y1="195" x2="506" y2="158" stroke="var(--color-cyan)" strokeWidth="1.2" markerEnd="url(#arrow)" opacity="0.7"/>
      <line x1="424" y1="208" x2="506" y2="242" stroke="var(--color-cyan)" strokeWidth="1.2" markerEnd="url(#arrow)" opacity="0.7"/>
      <line x1="424" y1="222" x2="506" y2="326" stroke="var(--color-cyan)" strokeWidth="1.2" markerEnd="url(#arrow)" opacity="0.7"/>

      {/* Caption */}
      <text x="340" y="395" textAnchor="middle" fontSize="12" fill="var(--color-ink-tertiary)" fontFamily="var(--font-body)">
        Your tools stay. We configure the connections between them.
      </text>
    </svg>
  )
}
