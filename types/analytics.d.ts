export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    trackConversion?: (event: string, data?: Record<string, unknown>) => void;
  }
}
