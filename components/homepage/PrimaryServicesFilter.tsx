'use client';

import { useState } from 'react';

const filters = [
  { label: 'Too much manual admin',           shows: ['svc1', 'svc2', 'svc3'] },
  { label: 'Leads not converting',            shows: ['svc1', 'svc4', 'svc5'] },
  { label: 'Tools not talking to each other', shows: ['svc1', 'svc2'] },
  { label: 'Can\'t measure what\'s working',  shows: ['svc1', 'svc3'] },
  { label: 'Team not adopting new tools',     shows: ['svc1', 'svc6'] },
  { label: 'Operating in a regulated sector', shows: ['svc1', 'svc5'] },
];

const services = [
  {
    id: 'svc1',
    tag: 'Free entry point',
    tagColor: 'cyan',
    number: '01',
    name: 'Free AI Readiness Assessment',
    body: 'Recommended first step. We find exactly where you\'re losing time and money before prescribing anything.',
  },
  {
    id: 'svc2',
    tag: 'Core',
    tagColor: 'cyan',
    number: '02',
    name: 'AI-Powered Workflow Integration',
    body: 'For businesses ready to connect tools and stop manual admin. Fixed price, vendor-agnostic.',
  },
  {
    id: 'svc3',
    tag: 'Ongoing',
    tagColor: 'cyan',
    number: '03',
    name: 'Results Measurement & Optimisation',
    body: 'Workflows running but no evidence of impact. We measure and optimise against your baseline.',
  },
  {
    id: 'svc4',
    tag: 'Foundation',
    tagColor: 'gold',
    number: '04',
    name: 'Site Infrastructure Analysis & Remediation',
    body: 'Legacy or broken sites that need clean infrastructure before AI workflows can run.',
  },
  {
    id: 'svc5',
    tag: 'Compliance',
    tagColor: 'gold',
    number: '05',
    name: 'POPIA-Compliant AI Integration',
    body: 'For legal, financial, and healthcare sectors. Compliance built in from day one.',
  },
  {
    id: 'svc6',
    tag: 'Support',
    tagColor: 'cyan',
    number: '06',
    name: 'Team Training & Capability Support',
    body: 'Onboarding for teams to ensure adoption. Your team runs the system — not IT.',
  },
];

export default function PrimaryServicesFilter() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const activeShows = activeFilter
    ? filters.find((f) => f.label === activeFilter)?.shows ?? null
    : null;

  return (
    <div>
      {/* Filter row */}
      <div style={{ marginBottom: '2rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-meta)',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--color-ink-secondary)',
            marginBottom: '0.75rem',
          }}
        >
          What&apos;s your biggest challenge right now?
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          {filters.map((f) => {
            const isActive = f.label === activeFilter;
            return (
              <button
                key={f.label}
                onClick={() => setActiveFilter(f.label === activeFilter ? null : f.label)}
                style={{
                  border: isActive
                    ? '1px solid var(--color-cyan)'
                    : '1px solid var(--color-border-strong)',
                  background: isActive ? 'rgba(61, 184, 198, 0.08)' : 'transparent',
                  color: isActive ? 'var(--color-cyan)' : 'var(--color-ink-secondary)',
                  borderRadius: '4px',
                  fontSize: '12px',
                  padding: '7px 14px',
                  cursor: 'pointer',
                  transition: 'border-color 0.15s, background 0.15s, color 0.15s',
                  lineHeight: 1.4,
                }}
              >
                {f.label}
              </button>
            );
          })}
          {activeFilter && (
            <button
              onClick={() => setActiveFilter(null)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-ink-tertiary)',
                fontSize: '12px',
                cursor: 'pointer',
                padding: '7px 4px',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Show all
            </button>
          )}
        </div>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        {services.map((svc) => {
          const isHighlighted = activeShows ? activeShows.includes(svc.id) : false;
          const isDimmed = activeShows ? !activeShows.includes(svc.id) : false;

          return (
            <div
              key={svc.id}
              style={{
                border: isHighlighted
                  ? '0.5px solid var(--color-cyan)'
                  : '0.5px solid var(--color-border-default)',
                borderRadius: '8px',
                padding: '1rem 1.25rem',
                background: 'var(--color-bg-primary)',
                opacity: isDimmed ? 0.15 : 1,
                pointerEvents: isDimmed ? 'none' : 'auto',
                transition: 'opacity 0.2s, border-color 0.2s',
              }}
            >
              {/* Tag badge */}
              <div style={{ marginBottom: '0.75rem' }}>
                <span
                  style={{
                    background:
                      svc.tagColor === 'cyan'
                        ? 'rgba(61, 184, 198, 0.10)'
                        : 'rgba(205, 170, 83, 0.10)',
                    color:
                      svc.tagColor === 'cyan'
                        ? 'var(--color-cyan)'
                        : 'var(--color-gold)',
                    fontSize: '10px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '2px 8px',
                    borderRadius: '3px',
                    display: 'inline-block',
                  }}
                >
                  {svc.tag}
                </span>
              </div>

              {/* Number */}
              <p
                style={{
                  color: 'var(--color-cyan)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  marginBottom: '0.375rem',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {svc.number}
              </p>

              {/* Name */}
              <p
                style={{
                  fontSize: 'var(--text-h3-sans)',
                  fontWeight: 600,
                  color: 'var(--color-ink-primary)',
                  fontFamily: 'var(--font-body)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3,
                }}
              >
                {svc.name}
              </p>

              {/* Body */}
              <p className="body-muted" style={{ marginBottom: 0 }}>
                {svc.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
