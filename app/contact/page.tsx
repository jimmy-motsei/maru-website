import { Metadata } from 'next'
import ContactForm from './ContactForm'
import Button from '@/components/ui/Button'
import { FadeUp } from '@/components/ui/Animate'

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
            <h1>How can we help you?</h1>
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
                    Every engagement starts with a conversation. How can we help you?
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

    </>
  )
}
