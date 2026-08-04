import type { Metadata } from 'next'

// The Sanity authoring environment. Never index it.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
