/**
 * UTM Tracking Utility
 * Captures UTM parameters from the URL and persists them in sessionStorage
 * so they survive page navigation before a form is submitted.
 */

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const;
export type UtmKey = typeof UTM_KEYS[number];
export type UtmData = Record<UtmKey, string>;

/**
 * Read UTMs from the current URL and save any present ones to sessionStorage.
 * Call this once on page load (in JourneyAnalytics or root layout).
 * Existing values are NOT overwritten — first touch wins.
 */
export function captureUtmsFromUrl(): void {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value && !sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, value);
    }
  });
}

/**
 * Retrieve all stored UTMs from sessionStorage.
 * Returns 'direct' for any key that was never set.
 */
export function getStoredUtms(): UtmData {
  if (typeof window === 'undefined') {
    return { utm_source: 'direct', utm_medium: 'direct', utm_campaign: 'direct', utm_content: 'direct' };
  }
  return UTM_KEYS.reduce((acc, key) => {
    acc[key] = sessionStorage.getItem(key) ?? 'direct';
    return acc;
  }, {} as UtmData);
}

/**
 * Clear UTMs from sessionStorage (call after a successful form submission).
 */
export function clearUtms(): void {
  if (typeof window === 'undefined') return;
  UTM_KEYS.forEach((key) => sessionStorage.removeItem(key));
}
