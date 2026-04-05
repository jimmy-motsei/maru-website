import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Maru Online | AI Implementation Consultancy",
  description:
    "We help businesses cut operating costs by building AI-powered workflows where it matters most.",
};

export default function Home() {
  return (
    <>
      {/* ── Hero — navy full-viewport ──────────────────────────────────── */}
      <section
        className="min-h-screen flex items-center px-6 md:px-[60px] pt-28 pb-24"
        style={{ backgroundColor: '#1A3A5C' }}
      >
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            You&apos;ve invested in AI tools. They should be paying for
            themselves by now.
          </h1>
          <p
            className="font-body font-light text-lg md:text-xl max-w-[680px] mb-10"
            style={{ color: 'rgba(250, 250, 248, 0.75)' }}
          >
            We audit what you have, fix what&apos;s broken between your systems,
            and build the workflows that turn your AI investment into measurable
            cost savings.
          </p>
          <Button href="/contact" variant="primary">
            Start with a diagnostic — R4,500
          </Button>
        </div>
      </section>

      {/* ── White placeholder — subsequent sections ────────────────────── */}
      <section className="bg-white py-24 px-6 md:px-[60px]">
        <div className="max-w-[900px] mx-auto">
          <p className="text-ink-secondary text-sm">
            Homepage sections — coming next.
          </p>
        </div>
      </section>
    </>
  );
}
