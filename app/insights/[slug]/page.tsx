import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticle, getArticleSlugs, Article, Section } from "../articles";

// ─── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} | Maru Online`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

// ─── Section renderer ──────────────────────────────────────────────────────────

function renderSection(section: Section, idx: number) {
  switch (section.type) {
    case "paragraph":
      return (
        <p key={idx} className="article-body">
          {section.text}
        </p>
      );

    case "heading":
      return (
        <h2 key={idx} className="article-h2">
          {section.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 key={idx} className="article-h3">
          {section.text}
        </h3>
      );

    case "list":
      return (
        <ul key={idx} className="article-list">
          {(section.items ?? []).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div key={idx} className="article-callout">
          {section.label && (
            <p className="article-callout-label label-eyebrow">{section.label}</p>
          )}
          <p className="article-callout-text">{section.text}</p>
        </div>
      );

    case "quote":
      return (
        <blockquote key={idx} className="article-quote">
          <p className="article-quote-text">"{section.text}"</p>
          {section.label && (
            <cite className="article-quote-cite">{section.label}</cite>
          )}
        </blockquote>
      );

    case "divider":
      return <hr key={idx} className="rule my-8" />;

    default:
      return null;
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function InsightArticlePage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const articleData = getArticle(slug);
  if (!articleData) notFound();
  const article = articleData!;

  return (
    <>
      {/* ── Inline styles for article typography ─────────────────────────── */}
      <style>{`
        .article-hero {
          background-color: var(--color-bg-navy-deep);
          padding-top: clamp(120px, 18vh, 160px);
          padding-bottom: clamp(48px, 8vh, 80px);
        }
        .article-meta-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .article-category {
          display: inline-block;
          background: rgba(61,184,198,0.15);
          color: var(--color-cyan);
          font-family: var(--font-body), sans-serif;
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          padding: 3px 10px;
          border-radius: 4px;
        }
        .article-date-read {
          font-family: var(--font-body), sans-serif;
          font-size: 0.75rem;
          color: var(--color-ink-inverted-muted);
          letter-spacing: 0.02em;
        }
        .article-title {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 3rem);
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--color-ink-inverted);
          margin-bottom: 20px;
        }
        .article-excerpt {
          font-family: var(--font-body), sans-serif;
          font-size: 1.125rem;
          font-weight: 300;
          line-height: 1.7;
          color: var(--color-ink-inverted-muted);
          max-width: 680px;
        }
        .article-image-wrap {
          width: 100%;
          aspect-ratio: 16/7;
          position: relative;
          overflow: hidden;
          background: var(--color-bg-tertiary);
        }
        .article-body-wrap {
          background: var(--color-bg-primary);
          padding-top: clamp(48px, 8vh, 72px);
          padding-bottom: clamp(64px, 10vh, 100px);
        }
        .article-prose {
          max-width: 680px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .article-body {
          font-family: var(--font-body), sans-serif;
          font-size: 1.125rem;
          font-weight: 400;
          line-height: 1.8;
          color: var(--color-ink-secondary);
          margin-bottom: 1.5rem;
        }
        .article-h2 {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(1.25rem, 2.5vw, 1.75rem);
          font-weight: 500;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--color-ink-primary);
          margin-top: 3rem;
          margin-bottom: 1rem;
        }
        .article-h3 {
          font-family: var(--font-body), sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: var(--color-ink-primary);
          margin-top: 2rem;
          margin-bottom: 0.5rem;
        }
        .article-list {
          font-family: var(--font-body), sans-serif;
          font-size: 1.0625rem;
          line-height: 1.75;
          color: var(--color-ink-secondary);
          padding-left: 0;
          list-style: none;
          margin-bottom: 1.5rem;
        }
        .article-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .article-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-cyan);
          flex-shrink: 0;
        }
        .article-callout {
          background: var(--color-bg-canvas);
          border-left: 3px solid var(--color-cyan);
          border-radius: 0 8px 8px 0;
          padding: 20px 24px;
          margin: 2rem 0;
        }
        .article-callout-label {
          color: var(--color-cyan);
          margin-bottom: 8px;
        }
        .article-callout-text {
          font-family: var(--font-body), sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: var(--color-ink-secondary);
          margin: 0;
        }
        .article-quote {
          border-left: 3px solid var(--color-gold);
          padding: 20px 24px;
          margin: 2.5rem 0;
          background: var(--color-gold-light);
          border-radius: 0 8px 8px 0;
        }
        .article-quote-text {
          font-family: var(--font-display), sans-serif;
          font-size: 1.25rem;
          font-weight: 300;
          line-height: 1.6;
          color: var(--color-ink-primary);
          font-style: italic;
          margin-bottom: 12px;
        }
        .article-quote-cite {
          font-family: var(--font-body), sans-serif;
          font-size: 0.875rem;
          color: var(--color-ink-tertiary);
          font-style: normal;
        }
        .article-cta-strip {
          background: var(--color-bg-navy);
          padding: clamp(40px, 6vh, 64px) 24px;
          margin-top: clamp(48px, 8vh, 80px);
        }
        .article-cta-inner {
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .article-cta-heading {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(1.25rem, 2.5vw, 1.75rem);
          font-weight: 500;
          line-height: 1.25;
          color: var(--color-ink-inverted);
          margin: 0;
        }
        .article-cta-body {
          font-family: var(--font-body), sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: var(--color-ink-inverted-muted);
          margin: 0;
        }
        .article-cta-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .btn-cyan {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--color-cyan);
          color: var(--color-bg-navy-deep);
          font-family: var(--font-body), sans-serif;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 12px 24px;
          border-radius: 4px;
          text-decoration: none;
          transition: background 0.2s ease;
        }
        .btn-cyan:hover { background: var(--color-cyan-dark); }
        .btn-ghost-white {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          color: var(--color-ink-inverted);
          font-family: var(--font-body), sans-serif;
          font-size: 0.8125rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 12px 24px;
          border: 1px solid rgba(250,250,248,0.25);
          border-radius: 4px;
          text-decoration: none;
          transition: border-color 0.2s ease;
        }
        .btn-ghost-white:hover { border-color: rgba(250,250,248,0.6); }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body), sans-serif;
          font-size: 0.8125rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-ink-inverted-muted);
          text-decoration: none;
          margin-bottom: 32px;
          transition: color 0.2s ease;
        }
        .back-link:hover { color: var(--color-ink-inverted); }
        @media (max-width: 640px) {
          .article-prose { padding: 0 20px; }
        }
      `}</style>

      <main>
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="article-hero px-6 md:px-[60px]">
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <Link href="/insights" className="back-link">
              ← Back to Insights
            </Link>
            <div className="article-meta-row">
              <span className="article-category">{article.category}</span>
              <span className="article-date-read">
                {article.date} &nbsp;·&nbsp; {article.readTime}
              </span>
            </div>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-excerpt">{article.excerpt}</p>
          </div>
        </section>

        {/* ── Hero image ─────────────────────────────────────────────────── */}
        <div className="article-image-wrap">
          <Image
            src={article.image}
            alt={article.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* ── Body ───────────────────────────────────────────────────────── */}
        <section className="article-body-wrap">
          <article className="article-prose">
            {article.content.map((section, idx) =>
              renderSection(section, idx)
            )}
          </article>

          {/* ── CTA strip ──────────────────────────────────────────────── */}
          <div className="article-cta-strip">
            <div className="article-cta-inner">
              <p className="article-cta-heading">
                Reading about integration gaps is one thing. Finding yours is another.
              </p>
              <p className="article-cta-body">
                The diagnostic applies these patterns to your business — your tools,
                your workflows, your revenue gaps. R4,500. Delivered within 48 hours.
              </p>
              <div className="article-cta-actions">
                <Link href="/operations-diagnostic" className="btn-cyan">
                  Start your diagnostic
                </Link>
                <Link href="/insights" className="btn-ghost-white">
                  More articles →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
