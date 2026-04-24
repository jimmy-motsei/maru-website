import { Metadata } from 'next'
import ContactForm from './ContactForm'
import CardNavy from '@/components/ui/CardNavy'
import Button from '@/components/ui/Button'
import { FadeUp, StaggerParent, StaggerChild } from '@/components/ui/Animate'

export const metadata: Metadata = {
  title:       'Contact | Maru Online',
  description: "No pitch. No pressure. Two ways to start — book a diagnostic or a free 20-minute call. You'll speak directly with Jimmy.",
}

const outerPad    = 'px-6 md:px-[60px]'
const inner       = 'max-w-[900px] mx-auto'
const innerWide   = 'max-w-[1100px] mx-auto'
const innerNarrow = 'max-w-[720px] mx-auto'

export default function ContactPage() {
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
            <span className="label-eyebrow">Contact</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1>
              Let&apos;s find out<br />
              if we&apos;re the right fit.
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
              No pitch. No pressure. Two ways to start — choose whichever
              feels right.
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
                    Every engagement starts with a conversation. Tell us about your
                    business and what&apos;s not working — you&apos;ll speak directly
                    with Jimmy, not a sales team or intake coordinator.
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
                      WhatsApp — fastest
                    </p>
                    <a
                      href="https://wa.me/27635643263"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily:     'var(--font-body)',
                        fontSize:       'var(--text-body)',
                        fontWeight:     300,
                        color:          'var(--color-cyan)',
                        textDecoration: 'none',
                      }}
                    >
                      +27 63 564 3263
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
                      Johannesburg, Gauteng<br />
                      Working with clients across South Africa
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
                      WhatsApp within 4 business hours.<br />
                      Email within 1 business day.<br />
                      Mon–Fri, 8am–6pm SAST.
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
                title: 'You choose how to start',
                body:  "Book the diagnostic if you know your business has an AI integration problem and want a clear picture. Book the call if you want to talk it through first — no pitch, no pressure.",
              },
              {
                step:  '02',
                title: 'You speak directly with Jimmy',
                body:  "Not a sales team, not an intake coordinator. The person who will actually do the work is the same person you talk to first.",
              },
              {
                step:  '03',
                title: 'We tell you honestly if we can help',
                body:  "If the diagnostic is the right next step, we propose it. If the honest answer is that we're not the right fit, we'll say so — and point you in the right direction.",
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
              The right first step is an honest conversation about where you are.
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="body-on-navy" style={{ marginBottom: 'var(--space-para-section)' }}>
              If you already know AI integration is the issue, the diagnostic is
              the right place to start — R4,500, 48-hour turnaround, with your
              specific numbers in the report. If you&apos;re not sure yet, the
              20-minute call costs nothing and tells you what you need to know.
            </p>
            <hr
              className="rule"
              style={{
                background:    'rgba(250,250,248,0.15)',
                marginBottom:  'var(--space-para-section)',
              }}
            />
            <p
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'var(--text-h3-serif)',
                fontWeight:    400,
                fontStyle:     'italic',
                color:         'var(--color-ink-inverted-muted)',
                lineHeight:    'var(--leading-subheading)',
                letterSpacing: 'var(--tracking-tight)',
                marginBottom:  '0.5rem',
              }}
            >
              &ldquo;The right first step is an honest conversation about
              where you are. Everything else follows from that.&rdquo;
            </p>
            <p
              style={{
                fontFamily:   'var(--font-body)',
                fontSize:     'var(--text-meta)',
                fontWeight:   300,
                color:        'rgba(250,250,248,0.45)',
                marginBottom: 'var(--space-section-header-mb)',
              }}
            >
              — Jimmy Motsei
            </p>
          </FadeUp>
          <FadeUp delay={0.14}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button href="/contact" variant="primary">
                Book your diagnostic
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
