import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { AIReadinessTeaser } from "@/components/sections/AIReadinessTeaser";
import { News } from "@/components/sections/News";
import { Partners } from "@/components/sections/Partners";
import { TechConnect } from "@/components/sections/TechConnect";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Partners />
      <TechConnect />
      <AIReadinessTeaser />
      <News />
    </main>
  );
}
