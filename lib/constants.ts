/**
 * Design System Constants
 */

// Colors
export const COLORS = {
  CYAN_PRIMARY: '#22d3ee',
  CYAN_HOVER: '#1cb8cc',
  ACCENT: '#3db8c6',
  DARK: '#09121A',
} as const;

// Spacing
export const SPACING = {
  SECTION: 'py-20 md:py-32',
  SECTION_LARGE: 'py-24 lg:py-32',
} as const;

// Animation
export const ANIMATION = {
  EASE_CUSTOM: [0, 0, 0.3642, 1] as const,
} as const;

// API Rate Limits
export const RATE_LIMITS = {
  EMAIL: 5, // 5 emails per hour
  API: 100, // 100 requests per hour
} as const;
