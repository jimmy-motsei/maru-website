import { Metadata } from 'next'
import Button from '@/components/ui/Button'
import ListItem from '@/components/ui/ListItem'
import ListGroup from '@/components/ui/ListGroup'

export const metadata: Metadata = {
  title:       'Pricing | Maru Online',
  description: 'Fixed-scope pricing for AI integration and website builds. You know the full investment before work begins. Engagements from R4,500.',
}

const outerPad    = 'px-6 md:px-[60px]'
const inner       = 'max-w-[900px] mx-auto'
const innerNarrow = 'max-w-[720px] mx-auto'

// ─── Pricing data ─────────────────────────────────────────────────────────────

const engagements = [
  {
    id:      'diagnostic',
    label:   '01',
    badge:   'Start here',
    title:   'AI Revenue Diagnostic',
    price:   'R4,500',
    note:    'Offsets against build cost if you proceed.',
    scope:   'Fixed-scope · Delivered in 48 hours',
    body:    'A structured audit of your business, tools, and the gaps between them. You receive a written report that maps your integration failures, quantifies the cost in Rands, and tells you exactly what to fix first.',
    items: [
      { leader: 'Sector-specific intake brief', body: 'Structured questions tailored to your industry.' },
      { leader: '30–45 min verification call',  body: 'We clarify the brief and confirm scope before work begins.' },
      { leader: 'Written gap report',            body: 'Named failures, cost per gap, fix priority order.' },
      { leader: '90-day roadmap',                body: 'A sequenced action plan so you know what to do next.' },
    ],
    href:      '/services/ai-revenue-diagnostic',
    featured:  false,
  },
  {
    id:      'build',
    label:   '02',
    badge:   'Most common',
    title:   'Custom AI Solution Build',
    price:   'From R45,000',
    note:    'Fixed price. Scoped after the diagnostic.',
    scope:   'Fixed-scope · Typically 4–8 weeks',
    body:    'Fixed-scope implementation based on what the diagnostic found. We connect your tools, automate the workflows that are costing you, and build to your stack — not ours.',
    items: [
      { leader: 'Custom integration build',  body: 'Connecting your CRM, calendar, email, and forms correctly.' },
      { leader: 'Automation layer',          body: 'Workflows that run without human intervention.' },
      { leader: 'Brand voice training',      body: 'AI outputs calibrated to sound like your business.' },
      { leader: 'POPIA compliance built in', body: 'Every data touchpoint designed for compliance first.' },
    ],
    href:      '/services/custom-ai-solution-build',
    featured:  true,
  },
  {
    id:      'training',
    label:   '03',
    badge:   '',
    title:   'AI Training & Capability Building',
    price:   'From R15,000',
    note:    'Can be standalone or follow a build.',
    scope:   'Fixed-scope · Scoped per engagement',
    body:    "Hands-on training that improves how your team uses AI day to day — output quality, prompt discipline, adoption, and workflow execution. We train the people who'll actually be using the system.",
    items: [
      { leader: 'Hands-on workshops',        body: 'Built around your actual tools, not generic AI theory.' },
      { leader: 'Prompt engineering',        body: 'Consistent, high-quality outputs from the tools you have.' },
      { leader: 'Workflow adoption',         body: 'Getting new workflows embedded in how the team works.' },
      { leader: '30-day follow-up support',  body: 'A structured support window to catch issues early.' },
    ],
    href:      '/services/ai-training-capability-building',
    featured:  false,
  },
]

const retainerTiers = [
  {
    name:  'Basic Care',
    price: 'R3,500',
    unit:  '/month',
    items: [
      'Monthly performance check',
      'Email support (48hr response)',
      'Minor content updates',
    ],
  },
  {
    name:  'Growth',
    price: 'R7,500',
    unit:  '/month',
    items: [
      'Everything in Basic Care',
      '4 hours priority support',
      'Monthly performance report',
      'Quarterly review session',
    ],
    featured: true,
  },
  {
    name:  'Partner',
    price: 'R14,500',
    unit:  '/month',
    items: [
      'Everything in Growth',
      '8 hours priority support',
      'Quarterly strategy session',
      'POPIA compliance monitoring',
    ],
  },
]

const faqs = [
  {
    q: 'Why does every engagement start with a diagnostic?',
    a: "Because we don't recommend a solution until we know what's actually broken. The diagnostic protects you from paying for work that won't move the needle — and it protects us from building the wrong thing.",
  },
  {
    q: 'What does "fixed-scope" mean in practice?',
    a: "It means the price is agreed before work begins and doesn't change. We define the scope during the diagnostic, write it up clearly, and you sign off on it. No hourly billing, no surprises.",
  },
  {
    q: 'Can I start with the diagnostic and decide later?',
    a: "Yes — and that's the right approach. The diagnostic is designed to give you a clear picture before you commit to anything. If the numbers don't make sense, we'll tell you. If they do, the diagnostic fee offsets against the build cost.",
  },
  {
    q: 'Do you work with businesses outside Gauteng?',
    a: 'Yes. All engagements are run remotely unless you specifically request on-site. We have worked with clients across South Africa.',
  },
  {
    q: 'What industries do you work in?',
    a: 'Our current focus sectors are medico legal, HR and recruitment, and conference and events. We take on work outside these sectors if the brief is well-scoped and the ROI case is clear.',
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`min-h-[60vh] flex items-center ${outerPad} pt-32 pb-24`}
        style={{ backgroundColor: 'var(--color-bg-navy)' }}
      >
        <div
          aria-hidden="true"
          style={{
            position:      'absolute',
            top:           '-120px',
            right:         '-120px',
            width:         '480px',
            height:        '480px',
            borderRadius:  '50%',
            border:        '1px solid rgba(61,184,198,0.15)',
            pointerEvents: 'none',
          }}
        />
        <div className={inner}>
          <span className="label-eyebrow">Pricing</span>
          <h1>
            Fixed-scope.<br />
            Priced before work begins.
          </h1>
          <p
            className="font-body font-light text-lg max-w-[600px]"
            style={{
              color:        'var(--color-ink-inverted-muted)',
              marginBottom: 'var(--space-section-header-mb)',
              lineHeight:   'var(--leading-body)',
            }}
          >
            Every engagement is scoped to your specific stack, team, and
            revenue targets. You know the full cost before we start — no
            hourly billing, no scope creep, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Button href="/contact" variant="primary">
              Start with a diagnostic
            </Button>
            <Button href="#engagements" variant="tertiary">
              See all pricing
            </Button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PRINCIPLE — fixed-scope
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-20`}
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <div className={innerNarrow}>
          <p
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'var(--text-h3-serif)',
              fontWeight:    400,
              lineHeight:    'var(--leading-subheading)',
              color:         'var(--color-ink-primary)',
              letterSpacing: 'var(--tracking-tight)',
              margin:        0,
            }}
          >
            We don&apos;t quote until we understand the problem. The diagnostic
            is how we scope every engagement — it protects you from buying work
            that won&apos;t move the needle, and it means the price we give you
            is real.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          ENGAGEMENT PRICING — 3 services
          ════════════════════════════════════════════════════════════════════ */}
      <section
        id="engagements"
        className={`${outerPad} py-24`}
        style={{ backgroundColor: 'var(--color-bg-primary)' }}
      >
        <div className={inner}>
          <div style={{ marginBottom: 'var(--space-section-header-mb)' }}>
            <span className="label-eyebrow-gold">Engagements</span>
            <h2>Project-based work</h2>
            <p
              className="body-muted"
              style={{ margin: 0, maxWidth: '560px' }}
            >
              All three are fixed-scope. Start with the diagnostic — the other
              two are scoped from what it finds.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {engagements.map((eng) => (
              <div
                key={eng.id}
                style={{
                  backgroundColor: eng.featured ? 'var(--color-bg-canvas)' : 'var(--color-bg-primary)',
                  border:          eng.featured
                    ? '1px solid var(--color-cyan)'
                    : '1px solid var(--color-border-default)',
                  borderRadius:    '8px',
                  overflow:        'hidden',
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    display:         'flex',
                    alignItems:      'flex-start',
                    justifyContent:  'space-between',
                    flexWrap:        'wrap',
                    gap:             '1rem',
                    padding:         '1.75rem 2rem',
                    borderBottom:    '1px solid var(--color-border-default)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <span className="section-number">{eng.label}</span>
                      {eng.badge && (
                        <span
                          style={{
                            fontFamily:      'var(--font-body)',
                            fontSize:        'var(--text-label)',
                            fontWeight:      500,
                            letterSpacing:   'var(--tracking-eyebrow)',
                            textTransform:   'uppercase',
                            color:           eng.featured ? 'var(--color-cyan)' : 'var(--color-gold-antique)',
                            backgroundColor: eng.featured ? 'var(--color-cyan-light)' : 'var(--color-gold-light)',
                            borderRadius:    '4px',
                            padding:         '0.2rem 0.5rem',
                          }}
                        >
                          {eng.badge}
                        </span>
                      )}
                    </div>
                    <h3 style={{ margin: 0 }}>{eng.title}</h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize:   'var(--text-meta)',
                        fontWeight: 300,
                        color:      'var(--color-ink-tertiary)',
                        margin:     '0.25rem 0 0',
                      }}
                    >
                      {eng.scope}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p
                      style={{
                        fontFamily:   'var(--font-display)',
                        fontSize:     '1.75rem',
                        fontWeight:   600,
                        color:        'var(--color-navy)',
                        lineHeight:   1,
                        marginBottom: '0.25rem',
                      }}
                    >
                      {eng.price}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize:   'var(--text-meta)',
                        fontWeight: 300,
                        color:      'var(--color-ink-tertiary)',
                        margin:     0,
                      }}
                    >
                      {eng.note}
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div
                  className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-16"
                  style={{ padding: '1.75rem 2rem' }}
                >
                  <div>
                    <p className="body-muted" style={{ marginBottom: '1.5rem' }}>
                      {eng.body}
                    </p>
                    <Button href={eng.href} variant="secondary">
                      Learn more
                    </Button>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily:    'var(--font-body)',
                        fontSize:      'var(--text-label)',
                        fontWeight:    500,
                        letterSpacing: 'var(--tracking-eyebrow)',
                        textTransform: 'uppercase',
                        color:         'var(--color-ink-tertiary)',
                        marginBottom:  '0.75rem',
                      }}
                    >
                      What&apos;s included
                    </p>
                    <ListGroup>
                      {eng.items.map((item) => (
                        <ListItem key={item.leader} leader={item.leader} body={item.body} />
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          RETAINER PRICING
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: 'var(--color-bg-canvas)' }}
      >
        <div className={inner}>
          <div style={{ marginBottom: 'var(--space-section-header-mb)' }}>
            <span className="label-eyebrow-gold">Retainers</span>
            <h2>Ongoing support & optimisation</h2>
            <p
              className="body-muted"
              style={{ margin: 0, maxWidth: '560px' }}
            >
              Monthly retainers are available to clients who have completed a
              build engagement. Systems drift — this keeps yours performing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {retainerTiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  backgroundColor: tier.featured ? 'var(--color-bg-navy)' : 'var(--color-bg-primary)',
                  border:          tier.featured
                    ? '1px solid var(--color-cyan)'
                    : '1px solid var(--color-border-default)',
                  borderRadius:    '8px',
                  padding:         '2rem 1.75rem',
                  display:         'flex',
                  flexDirection:   'column',
                }}
              >
                <p
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      'var(--text-label)',
                    fontWeight:    500,
                    letterSpacing: 'var(--tracking-eyebrow)',
                    textTransform: 'uppercase',
                    color:         tier.featured ? 'var(--color-cyan)' : 'var(--color-ink-tertiary)',
                    marginBottom:  '0.5rem',
                  }}
                >
                  {tier.name}
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.5rem' }}>
                  <span
                    style={{
                      fontFamily:  'var(--font-display)',
                      fontSize:    '2rem',
                      fontWeight:  600,
                      color:       tier.featured ? 'var(--color-ink-inverted)' : 'var(--color-navy)',
                      lineHeight:  1,
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   'var(--text-meta)',
                      fontWeight: 300,
                      color:      tier.featured ? 'var(--color-ink-inverted-muted)' : 'var(--color-ink-tertiary)',
                    }}
                  >
                    {tier.unit}
                  </span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', flex: 1 }}>
                  {tier.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display:       'flex',
                        alignItems:    'flex-start',
                        gap:           '0.625rem',
                        paddingBottom: '0.625rem',
                        marginBottom:  '0.625rem',
                        borderBottom:  tier.featured
                          ? '1px solid rgba(250,250,248,0.1)'
                          : '1px solid var(--color-border-default)',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          display:         'block',
                          width:           '6px',
                          height:          '6px',
                          borderRadius:    '50%',
                          backgroundColor: 'var(--color-cyan)',
                          marginTop:       '0.45rem',
                          flexShrink:      0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize:   'var(--text-body)',
                          fontWeight: 300,
                          color:      tier.featured ? 'var(--color-ink-inverted-muted)' : 'var(--color-ink-secondary)',
                          lineHeight: 'var(--leading-body)',
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={tier.featured ? 'primary' : 'secondary'}
                >
                  Enquire
                </Button>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily:  'var(--font-body)',
              fontSize:    'var(--text-meta)',
              fontWeight:  300,
              color:       'var(--color-ink-tertiary)',
              marginTop:   '1.5rem',
              marginBottom: 0,
            }}
          >
            Minimum 3-month commitment. Prices exclude VAT.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FAQ — common pricing objections
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <div className={inner}>
          <div style={{ marginBottom: 'var(--space-section-header-mb)' }}>
            <span className="label-eyebrow-gold">Common questions</span>
            <h2>Pricing questions answered</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderTop:  '1px solid var(--color-border-default)',
                  padding:    '1.5rem 0',
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-16">
                  <p
                    style={{
                      fontFamily:   'var(--font-display)',
                      fontSize:     'var(--text-h3-serif)',
                      fontWeight:   600,
                      color:        'var(--color-navy)',
                      lineHeight:   'var(--leading-subheading)',
                      margin:       0,
                    }}
                  >
                    {faq.q}
                  </p>
                  <p className="body-muted" style={{ margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--color-border-default)' }} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA — navy
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: 'var(--color-bg-navy)' }}
      >
        <div
          aria-hidden="true"
          style={{
            position:      'absolute',
            bottom:        '-80px',
            left:          '-80px',
            width:         '320px',
            height:        '320px',
            borderRadius:  '50%',
            border:        '1px solid rgba(61,184,198,0.12)',
            pointerEvents: 'none',
          }}
        />
        <div className={innerNarrow}>
          <span className="label-eyebrow">Not sure where to start?</span>
          <h2
            style={{
              color:        'var(--color-ink-inverted)',
              border:       'none',
              padding:      0,
              marginBottom: 'var(--space-heading-body)',
            }}
          >
            The diagnostic tells you exactly what you need — before you spend anything else.
          </h2>
          <p className="body-on-navy" style={{ marginBottom: 'var(--space-para-section)' }}>
            R4,500. 48-hour turnaround. A written report with your integration
            failures, the cost of each, and a prioritised fix order. If you
            proceed to a build, this fee offsets against the project cost.
          </p>
          <hr
            className="rule"
            style={{
              background:   'rgba(250,250,248,0.15)',
              marginBottom: 'var(--space-para-section)',
            }}
          />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button href="/contact" variant="primary">
              Start with a diagnostic
            </Button>
            <Button href="/booking" variant="tertiary">
              Book a 20-minute call — no pitch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
