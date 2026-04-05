import { Metadata } from "next";
import Button from "@/components/ui/Button";
import CardNavy from "@/components/ui/CardNavy";
import ListItem from "@/components/ui/ListItem";
import ListGroup from "@/components/ui/ListGroup";

export const metadata: Metadata = {
  title: "Maru Online | AI Implementation Consultancy",
  description:
    "We help businesses cut operating costs by building AI-powered workflows where it matters most.",
};

// ─── Shared layout constants ─────────────────────────────────────────────────
const outerPad = "px-6 md:px-[60px]";
const inner    = "max-w-[900px] mx-auto";

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO — navy, full viewport
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`min-h-screen flex items-center ${outerPad} pt-28 pb-24`}
        style={{ backgroundColor: "#1A3A5C" }}
      >
        <div className={inner}>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] mb-6">
            You&apos;ve invested in AI tools. They should be paying for
            themselves by now.
          </h1>
          <p
            className="font-body font-light text-lg md:text-xl max-w-[640px] mb-4"
            style={{ color: "rgba(250,250,248,0.75)" }}
          >
            We audit what you have, fix what&apos;s broken between your
            systems, and build the workflows that turn your AI investment into
            measurable cost savings.
          </p>
          <p
            className="font-body font-light text-sm mb-10"
            style={{ color: "rgba(250,250,248,0.5)" }}
          >
            Working with owner-managed businesses across medico legal, HR, and
            events — Johannesburg.
          </p>
          <Button href="/contact" variant="primary">
            Start with a diagnostic — R4,500
          </Button>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — The problem (no heading, flows from hero)
          ════════════════════════════════════════════════════════════════════ */}
      <section className={`bg-white ${outerPad} py-24`}>
        <div className={`${inner} max-w-[720px]`}>
          <p className="font-body font-light text-[17px] text-ink-secondary leading-[1.85] mb-6">
            Most businesses don&apos;t have an AI problem. They have an
            integration problem.
          </p>
          <p className="font-body font-light text-[15px] text-ink-secondary leading-[1.85] mb-6">
            The tools work. The CRM tracks leads. The scheduling platform books
            appointments. The email platform sends follow-ups. But none of them
            talk to each other — and in the gaps between them, revenue
            disappears.
          </p>
          <p className="font-body font-light text-[15px] text-ink-secondary leading-[1.85] mb-6">
            A lead comes in on a Friday afternoon and sits in an inbox until
            Monday. An appointment isn&apos;t confirmed and the patient
            doesn&apos;t show. A candidate applies, gets an automated
            acknowledgement, and never hears from anyone again. A conference
            speaker confirmation gets lost in an email chain three people deep.
          </p>
          <p className="font-body font-light text-[15px] text-ink-secondary leading-[1.85] mb-6">
            These aren&apos;t technology failures. They&apos;re coordination
            failures that technology should be solving — and isn&apos;t, because
            nobody has connected the pieces.
          </p>
          <p className="font-body font-semibold text-[15px] text-ink-primary">
            That&apos;s the work we do.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TESTIMONIAL 1 — AfrikaIkalafe (placeholder)
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-16`}
        style={{ backgroundColor: "#F5F4F0" }}
      >
        <div className={inner}>
          <CardNavy title="AfrikaIkalafe">
            <p>
              &ldquo;[AfrikaIkalafe MD quote about the discovery process and how
              quickly trust was built]&rdquo;
            </p>
            <p className="mt-4" style={{ color: "rgba(250,250,248,0.5)", fontSize: "13px" }}>
              — Dr. [Name], AfrikaIkalafe · <em>Placeholder — replace on receipt</em>
            </p>
          </CardNavy>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — Integration-first commitment
          ════════════════════════════════════════════════════════════════════ */}
      <section className={`bg-white ${outerPad} py-24`}>
        <div className={`${inner} max-w-[720px]`}>
          <h2 className="text-3xl md:text-4xl mb-8">
            We start with what you have — not what we want to sell you
          </h2>
          <p className="font-body font-light text-[15px] text-ink-secondary leading-[1.85] mb-6">
            Before we recommend a single new tool, we audit your existing stack.
            In most engagements, the tools aren&apos;t the problem. The
            connections between them are.
          </p>
          <p className="font-body font-light text-[15px] text-ink-secondary leading-[1.85] mb-6">
            We map what you have, identify the gaps, and quantify what those
            gaps are costing you — in Rands, specific to your business. Only
            when there&apos;s a genuine capability gap that your current systems
            cannot fill do we recommend something new. And when we do, we tell
            you exactly why.
          </p>
          <p className="font-body font-light text-[15px] text-ink-secondary leading-[1.85]">
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
        style={{ backgroundColor: "#F5F4F0" }}
      >
        <div className={inner}>
          <h2 className="text-3xl md:text-4xl mb-4">
            How a Maru engagement works
          </h2>
          <p className="font-body font-light text-[15px] text-ink-secondary mb-12">
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

          <div className="mt-12">
            <Button href="/process" variant="secondary">
              See how the process works
            </Button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TESTIMONIAL 2 — Seokane Inc (placeholder)
          ════════════════════════════════════════════════════════════════════ */}
      <section className={`bg-white ${outerPad} py-16`}>
        <div className={inner}>
          <CardNavy title="Seokane Inc">
            <p>
              &ldquo;[Seokane Inc quote about quality of work and brand
              capture]&rdquo;
            </p>
            <p className="mt-4" style={{ color: "rgba(250,250,248,0.5)", fontSize: "13px" }}>
              — [Name], Seokane Inc · <em>Placeholder — replace on receipt</em>
            </p>
          </CardNavy>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4 — Who this is for
          ════════════════════════════════════════════════════════════════════ */}
      <section
        className={`${outerPad} py-24`}
        style={{ backgroundColor: "#F5F4F0" }}
      >
        <div className={inner}>
          <h2 className="text-3xl md:text-4xl mb-12">
            This is built for businesses like yours if —
          </h2>

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

          <p className="font-body font-light text-[15px] text-ink-secondary mt-10">
            If that&apos;s where you are, the diagnostic is the right first
            step.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 5 — Where we work (sectors)
          ════════════════════════════════════════════════════════════════════ */}
      <section className={`bg-white ${outerPad} py-24`}>
        <div className={inner}>
          <h2 className="text-3xl md:text-4xl mb-6">Where we work</h2>
          <p className="font-body font-light text-[15px] text-ink-secondary max-w-[640px] mb-12">
            We have tailored diagnostic frameworks for three sectors — which
            means we arrive knowing the right questions to ask, not learning
            your industry at your expense.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E2E8F0]">
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
            ].map((sector, i) => (
              <div
                key={sector.title}
                className={`p-8 ${i < 2 ? "md:border-r border-[#E2E8F0]" : ""} ${i > 0 ? "border-t md:border-t-0 border-[#E2E8F0]" : ""}`}
              >
                <h3 className="font-body font-semibold text-[15px] text-[#1A3A5C] mb-3">
                  {sector.title}
                </h3>
                <p className="font-body font-light text-[14px] text-ink-secondary leading-[1.8]">
                  {sector.body}
                </p>
              </div>
            ))}
          </div>

          <p className="font-body font-light text-[14px] text-ink-tertiary mt-8">
            Working in a different sector? The diagnostic process applies
            broadly.{" "}
            <a
              href="/contact"
              className="text-cyan hover:underline transition-colors duration-150"
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
        style={{ backgroundColor: "#F5F4F0" }}
      >
        <div className={inner}>
          <CardNavy title="Sound Studio, Johannesburg">
            <p>
              &ldquo;Since the site went live we&apos;ve been getting more
              business opportunities than before.&rdquo;
            </p>
            <p className="mt-4" style={{ color: "rgba(250,250,248,0.5)", fontSize: "13px" }}>
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
        style={{ backgroundColor: "#1A3A5C" }}
      >
        <div className={`${inner} max-w-[720px]`}>
          <h2
            className="text-3xl md:text-4xl mb-8"
            style={{ color: "#FFFFFF" }}
          >
            The right place to start is knowing what&apos;s actually broken.
          </h2>
          <p
            className="font-body font-light text-[15px] leading-[1.85] mb-6"
            style={{ color: "rgba(250,250,248,0.75)" }}
          >
            For R4,500 you get a structured diagnostic of your business — a
            sector-specific intake form, a verification call, and a written
            report delivered within 48 hours that maps your gaps, quantifies the
            cost, and tells you exactly what to fix first.
          </p>
          <p
            className="font-body font-light text-[15px] leading-[1.85] mb-6"
            style={{ color: "rgba(250,250,248,0.75)" }}
          >
            If you proceed to a full engagement, the diagnostic fee offsets
            against the project cost. If you don&apos;t, you still walk away
            with a clear picture of where your business is losing money and what
            to do about it.
          </p>
          <p
            className="font-body font-semibold text-[15px] mb-10"
            style={{ color: "#FAFAF8" }}
          >
            There is no scenario where the diagnostic isn&apos;t worth the
            investment.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button href="/contact" variant="primary">
              Start with a diagnostic
            </Button>
            <a
              href="/booking"
              className="font-body font-light text-[13px] tracking-[0.08em] uppercase"
              style={{ color: "rgba(250,250,248,0.6)" }}
            >
              Or book a 20-minute call — no pitch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
