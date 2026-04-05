import { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CardGold from "@/components/ui/CardGold";
import ListItem from "@/components/ui/ListItem";
import ListGroup from "@/components/ui/ListGroup";
import { FadeUp, StaggerParent, StaggerChild } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "About | Maru Online",
  description:
    "Maru Online is an AI integration consultancy for South African SMEs. Founded by Jimmy Motsei with 20+ years in sales, marketing, and business systems.",
};

const outerPad    = "px-6 md:px-[60px]";
const inner       = "max-w-[900px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";

export default function AboutPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO — navy
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`min-h-[70vh] flex items-center ${outerPad} pt-32 pb-24`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            border: "1px solid rgba(61,184,198,0.15)",
            pointerEvents: "none",
          }}
        />
        <div className={inner}>
          <FadeUp>
            <span className="label-eyebrow">About Maru Online</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1>
              Built for the gap between<br />
              AI investment and AI results.
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p
              className="font-body font-light text-lg max-w-[600px]"
              style={{
                color: "var(--color-ink-inverted-muted)",
                marginBottom: "var(--space-section-header-mb)",
                lineHeight: "var(--leading-body)",
              }}
            >
              We are an AI integration consultancy built specifically for South
              African SMEs — connecting your tools to your workflows and your
              revenue targets in a way that holds.
            </p>
          </FadeUp>
          <FadeUp delay={0.22}>
            <Button href="/contact" variant="primary">
              Speak to the team
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — Why we exist
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={innerNarrow}>
          <FadeUp><h2>Why we exist</h2></FadeUp>
          <FadeUp delay={0.06}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h3-serif)",
                fontWeight: 400,
                lineHeight: "var(--leading-subheading)",
                color: "var(--color-ink-primary)",
                marginBottom: "1.75rem",
                letterSpacing: "var(--tracking-tight)",
              }}
            >
              Most businesses have invested in AI tools. The revenue impact
              isn&apos;t matching the spend.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
              CRMs with AI scoring, marketing platforms with automation, customer
              service bots, proposal generators — the tools are real and the spend
              is real. But for most SMEs, the results aren&apos;t. The gap between
              what AI promises and what it actually delivers in your business is
              exactly where we work.
            </p>
            <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
              AI integration fails not because the technology is wrong, but because
              it&apos;s implemented without understanding how a business actually
              runs. We bridge that gap — connecting your AI tools to your
              workflows, your team, and your revenue targets.
            </p>
            <hr className="rule" style={{ marginBottom: "var(--space-para-section)" }} />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body)",
                fontWeight: 600,
                color: "var(--color-ink-primary)",
                letterSpacing: "0.01em",
                margin: 0,
              }}
            >
              We solve your business problem — not your AI problem.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — The founder
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-canvas)" }}
      >
        <div className={inner}>
          <FadeUp><h2>The founder</h2></FadeUp>
          <FadeUp delay={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-14 items-start">
              {/* Portrait */}
              <div>
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid var(--color-border-default)",
                  }}
                >
                  <Image
                    src="/images/brand/founder.jpg"
                    alt="Jimmy Motsei, Founder of Maru Online"
                    width={160}
                    height={160}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h3-sans)",
                    fontWeight: 600,
                    color: "var(--color-navy)",
                    marginTop: "1rem",
                    marginBottom: "0.25rem",
                    letterSpacing: "var(--tracking-tight)",
                  }}
                >
                  Jimmy Motsei
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-label)",
                    fontWeight: 500,
                    letterSpacing: "var(--tracking-eyebrow)",
                    textTransform: "uppercase",
                    color: "var(--color-ink-tertiary)",
                  }}
                >
                  Founder
                </p>
              </div>

              {/* Bio */}
              <div>
                <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
                  Jimmy brings over 20 years of experience across sales, marketing,
                  sponsorship, and business systems. He founded Maru Sponsorship
                  &amp; Marketing in 2002, personally negotiating over R250m in
                  commercial value across sport and entertainment — including seven
                  consecutive SA Open Championship editions and three international
                  rights-holder deals.
                </p>
                <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
                  That track record matters here. Most AI implementations fail not
                  because the technology is wrong, but because the implementor
                  doesn&apos;t understand how a business actually runs. Jimmy does.
                  He has built and run commercial operations, managed enterprise
                  client relationships, and closed deals at board level. That
                  experience is what makes the diagnostic different.
                </p>
                <p className="body-muted" style={{ marginBottom: 0 }}>
                  He founded Maru Online to bring that same commercial discipline
                  to AI integration for South African SMEs — starting with what
                  the business needs, not what the technology can theoretically do.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 3 — Track record (stat cards)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={inner}>
          <FadeUp>
            <h2>Track record</h2>
            <p
              className="body-muted"
              style={{ maxWidth: "580px", marginBottom: "var(--space-section-header-mb)" }}
            >
              20+ years of building and running commercial operations — before the
              AI consultancy.
            </p>
          </FadeUp>

          <StaggerParent className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: "R250m+", label: "Commercial value personally negotiated" },
              { value: "7",      label: "Consecutive SA Open Championship editions" },
              { value: "22+",    label: "Years in sport & entertainment" },
              { value: "3",      label: "International rights-holder deals closed" },
            ].map((stat) => (
              <StaggerChild key={stat.label}>
                <div
                  style={{
                    border: "1px solid var(--color-border-default)",
                    borderRadius: "8px",
                    padding: "1.75rem 1.5rem",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.375rem",
                      fontWeight: 600,
                      color: "var(--color-navy)",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-meta)",
                      fontWeight: 400,
                      color: "var(--color-ink-tertiary)",
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4 — How we work
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className={inner}>
          <FadeUp>
            <h2>How we work</h2>
            <p className="body-muted" style={{ marginBottom: "var(--space-section-header-mb)" }}>
              Structured, not improvised. Every engagement follows the same path.
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <ListGroup>
              <ListItem
                leader="Audit"
                body="We map your existing tools, workflows, and the gaps between them. You get a written report that names exactly what's broken and what it's costing you."
              />
              <ListItem
                leader="Architect"
                body="We design a fixed-scope integration plan based on what the audit found. Fixed price, fixed deliverables — no scope creep."
              />
              <ListItem
                leader="Integrate"
                body="We build it. Site infrastructure first if needed, then the automation layer on top. We don't build on broken foundations."
              />
              <ListItem
                leader="Hand over"
                body="We build systems your team can own and run independently. An AI system that depends on its implementor to function is a liability, not an asset."
              />
            </ListGroup>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 5 — What makes us different (gold cards)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={inner}>
          <FadeUp>
            <h2>What makes us different</h2>
            <p
              className="body-muted"
              style={{ maxWidth: "580px", marginBottom: "var(--space-section-header-mb)" }}
            >
              Three things we do that most AI consultancies don&apos;t.
            </p>
          </FadeUp>
          <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerChild>
              <CardGold title="We start with audit, not tools">
                Before we recommend anything, we map what you have and quantify
                what your gaps are costing you. Most consultants arrive with a
                preferred stack. We arrive with a diagnostic.
              </CardGold>
            </StaggerChild>
            <StaggerChild>
              <CardGold title="We build for handover">
                Every system we build is documented and handed over to your team.
                We train whoever needs to run it. You should not need us to keep
                it working.
              </CardGold>
            </StaggerChild>
            <StaggerChild>
              <CardGold title="POPIA built in from day one">
                Compliance is not an afterthought. Every data touchpoint is
                designed with POPIA in mind before a line of code is written —
                not retrofitted after the fact.
              </CardGold>
            </StaggerChild>
          </StaggerParent>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 6 — Capacity + CTA (navy)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-navy)" }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            border: "1px solid rgba(61,184,198,0.12)",
            pointerEvents: "none",
          }}
        />
        <div className={innerNarrow}>
          <FadeUp>
            <span className="label-eyebrow">Capacity</span>
            <h2
              style={{
                color: "var(--color-ink-inverted)",
                border: "none",
                padding: 0,
                marginBottom: "var(--space-heading-body)",
              }}
            >
              We work with a maximum of five clients at any time.
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="body-on-navy" style={{ marginBottom: "var(--space-para-section)" }}>
              That limit is deliberate. Every integration gets our full attention —
              from the initial diagnostic through to handover and the 30-day
              measurement phase. We don&apos;t take on more work than we can do
              properly.
            </p>
            <p className="body-on-navy" style={{ marginBottom: "var(--space-para-section)" }}>
              If you&apos;re considering an engagement, the right first step is the
              diagnostic. It&apos;s fixed price, scoped, and gives you a clear
              picture of your situation regardless of whether you proceed further
              with us.
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
