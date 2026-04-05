'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Icons ────────────────────────────────────────────────────────────────────

function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <line x1="10" y1="1.5" x2="10" y2="3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="16.5" x2="10" y2="18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1.5" y1="10" x2="3.5" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16.5" y1="10" x2="18.5" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3.93" y1="3.93" x2="5.34" y2="5.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14.66" y1="14.66" x2="16.07" y2="16.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3.93" y1="16.07" x2="5.34" y2="14.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14.66" y1="5.34" x2="16.07" y2="3.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16.5 11.5A7 7 0 0 1 8.5 3.5a7 7 0 1 0 8 8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  // mounted guard: next-themes is undefined on the server — avoid hydration mismatch
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Render an invisible placeholder of the same size so layout doesn't shift
    return <div className="w-5 h-5" aria-hidden="true" />
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="
        text-ink-secondary hover:text-cyan
        transition-colors duration-150
        focus:outline-none focus:ring-[3px] focus:ring-cyan/30 rounded-sm
        p-1 -m-1
      "
    >
      {/* AnimatePresence swaps sun ↔ moon with a 180° rotation */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="block"
        >
          {isDark ? <MoonIcon /> : <SunIcon />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
