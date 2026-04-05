'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
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
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  // Reveal border-b once the user scrolls past 80px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll while the mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

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
        className={`
          fixed top-0 left-0 right-0 z-50
          bg-bg-primary/90 backdrop-blur-sm
          transition-[border-color] duration-300
          ${scrolled
            ? 'border-b border-border-default'
            : 'border-b border-transparent'
          }
        `}
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
            className="
              font-display font-light text-[28px] leading-none
              text-ink-primary hover:text-cyan
              transition-colors duration-150
            "
          >
            Maru
          </Link>

          {/* ── Desktop links (lg+) ───────────────────────────────────────── */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            {allLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href, pathname) ? 'page' : undefined}
                  className={`
                    font-body text-[14px] font-normal
                    transition-colors duration-150
                    ${isActive(href, pathname)
                      ? 'text-cyan'
                      : 'text-ink-secondary hover:text-ink-primary'
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Desktop right: ThemeToggle + CTA (lg+) ───────────────────── */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="primary"
              href="/contact"
              className="!px-5 !py-2 !text-[14px]"
            >
              Start diagnostic
            </Button>
          </div>

          {/* ── Mobile right: ThemeToggle + hamburger (below lg) ─────────── */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="
                flex flex-col justify-center gap-[6px]
                w-7 h-7 text-ink-primary
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
            {/* Wrapped in div so onClick closes overlay regardless of Link internals */}
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
