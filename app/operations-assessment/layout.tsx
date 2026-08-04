import type { Metadata } from 'next'
import { seo } from '@/lib/seo'

// page.tsx is a client component and cannot export metadata, so the route's
// canonical and OG live here. Without this the root layout's canonical applied
// and told Google this page was a duplicate of the homepage. (T1)
export const metadata: Metadata = {
  title:       'Free Operations Assessment | Maru Online',
  description: 'Fifteen minutes to find where manual work is costing your business time and money. A written report follows within 48 hours.',
  ...seo('/operations-assessment'),
}

export default function OperationsAssessmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
