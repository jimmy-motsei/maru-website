/**
 * Meta Pixel custom events
 * Call these alongside form submissions and assessment interactions.
 * Safe to call even if Pixel isn't installed — checks for fbq first.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function pixelAssessmentStart(toolType: string) {
  window.fbq?.('trackCustom', 'AssessmentStart', { tool_type: toolType });
}

export function pixelAssessmentComplete(toolType: string, score?: number) {
  window.fbq?.('trackCustom', 'AssessmentComplete', { tool_type: toolType, score });
}

export function pixelLeadFormSubmit(source: string) {
  window.fbq?.('track', 'Lead', { content_name: source });
}
