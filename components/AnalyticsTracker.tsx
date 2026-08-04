'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface AnalyticsTrackerProps {
    measurementId?: string;
}

/**
 * Conservative automation fingerprint. Three checks only — GA4's IAB spider list
 * does not catch headless Chrome on a datacentre IP, which was 29% of users.
 *
 * Deliberately narrow: a false positive means we stop measuring a real customer.
 * Hardened privacy browsers and assistive tech trip broad heuristics, so resist
 * adding more rules here.
 */
function isLikelyBot(): boolean {
  if (typeof navigator === 'undefined') return true;
  // Selenium/Puppeteer/Playwright announce themselves
  if ((navigator as Navigator & { webdriver?: boolean }).webdriver === true) return true;
  // Headless browsers frequently report an empty language list
  if (!navigator.languages || navigator.languages.length === 0) return true;
  // Explicit self-identifying agents
  if (/bot|crawler|spider|headless|monitor|preview|lighthouse/i.test(navigator.userAgent)) return true;
  return false;
}

/**
 * The single source of GA4 pageviews. ConversionTracking used to fire its own
 * page_view on every pathname change, double-counting every load; it no longer
 * does. gtag is configured with send_page_view:false so the initial load is not
 * counted twice here either — every view, first and subsequent, comes from the
 * explicit call below.
 */
export function AnalyticsTracker({ measurementId }: AnalyticsTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId) return;
    if (isLikelyBot()) return;

    // Load GA4 script dynamically if not already present
    // Note: In Next.js 14+ it is recommended to use @next/third-parties
    // But this is a manual fallback implementation as requested.
    const scriptId = 'google-analytics-script';

    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(script);

        const inlineScript = document.createElement('script');
        inlineScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `;
        document.head.appendChild(inlineScript);
    }
  }, [measurementId]);

  // One page_view per route, including client-side navigations — which the
  // one-shot gtag('config') never captured.
  useEffect(() => {
    if (!measurementId) return;
    if (isLikelyBot()) return;
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('event', 'page_view', {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [measurementId, pathname]);

  return null; // This component renders nothing
}
