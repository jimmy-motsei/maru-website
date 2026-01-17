"use client";

import { BrokenPlaybookHero } from "@/components/broken-playbook/BrokenPlaybookHero";
import { ProblemEducation } from "@/components/broken-playbook/ProblemEducation";
import { ThreeBreakPoints } from "@/components/broken-playbook/ThreeBreakPoints";
import { DiagnosticTools } from "@/components/broken-playbook/DiagnosticTools";
import { SMEMethodology } from "@/components/broken-playbook/SMEMethodology";
import { SocialProof } from "@/components/broken-playbook/SocialProof";
import { ServicesOverview } from "@/components/broken-playbook/ServicesOverview";
import { FinalCTA } from "@/components/broken-playbook/FinalCTA";

export default function Home() {
  return (
    <main>
      <BrokenPlaybookHero />
      <ProblemEducation />
      <ThreeBreakPoints />
      <DiagnosticTools />
      <SMEMethodology />
      <SocialProof />
      <ServicesOverview />
      <FinalCTA />
    </main>
  );
}
