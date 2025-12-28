import { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import HowItWorksSection from './components/HowItWorksSection';
import SocialProofSection from './components/SocialProofSection';
import PrimaryCTASection from './components/PrimaryCTASection';

export const metadata: Metadata = {
  title: 'Lead Score Predictor™ - Free B2B Website Analysis | Maru Online',
  description: 'Get a free AI-powered lead generation score (0-100) for your website. Discover exactly how to 5-6x your B2B leads in 90 days. Takes 2 minutes.',
  keywords: 'lead generation, B2B leads, website optimization, conversion rate, lead scoring, AI analysis',
  openGraph: {
    title: 'Lead Score Predictor™ - Free B2B Website Analysis',
    description: 'Discover your website\'s lead generation potential in 2 minutes',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lead Score Predictor™ - Free Analysis',
    description: 'Get your free lead generation score',
  }
};

export default function LeadScorePredictorPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatYouGetSection />
      <HowItWorksSection />
      <SocialProofSection />
      <PrimaryCTASection />
    </main>
  );
}