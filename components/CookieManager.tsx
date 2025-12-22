'use client';

import Script from 'next/script';
import { useCookieConsent } from '@/lib/cookie-consent';

// HubSpot Portal ID
const HUBSPOT_PORTAL_ID = "146669350";

export default function CookieManager() {
  const { consent } = useCookieConsent();

  if (!consent) return null;

  return (
    <>
      {/* Marketing / CRM Scripts */}
      {consent.categories.marketing && (
        <Script
          id="hs-script-loader"
          src={`//js-eu1.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
          strategy="afterInteractive"
        />
      )}

      {/* Analytics Scripts (Placeholder for future use) */}
      {consent.categories.analytics && (
        <>
          {/* Add GA4 or other analytics here in the future */}
        </>
      )}
    </>
  );
}
