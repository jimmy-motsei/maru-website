import { Metadata } from 'next';
import TechAuditPage from './TechAuditPageNew';

export const metadata: Metadata = {
  title: 'Tech Stack ROI Auditor | Maru Online',
  description: 'Analyze your software stack for redundancies and cost optimization opportunities. Get actionable recommendations to reduce tech spend.',
  keywords: 'tech stack audit, software costs, ROI analysis, tool optimization, SaaS management',
  openGraph: {
    title: 'Tech Stack ROI Auditor | Maru Online',
    description: 'Optimize your software stack and reduce costs with AI-powered analysis',
    type: 'website',
  },
};

export default function Page() {
  return <TechAuditPage />;
}