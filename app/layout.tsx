import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

// ─── Fonts ────────────────────────────────────────────────────────────────────
// Cormorant Garamond — display / H1 moments only (see design-token brief §2)
// Italic loaded here so pull-quotes and editorial moments don't trigger FOIT.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

// DM Sans — all body copy, UI, labels, buttons (weight 300 body / 500 headings)
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://maruonline.com'),
  title: 'Maru Online | AI Implementation Consultancy',
  description:
    'We help businesses cut operating costs by building AI-powered workflows where it matters most.',
  alternates: {
    canonical: 'https://maruonline.com',
  },
  openGraph: {
    type: 'website',
    siteName: 'Maru Online',
    locale: 'en_ZA',
    url: 'https://maruonline.com',
    title: 'Maru Online | AI Implementation Consultancy',
    description:
      'We help businesses cut operating costs by building AI-powered workflows where it matters most.',
  },
}

// ─── Root layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning: next-themes writes data-theme on <html> client-side;
    // without this flag React emits a hydration mismatch warning on every load.
    // font variables are scoped to <html> so they cascade to all descendants.
    // font-body sets DM Sans as the default font-family via the Tailwind utility.
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} font-body`}
      suppressHydrationWarning
    >
      <body>
        {/* attribute="data-theme" matches [data-theme='dark'] in globals.css
            enableSystem: on first visit, respect the OS preference;
            subsequent visits use the value persisted to localStorage.       */}
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
