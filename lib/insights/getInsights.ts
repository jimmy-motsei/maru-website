import 'server-only'
import type { PortableTextBlock } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { categoryImage } from '@/lib/insights/categoryImages'

// ─── Shapes consumed by the Insights pages ──────────────────────────────────

export interface InsightListItem {
  slug: string
  title: string
  category: string
  excerpt: string
  date: string // formatted "Month YYYY"
  image: string
  featured: boolean
}

export interface InsightArticle extends InsightListItem {
  readTime: string
  body: PortableTextBlock[]
  sources: { title?: string; url?: string }[]
  seoTitle?: string
  seoDescription?: string
}

// Only published posts (publishedAt set and in the past). Drafts (drafts.*) are
// excluded automatically by the read client's "published" perspective.
const LIST_QUERY = `*[_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()]
  | order(publishedAt desc) {
    "slug": slug.current,
    title,
    "category": coalesce(category, "Integration"),
    "excerpt": coalesce(excerpt, ""),
    publishedAt
  }`

const ARTICLE_QUERY = `*[_type == "post" && slug.current == $slug && defined(publishedAt) && publishedAt <= now()][0]{
    "slug": slug.current,
    title,
    "category": coalesce(category, "Integration"),
    "excerpt": coalesce(excerpt, ""),
    publishedAt,
    "readTime": coalesce(readTime, "5 min read"),
    body,
    "sources": coalesce(sources, []),
    seoTitle,
    seoDescription
  }`

function formatDate(iso?: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-ZA', { month: 'long', year: 'numeric' })
}

/** Published posts, newest first. The newest is marked `featured`. */
export async function getInsightList(): Promise<InsightListItem[]> {
  const rows = await client.fetch<
    { slug: string; title: string; category: string; excerpt: string; publishedAt: string }[]
  >(LIST_QUERY, {}, { next: { revalidate: 600, tags: ['insights'] } })

  return rows.map((r, i) => ({
    slug: r.slug,
    title: r.title,
    category: r.category,
    excerpt: r.excerpt,
    date: formatDate(r.publishedAt),
    image: categoryImage(r.category),
    featured: i === 0,
  }))
}

export async function getInsightBySlug(slug: string): Promise<InsightArticle | null> {
  const r = await client.fetch<{
    slug: string
    title: string
    category: string
    excerpt: string
    publishedAt: string
    readTime: string
    body: PortableTextBlock[]
    sources: { title?: string; url?: string }[]
    seoTitle?: string
    seoDescription?: string
  } | null>(ARTICLE_QUERY, { slug }, { next: { revalidate: 600, tags: ['insights'] } })

  if (!r) return null
  return {
    slug: r.slug,
    title: r.title,
    category: r.category,
    excerpt: r.excerpt,
    date: formatDate(r.publishedAt),
    image: categoryImage(r.category),
    featured: false,
    readTime: r.readTime,
    body: r.body ?? [],
    sources: r.sources ?? [],
    seoTitle: r.seoTitle,
    seoDescription: r.seoDescription,
  }
}

/** Slugs for generateStaticParams. */
export async function getInsightSlugs(): Promise<string[]> {
  const rows = await client.fetch<{ slug: string }[]>(
    `*[_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()]{ "slug": slug.current }`,
    {},
    { next: { revalidate: 600, tags: ['insights'] } },
  )
  return rows.map((r) => r.slug)
}
