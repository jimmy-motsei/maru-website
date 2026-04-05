import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BriefForm from "./BriefForm";
import { FadeUp, StaggerParent, StaggerChild } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Insights | Maru Online",
  description:
    "Practical AI integration thinking for South African SMEs — no vendor fluff, no hype. Real patterns from real engagements.",
};

const outerPad    = "px-6 md:px-[60px]";
const inner       = "max-w-[900px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";

// ─── Article data ─────────────────────────────────────────────────────────────

const articles = [
  {
    slug:     "why-ai-tools-fail-sme",
    image:    "/images/insights/article-01.png",
    category: "Integration",
    title:    "Why AI tools fail South African SMEs — and it's not the tools",
    excerpt:  "Most AI tool failures in SMEs come down to one thing: the tools were implemented in isolation. The CRM doesn't know what the calendar is doing. The email platform doesn't know what the CRM recorded. Here's the pattern we see, and why it's fixable.",
    date:     "March 2026",
    featured: true,
  },
  {
    slug:     "what-a-diagnostic-actually-finds",
    image:    "/images/insights/article-02.png",
    category: "Diagnostic",
    title:    "What a Maru diagnostic actually finds",
    excerpt:  "We've run enough diagnostics to know the common failure patterns. This is what we find — in order of frequency — across medico legal, HR, and events businesses.",
    date:     "February 2026",
    featured: false,
  },
  {
    slug:     "popia-ai-what-smes-need-to-know",
    image:    "/images/insights/article-03.png",
    category: "Compliance",
    title:    "POPIA and AI: what South African SMEs actually need to do",
    excerpt:  "POPIA compliance in an AI context isn't about ticking a legal box — it's about designing your data flows correctly from the start. Most SMEs get this wrong because they add compliance after the fact.",
    date:     "February 2026",
    featured: false,
  },
  {
    slug:     "fixed-scope-vs-retainer",
    image:    "/images/insights/article-04.png",
    category: "Engagements",
    title:    "Fixed-scope vs retainer: how to think about AI implementation spend",
    excerpt:  "The question we get most often after a diagnostic: should we do this as a project or a retainer? The answer depends on what you're trying to fix and how stable your workflows are.",
    date:     "January 2026",
    featured: false,
  },
  {
    slug:     "automation-isnt-ai",
    image:    "/images/insights/article-05.png",
    category: "Integration",
    title:    "Automation isn't AI — and confusing them is costing you",
    excerpt:  "A Zapier workflow is not AI. A form that routes to an inbox is not AI. Before you spend on AI, it's worth knowing what you already have — and whether you're actually using it.",
    date:     "January 2026",
    featured: false,
  },
  {
    slug:     "the-handover-problem",
    image:    "/images/insights/article-06.png",
    category: "Implementation",
    title:    "The handover problem: why AI systems fail after the consultant leaves",
    excerpt:  "The most common failure mode in AI implementation isn't the build — it's what happens three months later when the business has to run the system without the people who built it.",
    date:     "December 2025",
    featured: false,
  },
  {
    slug:     "medico-legal-automation",
    image:    "/images/insights/article-07.png",
    category: "Sector",
    title:    "The three automations every medico legal practice should have",
    excerpt:  "No-show rates, insurer follow-up delays, and appointment confirmation gaps are the three most common revenue leaks in medico legal practices. All three are fixable with existing tools.",
    date:     "December 2025",
    featured: false,
  },
  {
    slug:     "ai-readiness-self-test",
    image:    "/images/insights/article-08.png",
    category: "Diagnostic",
    title:    "A self-test for AI readiness: five questions before you spend anything",
    excerpt:  "Before any AI investment, there are five questions your business needs to be able to answer. If you can't answer them, the investment will underperform — regardless of which tools you choose.",
    date:     "November 2025",
    featured: false,
  },
];

const featured    = articles.find((a) => a.featured)!;
const grid        = articles.filter((a) => !a.featured);
const categories  = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

// ─── Sub-components ───────────────────────────────────────────────────────────

function CategoryBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        display:         "inline-block",
        fontFamily:      "var(--font-body)",
        fontSize:        "var(--text-label)",
        fontWeight:      500,
        letterSpacing:   "var(--tracking-eyebrow)",
        textTransform:   "uppercase" as const,
        color:           "var(--color-cyan)",
        backgroundColor: "var(--color-cyan-light)",
        padding:         "3px 10px",
        borderRadius:    "3px",
      }}
    >
      {label}
    </span>
  );
}

function ArticleCard({
  article,
}: {
  article: (typeof articles)[number];
}) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group block"
      style={{
        backgroundColor: "var(--color-bg-primary)",
        border:          "1px solid var(--color-border-default)",
        borderRadius:    "8px",
        overflow:        "hidden",
        transition:      "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      {/* Image */}
      <div style={{ aspectRatio: "16/9", overflow: "hidden", backgroundColor: "var(--color-bg-navy-deep)" }}>
        <Image
          src={article.image}
          alt={article.title}
          width={600}
          height={338}
          style={{
            width:      "100%",
            height:     "100%",
            objectFit:  "cover",
            transition: "transform 0.4s ease",
          }}
          className="group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem" }}>
        <div style={{ marginBottom: "0.75rem" }}>
          <CategoryBadge label={article.category} />
        </div>

        <h3
          style={{
            fontFamily:    "var(--font-display)",
            fontSize:      "var(--text-h3-serif)",
            fontWeight:    600,
            color:         "var(--color-navy)",
            lineHeight:    "var(--leading-subheading)",
            letterSpacing: "var(--tracking-tight)",
            marginBottom:  "var(--space-para)",
            border:        "none",
            padding:       0,
            transition:    "color 0.2s ease",
          }}
          className="group-hover:text-[var(--color-cyan)]"
        >
          {article.title}
        </h3>

        <p
          style={{
            fontFamily:   "var(--font-body)",
            fontSize:     "var(--text-body-sm)",
            fontWeight:   300,
            color:        "var(--color-ink-secondary)",
            lineHeight:   "var(--leading-body)",
            marginBottom: "1rem",
          }}
        >
          {article.excerpt}
        </p>

        <p
          style={{
            fontFamily:    "var(--font-body)",
            fontSize:      "var(--text-meta)",
            fontWeight:    400,
            color:         "var(--color-ink-tertiary)",
            letterSpacing: "0.04em",
            margin:        0,
          }}
        >
          {article.date}
        </p>
      </div>
    </Link>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function InsightsPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`min-h-[50vh] flex items-center ${outerPad} pt-32 pb-20`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <div
          aria-hidden="true"
          style={{
            position:     "absolute",
            top:          "-120px",
            right:        "-120px",
            width:        "480px",
            height:       "480px",
            borderRadius: "50%",
            border:       "1px solid rgba(61,184,198,0.15)",
            pointerEvents: "none",
          }}
        />
        <div className={inner}>
          <FadeUp>
            <span className="label-eyebrow">Insights</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1>
              Practical AI thinking<br />
              for South African SMEs.
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p
              className="font-body font-light text-lg max-w-[560px]"
              style={{
                color:         "var(--color-ink-inverted-muted)",
                marginBottom:  0,
                lineHeight:    "var(--leading-body)",
              }}
            >
              No vendor fluff. No hype. Real patterns from real engagements —
              written for business owners, not developers.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FEATURED ARTICLE
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-16`}
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className={inner}>
          <FadeUp>
            <p
              style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "var(--text-label)",
                fontWeight:    500,
                letterSpacing: "var(--tracking-eyebrow)",
                textTransform: "uppercase",
                color:         "var(--color-ink-tertiary)",
                marginBottom:  "1.25rem",
              }}
            >
              Featured
            </p>

            <Link
              href={`/insights/${featured.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0"
              style={{
                backgroundColor: "var(--color-bg-primary)",
                border:          "1px solid var(--color-border-default)",
                borderRadius:    "8px",
                overflow:        "hidden",
              }}
            >
              {/* Image */}
              <div
                style={{
                  aspectRatio:     "4/3",
                  overflow:        "hidden",
                  backgroundColor: "var(--color-bg-navy-deep)",
                }}
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={720}
                  height={540}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                  className="group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding:        "2.5rem",
                  display:        "flex",
                  flexDirection:  "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <CategoryBadge label={featured.category} />
                </div>

                <h2
                  style={{
                    fontFamily:    "var(--font-display)",
                    fontSize:      "1.625rem",
                    fontWeight:    600,
                    color:         "var(--color-navy)",
                    lineHeight:    "var(--leading-subheading)",
                    letterSpacing: "var(--tracking-tight)",
                    marginBottom:  "1rem",
                    border:        "none",
                    padding:       0,
                    transition:    "color 0.2s ease",
                  }}
                  className="group-hover:text-[var(--color-cyan)]"
                >
                  {featured.title}
                </h2>

                <p
                  style={{
                    fontFamily:   "var(--font-body)",
                    fontSize:     "var(--text-body)",
                    fontWeight:   300,
                    color:        "var(--color-ink-secondary)",
                    lineHeight:   "var(--leading-body)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {featured.excerpt}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <p
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontSize:      "var(--text-meta)",
                      fontWeight:    400,
                      color:         "var(--color-ink-tertiary)",
                      letterSpacing: "0.04em",
                      margin:        0,
                    }}
                  >
                    {featured.date}
                  </p>
                  <span
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontSize:      "var(--text-label)",
                      fontWeight:    500,
                      letterSpacing: "var(--tracking-label)",
                      textTransform: "uppercase",
                      color:         "var(--color-cyan)",
                      transition:    "color 0.2s ease",
                    }}
                  >
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          ARTICLE GRID
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={inner}>
          <FadeUp>
            <h2>All articles</h2>

            {/* Category filter row */}
            <div
              style={{
                display:       "flex",
                flexWrap:      "wrap",
                gap:           "0.5rem",
                marginBottom:  "var(--space-section-header-mb)",
              }}
            >
              {categories.map((cat) => (
                <span
                  key={cat}
                  style={{
                    fontFamily:      "var(--font-body)",
                    fontSize:        "var(--text-label)",
                    fontWeight:      cat === "All" ? 600 : 400,
                    letterSpacing:   "var(--tracking-label)",
                    textTransform:   "uppercase",
                    color:           cat === "All" ? "var(--color-bg-primary)" : "var(--color-ink-secondary)",
                    backgroundColor: cat === "All" ? "var(--color-navy)" : "transparent",
                    border:          `1px solid ${cat === "All" ? "var(--color-navy)" : "var(--color-border-default)"}`,
                    borderRadius:    "4px",
                    padding:         "4px 12px",
                    cursor:          "default",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* Grid */}
          <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.map((article) => (
              <StaggerChild key={article.slug}>
                <ArticleCard article={article} />
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          THE MARU BRIEF — email capture
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-canvas)" }}
      >
        <div className={innerNarrow}>
          <FadeUp>
            <h2>The Maru Brief</h2>
            <p
              style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "var(--text-h3-serif)",
                fontWeight:    400,
                lineHeight:    "var(--leading-subheading)",
                color:         "var(--color-ink-primary)",
                letterSpacing: "var(--tracking-tight)",
                marginBottom:  "1.75rem",
              }}
            >
              One practical AI revenue insight for South African SMEs,
              fortnightly.
            </p>
            <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
              No vendor fluff. No sales pitch. Each edition covers one pattern
              we&apos;re seeing in real engagements — a failure mode, a fix, or
              a framework — explained in plain language for business owners, not
              developers.
            </p>

            <hr className="rule" style={{ marginBottom: "var(--space-para-section)" }} />
          </FadeUp>

          <FadeUp delay={0.08}>
            <BriefForm />
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FINAL CTA — navy
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <div
          aria-hidden="true"
          style={{
            position:      "absolute",
            bottom:        "-80px",
            left:          "-80px",
            width:         "320px",
            height:        "320px",
            borderRadius:  "50%",
            border:        "1px solid rgba(61,184,198,0.12)",
            pointerEvents: "none",
          }}
        />
        <div className={innerNarrow}>
          <FadeUp>
            <span className="label-eyebrow">Ready to act on it?</span>
            <h2
              style={{
                color:         "var(--color-ink-inverted)",
                border:        "none",
                padding:       0,
                marginBottom:  "var(--space-heading-body)",
              }}
            >
              Reading about integration gaps is one thing. Finding yours is another.
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="body-on-navy" style={{ marginBottom: "var(--space-para-section)" }}>
              The diagnostic takes the patterns in these articles and applies them
              specifically to your business — your tools, your workflows, your
              revenue gaps. R4,500. Delivered within 48 hours.
            </p>
            <hr
              className="rule"
              style={{ background: "rgba(250,250,248,0.15)", marginBottom: "var(--space-para-section)" }}
            />
          </FadeUp>
          <FadeUp delay={0.14}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button href="/contact" variant="primary">
                Start with a diagnostic
              </Button>
              <Button href="/booking" variant="tertiary">
                Book a 20-minute call — no pitch
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
