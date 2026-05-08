const services = [
  {
    id: 'svc1',
    tag: 'Free entry point',
    tagColor: 'cyan',
    number: '01',
    name: 'Operations Diagnostic',
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
      {services.map((svc) => (
        <div
          key={svc.id}
          className="card-lift"
          style={{
            border: '0.5px solid var(--color-border-default)',
            borderRadius: '8px',
            padding: '1rem 1.25rem',
            background: 'var(--color-bg-primary)',
            transition: 'transform 280ms cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
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
      ))}
    </div>
  );
}
