import { Hero } from "@/components/sections/HeroNew";
import { AssessmentShowcase } from "@/components/sections/AssessmentShowcase";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { AIReadinessTeaser } from "@/components/sections/AIReadinessTeaser";
import { News } from "@/components/sections/News";
import { Partners } from "@/components/sections/Partners";
import { TechConnect } from "@/components/sections/TechConnect";
import StickyROICalculator from "@/components/StickyROICalculator";

export default function Home() {
  return (
    <main>
      <Hero />
      <AssessmentShowcase />
      <Services />
      <Process />
      <Testimonials />
      <Partners />
      <TechConnect />
      <AIReadinessTeaser />
      <News />
      <StickyROICalculator />
    </main>
  );
}
