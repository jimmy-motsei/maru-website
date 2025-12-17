import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Globe, LifeBuoy } from "lucide-react";
import { FeatureCard, DiamondIcon } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";

export const metadata: Metadata = {
  title: "Briefing Forms | Maru Online",
  description: "Submit a brief for your next project or request support.",
};

const forms = [
  {
    title: "AI Solution Briefing",
    description: "Define your business needs for AI automation, chatbots, and agentic workflows.",
    href: "/briefing/ai-solution",
    icon: <Bot size={24} />,
    color: "#22d3ee", // Cyan
  },
  {
    title: "Web Development Briefing",
    description: "Provide details for your new website, CMS, or e-commerce project.",
    href: "/briefing/web-development",
    icon: <Globe size={24} />,
    color: "#ff9900", // Orange
  },
  {
    title: "Support Ticket",
    description: "Log a support request for an existing service, website, or hosting issue.",
    href: "/briefing/support",
    icon: <LifeBuoy size={24} />,
    color: "#a1a1aa", // Zinc
  },
];

export default function BriefingPage() {
  return (
    <main className="relative min-h-screen bg-[#0a192f] text-white">
      <AtmosphericBackground variant="default" />
      
      <div className="container relative z-10 mx-auto px-6 py-12 md:py-32">
        <div className="mb-16 text-center">
          <p className="text-sm font-bold tracking-widest text-accent uppercase mb-4">
            PROJECT & SUPPORT CENTER
          </p>
          <SectionTitle>
            Let's Build Something Remarkable.
          </SectionTitle>
          <p className="mt-6 text-lg text-white/60 max-w-3xl mx-auto">
            Whether you're looking to automate your workflow with AI, launch a new digital platform, or need support for an existing service, you're in the right place. Select a path below to give us the details we need to hit the ground running.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {forms.map((form) => (
            <Link key={form.href} href={form.href} className="group h-full">
              <FeatureCard className="h-full bg-black/40 backdrop-blur-md" glowOnHover>
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <DiamondIcon 
                      icon={form.icon} 
                      glowColor={form.color}
                      size="md"
                    />
                  </div>
                  
                  <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-[#22d3ee] transition-colors">
                    {form.title}
                  </h3>
                  
                  <p className="mb-8 flex-grow text-zinc-400 font-light leading-relaxed">
                    {form.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-bold uppercase tracking-widest text-[#22d3ee]">
                    Start Brief
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </FeatureCard>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
