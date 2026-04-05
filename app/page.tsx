import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Maru Online | AI Implementation Consultancy",
  description:
    "We help businesses cut operating costs by building AI-powered workflows where it matters most.",
};

export default function Home() {
  return (
    <section className="px-6 md:px-[60px] pt-28 pb-24">
      <div className="max-w-[900px] mx-auto">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink-primary leading-tight mb-6">
          You&apos;ve invested in AI tools. They should be paying for themselves
          by now.
        </h1>
        <p className="font-body text-lg md:text-xl text-ink-secondary max-w-[680px] mb-10">
          We audit what you have, fix what&apos;s broken between your systems,
          and build the workflows that turn your AI investment into measurable
          cost savings.
        </p>
        <Button href="/contact" variant="primary">
          Start with a diagnostic — R4,500
        </Button>
      </div>
    </section>
  );
}
