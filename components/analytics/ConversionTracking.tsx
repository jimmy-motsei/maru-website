'use client';

import { useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ConversionEvent {
  event: string;
  page: string;
  timestamp: number;
  assessment_type?: string;
  step?: string;
}

/**
 * Events worth a serverless invocation. Everything else goes to GA4 only.
 * Two-thirds of traffic is bots; we were paying Vercel to log their pageviews
 * into a second store nobody reads.
 */
const PERSISTED_EVENTS = new Set([
  'assessment_completed',
  'email_captured',
  'whatsapp_click',
  'email_click',
  'booking_opened',
]);

export function ConversionTracking() {
  const pathname = usePathname();

  // NOTE: pageviews are NOT tracked here. AnalyticsTracker is the single
  // source — this component firing its own page_view double-counted every load.
  const trackEvent = useCallback((event: string, data: Partial<ConversionEvent> = {}) => {
    const eventData: ConversionEvent = {
      event,
      page: pathname,
      timestamp: Date.now(),
      ...data,
    };

    if (typeof window === 'undefined') return;

    // Google Analytics 4
    if (window.gtag) {
      window.gtag('event', event, {
        page_path: pathname,
        ...data,
      });
    }

    // Custom analytics endpoint — real conversions only.
    if (PERSISTED_EVENTS.has(event)) {
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      }).catch((err) => {
        console.error('Analytics failed:', err);
      });
    }
  }, [pathname]);

  // Expose tracking function globally. Re-runs on pathname change — the previous
  // [] dependency froze the closure on the first route, so every conversion was
  // attributed to whichever page the visitor happened to land on.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.trackConversion = trackEvent;
    }
  }, [trackEvent]);

  return null;
}

// Assessment-specific tracking hooks
export const useAssessmentTracking = (assessmentType: string) => {
  const trackStep = (step: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.trackConversion) {
      window.trackConversion('assessment_step', {
        assessment_type: assessmentType,
        step,
        ...data,
      });
    }
  };

  const trackCompletion = (score?: number) => {
    if (typeof window !== 'undefined' && window.trackConversion) {
      window.trackConversion('assessment_completed', {
        assessment_type: assessmentType,
        score,
      });
    }
  };

  const trackEmailCapture = (email: string) => {
    if (typeof window !== 'undefined' && window.trackConversion) {
      window.trackConversion('email_captured', {
        assessment_type: assessmentType,
        email_domain: email.split('@')[1],
      });
    }
  };

  return { trackStep, trackCompletion, trackEmailCapture };
};

// Global type declaration