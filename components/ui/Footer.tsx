'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import WhatsAppWidget from './WhatsAppWidget'
import { footerNavigation } from '@/data/footer-navigation'

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

// ─── Shared link class ────────────────────────────────────────────────────────

const linkClass =
  'font-body text-[13px] font-light transition-colors duration-200 ' +
  'hover:text-[var(--color-cyan)]'

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  const [email, setEmail] = useState('')
  const [newsletterState, setNewsletterState] = useState<'idle' | 'loading' | 'done'>('idle')

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setNewsletterState('loading')
    try {
      await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
    } finally {
      setNewsletterState('done')
    }
  }

  return (
    <>
      {/* ── Footer CTA ─────────────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: 'var(--color-bg-navy-deep)' }}
        className="px-6 md:px-[60px] py-24"
      >
        <div
          className="max-w-[900px] mx-auto"
          style={{
            borderBottom: '1px solid rgba(250,250,248,0.1)',
            paddingBottom: '4rem',
            marginBottom: '0',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="h2-cta"
              style={{ marginBottom: 'var(--space-heading-body)' }}
            >
              Ready to see what&apos;s possible?
            </h2>
            <p
              className="body-on-navy"
              style={{ marginBottom: 'var(--space-section-header-mb)', maxWidth: '520px' }}
            >
              Start with the free assessment. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ marginBottom: '1rem' }}>
              <Link
                href="#assessment"
                className="inline-flex items-center justify-center"
                style={{
                  background: 'var(--color-cyan)',
                  color: '#0D1B2A',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 'var(--text-body-sm)',
                  borderRadius: '6px',
                  padding: '0.75rem 1.5rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.15s',
                }}
              >
                Get Your Free Assessment
              </Link>
              <Link
                href="#process"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body-sm)',
                  fontWeight: 300,
                  color: 'var(--color-ink-inverted-muted)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                See how it works →
              </Link>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-meta)',
                fontWeight: 300,
                color: 'rgba(250,250,248,0.4)',
                marginBottom: 0,
              }}
            >
              No obligation. POPIA compliant. 24-hour turnaround.
            </p>
          </motion.div>
        </div>
      </section>

      <footer style={{ backgroundColor: 'var(--color-bg-navy-deep)' }}>
        <div className="max-w-[900px] mx-auto px-6 md:px-[60px] pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            {/* ── 4-column grid ──────────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

              {/* Brand column */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <Link href="/" aria-label="Maru Online — home" className="inline-block mb-6">
                  <Image
                    src="/images/brand/maru_logo_cropped_5px.png"
                    alt="Maru Online"
                    width={120}
                    height={52}
                    style={{ height: '36px', width: 'auto', filter: 'brightness(0) invert(1)' }}
                  />
                </Link>
                <p
                  className="font-body font-medium text-[11px] tracking-[var(--tracking-eyebrow)] uppercase mb-2"
                  style={{ color: 'var(--color-ink-inverted)' }}
                >
                  The Maru Brief
                </p>
                <p
                  className="font-body font-light text-[13px] leading-relaxed mb-4"
                  style={{ color: 'var(--color-ink-inverted-muted)' }}
                >
                  Fortnightly. One practical insight on AI and automation in SA business. No hype.
                </p>
                {newsletterState === 'done' ? (
                  <p className="font-body font-light text-[13px]" style={{ color: 'var(--color-cyan)', marginBottom: '1.5rem' }}>
                    You&apos;re subscribed.
                  </p>
                ) : (
                  <form onSubmit={handleNewsletter} className="flex gap-2 mb-6">
                    <input
                      type="email"
                      required
                      placeholder="Your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      style={{
                        flex: 1,
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        fontWeight: 300,
                        background: 'rgba(250,250,248,0.06)',
                        border: '1px solid rgba(250,250,248,0.15)',
                        borderRadius: '5px',
                        padding: '0.5rem 0.75rem',
                        color: 'var(--color-ink-inverted)',
                        outline: 'none',
                        minWidth: 0,
                      }}
                    />
                    <button
                      type="submit"
                      disabled={newsletterState === 'loading'}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '12px',
                        fontWeight: 500,
                        background: 'var(--color-cyan)',
                        color: '#0D1B2A',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '0.5rem 0.875rem',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      {newsletterState === 'loading' ? '…' : 'Subscribe'}
                    </button>
                  </form>
                )}
                <p className="font-body font-light text-[11px]" style={{ color: 'rgba(250,250,248,0.3)', marginBottom: '1.5rem' }}>
                  Unsubscribe any time.
                </p>
                {/* Social icons */}
                <div className="flex items-center gap-3">
                  {footerNavigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      className="
                        h-9 w-9 rounded-full flex items-center justify-center
                        transition-[color,border-color] duration-200
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)]
                      "
                      style={{
                        border: '1px solid rgba(250,250,248,0.15)',
                        color: 'rgba(250,250,248,0.4)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = 'var(--color-cyan)'
                        e.currentTarget.style.borderColor = 'rgba(61,184,198,0.5)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = 'rgba(250,250,248,0.4)'
                        e.currentTarget.style.borderColor = 'rgba(250,250,248,0.15)'
                      }}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Navigation column */}
              <motion.div variants={itemVariants}>
                <h4
                  className="font-body font-medium text-[11px] tracking-[var(--tracking-eyebrow)] uppercase mb-6"
                  style={{ color: 'var(--color-ink-inverted)' }}
                >
                  Navigation
                </h4>
                <ul className="flex flex-col gap-3 list-none m-0 p-0">
                  {footerNavigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={linkClass}
                        style={{ color: 'var(--color-ink-inverted-muted)' }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services column */}
              <motion.div variants={itemVariants}>
                <h4
                  className="font-body font-medium text-[11px] tracking-[var(--tracking-eyebrow)] uppercase mb-6"
                  style={{ color: 'var(--color-ink-inverted)' }}
                >
                  Services
                </h4>
                <ul className="flex flex-col gap-3 list-none m-0 p-0">
                  {[
                    { name: 'AI Revenue Diagnostic',      href: '/services/ai-revenue-diagnostic' },
                    { name: 'Custom AI Solution Build',    href: '/services/custom-ai-solution-build' },
                    { name: 'AI Training & Capability',    href: '/services/ai-training-capability-building' },
                    { name: 'Ongoing AI Support',          href: '/services/ongoing-ai-support-optimization' },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={linkClass}
                        style={{ color: 'var(--color-ink-inverted-muted)' }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact column */}
              <motion.div variants={itemVariants}>
                <h4
                  className="font-body font-medium text-[11px] tracking-[var(--tracking-eyebrow)] uppercase mb-6"
                  style={{ color: 'var(--color-ink-inverted)' }}
                >
                  Get in Touch
                </h4>
                <ul className="flex flex-col gap-3 list-none m-0 p-0">
                  <li>
                    <a
                      href="mailto:hello@maruonline.com"
                      className={linkClass}
                      style={{ color: 'var(--color-ink-inverted-muted)' }}
                    >
                      hello@maruonline.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/27635643263"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkClass} hover:!text-[#25D366]`}
                      style={{ color: 'var(--color-ink-inverted-muted)' }}
                    >
                      +27 63 564 3263
                    </a>
                  </li>
                  <li
                    className="font-body text-[13px] font-light"
                    style={{ color: 'var(--color-ink-inverted-muted)' }}
                  >
                    Johannesburg, South Africa
                  </li>
                  <li
                    className="font-body text-[13px] font-light"
                    style={{ color: 'var(--color-ink-inverted-muted)' }}
                  >
                    Mon–Fri, 9am–6pm SAST
                  </li>
                </ul>
              </motion.div>

            </div>

            {/* ── Bottom bar ─────────────────────────────────────────────── */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-8"
              style={{ borderTop: '1px solid rgba(250,250,248,0.1)' }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

                {/* Copyright */}
                <p
                  className="font-body text-[12px] font-light"
                  style={{ color: 'rgba(250,250,248,0.35)' }}
                >
                  © {new Date().getFullYear()} Maru Online. All Rights Reserved.
                </p>

                {/* Legal links */}
                <ul className="flex flex-wrap items-center gap-5 list-none m-0 p-0">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="font-body text-[12px] font-light transition-colors duration-200 hover:text-[var(--color-cyan)]"
                        style={{ color: 'rgba(250,250,248,0.35)' }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      type="button"
                      onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
                      className="font-body text-[12px] font-light transition-colors duration-200 hover:text-[var(--color-cyan)] focus-visible:outline-none focus-visible:underline"
                      style={{ color: 'rgba(250,250,248,0.35)' }}
                    >
                      Cookie Preferences
                    </button>
                  </li>
                </ul>

              </div>
            </motion.div>

          </motion.div>
        </div>
      </footer>

      {/* WhatsApp floating widget — fixed position, outside footer flow */}
      <WhatsAppWidget />
    </>
  )
}
