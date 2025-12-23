'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ConversionEvent {
  event: string;
  page: string;
  timestamp: number;
  assessment_type?: string;
  step?: string;
}

export function ConversionTracking() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views
    trackEvent('page_view', { page: pathname });
  }, [pathname]);

  const trackEvent = (event: string, data: Partial<ConversionEvent> = {}) => {
    const eventData: ConversionEvent = {
      event,
      page: pathname,
      timestamp: Date.now(),
      ...data,
    };

    // Send to analytics (Google Analytics, Mixpanel, etc.)
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', event, {
          page_path: pathname,
          ...data,
        });
      }

      // Custom analytics endpoint
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      }).catch(() => {
        // Fail silently for analytics
      });
    }
  };

  // Expose tracking function globally
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.trackConversion = trackEvent;
    }
  }, []);

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
declare global {
  interface Window {
    trackConversion: (event: string, data?: Record<string, any>) => void;
    gtag: (...args: any[]) => void;
  }
}