import type { Metadata } from 'next'

// Partner landing pages are generated per partner and shared by link. They are
// not part of the public IA and must never be indexed. (T1)
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
