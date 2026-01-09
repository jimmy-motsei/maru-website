export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Use fallback values during build if env vars are not set
// This prevents build failures while still requiring proper config at runtime
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'za64kmro'

export const useCdn = false

