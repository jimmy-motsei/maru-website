import { Metadata } from 'next'
import Button from '@/components/ui/Button'
import CardGold from '@/components/ui/CardGold'
import ListItem from '@/components/ui/ListItem'
import ListGroup from '@/components/ui/ListGroup'
import ToolsScroller from '@/components/ui/ToolsScroller'
import { FadeUp, StaggerParent, StaggerChild } from '@/components/ui/Animate'

export const metadata: Metadata = {
  title:       'How We Work | Maru Online',
  description: 'Four phases. Fixed scope. Fixed price. Every Maru engagement starts with a diagnostic — no guessing, no retrofitting, no surprises.',
}

const outerPad    = 'px-6 md:px-[60px]'
const inner       = 'max-w-[900px] mx-auto'
const innerNarrow = 'max-w-[720px] mx-auto'

// ─── Phase data ───────────────────────────────────────────────────────────────

const phases = [
  {
    number:  '01',
    label:   'Diagnose',
    title:   'We map what is broken before we touch anything',
    body: [
      "Every engagement starts with the diagnostic — no exceptions. Before we recommend a single new tool or write a line of code, we do a structured audit of your business: your tools, your workflows, and the gaps between them.",
      "You receive a written report within 48 hours. It names your integration failures by name, quantifies what each gap is costing you in Rands, and gives you a prioritised order for fixing them. Whether or not you proceed with us, that report is yours.",
    ],
    items: [
      { leader: 'Sector-specific intake brief', body: 'Structured questions tailored to your industry — not a generic form.' },
      { leader: '30–45 min verification call',  body: 'We clarify the brief, fill any gaps, and confirm scope before work begins.' },
      { leader: 'Written gap report',            body: 'Named failures, the cost of each, and a fix priority order.' },
      { leader: '90-day roadmap',                body: 'A sequenced action plan so you know exactly what to do and in what order.' },
    ],
    note: 'R4,500. If you proceed to a build, this fee offsets against the project cost.',
    bg:   'var(--color-bg-primary)',
  },
  {
    number:  '02',
    label:   'Design',
    title:   'We scope the work before you commit to it',
    body: [
      "Once the diagnostic is complete, we build a fixed-scope implementation plan based on what it found. You know exactly what we are building, what it costs, and what the measurable outcome will be — before you sign off on anything.",
      "We don't start with a preferred stack. We start with your business. If your existing tools can do the job with better connections between them, that is what we build. We only recommend new tools when there is a genuine capability gap your current systems cannot fill.",
    ],
    items: [
      { leader: 'Fixed-scope definition',    body: 'A clear written spec of what will be built, delivered, and measured.' },
      { leader: 'Fixed price',               body: 'Agreed before work begins. No hourly billing, no scope creep.' },
      { leader: 'Baseline measurement set',  body: 'We establish the before-state so the results are provable.' },
      { leader: 'Stack decision documented', body: 'We tell you exactly why we chose each tool or connection.' },
    ],
    note: null,
    bg:   'var(--color-bg-canvas)',
  },
  {
    number:  '03',
    label:   'Build',
    title:   'We build on solid foundations — not broken ones',
    body: [
      "Implementation follows the scope exactly. If site infrastructure needs to be fixed or built first, we do that before the automation layer. We don't build AI workflows on top of broken foundations — the result would fail within weeks.",
      "Brand voice is calibrated before outputs go live. POPIA compliance is designed in from the start — not retrofitted after the fact. Every touchpoint where your business handles personal data is reviewed before it goes into production.",
    ],
    items: [
      { leader: 'Infrastructure first',        body: 'Site and stack issues resolved before automation is layered on top.' },
      { leader: 'Custom integration build',    body: 'Connecting your CRM, calendar, email, and forms so they pass data correctly.' },
      { leader: 'Automation layer',            body: 'Workflows that run without human intervention: follow-ups, confirmations, handoffs.' },
      { leader: 'Brand voice calibration',     body: 'AI outputs trained to sound like your business, not a generic chatbot.' },
      { leader: 'POPIA compliance by design',  body: 'Every data touchpoint reviewed before a line of code is written.' },
    ],
    note: null,
    bg:   'var(--color-bg-secondary)',
  },
  {
    number:  '04',
    label:   'Hand over',
    title:   'You own the system. Your team runs it.',
    body: [
      "A system that depends on its implementor to function is a liability, not an asset. Every engagement includes full documentation and hands-on training for whoever will be running the system day-to-day.",
      "The 30-day measurement phase runs after handover. We track what changed against the baseline we set in the design phase and give you a results report — not just a handover document. You leave with proof, not just a build.",
    ],
    items: [
      { leader: 'Full documentation',          body: 'Every workflow, connection, and configuration documented for your team.' },
      { leader: 'Hands-on training',           body: 'We train the people who will actually be using the system — not just the decision maker.' },
      { leader: '30-day measurement phase',    body: 'We track results against the baseline and report what changed.' },
      { leader: 'Results report',              body: 'A written report of outcomes, not just a handover checklist.' },
    ],
    note: null,
    bg:   'var(--color-bg-primary)',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProcessPage() {
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
          <FadeUp>
            <span className="label-eyebrow">How we work</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1>
              Four phases.<br />
              Fixed scope. Fixed price.
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
              Every engagement follows the same path — from diagnostic to
              handover. The scope is written down, the price is fixed, and the
              outcome is measured. No guessing, no retrofitting, no surprises.
            </p>
          </FadeUp>
          <FadeUp delay={0.22}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Button href="/contact" variant="primary">
                Start with a diagnostic
              </Button>
              <Button href="#phases" variant="tertiary">
                See the process
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PRINCIPLE
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
              Most AI implementations fail not because the technology is wrong,
              but because the implementor doesn&apos;t understand how the
              business actually runs. We start with that understanding — not with
              a preferred stack.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TOOLS WE USE
          ════════════════════════════════════════════════════════════════════ */}
      <div>
        <FadeUp>
          <div
            className={`${outerPad} py-6`}
            style={{ backgroundColor: 'var(--color-bg-secondary)' }}
          >
            <div className={inner}>
              <p
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      'var(--text-label)',
                  fontWeight:    500,
                  letterSpacing: 'var(--tracking-eyebrow)',
                  textTransform: 'uppercase',
                  color:         'var(--color-ink-tertiary)',
                  marginBottom:  0,
                  textAlign:     'center',
                }}
              >
                Tools we work with
              </p>
            </div>
          </div>
        </FadeUp>
        <ToolsScroller />
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          FOUR PHASES
          ════════════════════════════════════════════════════════════════════ */}
      <div id="phases">
        {phases.map((phase) => (
          <section
            key={phase.number}
            className={`${outerPad} py-24`}
            style={{ backgroundColor: phase.bg }}
          >
            <div className={inner}>
              {/* Section header */}
              <FadeUp>
                <div style={{ marginBottom: 'var(--space-section-header-mb)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span className="section-number">{phase.number}</span>
                    <span className="label-eyebrow-gold" style={{ margin: 0 }}>{phase.label}</span>
                  </div>
                  <h2>{phase.title}</h2>
                </div>
              </FadeUp>

              {/* 2-col: prose + list */}
              <FadeUp delay={0.08}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-start">
                  {/* Left — description */}
                  <div>
                    {phase.body.map((para, i) => (
                      <p
                        key={i}
                        className="body-muted"
                        style={{ marginBottom: i < phase.body.length - 1 ? 'var(--space-para-section)' : 0 }}
                      >
                        {para}
                      </p>
                    ))}
                    {phase.note && (
                      <p
                        style={{
                          fontFamily:      'var(--font-body)',
                          fontSize:        'var(--text-meta)',
                          fontWeight:      300,
                          color:           'var(--color-ink-tertiary)',
                          marginTop:       '1.5rem',
                          marginBottom:    0,
                          paddingTop:      '1rem',
                          borderTop:       '1px solid var(--color-border-default)',
                        }}
                      >
                        {phase.note}
                      </p>
                    )}
                  </div>

                  {/* Right — what's included */}
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
                      What happens in this phase
                    </p>
                    <ListGroup>
                      {phase.items.map((item) => (
                        <ListItem key={item.leader} leader={item.leader} body={item.body} />
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </FadeUp>
            </div>
          </section>
        ))}
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          PRINCIPLES — what makes us different
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: 'var(--color-bg-canvas)' }}
      >
        <div className={inner}>
          <FadeUp>
            <div style={{ marginBottom: 'var(--space-section-header-mb)' }}>
              <span className="label-eyebrow-gold">Principles</span>
              <h2>Three things we do that most consultancies don&apos;t</h2>
            </div>
          </FadeUp>
          <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerChild>
              <CardGold title="Audit before recommendation">
                We map what you have and quantify what your gaps are costing you
                before recommending anything. Most consultants arrive with a
                preferred stack. We arrive with a diagnostic.
              </CardGold>
            </StaggerChild>
            <StaggerChild>
              <CardGold title="Build for handover">
                Every system we build is documented and handed over to your team.
                We train whoever needs to run it. You should not need us to keep
                it working.
              </CardGold>
            </StaggerChild>
            <StaggerChild>
              <CardGold title="POPIA built in from day one">
                Compliance is not an afterthought. Every data touchpoint is
                designed with POPIA in mind before a line of code is written —
                not retrofitted after the fact.
              </CardGold>
            </StaggerChild>
          </StaggerParent>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CAPACITY NOTE
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-20`}
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <div className={innerNarrow}>
          <FadeUp>
            <span className="label-eyebrow-gold">Capacity</span>
            <h2>We work with a maximum of five clients at any time</h2>
            <p className="body-muted" style={{ marginBottom: 0 }}>
              That limit is deliberate. Every integration gets our full attention
              from the initial diagnostic through to handover and the 30-day
              measurement phase. We don&apos;t take on more work than we can do
              properly. If you&apos;re considering an engagement, the right first
              step is the diagnostic — it gives you a clear picture of your
              situation before you commit to anything.
            </p>
          </FadeUp>
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
            <span className="label-eyebrow">Ready to start?</span>
            <h2
              style={{
                color:        'var(--color-ink-inverted)',
                border:       'none',
                padding:      0,
                marginBottom: 'var(--space-heading-body)',
              }}
            >
              The diagnostic is the right first step — for every business.
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="body-on-navy" style={{ marginBottom: 'var(--space-para-section)' }}>
              R4,500. Delivered in 48 hours. You get a written report that names
              your gaps, quantifies what they&apos;re costing you, and tells you
              exactly what to fix first. If you proceed to a build, the
              diagnostic fee offsets against the project cost.
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
                Start with a diagnostic
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
