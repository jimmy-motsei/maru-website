import { Metadata } from 'next'
import Button from '@/components/ui/Button'
import ListItem from '@/components/ui/ListItem'
import ListGroup from '@/components/ui/ListGroup'
import { FadeUp, StaggerParent, StaggerChild } from '@/components/ui/Animate'

export const metadata: Metadata = {
  title:       'Pricing | Maru Online',
  description: 'Every Maru engagement begins with the Operations Diagnostic. Fixed scope, fixed price, clear deliverables at every stage. No surprises.',
}

const outerPad    = 'px-6 md:px-[60px]'
const inner       = 'max-w-[900px] mx-auto'
const innerWide   = 'max-w-[1100px] mx-auto'
const innerNarrow = 'max-w-[720px] mx-auto'

// ─── Pricing data ─────────────────────────────────────────────────────────────

const engagements = [
  {
    id:      'diagnostic',
    label:   '01',
    badge:   'Start here',
    title:   'Operations Diagnostic',
    price:   'R4,500',
    note:    'Offsets against build cost if you proceed.',
    scope:   '48 hours',
    body:    'A structured audit of your workflows, tools, and data connections. You receive a written report that maps your gaps and tells you exactly what to configure first.',
    items: [
      { leader: 'Intake brief',        body: 'Structured questions tailored to your industry.' },
      { leader: 'Verification call',   body: 'A 30-minute call to clarify the brief and confirm scope.' },
      { leader: 'Gap report',          body: 'Named failures, cost per gap, and fix priority.' },
      { leader: '90-day roadmap',      body: 'A sequenced action plan for your next steps.' },
    ],
    href:      '/services/operations-diagnostic',
    featured:  false,
  },
  {
    id:      'build',
    label:   '02',
    badge:   'Most common',
    title:   'Workflow Integration',
    price:   'From R45,000',
    note:    'Fixed price. Scoped after the diagnostic.',
    scope:   '4–8 weeks',
    body:    'Implementation built around the diagnostic findings. We configure the connections between your tools and build the automation layer. We work with your existing stack.',
    items: [
      { leader: 'Custom integration',   body: 'Connecting your CRM, calendar, and email correctly.' },
      { leader: 'Automation layer',     body: 'Workflows that run without human intervention.' },
      { leader: 'Brand voice training', body: 'AI outputs calibrated to sound like your business.' },
      { leader: 'POPIA compliance',     body: 'Every data touchpoint is designed for compliance first.' },
    ],
    href:      '/services/workflow-integration',
    featured:  true,
  },
  {
    id:      'training',
    label:   '03',
    badge:   '',
    title:   'Team Training & Handover',
    price:   'From R15,000',
    note:    'Can be standalone or follow a build.',
    scope:   'Scoped per engagement',
    body:    "Hands-on training built around your specific workflows. Your team learns how to use and manage the system. The capability stays in your business after we hand over.",
    items: [
      { leader: 'Hands-on workshops',  body: 'Built around your tools, not generic theory.' },
      { leader: 'Prompt engineering',  body: 'High-quality outputs from the tools you have.' },
      { leader: 'Workflow adoption',   body: 'Getting new workflows embedded in daily work.' },
      { leader: 'Follow-up support',   body: '30 days of support to catch issues early.' },
    ],
    href:      '/services/team-training-handover',
    featured:  false,
  },
]

const faqs = [
  {
    q: 'Why do I have to pay for the diagnostic?',
    a: "Because it is real work that produces a real deliverable. A free call tells you what we think is wrong. A paid diagnostic tells you exactly what is wrong and what it is costing you. It ensures we are both serious about the conversation.",
  },
  {
    q: 'What if I decide not to proceed after the diagnostic?',
    a: "That is fine. The report is yours. You walk away with a clear picture of your gaps and a prioritised action plan. You can act on it yourself or take it elsewhere. We would rather you have clarity than commit to an engagement you are not ready for.",
  },
  {
    q: "Why don't you publish a full engagement price?",
    a: "Every engagement is scoped to what the diagnostic finds. A single number would either undersell complex work or oversell simple work. We guarantee the price is fixed before you commit. No surprises. No scope creep.",
  },
  {
    q: 'Do you offer payment plans?',
    a: "The diagnostic is payable upfront. For the core engagement, we can discuss a milestone-based structure. Typically, this is 50% on sign-off and 50% on delivery. We can work something out during the scoping conversation.",
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
        className={`min-h-[60vh] flex items-center ${outerPad} pt-48 pb-32`}
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
        <div className={innerWide}>
          <FadeUp>
            <span className="label-eyebrow">Pricing</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1>
              One fixed price to start.<br />
              No surprises after that.
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p
              className="font-body font-light text-lg max-w-[600px]"
              style={{
                color:        'var(--color-ink-inverted-muted)',
                marginBottom: 'var(--space-section-header-mb)',
                lineHeight:   'var(--leading-body)',
              }}
            >
              Every Maru engagement begins with the Operations Diagnostic. Fixed scope, fixed price, clear deliverables.
            </p>
          </FadeUp>
          <FadeUp delay={0.22}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Button href="/contact" variant="primary">
                Start with Diagnostic
              </Button>
              <Button href="#engagements" variant="tertiary">
                See all pricing
              </Button>
            </div>
          </FadeUp>
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
          <FadeUp>
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
              If you have already invested in AI tools, you don&apos;t need more
              tools. You need the ones you have to work together. The diagnostic
              is where that starts. If you proceed to a full engagement, the
              diagnostic fee offsets against the project cost.
            </p>
          </FadeUp>
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
          <FadeUp>
            <div style={{ marginBottom: 'var(--space-section-header-mb)' }}>
              <span className="label-eyebrow-gold">Engagements</span>
              <h2>Start here. Build from what we find.</h2>
              <p
                className="body-muted"
                style={{ margin: 0, maxWidth: '560px' }}
              >
                All three engagements are fixed-scope. We agree on the price before
                work begins. Start with the diagnostic. Everything else is scoped
                from what it finds.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {engagements.map((eng) => (
              <FadeUp key={eng.id}>
                <div
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
              </FadeUp>
            ))}
          </div>
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
          <FadeUp>
            <div style={{ marginBottom: 'var(--space-section-header-mb)' }}>
              <span className="label-eyebrow-gold">Common questions</span>
              <h2>A note on how we price</h2>
            </div>
          </FadeUp>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((faq, i) => (
              <FadeUp key={i}>
                <div
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
              </FadeUp>
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
          <FadeUp>
            <span className="label-eyebrow">The diagnostic</span>
            <h2
              style={{
                color:        'var(--color-ink-inverted)',
                border:       'none',
                padding:      0,
                marginBottom: 'var(--space-heading-body)',
              }}
            >
              The diagnostic is where every engagement starts.
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="body-on-navy" style={{ marginBottom: 'var(--space-para-section)' }}>
              It is where you find out if we are the right fit. R4,500.
              48-hour turnaround. A written report with your gaps, the cost
              of each, and a prioritised configuration order.
            </p>
            <hr
              className="rule"
              style={{
                background:   'rgba(250,250,248,0.15)',
                marginBottom: 'var(--space-para-section)',
              }}
            />
          </FadeUp>
          <FadeUp delay={0.14}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button href="/contact" variant="primary">
                Start with Diagnostic
              </Button>
              <Button href="/booking" variant="tertiary">
                Book a 20-minute call — no pitch
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
