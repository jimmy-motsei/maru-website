import { FadeUp } from "@/components/ui/Animate";

const outerPad = "px-6 md:px-[60px]";
const innerNarrow = "max-w-[720px] mx-auto";

export default function OperationalGap() {
  return (
    <section
      className={`${outerPad} py-24`}
      style={{ backgroundColor: "var(--color-bg-canvas)" }}
    >
      <div className={innerNarrow}>
        <FadeUp>
          <h2 style={{ marginBottom: "var(--space-heading-body)" }}>
            The gap is always the same.
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
            Your CRM holds your clients. Your accounting system holds your invoices. Your spreadsheet holds the stuff that doesn&apos;t fit either. And somewhere between all three, someone on your team is copying data from one place to another — every day, without question, because that&apos;s just how it works. It doesn&apos;t have to.
          </p>
        </FadeUp>

        <FadeUp delay={0.14}>
          <blockquote
            style={{
              borderLeft: "4px solid var(--color-cyan)",
              paddingLeft: "1.5rem",
              margin: 0,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h3-serif)",
                fontWeight: 300,
                lineHeight: "var(--leading-subheading)",
                color: "var(--color-ink-primary)",
                letterSpacing: "var(--tracking-tight)",
                fontStyle: "italic",
                marginBottom: "0.75rem",
              }}
            >
              &ldquo;Most businesses don&apos;t have a technology problem. They have a connection problem. The tools exist. The workflows between them don&apos;t.&rdquo;
            </p>
            <cite
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "var(--text-body-sm)",
                color: "var(--color-ink-tertiary)",
                fontStyle: "normal",
                display: "block",
              }}
            >
              — Jimmy Motsei, Founder, Maru Online
            </cite>
          </blockquote>
        </FadeUp>
      </div>
    </section>
  );
}
