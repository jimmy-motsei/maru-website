import { Button } from "@/components/ui/Button";
import { ArrowLink } from "@/components/ui/Link";
import { ScrollDownCircle } from "@/components/ui/ScrollDownCircle";
import { Dodecahedron } from "@/components/animations/Dodecahedron";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-dark text-white">
      {/* Background Animation Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90 z-10" />
        
        {/* Dodecahedron Elements - Positioned to match original design */}
        <div className="absolute top-[100px] right-[100px] opacity-20 animate-float">
          <Dodecahedron scale={1.6} />
        </div>
        <div className="absolute top-[-60px] left-[15%] opacity-20 hidden xl:block animate-float animation-delay-500">
          <Dodecahedron scale={1} />
        </div>
        <div className="absolute bottom-[-100px] right-[35%] opacity-20 hidden xl:block animate-float animation-delay-1000">
          <Dodecahedron scale={0.1} />
        </div>
      </div>

      {/* Content Layer */}
      <div className="container relative z-20 mx-auto flex min-h-screen flex-col justify-center px-4 pt-32 lg:px-8">
        <div className="max-w-4xl animate-fade-up">
          <h1 className="mb-12 text-6xl font-bold leading-tight text-white md:text-7xl lg:text-[86px]">
            <span className="text-white">AI & Automation</span>
            <br />
            <span className="text-white">Consultants</span> <span className="font-thin text-gray-400">for SMEs</span>
          </h1>

          <div className="mb-16 max-w-lg">
            <p className="text-lg text-light-soft">
              We deploy AI and automation to streamline operations, boost productivity, and grow revenue.
            </p>
          </div>

          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <Button href="/ai-readiness">Get Your Free AI Readiness Assessment</Button>
            <ArrowLink href="/services" variant="accent" className="text-muted hover:text-white">
              How We Work
            </ArrowLink>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-12 right-8 hidden lg:block animate-fade-up animation-delay-500">
          <ScrollDownCircle />
        </div>
      </div>
    </section>
  );
}
