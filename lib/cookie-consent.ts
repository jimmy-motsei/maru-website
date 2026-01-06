'use client';
import { useState, useEffect } from 'react';

export const COOKIE_CONSENT_KEY = 'maru-cookie-consent';
export const COOKIE_CONSENT_VERSION = 1;

export interface CookieConsentState {
  version: number;
  categories: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
  };
  updatedAt: string;
}

export const DEFAULT_CONSENT: CookieConsentState = {
  version: COOKIE_CONSENT_VERSION,
  categories: {
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  },
  updatedAt: new Date().toISOString(),
};

export const saveConsent = (categories: any) => {
  if (typeof window === 'undefined') return;
  const state = { version: COOKIE_CONSENT_VERSION, categories, updatedAt: new Date().toISOString() };
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(state));
  window.dispatchEvent(new Event('cookie-consent-updated'));
};

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getStored = () => {
      try {
        const item = localStorage.getItem(COOKIE_CONSENT_KEY);
        return item ? JSON.parse(item) : null;
      } catch { return null; }
    };
    setConsent(getStored());
    setLoaded(true);
    const handler = () => setConsent(getStored());
    window.addEventListener('cookie-consent-updated', handler);
    return () => window.removeEventListener('cookie-consent-updated', handler);
  }, []);

  return { consent, loaded };
};
