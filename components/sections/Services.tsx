"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTAPrimary } from "@/components/ui/CTAPrimary";
import { SPACING } from "@/lib/constants";

const tools = [
  {
    step: 1,
    label: "DIAGNOSE",
    title: "Website Lead Grader™",
    description: "Grade your website's lead generation performance and discover optimization opportunities",
    cta: "Get My Grade",
    href: "https://leads.maruonline.com",
  },
  {
    step: 2,
    label: "OPTIMIZE",
    title: "Pipeline Leak Detector™",
    description: "Find where deals are stalling in your sales process and get specific fixes",
    cta: "Analyze Pipeline",
    href: "https://pipeline.maruonline.com",
  },
  {
    step: 3,
    label: "STREAMLINE",
    title: "Tech Stack Auditor™",
    description: "Eliminate redundant software and optimize your tools for maximum efficiency",
    cta: "Audit My Stack",
    href: "/assessments/tech-audit",
  },
  {
    step: 4,
    label: "LEARN",
    title: "Maru Academy",
    description: "Master the frameworks and systems to build sustainable lead generation",
    cta: "Explore Courses",
    href: "https://academy.maruonline.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Services() {
  return (
    <section className={`${SPACING.SECTION} bg-[#f5f5f5]`}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
            <span className="font-extralight text-zinc-500">Find & Fix Every</span>{" "}
            <span className="font-medium">Lead Generation Leak</span>
            <br />
            <span className="font-extralight text-zinc-500">in Your Business</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Four AI-powered diagnostic tools that work together to transform
            your website, sales process, and operations into a lead-generating system.
          </p>
        </motion.div>

        {/* The Journey - 4 Cards */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool) => (
              <motion.div
                key={tool.step}
                variants={itemVariants}
                className="h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Card - OtherServices Style */}
                <div className="bg-gray-50 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl border-l-4 border-l-cyan-primary transition-all duration-300 group flex flex-col">
                  {/* Step Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-full bg-cyan-primary/10 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="text-xl font-bold text-cyan-primary">
                      {tool.step}
                    </span>
                  </motion.div>

                  {/* Label */}
                  <div className="text-xs font-bold tracking-[0.15em] text-cyan-primary mb-2">
                    {tool.label}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-cyan-primary transition-colors">
                    {tool.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark/70 mb-6 text-base leading-relaxed flex-grow">
                    {tool.description}
                  </p>

                  {/* Read More Link */}
                  {tool.href.startsWith('http') ? (
                    <motion.a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-dark/70 hover:text-cyan-primary group-hover:gap-4 transition-all duration-300"
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-sm font-medium">{tool.cta}</span>
                      <ArrowRight size={16} />
                    </motion.a>
                  ) : (
                    <Link
                      href={tool.href}
                      className="flex items-center gap-2 text-dark/70 hover:text-cyan-primary group-hover:gap-4 transition-all duration-300"
                    >
                      <span className="text-sm font-medium">{tool.cta}</span>
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Not sure where to start?
          </p>
          <CTAPrimary
            href="https://leads.maruonline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-lg"
          >
            Start With a Free Website Grade
          </CTAPrimary>
        </motion.div>
      </div>
    </section>
  );
}
