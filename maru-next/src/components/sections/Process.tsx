"use client";

import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, FileText, Settings, GraduationCap } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Free AI Readiness Assessment",
    description: "Our consultants review your current processes, identifying areas ripe for AI & automation that can boost productivity and cut costs.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Customized AI & Automation Plan",
    description: "We provide a tailored automation roadmap with clear ROI projections at every step. You'll know exactly what to expect before you invest.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Expert Implementation & Testing",
    description: "Our automation engineers build custom workflows, integrate your tech stack, and rigorously test every automation for flawless operation.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Training & Ongoing Support",
    description: "Complete team training, documentation, and technical support. We ensure your team is confident and self-sufficient.",
    icon: GraduationCap,
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
    <section id="process" className="bg-[#0a0a0a] py-24 md:py-32 relative overflow-hidden text-white border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.p
            className="text-accent text-sm font-medium mb-4 uppercase tracking-wider"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            How We Work
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            Your 4 Steps to <span className="text-white/60 font-light">Success</span>
          </motion.h2>
          <motion.p
            className="text-lg text-white/60 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            Implementing AI and automation has never been easier. We handle the complexity so you can focus on the results.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Number */}
              <div className="text-4xl font-bold text-white/5 mb-6 group-hover:text-accent/20 transition-colors absolute top-4 right-6 pointer-events-none">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                <step.icon size={24} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
        >
          <Link 
            href="/ai-readiness" 
            className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent-dark transition-all duration-300 hover:scale-105"
          >
            <span>Start Step 1: Free Assessment</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
