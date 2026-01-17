import { Hero } from "@/components/sections/HeroNew";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { AIReadinessTeaser } from "@/components/sections/AIReadinessTeaser";
import { News } from "@/components/sections/News";
import { TechConnect } from "@/components/sections/TechConnect";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <TechConnect />
      <AIReadinessTeaser />
      <News />
    </main>
  );
}
