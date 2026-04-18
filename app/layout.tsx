import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import './globals.css'

// ─── Fonts ────────────────────────────────────────────────────────────────────
// Outfit Variable — headings (h1–h6), display moments, nav, labels
// Variable font: weight axis 100–900, no separate files needed.
const outfit = localFont({
  src: '../public/fonts/outfit/Outfit-Variable.woff2',
  variable: '--font-outfit',
  display: 'swap',
})

// Inter Variable — all body copy, UI text, form inputs, buttons
// Variable font: weight axis 100–900.
const inter = localFont({
  src: '../public/fonts/inter/Inter-Variable.woff2',
  variable: '--font-inter',
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
      className={`${outfit.variable} ${inter.variable} font-body`}
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
