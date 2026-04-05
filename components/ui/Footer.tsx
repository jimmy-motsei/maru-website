import Link from 'next/link'
import WhatsAppWidget from './WhatsAppWidget'

// ─── Footer nav links ─────────────────────────────────────────────────────────

const footerLinks = [
  { label: 'Services',     href: '/services' },
  { label: 'How We Work',  href: '/process' },
  { label: 'Pricing',      href: '/pricing' },
  { label: 'Insights',     href: '/insights' },
  { label: 'Contact',      href: '/contact' },
]

const linkClass =
  'font-body text-[13px] font-light text-ink-inverted-muted hover:text-cyan transition-colors duration-150'

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <>
      <footer className="bg-bg-navy-deep">
        <div className="max-w-[900px] mx-auto px-6 md:px-[60px] py-16">

          {/* ── Top: wordmark + tagline ─────────────────────────────────── */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 mb-12">
            <Link
              href="/"
              className="font-display font-light text-[24px] leading-none text-ink-inverted hover:text-cyan transition-colors duration-150"
            >
              Maru
            </Link>
            <p className="font-body text-[13px] font-light text-ink-inverted-muted max-w-[320px] sm:text-right">
              Building AI-powered workflows for South African SMEs
            </p>
          </div>

          {/* ── Middle: nav links ───────────────────────────────────────── */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-2 list-none m-0 p-0">
              {footerLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Divider ────────────────────────────────────────────────── */}
          <div className="border-t border-border-default mt-12 mb-8" />

          {/* ── Bottom: contact info + capacity note ───────────────────── */}
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            {/* Left: email + WhatsApp */}
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-5">
              <a
                href="mailto:hello@maruonline.com"
                className="font-body text-[12px] font-light text-ink-inverted-muted hover:text-cyan transition-colors duration-150"
              >
                hello@maruonline.com
              </a>
              <a
                href="https://wa.me/27635643263"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[12px] font-light text-ink-inverted-muted hover:text-cyan transition-colors duration-150"
              >
                wa.me/27635643263
              </a>
            </div>

            {/* Right: capacity + location */}
            <p className="font-body text-[12px] font-light text-ink-inverted-muted sm:text-right">
              Maximum five clients at any time&nbsp;·&nbsp;Johannesburg
            </p>
          </div>

        </div>
      </footer>

      {/* WhatsApp floating widget — fixed position, outside footer container */}
      <WhatsAppWidget />
    </>
  )
}
