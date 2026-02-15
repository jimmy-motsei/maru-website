# Knowledge Removal Inventory

Scope: identify every Knowledge surface (`/knowledge`) and define required action before deletion.

| Item type | File path | What it does | Change needed |
|---|---|---|---|
| route | `/Users/ramoloimotsei/maru-website/app/knowledge/page.tsx` | Root Knowledge hub route (`/knowledge`). | `delete` route file. |
| route | `/Users/ramoloimotsei/maru-website/app/knowledge/**/page.tsx` | All nested Knowledge category/article routes under `/knowledge/*`. | `delete` all nested routes. |
| route-support | `/Users/ramoloimotsei/maru-website/app/knowledge/ai-adoption-south-african-smbs/AIAdoptionContent.tsx` | Article content module used only by Knowledge route. | `delete` if unused after route removal. |
| route-support | `/Users/ramoloimotsei/maru-website/app/knowledge/genai-adoption-smbs-2025/GenAIAdoptionContent.tsx` | Article content module used only by Knowledge route. | `delete` if unused after route removal. |
| nav (header + mobile menu) | `/Users/ramoloimotsei/maru-website/components/layout/Header.tsx` | “Knowledge Hub” appears in main menu groups. | `update` remove menu item and any group logic relying on that href. |
| nav/footer data | `/Users/ramoloimotsei/maru-website/data/footer-navigation.tsx` | Footer navigation includes `Resources -> /knowledge`. | `update` replace/remove `/knowledge` entry. |
| homepage/section CTA source | `/Users/ramoloimotsei/maru-website/components/sections/News.tsx` | Teaser links and “View All” link point to Knowledge routes. (Not currently mounted on live homepage, but still site code.) | `delete` component or `update` all links away from `/knowledge`. Prefer `delete` if unused. |
| content card component | `/Users/ramoloimotsei/maru-website/components/ui/ArticleCard.tsx` | Card links to `/knowledge/${slug}` and depends on article data set. | `delete` if unused after Knowledge removal; otherwise `update` target route. |
| sidebar component | `/Users/ramoloimotsei/maru-website/components/ui/CategorySidebar.tsx` | Category links anchor into `/knowledge#...`. | `delete` if no longer used elsewhere. |
| docs layout component | `/Users/ramoloimotsei/maru-website/components/docs/DocLayout.tsx` | Knowledge doc chrome + “Back to Knowledge Base” links. | `delete` if only used by removed routes. |
| docs page component | `/Users/ramoloimotsei/maru-website/components/docs/KnowledgeBaseContent.tsx` | Renders knowledge hub grid/search and internal `/knowledge/*` links. | `delete` with route removal. |
| docs search component | `/Users/ramoloimotsei/maru-website/components/docs/KnowledgeSearch.tsx` | Hardcoded searchable docs pointing to `/knowledge/*`. | `delete` with route removal. |
| docs support components | `/Users/ramoloimotsei/maru-website/components/docs/TableOfContents.tsx` | TOC used across knowledge doc pages. | `delete` if unused after route removal. |
| docs support components | `/Users/ramoloimotsei/maru-website/components/docs/ContentComponents.tsx` | Callout/CodeBlock/Step/TOC helpers used by knowledge doc pages. | `delete` if unused after route removal. |
| data/content collection | `/Users/ramoloimotsei/maru-website/data/articles.ts` | Knowledge article/category catalog used by Knowledge UI components. | `delete` if no remaining consumers after cleanup. |
| SEO sitemap | `/Users/ramoloimotsei/maru-website/app/sitemap.ts` | Explicitly emits `/knowledge` in sitemap entries. | `update` remove `/knowledge` entry and any knowledge URLs. |
| SEO robots | `/Users/ramoloimotsei/maru-website/app/robots.ts` | References sitemap only; no direct knowledge paths. | `review` no required edit unless sitemap behavior changes. |
| redirects/routing safety | `/Users/ramoloimotsei/maru-website/next.config.ts` | No redirect rules currently defined. | `update` add redirects for `/knowledge` and `/knowledge/:path*` (recommended safety net). |
| tests (visual) | `/Users/ramoloimotsei/maru-website/tests/visual/routes.spec.ts` | Current suite does not cover `/knowledge`. | `no-op` for route deletion; keep tests as-is unless adding redirect assertions. |
| tests baselines | `/Users/ramoloimotsei/maru-website/tests/visual/__screenshots__/routes.spec.ts/*.png` | Baselines for `/`, `/services`, service slug, `/contact`; none for `/knowledge`. | `no-op` unless global nav/footer diffs require baseline refresh. |
| dormant backup files | `/Users/ramoloimotsei/maru-website/app/page.backup.tsx` | References `News` section that links to `/knowledge`. Not an active route file. | `update` or `delete` to remove stale knowledge traces in repository. |
| dormant backup files | `/Users/ramoloimotsei/maru-website/app/page.original.tsx` | References `News` section that links to `/knowledge`. Not an active route file. | `update` or `delete` to remove stale knowledge traces in repository. |
| CMS schema (review) | `/Users/ramoloimotsei/maru-website/sanity/schemaTypes/post.ts` | Generic post schema; not directly tied to `/knowledge` route path. | `review` keep if used for non-knowledge CMS content; remove only if truly knowledge-only. |

## Notes

- Broad repo search confirms no `/knowledge` references in active Playwright route coverage.
- Primary risk areas after deletion: header/footer links, sitemap entry, and orphaned component imports from removed knowledge pages.
- Redirect decision proposal: add a minimal fallback in `next.config.ts`:
  - `/knowledge` -> `/services`
  - `/knowledge/:path*` -> `/services`
