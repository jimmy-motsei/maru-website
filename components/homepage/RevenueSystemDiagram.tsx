"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Engagement",
    content: "The initial layer where potential buyers interact with your brand's messaging across various touchpoints."
  },
  {
    title: "Qualified Intent",
    content: "Filtering noise to identify businesses showing genuine buying signals rather than just browsing."
  },
  {
    title: "Contextual Pipeline",
    content: "Mapping every lead to its specific stage in the buying cycle with the right data for the next move."
  },
  {
    title: "Intelligent Automation",
    content: "Removing manual friction from the sales cycle through AI-driven follow ups and sorting."
  },
  {
    title: "Predictable Revenue",
    content: "The output of a connected system where growth is no longer a surprise, but a calculation."
  }
];

export function RevenueSystemDiagram() {
  return (
    <section className="bg-[#09121A] py-24 lg:py-32 relative overflow-hidden">
      {/* Background Schema Lines */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-zinc-800 hidden lg:block" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-h2 font-medium text-white mb-6 leading-[1.2]">
              What We Mean <span className="font-thin">by a</span> <br className="hidden md:block" />
              <span>Revenue System</span>
            </h2>
            <p className="text-xl text-zinc-500 italic">Most marketing focuses on inputs. Revenue systems focus on flow.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 lg:items-start relative">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Node Indicator */}
              <div className="mb-6 flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 flex items-center justify-center border border-zinc-800 bg-[#09121A] rounded-full text-zinc-500 font-mono text-xs mb-4 z-10">
                  0{index + 1}
                </div>
                {index < stages.length - 1 && (
                  <div className="w-[2px] h-8 bg-zinc-800 lg:hidden" />
                )}
              </div>

              <div className="text-center lg:text-left pr-4">
                <h3 className="text-white font-bold mb-3 tracking-wide uppercase text-sm">{stage.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {stage.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-24 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-xl text-zinc-400 mb-8 font-light">
              When these elements aren’t connected, revenue doesn’t disappear — <span className="text-white font-medium">it leaks.</span>
            </p>
            
            <Link 
              href="/assessments/lead-score"
              className="inline-flex items-center gap-2 text-highlight hover:text-highlight-hover transition-colors duration-300 font-medium group"
            >
              See where your system is breaking
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
