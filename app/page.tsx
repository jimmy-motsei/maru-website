import { Metadata } from "next";
import Button from "@/components/ui/Button";
import CardNavy from "@/components/ui/CardNavy";
import CardGold from "@/components/ui/CardGold";
import ListItem from "@/components/ui/ListItem";
import ListGroup from "@/components/ui/ListGroup";
import Dodecahedron from "@/components/ui/Dodecahedron";

export const metadata: Metadata = {
  title: "Maru Online | AI Implementation Consultancy",
  description:
    "We help businesses cut operating costs by building AI-powered workflows where it matters most.",
};

// ─── Shared layout constants ─────────────────────────────────────────────────
const outerPad = "px-6 md:px-[60px]";
const inner    = "max-w-[900px] mx-auto";
const innerNarrow = "max-w-[720px] mx-auto";

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO — navy, full viewport, two-column
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] items-center px-6 md:px-10 xl:px-[60px] pt-24 pb-16 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-bg-navy)", minHeight: "100vh" }}
      >
        {/* Left — text */}
        <div className="max-w-[640px] py-16 lg:py-0">
          <span className="label-eyebrow">South Africa&apos;s AI Integration Consultancy</span>
          <h1>
            You&apos;ve invested in AI tools.<br />
            They should be paying for themselves by now.
          </h1>
          <p
            className="font-body font-light text-lg md:text-xl"
            style={{
              color: "var(--color-ink-inverted-muted)",
              marginBottom: "var(--space-section-header-mb)",
              lineHeight: "var(--leading-body-relaxed)",
              maxWidth: "520px",
            }}
          >
            We audit what you have, fix what&apos;s broken between your
            systems, and build the workflows that turn your AI investment into
            measurable cost savings.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Button href="/contact" variant="primary">
              Start with a diagnostic
            </Button>
            <Button href="/booking" variant="tertiary">
              Book a 20-minute call — no pitch
            </Button>
          </div>
        </div>

        {/* Right — dodecahedron, desktop only */}
        <div className="hidden lg:flex justify-center items-center h-full min-h-[480px]">
          <Dodecahedron className="w-[480px] h-[480px]" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — The problem
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={innerNarrow}>
          <h2>The problem</h2>

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
            Most businesses don&apos;t have an AI problem. They have an
            integration problem.
          </p>

          <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
            The tools work. The CRM tracks leads. The scheduling platform books
            appointments. The email platform sends follow-ups. But none of them
            talk to each other — and in the gaps between them, revenue
            disappears.
          </p>
          <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
            A lead comes in on a Friday afternoon and sits in an inbox until
            Monday. An appointment isn&apos;t confirmed and the patient
            doesn&apos;t show. A candidate applies, gets an automated
            acknowledgement, and never hears from anyone again. A conference
            speaker confirmation gets lost in an email chain three people deep.
          </p>
          <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
            These aren&apos;t technology failures. They&apos;re coordination
            failures that technology should be solving — and isn&apos;t, because
            nobody has connected the pieces.
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
            That&apos;s the work we do.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TESTIMONIAL 1 — AfrikaIkalafe
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-16`}
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className={inner}>
          <CardNavy label="Client" title="AfrikaIkalafe">
            <p>
              &ldquo;[AfrikaIkalafe MD quote about the discovery process and
              how quickly trust was built]&rdquo;
            </p>
            <p
              style={{
                marginTop: "0.75rem",
                marginBottom: 0,
                fontSize: "var(--text-meta)",
                color: "rgba(250,250,248,0.5)",
              }}
            >
              — Dr. [Name], AfrikaIkalafe ·{" "}
              <em>Placeholder — replace on receipt</em>
            </p>
          </CardNavy>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — Integration-first commitment
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={innerNarrow}>
          <h2>We start with what you have — not what we want to sell you</h2>

          <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
            Before we recommend a single new tool, we audit your existing
            stack. In most engagements, the tools aren&apos;t the problem. The
            connections between them are.
          </p>
          <p className="body-muted" style={{ marginBottom: "var(--space-para-section)" }}>
            We map what you have, identify the gaps, and quantify what those
            gaps are costing you — in Rands, specific to your business. Only
            when there&apos;s a genuine capability gap that your current
            systems cannot fill do we recommend something new. And when we do,
            we tell you exactly why.
          </p>
          <p className="body-muted" style={{ marginBottom: 0 }}>
            This is not a common approach in this industry. Most consultants
            arrive with a preferred stack and a commission structure to match.
            We arrive with a diagnostic.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 3 — How a Maru engagement works
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-canvas)" }}
      >
        <div className={inner}>
          <h2>How a Maru engagement works</h2>
          <p
            className="body-muted"
            style={{ marginBottom: "var(--space-section-header-mb)" }}
          >
            Four phases. Fixed scope. Fixed price. No surprises.
          </p>

          <ListGroup>
            <ListItem
              leader="Diagnose"
              body="A structured audit of your business, your tools, and your workflows. You receive a report that names your gaps and quantifies what they're costing you. This is where every engagement starts, without exception."
            />
            <ListItem
              leader="Design"
              body="We build a fixed-scope implementation plan based on what the diagnostic found. You know exactly what we're building and what it costs before you commit."
            />
            <ListItem
              leader="Build"
              body="We build it. Site infrastructure first if needed, then the automation layer on top. We don't build on broken foundations."
            />
            <ListItem
              leader="Launch and measure"
              body="Every engagement includes a 30-day measurement phase. We set a baseline before we build and track what changes. You get a results report, not just a handover document."
            />
          </ListGroup>

          <div style={{ marginTop: "var(--space-section-header-mb)" }}>
            <Button href="/process" variant="secondary">
              See how the process works
            </Button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TESTIMONIAL 2 — Seokane Inc
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-16`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={inner}>
          <CardNavy label="Client" title="Seokane Inc">
            <p>
              &ldquo;[Seokane Inc quote about quality of work and brand
              capture]&rdquo;
            </p>
            <p
              style={{
                marginTop: "0.75rem",
                marginBottom: 0,
                fontSize: "var(--text-meta)",
                color: "rgba(250,250,248,0.5)",
              }}
            >
              — [Name], Seokane Inc ·{" "}
              <em>Placeholder — replace on receipt</em>
            </p>
          </CardNavy>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4 — Who this is for
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className={inner}>
          <h2>This is built for businesses like yours if —</h2>

          <ListGroup>
            <ListItem
              leader="You've spent money on AI tools"
              body="and you're not seeing the return you expected."
            />
            <ListItem
              leader="Your team is still doing manually"
              body="what should have been automated six months ago."
            />
            <ListItem
              leader="You've tried to connect your systems yourself"
              body="and it hasn't stuck."
            />
            <ListItem
              leader="You're growing"
              body="and you know the current way of working won't scale — but you don't know where to start."
            />
            <ListItem
              leader="You want someone who will tell you honestly"
              body="what's broken, fix it, and show you the numbers that prove it."
            />
          </ListGroup>

          <p
            className="body-muted"
            style={{ marginTop: "var(--space-section-header-mb)", marginBottom: 0 }}
          >
            If that&apos;s where you are, the diagnostic is the right first
            step.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 5 — Where we work (sectors)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className={inner}>
          <h2>Where we work</h2>
          <p
            className="body-muted"
            style={{
              maxWidth: "640px",
              marginBottom: "var(--space-section-header-mb)",
            }}
          >
            We have tailored diagnostic frameworks for three sectors — which
            means we arrive knowing the right questions to ask, not learning
            your industry at your expense.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Medico legal",
                body: "Appointment scheduling, no-show reduction, insurer workflows, patient communication.",
              },
              {
                title: "HR and recruitment",
                body: "Application screening, candidate communication, time-to-shortlist, onboarding automation.",
              },
              {
                title: "Conference and events",
                body: "Speaker and sponsor coordination, registration workflows, post-event follow-up.",
              },
            ].map((sector) => (
              <CardGold key={sector.title} title={sector.title}>
                {sector.body}
              </CardGold>
            ))}
          </div>

          <p
            className="body-muted"
            style={{ marginTop: "2rem", marginBottom: 0, fontSize: "var(--text-meta)" }}
          >
            Working in a different sector? The diagnostic process applies
            broadly.{" "}
            <a
              href="/contact"
              style={{ color: "var(--color-cyan)" }}
              className="hover:underline"
            >
              Get in touch
            </a>{" "}
            and we&apos;ll tell you honestly whether we&apos;re the right fit.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TESTIMONIAL 3 — Sound Studio
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-16`}
        style={{ backgroundColor: "var(--color-bg-canvas)" }}
      >
        <div className={inner}>
          <CardNavy label="Client" title="Sound Studio, Johannesburg">
            <p>
              &ldquo;Since the site went live we&apos;ve been getting more
              business opportunities than before.&rdquo;
            </p>
            <p
              style={{
                marginTop: "0.75rem",
                marginBottom: 0,
                fontSize: "var(--text-meta)",
                color: "rgba(250,250,248,0.5)",
              }}
            >
              — Founder, Sound Studio (Johannesburg)
            </p>
          </CardNavy>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 6 — The diagnostic offer (final CTA)
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
          <span className="label-eyebrow">The diagnostic</span>
          <h2
            style={{
              color: "var(--color-ink-inverted)",
              border: "none",
              padding: 0,
              marginBottom: "var(--space-heading-body)",
            }}
          >
            The right place to start is knowing what&apos;s actually broken.
          </h2>

          <p className="body-on-navy" style={{ marginBottom: "var(--space-para-section)" }}>
            For R4,500 you get a structured diagnostic of your business — a
            sector-specific intake form, a verification call, and a written
            report delivered within 48 hours that maps your gaps, quantifies
            the cost, and tells you exactly what to fix first.
          </p>
          <p className="body-on-navy" style={{ marginBottom: "var(--space-para-section)" }}>
            If you proceed to a full engagement, the diagnostic fee offsets
            against the project cost. If you don&apos;t, you still walk away
            with a clear picture of where your business is losing money and
            what to do about it.
          </p>

          <hr
            className="rule"
            style={{
              background: "rgba(250,250,248,0.15)",
              marginBottom: "var(--space-para-section)",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body)",
              fontWeight: 600,
              color: "var(--color-ink-inverted)",
              letterSpacing: "0.01em",
              marginBottom: "var(--space-section-header-mb)",
            }}
          >
            There is no scenario where the diagnostic isn&apos;t worth the
            investment.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button href="/contact" variant="primary">
              Start with a diagnostic
            </Button>
            <Button href="/booking" variant="tertiary">
              Book a 20-minute call — no pitch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
