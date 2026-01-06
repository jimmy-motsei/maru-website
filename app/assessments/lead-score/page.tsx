import { Metadata } from 'next';
import { Suspense } from 'react';
import LeadScorePage from './LeadScorePage';

export const metadata: Metadata = {
  title: 'Lead Generation Score Predictor | Maru Online',
  description: 'Discover how ready your website is to generate high-quality leads with our AI-powered analysis. Get actionable recommendations to improve your lead generation potential.',
  keywords: 'lead generation, website analysis, marketing automation, lead scoring, business growth',
  openGraph: {
    title: 'Lead Generation Score Predictor | Maru Online',
    description: 'AI-powered website analysis to predict your lead generation potential',
    type: 'website',
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-dark text-white">Loading...</div>}>
      <LeadScorePage />
    </Suspense>
  );
}