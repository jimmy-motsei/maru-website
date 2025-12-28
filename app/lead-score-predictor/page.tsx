import { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import RealResultsSection from './components/RealResultsSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import HowItWorksSection from './components/HowItWorksSection';
import PrimaryCTASection from './components/PrimaryCTASection';
import FAQSection from './components/FAQSection';

export const metadata: Metadata = {
  title: 'Is Your Website Leaking Leads? | Free Lead Score Predictor™',
  description: 'Most B2B websites convert at 1-2%. Top performers hit 5-6%. Get your free AI-powered lead generation score (0-100) in 2 minutes. Join 1,247+ companies.',
  keywords: 'lead generation, B2B leads, website optimization, conversion rate, lead scoring, AI analysis, website audit',
  openGraph: {
    title: 'Is Your Website Leaking Leads? | Free Lead Score',
    description: 'Most B2B websites convert at 1-2%. What\'s your number? Get your free lead score in 2 minutes.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Your Website Leaking Leads?',
    description: 'Get your free lead generation score in 2 minutes',
  }
};

/**
 * Lead Score Predictor™ - Redesigned UX Flow
 * 
 * New Flow: "Hook → Prove → Explain → Convert"
 * 
 * 1. Hero - Problem Hook (No CTA)
 *    "Is Your Website Leaking Leads?"
 *    Creates self-identification and curiosity
 * 
 * 2. Real Results (Social Proof FIRST!)
 *    Proof that tool works before explaining what it is
 *    Builds desire through concrete numbers
 * 
 * 3. What You'll Discover
 *    Value proposition now that interest is piqued
 *    "in 2 Minutes" reduces perceived effort
 * 
 * 4. How It Works
 *    Friction removal - shows simplicity
 *    Addresses objections proactively
 * 
 * 5. Primary CTA (SINGLE, CLEAR)
 *    Natural conversion point after full value understanding
 *    "Ready to See Your Score?" - question format
 * 
 * 6. FAQ (Safety Net)
 *    For remaining doubters
 *    Accordion format - doesn't clutter
 */
export default function LeadScorePredictorPage() {
  return (
    <main className="min-h-screen">
      {/* Section 1: Problem Hook - Creates curiosity, NO CTA */}
      <HeroSection />
      
      {/* Section 2: Social Proof - Prove it works BEFORE explaining */}
      <RealResultsSection />
      
      {/* Section 3: Value Proposition - What they'll get */}
      <WhatYouGetSection />
      
      {/* Section 4: Friction Removal - How easy it is */}
      <HowItWorksSection />
      
      {/* Section 5: Primary CTA - SINGLE conversion point */}
      <PrimaryCTASection />
      
      {/* Section 6: FAQ - Handle remaining objections */}
      <FAQSection />
    </main>
  );
}
