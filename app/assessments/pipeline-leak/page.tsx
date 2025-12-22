import { Metadata } from 'next';
import PipelineLeakPage from './PipelineLeakPage';

export const metadata: Metadata = {
  title: 'Pipeline Leak Detector | Maru Online',
  description: 'Identify revenue leaks in your sales pipeline with AI-powered analysis. Upload your CRM data and get actionable recovery recommendations.',
  keywords: 'pipeline analysis, sales leaks, revenue recovery, CRM analysis, sales automation',
  openGraph: {
    title: 'Pipeline Leak Detector | Maru Online',
    description: 'AI-powered pipeline analysis to identify and fix revenue leaks',
    type: 'website',
  },
};

export default function Page() {
  return <PipelineLeakPage />;
}