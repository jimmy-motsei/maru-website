"use client";
import { Target, TrendingUp, Zap, RefreshCw } from "lucide-react";
import { IsometricProcess } from "./IsometricProcess";
import { SPACING } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className={`bg-[#09121A] ${SPACING.SECTION} relative overflow-hidden text-white border-t border-white/5`}>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            <span className="font-extralight text-zinc-500">Your 4-Steps to</span> <span className="font-medium text-white">Breakthrough Performance</span>
          </h2>
        </div>
        <div className="mb-24 -mx-4 md:-mx-8 lg:-mx-16"><IsometricProcess /></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Target, title: "Built for High-Performers", text: "We partner with businesses ready to scale." },
            { icon: TrendingUp, title: "Marginal Gains", text: "We obsess over the 5-10% improvements." },
            { icon: Zap, title: "Data-Driven", text: "No guesswork, just results based on data." },
            { icon: RefreshCw, title: "Ongoing Optimization", text: "Continuous refinement to keep you ahead." }
          ].map((item, i) => (
             <div key={i} className="flex flex-col gap-6 bg-card-dark p-8 rounded-3xl border border-card-border hover:border-highlight/50 transition-all duration-300">
                <item.icon className="text-highlight" size={28} />
                <h4 className="font-bold text-xl text-white">{item.title}</h4>
                <p className="text-sm text-zinc-400">{item.text}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
