import { FadeUp, StaggerParent, StaggerChild } from "@/components/ui/Animate";

const outerPad = "px-6 md:px-[60px]";
const innerWide = "max-w-[1100px] mx-auto";

const signals = [
  {
    label: "No rip-and-replace",
    description: "Built on your existing tools and processes",
  },
  {
    label: "30-day first delivery",
    description: "First workflow live within 30 days of starting",
  },
  {
    label: "Fixed pricing",
    description: "Defined cost before work begins — no scope creep",
  },
];

export default function ApproachSection() {
  return (
    <section
      className={`${outerPad} py-24`}
      style={{ backgroundColor: "var(--color-bg-navy-deep)" }}
    >
      <div className={innerWide}>
        <FadeUp>
          <span className="label-eyebrow" style={{ marginBottom: "1.25rem" }}>
            How we work
          </span>
        </FadeUp>

        <FadeUp delay={0.06}>
          <h2
            style={{
              color: "var(--color-ink-inverted)",
              marginBottom: "var(--space-heading-body)",
            }}
          >
            We configure. We don&apos;t replace.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="body-on-navy"
            style={{ maxWidth: "680px", marginBottom: "var(--space-para-section)" }}
          >
            Your existing tools stay. We map how they should connect, build the integrations that make that happen, and hand over a system your team can run. No migration projects. No &ldquo;sunset your current stack&rdquo; conversations. No six-month implementations before you see anything working.
          </p>
        </FadeUp>

        <FadeUp delay={0.14}>
          <p
            className="body-on-navy"
            style={{ maxWidth: "680px", marginBottom: "var(--space-section-header-mb)" }}
          >
            We start with what you have, extend what&apos;s useful, and configure the rest. Most clients have their first automated workflow live within 30 days.
          </p>
        </FadeUp>

        {/* Three signals — understated rule-framed row */}
        <div
          style={{
            borderTop: "1px solid rgba(250,250,248,0.12)",
            borderBottom: "1px solid rgba(250,250,248,0.12)",
            paddingTop: "1.75rem",
            paddingBottom: "1.75rem",
          }}
        >
          <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {signals.map((signal) => (
              <StaggerChild key={signal.label}>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      fontWeight: 600,
                      color: "var(--color-ink-inverted)",
                      marginBottom: "0.375rem",
                      lineHeight: "var(--leading-body)",
                    }}
                  >
                    {signal.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-meta)",
                      fontWeight: 300,
                      color: "var(--color-ink-inverted-muted)",
                      marginBottom: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {signal.description}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </div>
    </section>
  );
}
