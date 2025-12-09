"use client";

import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Map, Settings, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IsometricProcess } from "./IsometricProcess";

const steps = [
  {
    number: "01",
    title: "Step 1 – Free Process Health Check",
    description: "Our consultants meticulously review your current processes, identifying areas ripe for AI & automation that can boost productivity and cut costs.",
    icon: ClipboardCheck,
    color: "bg-cyan-500",
  },
  {
    number: "02",
    title: "Step 2 – Personalised AI & Automation Roadmap",
    description: "We provide a tailored automation roadmap, with our recommended AI automation plan ready to implement. We calculate the time and cost savings at every step.",
    icon: Map,
    color: "bg-purple-500",
  },
  {
    number: "03",
    title: "Step 3 – Implementation, Setup & Testing",
    description: "Once our automation engineers have the scope from the roadmap, they'll get busy automating your tasks and integrating your tech.",
    icon: Settings,
    color: "bg-amber-500",
  },
  {
    number: "04",
    title: "Step 4 – Ongoing Support & Updates",
    description: "Need ongoing support? Consider it done. We can offer ongoing support packages to keep your automation and AI 100% optimized.",
    icon: GraduationCap,
    color: "bg-emerald-500",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export function Process() {
  return (
    <section id="process" className="bg-dark py-24 md:py-32 relative overflow-hidden text-white border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[var(--color-accent)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            Your 4-Steps to AI & Automation Success
          </motion.h2>
          <motion.p
            className="text-lg text-white/60 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            Implementing AI and automation has never been easier with Maru!
          </motion.p>
        </div>

        {/* Isometric Workflow Visualization */}
        <div className="mb-24 -mx-4 md:-mx-8 lg:-mx-16">
           <IsometricProcess />
        </div>





        {/* Why Choose Us Header */}
        <div className="max-w-4xl mx-auto text-center mt-32 mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <span className="font-light text-zinc-500">Why</span> Choose Us?
          </motion.h2>
        </div>

        {/* Footer Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            className="flex flex-col gap-6 bg-[#111111] p-8 rounded-2xl border-l-4 border-l-[#22d3ee] shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(34,211,238,0.15)] transition-all duration-300 h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#22d3ee] border border-[#22d3ee]/30">
              <ClipboardCheck size={28} />
            </div>
            <div>
              <h4 className="font-bold mb-3 text-xl text-white">Trusted AI & Automation Consultants</h4>
              <p className="text-base text-zinc-400 leading-relaxed">
                Maru is a trusted automation partner for leading cybersecurity, IT, and tech firms. We understand your goals and commit to a plan to help you reach them.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-6 bg-[#111111] p-8 rounded-2xl border-l-4 border-l-[#22d3ee] shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(34,211,238,0.15)] transition-all duration-300 h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            variants={fadeUpVariants}
          >
            <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#22d3ee] border border-[#22d3ee]/30">
              <Map size={28} />
            </div>
            <div>
              <h4 className="font-bold mb-3 text-xl text-white">Unmatched Industry Expertise</h4>
              <p className="text-base text-zinc-400 leading-relaxed">
                Our diverse team of global experts are skilled in business growth, sales, marketing, and tech. Our AI solutions are extensively researched and tested.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-6 bg-[#111111] p-8 rounded-2xl border-l-4 border-l-[#22d3ee] shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(34,211,238,0.15)] transition-all duration-300 h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            variants={fadeUpVariants}
          >
            <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#22d3ee] border border-[#22d3ee]/30">
              <Settings size={28} />
            </div>
            <div>
              <h4 className="font-bold mb-3 text-xl text-white">Control your Business Growth</h4>
              <p className="text-base text-zinc-400 leading-relaxed">
                We simplify AI & automation, making it easy for you to focus on high-value outcomes and growing your business. Take back control with Maru.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-6 bg-[#111111] p-8 rounded-2xl border-l-4 border-l-[#22d3ee] shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(34,211,238,0.15)] transition-all duration-300 h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            variants={fadeUpVariants}
          >
            <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#22d3ee] border border-[#22d3ee]/30">
              <GraduationCap size={28} />
            </div>
            <div>
              <h4 className="font-bold mb-3 text-xl text-white">Ongoing Training & Support</h4>
              <p className="text-base text-zinc-400 leading-relaxed">
                We ensure a seamless transition to an automated workflow, providing your team with complete onboarding, training, and technical support.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
