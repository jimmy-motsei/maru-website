"use client";
import { motion } from "framer-motion";
import { Megaphone, Mountain, TrendingUp, Target, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export function Services() {
  const services = [
    {
      id: "01", category: "MARKETING AUTOMATION", title: "Generate Qualified Leads Consistently", description: "Precision targeting meets intelligent automation.", icon: Mountain, link: "/services/lead-generation", assessmentCTA: "Check Your Lead Generation Potential", assessmentTool: "lead-score"
    },
    {
      id: "02", category: "CRM AUTOMATION", title: "Convert More Opportunities Into Revenue", description: "Transform your CRM into a revenue-generating engine.", icon: Megaphone, link: "/services/sales-systems", assessmentCTA: "Find Revenue Leaks", assessmentTool: "pipeline-leak"
    },
    {
      id: "03", category: "SALES AUTOMATION", title: "Shorten Your Sales Cycle", description: "Speed wins deals. Automate follow-ups and proposals.", icon: TrendingUp, link: "/services/sales-systems", assessmentCTA: "Generate AI Proposal", assessmentTool: "proposal"
    },
    {
      id: "04", category: "SOFTWARE INTEGRATION", title: "Maximize ROI from Your Tech Stack", description: "Connect your ecosystem to eliminate data silos.", icon: Target, link: "/services/office-automation", assessmentCTA: "Audit Tech Stack Costs", assessmentTool: "tech-audit"
    },
  ];

  return (
    <section className="bg-[#050505] py-12 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#22d3ee]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="h-full flex flex-col p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#22d3ee]/50 transition-all duration-300">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#22d3ee] mb-6">{service.category}</span>
                <h3 className="font-bold text-2xl text-white mb-4">{service.title}</h3>
                <p className="text-zinc-400 mb-8 flex-grow">{service.description}</p>
                <div className="mt-auto space-y-4 border-t border-white/10 pt-6">
                    <Link href={service.link} className="flex items-center justify-between text-white font-medium group/link">
                        <span className="group-hover/link:text-[#22d3ee]">Explore Solution</span>
                        <ArrowRight size={20} className="text-zinc-500 group-hover/link:text-[#22d3ee]" />
                    </Link>
                    <Link href={`/assessments/${service.assessmentTool}`} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white py-2 px-3 rounded-lg bg-white/5">
                        <Zap size={14} className="text-[#22d3ee]" fill="#22d3ee" />
                        <span>{service.assessmentCTA}</span>
                    </Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
