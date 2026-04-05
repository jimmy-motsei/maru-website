import { Metadata } from 'next'
import ContactForm from './ContactForm'
import CardNavy from '@/components/ui/CardNavy'
import Button from '@/components/ui/Button'
import { FadeUp, StaggerParent, StaggerChild } from '@/components/ui/Animate'

export const metadata: Metadata = {
  title:       'Contact | Maru Online',
  description: 'Start with a diagnostic or ask a question. Fixed-scope engagements — we tell you the price before work begins.',
}

const outerPad    = 'px-6 md:px-[60px]'
const inner       = 'max-w-[900px] mx-auto'
const innerNarrow = 'max-w-[720px] mx-auto'

export default function ContactPage() {
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
            <span className="label-eyebrow">Contact</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1>
              Tell us what&apos;s broken.<br />
              We&apos;ll tell you what it costs.
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p
              className="font-body font-light text-lg max-w-[560px]"
              style={{
                color:        'var(--color-ink-inverted-muted)',
                marginBottom: 'var(--space-section-header-mb)',
                lineHeight:   'var(--leading-body)',
              }}
            >
              Every engagement starts with a diagnostic. Share what&apos;s not
              working and we&apos;ll map the gaps, quantify the cost, and tell you
              exactly what to fix first.
            </p>
          </FadeUp>
          <FadeUp delay={0.22}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Button href="#contact-form" variant="primary">
                Send us a message
              </Button>
              <Button href="/booking" variant="tertiary">
                Book a 20-minute call
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CONTACT FORM + SIDE INFO
          ════════════════════════════════════════════════════════════════════ */}
      <section
        id="contact-form"
        className={`${outerPad} py-24`}
        style={{ backgroundColor: 'var(--color-bg-primary)' }}
      >
        <div className={inner}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-16 items-start">

            {/* Left — form */}
            <FadeUp>
              <div>
                <div style={{ marginBottom: 'var(--space-section-header-mb)' }}>
                  <h2>Send a message</h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   'var(--text-body)',
                      fontWeight: 300,
                      color:      'var(--color-ink-secondary)',
                      lineHeight: 'var(--leading-body)',
                      margin:     0,
                    }}
                  >
                    Tell us about your business and what&apos;s not working. We respond
                    within one business day and don&apos;t send you to a sales process.
                  </p>
                </div>
                <ContactForm />
              </div>
            </FadeUp>

            {/* Right — contact details */}
            <FadeUp delay={0.1}>
              <div style={{ paddingTop: '0.5rem' }}>
                <p
                  style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      'var(--text-label)',
                    fontWeight:    500,
                    letterSpacing: 'var(--tracking-eyebrow)',
                    textTransform: 'uppercase',
                    color:         'var(--color-ink-tertiary)',
                    marginBottom:  '1.5rem',
                  }}
                >
                  Other ways to reach us
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <p
                      style={{
                        fontFamily:    'var(--font-body)',
                        fontSize:      'var(--text-label)',
                        fontWeight:    500,
                        letterSpacing: 'var(--tracking-eyebrow)',
                        textTransform: 'uppercase',
                        color:         'var(--color-ink-tertiary)',
                        marginBottom:  '0.25rem',
                      }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:hello@maruonline.com"
                      style={{
                        fontFamily:     'var(--font-body)',
                        fontSize:       'var(--text-body)',
                        fontWeight:     300,
                        color:          'var(--color-cyan)',
                        textDecoration: 'none',
                      }}
                    >
                      hello@maruonline.com
                    </a>
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
                        marginBottom:  '0.25rem',
                      }}
                    >
                      Location
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize:   'var(--text-body)',
                        fontWeight: 300,
                        color:      'var(--color-ink-secondary)',
                        margin:     0,
                      }}
                    >
                      Gauteng, South Africa<br />
                      Remote engagements nationwide
                    </p>
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
                        marginBottom:  '0.25rem',
                      }}
                    >
                      Response time
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize:   'var(--text-body)',
                        fontWeight: 300,
                        color:      'var(--color-ink-secondary)',
                        margin:     0,
                      }}
                    >
                      Within one business day
                    </p>
                  </div>
                </div>

                <hr className="rule" style={{ marginTop: '2rem', marginBottom: '1.5rem' }} />

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   'var(--text-meta)',
                    fontWeight: 300,
                    color:      'var(--color-ink-tertiary)',
                    lineHeight: 'var(--leading-body)',
                    margin:     0,
                  }}
                >
                  Not ready to commit? Book a free 20-minute call — no pitch, no
                  pressure. Just a conversation about what you&apos;re trying to fix.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <Button href="/booking" variant="secondary">
                    Book a call
                  </Button>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          WHAT HAPPENS NEXT
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: 'var(--color-bg-canvas)' }}
      >
        <div className={inner}>
          <FadeUp>
            <div style={{ marginBottom: 'var(--space-section-header-mb)' }}>
              <span className="label-eyebrow-gold">Process</span>
              <h2>What happens after you send a message</h2>
            </div>
          </FadeUp>
          <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step:  '01',
                title: 'We read your message',
                body:  "Every enquiry is read by a person — not a bot. We look at what you've shared and decide if and how we can help.",
              },
              {
                step:  '02',
                title: 'We respond within a day',
                body:  "You'll receive a direct reply within one business day — with a clear next step, not a brochure.",
              },
              {
                step:  '03',
                title: 'Diagnostic or call — your choice',
                body:  "We'll either propose a diagnostic (if the scope is clear) or suggest a short call to fill the gaps first.",
              },
            ].map(item => (
              <StaggerChild key={item.step}>
                <div
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
                    border:          '1px solid var(--color-border-default)',
                    borderRadius:    '8px',
                    padding:         '1.75rem 1.5rem',
                  }}
                >
                  <span
                    className="section-number"
                    style={{ display: 'block', marginBottom: '0.75rem' }}
                  >
                    {item.step}
                  </span>
                  <p
                    style={{
                      fontFamily:   'var(--font-display)',
                      fontSize:     'var(--text-h3-serif)',
                      fontWeight:   600,
                      color:        'var(--color-navy)',
                      lineHeight:   'var(--leading-subheading)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="body-muted"
                    style={{ margin: 0 }}
                  >
                    {item.body}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TESTIMONIALS
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <div className={inner}>
          <FadeUp><h2>What clients say</h2></FadeUp>
          <StaggerParent className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            <StaggerChild>
              <CardNavy label="Client" title="Sound Studio, Johannesburg">
                <p>
                  &ldquo;Since the site went live we&apos;ve been getting more
                  business opportunities than before.&rdquo;
                </p>
                <p
                  style={{
                    marginTop:    '0.75rem',
                    marginBottom: 0,
                    fontSize:     'var(--text-meta)',
                    color:        'rgba(250,250,248,0.5)',
                  }}
                >
                  — Founder, Sound Studio (Johannesburg)
                </p>
              </CardNavy>
            </StaggerChild>
            <StaggerChild>
              <CardNavy label="Client" title="Seokane Inc">
                <p>
                  &ldquo;[Seokane Inc quote about quality of work and brand
                  capture]&rdquo;
                </p>
                <p
                  style={{
                    marginTop:    '0.75rem',
                    marginBottom: 0,
                    fontSize:     'var(--text-meta)',
                    color:        'rgba(250,250,248,0.5)',
                  }}
                >
                  — [Name], Seokane Inc ·{' '}
                  <em>Placeholder — replace on receipt</em>
                </p>
              </CardNavy>
            </StaggerChild>
          </StaggerParent>
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
              The diagnostic is the right first step.
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="body-on-navy" style={{ marginBottom: 'var(--space-para-section)' }}>
              R4,500. Delivered in 48 hours. A written report that tells you
              exactly what&apos;s broken, what it&apos;s costing you, and what to
              fix first. If you proceed to a build, this fee offsets against the
              project cost.
            </p>
            <hr
              className="rule"
              style={{
                background:    'rgba(250,250,248,0.15)',
                marginBottom:  'var(--space-para-section)',
              }}
            />
          </FadeUp>
          <FadeUp delay={0.14}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button href="/services/ai-revenue-diagnostic" variant="primary">
                Learn about the diagnostic
              </Button>
              <Button href="#contact-form" variant="tertiary">
                Send a message instead
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
