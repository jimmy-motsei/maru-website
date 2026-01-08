export {};

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    trackConversion?: (event: string, data?: Record<string, any>) => void;
  }
}
