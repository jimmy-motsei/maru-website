'use client'

import { useEffect } from 'react'



interface AnalyticsTrackerProps {
    measurementId?: string;
}

export function AnalyticsTracker({ measurementId }: AnalyticsTrackerProps) {
  useEffect(() => {
    if (!measurementId) return;

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
          gtag('config', '${measurementId}');
        `;
        document.head.appendChild(inlineScript);
    }
  }, [measurementId]);

  return null; // This component renders nothing
}
