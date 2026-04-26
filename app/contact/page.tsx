import { Metadata } from 'next'
import ContactForm from './ContactForm'
import Button from '@/components/ui/Button'
import { FadeUp } from '@/components/ui/Animate'

export const metadata: Metadata = {
  title:       'Contact | Maru Online',
  description: "No pitch. No pressure. Two ways to start a conversation — the Operations Diagnostic or a free 20-minute call. You speak directly with Jimmy.",
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
            <span className="label-eyebrow">Contact us</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="maru-headline-split">
              <span className="maru-headline-split-strong">Every engagement starts</span>
              <br />
              <span className="maru-headline-split-light">with a conversation.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p
              className="font-body font-light"
              style={{
                color:      'var(--color-ink-inverted-muted)',
                fontSize:   'var(--text-body-sm)',
                lineHeight: 'var(--leading-body)',
                marginBottom: 0,
              }}
            >
              We respond within 24 hours.
            </p>
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
        <div className={innerWide}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-24 items-end">

            {/* Left — form */}
            <FadeUp>
              <div>
                {/* Calendly CTA */}
                <div style={{ marginBottom: 'var(--space-section-header-mb)' }}>
                  <Button href="/booking" variant="primary">
                    Book a 20-minute call
                  </Button>
                  <p
                    style={{
                      fontFamily:  'var(--font-body)',
                      fontSize:    'var(--text-meta)',
                      fontWeight:  300,
                      color:       'var(--color-ink-tertiary)',
                      marginTop:   '0.75rem',
                      marginBottom: 0,
                    }}
                  >
                    No pitch. No pressure. Just a conversation.
                  </p>
                </div>

                <h2 style={{ marginBottom: '1.5rem' }}>Or send a message directly</h2>

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
                        display:        'block',
                        marginBottom:   '0.25rem',
                      }}
                    >
                      +27 63 564 3263
                    </a>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize:   'var(--text-meta)',
                        fontWeight: 300,
                        color:      'var(--color-ink-tertiary)',
                        margin:     0,
                      }}
                    >
                      Response within 4 business hours.
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
                        display:        'block',
                        marginBottom:   '0.25rem',
                      }}
                    >
                      hello@maruonline.com
                    </a>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize:   'var(--text-meta)',
                        fontWeight: 300,
                        color:      'var(--color-ink-tertiary)',
                        margin:     0,
                      }}
                    >
                      Response within 1 business day.
                    </p>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   'var(--text-meta)',
                      fontWeight: 300,
                      color:      'var(--color-ink-tertiary)',
                      margin:     0,
                    }}
                  >
                    Mon–Fri, 8am–6pm SAST.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CLOSING QUOTE
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-16`}
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <div className={innerNarrow}>
          <FadeUp>
            <p
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'var(--text-h3-serif)',
                fontWeight:    400,
                fontStyle:     'italic',
                color:         'var(--color-ink-primary)',
                lineHeight:    'var(--leading-subheading)',
                letterSpacing: 'var(--tracking-tight)',
                marginBottom:  '0.75rem',
              }}
            >
              &ldquo;The right first step is an honest conversation about where you are.
              Everything else follows from that.&rdquo;
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
