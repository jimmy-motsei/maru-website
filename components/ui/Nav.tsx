'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

// ─── Nav link definitions ─────────────────────────────────────────────────────

const allLinks = [
  { label: 'Home',         href: '/' },
  { label: 'Services',     href: '/services' },
  { label: 'How We Work',  href: '/process' },
  { label: 'Pricing',      href: '/pricing' },
  { label: 'Insights',     href: '/insights' },
  { label: 'Contact',      href: '/contact' },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isActive(href: string, pathname: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

// ─── Close (×) icon ──────────────────────────────────────────────────────────

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="18" y1="6" x2="6"  y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6"  y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Nav() {
  const pathname  = usePathname()
  const [isHero,    setIsHero]    = useState(true)
  const [menuOpen,  setMenuOpen]  = useState(false)

  // Hero state: scrollY < window.innerHeight; page state: scrollY >= window.innerHeight
  useEffect(() => {
    const onScroll = () => setIsHero(window.scrollY < window.innerHeight)
    onScroll() // initialise on mount
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll while the mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  // ── Derived style tokens based on scroll position ─────────────────────────
  const headerBg     = isHero ? 'rgba(13, 27, 42, 0.5)'         : 'rgba(255, 255, 255, 0.95)'
  const headerBorder = isHero ? 'transparent'                    : '#E2E8F0'
  const logoColor    = isHero ? '#FFFFFF'                        : '#1A3A5C'
  const logoHover    = '#3DB8C6'
  const linkDefault  = isHero ? 'rgba(250, 250, 248, 0.8)'      : '#4A5568'
  const linkHover    = isHero ? '#FFFFFF'                        : '#0D1B2A'
  const linkActive   = '#3DB8C6'
  const hamburgerColor = isHero ? '#FFFFFF' : '#4A5568'

  return (
    <>
      {/* ── Skip to content (first focusable element for keyboard/AT users) ── */}
      <a
        href="#main-content"
        className="
          sr-only
          focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
          focus:px-4 focus:py-2 focus:bg-cyan focus:text-bg-darkest
          focus:font-body focus:text-[14px] focus:font-medium
        "
      >
        Skip to content
      </a>

      {/* ── Header bar ────────────────────────────────────────────────────── */}
      <header
        style={{
          backgroundColor: headerBg,
          borderBottomColor: headerBorder,
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
      >
        <nav
          aria-label="Main navigation"
          className="
            flex items-center justify-between
            h-[56px] lg:h-[64px]
            px-6 lg:px-[60px]
            max-w-[1200px] mx-auto
          "
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              color: logoColor,
              transition: 'color 0.3s ease',
            }}
            className="font-display font-light text-[28px] leading-none hover:text-[#3DB8C6]"
            onMouseEnter={e => (e.currentTarget.style.color = logoHover)}
            onMouseLeave={e => (e.currentTarget.style.color = logoColor)}
          >
            Maru
          </Link>

          {/* ── Desktop links (lg+) ───────────────────────────────────────── */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            {allLinks.map(({ label, href }) => {
              const active = isActive(href, pathname)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    style={{
                      color: active ? linkActive : linkDefault,
                      transition: 'color 0.3s ease',
                    }}
                    className="font-body text-[14px] font-normal"
                    onMouseEnter={e => {
                      if (!active) e.currentTarget.style.color = linkHover
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = active ? linkActive : linkDefault
                    }}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* ── Desktop right: CTA (lg+) ─────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="primary"
              href="/contact"
              className="!px-5 !py-2 !text-[11px]"
            >
              Start diagnostic
            </Button>
          </div>

          {/* ── Mobile right: hamburger (below lg) ───────────────────────── */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              style={{ color: hamburgerColor, transition: 'color 0.3s ease' }}
              className="
                flex flex-col justify-center gap-[6px]
                w-7 h-7
                focus:outline-none focus:ring-[3px] focus:ring-cyan/30 rounded-sm
              "
            >
              <span className="block w-7 h-[1.5px] bg-current" />
              <span className="block w-7 h-[1.5px] bg-current" />
              <span className="block w-7 h-[1.5px] bg-current" />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile full-screen overlay ────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="
              fixed inset-0 z-[60]
              bg-bg-darkest
              flex flex-col
              px-6 pt-6 pb-10
            "
          >
            {/* Close button — top right */}
            <div className="flex justify-end mb-10">
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="
                  text-ink-inverted hover:text-cyan
                  transition-colors duration-150
                  focus:outline-none focus:ring-[3px] focus:ring-cyan/30 rounded-sm
                  p-1 -m-1
                "
              >
                <CloseIcon />
              </button>
            </div>

            {/* Staggered nav links */}
            <ul className="flex flex-col gap-8 flex-1 list-none m-0 p-0">
              {allLinks.map(({ label, href }, index) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.2 + index * 0.05,
                  }}
                >
                  <Link
                    href={href}
                    onClick={closeMenu}
                    aria-current={isActive(href, pathname) ? 'page' : undefined}
                    className={`
                      font-body font-light text-[24px]
                      transition-colors duration-150
                      ${isActive(href, pathname)
                        ? 'text-cyan'
                        : 'text-ink-inverted hover:text-cyan'
                      }
                    `}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Full-width CTA at bottom of overlay */}
            <div className="pt-8" onClick={closeMenu}>
              <Button variant="primary" href="/contact" className="w-full !justify-center">
                Start diagnostic
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
