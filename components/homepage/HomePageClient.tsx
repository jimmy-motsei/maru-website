"use client";

import { Hero } from "@/components/homepage/Hero";
import { ProblemGap } from "@/components/homepage/ProblemGap";
import { IntegrationProcess } from "@/components/homepage/IntegrationProcess";
import { Benefits } from "@/components/homepage/Benefits";
import { ServicesAccordion } from "@/components/homepage/ServicesAccordion";
import { Testimonials } from "@/components/homepage/Testimonials";
import { LeadMagnetForm } from "@/components/homepage/LeadMagnetForm";

export function HomePageClient() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ProblemGap />
      <IntegrationProcess />
      <Benefits />
      <ServicesAccordion />
      <Testimonials />
      <LeadMagnetForm />
    </main>
  );
}
