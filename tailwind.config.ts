import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],

  theme: {
    extend: {
      // ─── Colours ─────────────────────────────────────────────────────────
      // All values reference CSS custom properties defined in globals.css.
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

        cyan: {
          DEFAULT: 'var(--color-cyan)',
          light:   'var(--color-cyan-light)',
          dark:    'var(--color-cyan-dark)',
        },

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
      // font-display → Outfit  |  font-body → Inter
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },

  plugins: [],
}

export default config
