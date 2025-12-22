'use client';

import { useState, useEffect } from 'react';

export const COOKIE_CONSENT_KEY = 'maru-cookie-consent';
export const COOKIE_CONSENT_VERSION = 1;

export interface CookieConsentState {
  version: number;
  updatedAt: string;
  categories: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
  };
}

export const DEFAULT_CONSENT: CookieConsentState = {
  version: COOKIE_CONSENT_VERSION,
  updatedAt: new Date().toISOString(),
  categories: {
    necessary: true, // Always true
    analytics: false,
    marketing: false,
    functional: false,
  },
};

export const getStoredConsent = (): CookieConsentState | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored);
    
    // Check version validity logic here if needed (e.g., force re-consent on version bump)
    if (parsed.version !== COOKIE_CONSENT_VERSION) {
      return null;
    }

    return parsed;
  } catch (err) {
    return null;
  }
};

export const saveConsent = (categories: CookieConsentState['categories']) => {
  if (typeof window === 'undefined') return;

  const consentState: CookieConsentState = {
    version: COOKIE_CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    categories: {
      ...categories,
      necessary: true, // Enforce necessary is always true
    },
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentState));
  
  // Dispatch a custom event so other components can react immediately
  window.dispatchEvent(new Event('cookie-consent-updated'));
  
  return consentState;
};

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsentState | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Initial load
    const stored = getStoredConsent();
    setConsent(stored);
    setLoaded(true);

    // Listen for updates
    const handleUpdate = () => {
      setConsent(getStoredConsent());
    };

    window.addEventListener('cookie-consent-updated', handleUpdate);
    return () => window.removeEventListener('cookie-consent-updated', handleUpdate);
  }, []);

  return { consent, loaded, saveConsent };
};
