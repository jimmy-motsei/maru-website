// Curated per-category cover images for Insights articles.
// One brand-controlled image per category — the bot picks by the article's
// category, so generated posts always get a fitting, on-brand cover without
// any external image API. Swap the files in /public/images/insights/categories/
// to refresh the visuals; keep the filenames stable.

export const INSIGHT_CATEGORIES = [
  'Integration',
  'Diagnostic',
  'Compliance',
  'Engagements',
  'Implementation',
  'Sector',
] as const

export type InsightCategory = (typeof INSIGHT_CATEGORIES)[number]

const CATEGORY_IMAGE: Record<InsightCategory, string> = {
  Integration: '/images/insights/categories/integration.png',
  Diagnostic: '/images/insights/categories/diagnostic.png',
  Compliance: '/images/insights/categories/compliance.png',
  Engagements: '/images/insights/categories/engagements.png',
  Implementation: '/images/insights/categories/implementation.png',
  Sector: '/images/insights/categories/sector.png',
}

const DEFAULT_IMAGE = '/images/insights/categories/default.png'

/** Resolve a cover image for an article from its category (with a safe fallback). */
export function categoryImage(category?: string | null): string {
  if (category && category in CATEGORY_IMAGE) {
    return CATEGORY_IMAGE[category as InsightCategory]
  }
  return DEFAULT_IMAGE
}
