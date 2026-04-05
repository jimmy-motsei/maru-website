import type { Config } from 'tailwindcss'

// Dark mode strategy: 'selector' tells Tailwind v4 that dark: utilities activate
// when [data-theme="dark"] is present on any ancestor element. next-themes sets
// this attribute on <html>, so dark: utilities work site-wide.
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],

  darkMode: ['selector', '[data-theme="dark"]'],

  theme: {
    extend: {
      // ─── Colours ─────────────────────────────────────────────────────────
      // All values reference CSS custom properties defined in globals.css.
      // No hex values here — the variables resolve to different values in
      // :root (light) and [data-theme='dark'] (dark) automatically.
      colors: {

        // Ink (text) scale
        ink: {
          primary:          'var(--color-ink-primary)',
          secondary:        'var(--color-ink-secondary)',
          tertiary:         'var(--color-ink-tertiary)',
          inverted:         'var(--color-ink-inverted)',
          'inverted-muted': 'var(--color-ink-inverted-muted)',
        },

        // Background scale
        bg: {
          primary:   'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary:  'var(--color-bg-tertiary)',
          dark:      'var(--color-bg-dark)',
          darkest:   'var(--color-bg-darkest)',
        },

        // Brand cyan — light value switches in dark mode via CSS var
        cyan: {
          DEFAULT: 'var(--color-cyan)',
          light:   'var(--color-cyan-light)',
          dark:    'var(--color-cyan-dark)',
        },

        // Brand gold — no dark-mode override; CSS var resolves to same value
        gold: {
          DEFAULT: 'var(--color-gold)',
          light:   'var(--color-gold-light)',
        },

        // Border scale
        border: {
          default: 'var(--color-border-default)',
          strong:  'var(--color-border-strong)',
        },
      },

      // ─── Font families ───────────────────────────────────────────────────
      // font-display → Cormorant Garamond (display / H1 moments only)
      // font-body    → DM Sans (all UI, body copy, labels, buttons)
      // CSS variables are injected by next/font in layout.tsx.
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'Cambria', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

export default config
