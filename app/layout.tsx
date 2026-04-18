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
  title: 'AI & Automation Consultants for Growing Businesses | Maru Online',
  description:
    'We identify where your processes are costing you time and money — then build AI-powered workflows that fix & augment your systems.',
  alternates: {
    canonical: 'https://maruonline.com',
  },
  openGraph: {
    type: 'website',
    siteName: 'Maru Online',
    locale: 'en_ZA',
    url: 'https://maruonline.com',
    title: 'Practical AI Solutions to Power Growth, without the Complexity',
    description:
      'We connect artificial intelligence technologies with your existing software, hardware, and workflows to automate processes and boost efficiency.',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Avoid paying for software tools that aren\'t integrated — not talking to each other. Find out why — free.',
    description:
      'Free AI assessment for growing SMEs. We find where your existing tools & processes are falling short — and how to improve them with practical AI integration.',
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
