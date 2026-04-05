import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import './globals.css'

// ─── Fonts ────────────────────────────────────────────────────────────────────
// Cormorant Garamond — display / H1 moments only (see design-token brief §2)
// Italic loaded here so pull-quotes and editorial moments don't trigger FOIT.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

// DM Sans — all body copy, UI, labels, buttons (weight 300 body / 500 headings)
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
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
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} font-body`}
      suppressHydrationWarning
    >
      <body>
        <Nav />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
