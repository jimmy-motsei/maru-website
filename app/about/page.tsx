import { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CardGold from "@/components/ui/CardGold";
import ListItem from "@/components/ui/ListItem";
import ListGroup from "@/components/ui/ListGroup";
import { FadeUp, StaggerParent, StaggerChild } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "About Maru Online | Jimmy Motsei — AI & Workflow Integration Consultant",
  description:
    "Twenty years building commercial operations in South African sport and business. Maru Online connects the systems growing businesses already have — so they run the way they should.",
};

const outerPad    = "px-6 md:px-[60px]";
const inner       = "max-w-[900px] mx-auto";
const innerWide   = "max-w-[1100px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";

export default function AboutPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO — navy
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`min-h-[70vh] flex items-center ${outerPad} pt-48 pb-32`}
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
        <div className={innerWide}>
          <FadeUp>
            <span className="label-eyebrow">About Maru Online</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1>
              Built by someone who&apos;s been<br />
              on the other side of the table.
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
              Jimmy Motsei — Founder, Maru Online
            </p>
          </FadeUp>
          <FadeUp delay={0.22}>
            <Button href="/contact" variant="primary">
              Start with the Operations Diagnostic
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
          <FadeUp><h2>Before Maru Online</h2></FadeUp>
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
              Before AI integration, before digital strategy, before Maru Online
              — there was Maru Sponsorship and Marketing.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
              In 2002 Jimmy co-founded it from scratch. No clients, no revenue,
              no guaranteed contracts. Within a year he had personally negotiated
              a R10 million per annum title sponsorship for the South African Open
              Golf Championship with South African Airways — a deal that grew to
              R28 million per annum over seven years. By 2007 the business was
              generating over R70 million annually, holding commercial rights to
              one of South Africa&apos;s most prestigious sporting events.
            </p>
            <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
              He was not an advisor on that business. He built it, owned it, ran
              it, negotiated the deals himself, managed the relationships,
              delivered the events, and was personally accountable when things went
              wrong — including a two-year legal battle to recover a full contract
              value from a Dubai World subsidiary after the global financial crisis.
              He recovered every rand.
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
              That background matters for one reason: Jimmy understands what it means
              to run a business where the outcomes are real, the stakes are personal,
              and someone has to be in the room making it happen.
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
          <FadeUp><h2>The pivot that became Maru Online</h2></FadeUp>
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
                  In 2014, Jimmy accompanied his wife to Barcelona while she
                  completed an MBA at the European University. EU labour regulations
                  prevented formal employment, but a Barcelona-based software company
                  made serious efforts to bring him on — efforts that planted a seed.
                </p>
                <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
                  He spent 18 months teaching business English to executives at IBM
                  Spain, Adecco and G4S Security while watching European businesses
                  run rings around South African competitors in one specific area:
                  their ability to connect their systems, automate their workflows,
                  and measure what was actually working.
                </p>
                <p className="body-muted" style={{ marginBottom: 0 }}>
                  When he returned to South Africa in 2016, he brought that
                  observation with him. Most SA SMEs had the same commercial
                  instincts and relationship-driven approach that had always
                  characterised the market — but they were leaving significant
                  revenue on the table because their operations weren&apos;t
                  connected. The tools existed. The integration didn&apos;t.
                  That gap is what Maru Online was built to close.
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
              Two decades of building and running commercial operations at board
              level — before the AI consultancy.
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
            <h2>How Jimmy works — and why it&apos;s different</h2>
            <p className="body-muted" style={{ marginBottom: "var(--space-section-header-mb)" }}>
              Two decades of commercial experience produce one instinct above all others: diagnose before you prescribe.
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <ListGroup>
              <ListItem
                leader="Diagnose before prescribing"
                body="Every Maru engagement starts with a structured diagnostic — not because it's a billable first step, but because building the wrong thing faster is still building the wrong thing."
              />
              <ListItem
                leader="Fixed scope, fixed price"
                body="The implementation fixes specifically what the diagnostic found. No open-ended engagements, no hourly billing, no scope additions mid-project."
              />
              <ListItem
                leader="30-day measurement"
                body="The measurement phase 30 days after launch shows you the numbers that prove it worked — or tells you honestly what needs adjusting."
              />
              <ListItem
                leader="Maximum five clients"
                body="Not as a positioning statement — as a practical commitment to doing the work properly. Every client gets his full attention, from diagnostic through to handover."
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
            <h2>What ten years of watching SA businesses operate leaves you</h2>
            <p
              className="body-muted"
              style={{ maxWidth: "580px", marginBottom: "var(--space-section-header-mb)" }}
            >
              Having worked across South African sport, entertainment, hospitality,
              digital and now AI integration — Jimmy brings something most
              consultants don&apos;t: pattern recognition from real conditions.
            </p>
          </FadeUp>
          <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerChild>
              <CardGold title="SA conditions, not US case studies">
                Load shedding, late payments, lean teams doing the work of three
                departments. The diagnostic frameworks are built around how SA
                businesses actually operate — not how a global platform assumes
                they do.
              </CardGold>
            </StaggerChild>
            <StaggerChild>
              <CardGold title="Audit before recommendation">
                Before we recommend anything, we map what you have and quantify
                what your gaps are costing you. Most consultants arrive with a
                preferred stack. We arrive with a diagnostic.
              </CardGold>
            </StaggerChild>
            <StaggerChild>
              <CardGold title="Independence at handover">
                Every system we build is documented and handed over to your team.
                An AI workflow that depends on its implementor to function is a
                liability, not an asset.
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
            <span className="label-eyebrow">Where to start</span>
            <h2
              style={{
                color: "var(--color-ink-inverted)",
                border: "none",
                padding: 0,
                marginBottom: "var(--space-heading-body)",
              }}
            >
              If you want clarity before you commit to anything.
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="body-on-navy" style={{ marginBottom: "var(--space-para-section)" }}>
              The Operations Diagnostic is where every engagement starts. Five questions online,
              a short follow-up call, and a written report delivered within 48 hours —
              specific to your business, with your numbers in it.
            </p>
            <p className="body-on-navy" style={{ marginBottom: "var(--space-para-section)" }}>
              If you proceed to a full engagement, the diagnostic fee offsets
              against the project cost. If you don&apos;t, you walk away with
              a clear picture of where the gaps are and exactly what to do about it.
            </p>
            <hr
              className="rule"
              style={{ background: "rgba(250,250,248,0.15)", marginBottom: "var(--space-para-section)" }}
            />
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h3-serif)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "var(--color-ink-inverted-muted)",
                lineHeight: "var(--leading-subheading)",
                letterSpacing: "var(--tracking-tight)",
                marginBottom: "0.5rem",
              }}
            >
              &ldquo;I don&apos;t advise from the sidelines. I build things
              and I&apos;m accountable for what they produce.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-meta)",
                fontWeight: 300,
                color: "rgba(250,250,248,0.45)",
                marginBottom: "var(--space-section-header-mb)",
              }}
            >
              — Jimmy Motsei
            </p>
          </FadeUp>
          <FadeUp delay={0.14}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button href="/contact" variant="primary">
                Start with the Operations Diagnostic
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
