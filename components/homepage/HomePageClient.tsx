"use client";

import { useRef } from "react";
import { Hero } from "@/components/homepage/Hero";
import { ProblemGap } from "@/components/homepage/ProblemGap";
import { Benefits } from "@/components/homepage/Benefits";
import { ServicesAccordion } from "@/components/homepage/ServicesAccordion";
import { Testimonials } from "@/components/homepage/Testimonials";
import { LeadMagnetForm } from "@/components/homepage/LeadMagnetForm";

export function HomePageClient() {
  const problemRef = useRef<HTMLDivElement>(null);

  const scrollToProblem = () => {
    problemRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="overflow-hidden">
      <Hero onLearnMore={scrollToProblem} />
      <div ref={problemRef}>
        <ProblemGap />
      </div>
      <Benefits />
      <ServicesAccordion />
      <Testimonials />
      <LeadMagnetForm />
    </main>
  );
}
