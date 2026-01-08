type EventParams = Record<string, string | number | boolean | undefined | null>;



/**
 * Safely tracks an event to Google Analytics 4 (and GTM dataLayer).
 * @param eventName The name of the event (e.g., 'generate_lead', 'sign_up')
 * @param params Optional parameters for the event
 */
export const trackEvent = (eventName: string, params?: EventParams) => {
  if (typeof window !== 'undefined') {
    // 1. Push to dataLayer (Standard GTM method)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params,
    });

    // 2. Fallback direct gtag call if implemented without GTM
    if (window.gtag) {
      window.gtag('event', eventName, params);
    }
    
    // Debug log for dev environment
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] Tracked: ${eventName}`, params);
    }
  }
};
