'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface JourneyEvent {
  event: string;
  page: string;
  timestamp: number;
  metadata?: Record<string, any>;
}

export function JourneyAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views with journey context
    const trackPageView = () => {
      const journeyData: JourneyEvent = {
        event: 'page_view',
        page: pathname,
        timestamp: Date.now(),
        metadata: {
          referrer: document.referrer,
          utm_source: searchParams.get('utm_source'),
          utm_medium: searchParams.get('utm_medium'),
          utm_campaign: searchParams.get('utm_campaign'),
        }
      };

      // Send to analytics API
      fetch('/api/analytics/journey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(journeyData),
      }).catch(console.error);
    };

    trackPageView();
  }, [pathname, searchParams]);

  // Track assessment starts
  const trackAssessmentStart = (toolType: string) => {
    const journeyData: JourneyEvent = {
      event: 'assessment_start',
      page: pathname,
      timestamp: Date.now(),
      metadata: { tool_type: toolType }
    };

    fetch('/api/analytics/journey', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(journeyData),
    }).catch(console.error);
  };

  // Track assessment completions
  const trackAssessmentComplete = (toolType: string, score?: number) => {
    const journeyData: JourneyEvent = {
      event: 'assessment_complete',
      page: pathname,
      timestamp: Date.now(),
      metadata: { tool_type: toolType, score }
    };

    fetch('/api/analytics/journey', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(journeyData),
    }).catch(console.error);
  };

  // Track CTA clicks
  const trackCTAClick = (ctaType: string, destination: string) => {
    const journeyData: JourneyEvent = {
      event: 'cta_click',
      page: pathname,
      timestamp: Date.now(),
      metadata: { cta_type: ctaType, destination }
    };

    fetch('/api/analytics/journey', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(journeyData),
    }).catch(console.error);
  };

  // Expose tracking functions globally
  useEffect(() => {
    (window as any).trackJourney = {
      assessmentStart: trackAssessmentStart,
      assessmentComplete: trackAssessmentComplete,
      ctaClick: trackCTAClick,
    };
  }, []);

  return null; // This component doesn't render anything
}

// Hook for easy tracking in components
export function useJourneyTracking() {
  const pathname = usePathname();

  const trackEvent = (event: string, metadata?: Record<string, any>) => {
    const journeyData: JourneyEvent = {
      event,
      page: pathname,
      timestamp: Date.now(),
      metadata,
    };

    fetch('/api/analytics/journey', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(journeyData),
    }).catch(console.error);
  };

  return { trackEvent };
}