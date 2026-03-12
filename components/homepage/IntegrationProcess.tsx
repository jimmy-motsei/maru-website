"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SplitHeadline } from "@/components/ui/SplitHeadline";

interface Stage {
  step: string;
  title: string;
  timeline: string;
  description: string;
  cta: { label: string; href: string };
}

const STAGES: Stage[] = [
  {
    step: "01",
    title: "Audit",
    timeline: "2 weeks",
    description:
      "We map your existing tech stack, data flows, and workflow touchpoints to find every place AI should be producing revenue — and isn't. You get a plain-language gap report with prioritised fixes.",
    cta: { label: "Start with a Free Audit", href: "/ai-implementation-assessment" },
  },
  {
    step: "02",
    title: "Architect",
    timeline: "1–2 weeks",
    description:
      "Before we build anything, we design the integration architecture: which tools connect, how data moves between them, and what success metrics we'll track. No surprises mid-build.",
    cta: { label: "See How We Plan", href: "/services/ai-revenue-diagnostic" },
  },
  {
    step: "03",
    title: "Integrate",
    timeline: "4–8 weeks",
    description:
      "We build the connections, configure the AI behaviours, and test each handoff point. Every integration is validated against your revenue KPIs before we move to the next layer.",
    cta: { label: "See How We Build", href: "/services/custom-ai-solution-build" },
  },
  {
    step: "04",
    title: "Hand Over",
    timeline: "2 weeks",
    description:
      "We train your team to own, manage, and evolve the integrated system. You receive runbooks, escalation protocols, and a 90-day optimisation schedule so results compound over time.",
    cta: { label: "See How We Train", href: "/services/ai-training-capability-building" },
  },
];

export function IntegrationProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastClickedRef = useRef(0);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleClick = (index: number) => {
    lastClickedRef.current = index;
    setActiveIndex(index);
  };

  const handleContainerLeave = () => {
    setActiveIndex(lastClickedRef.current);
  };

  return (
    <section className="bg-surface py-section-tab lg:py-section border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <SplitHeadline
            as="h2"
            leadingText="The Integration"
            emphasisText="Process"
            breakBeforeEmphasis={false}
            leadingWeight="light"
            emphasisWeight="strong"
            className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[68px] text-text-inverse"
          />
          <p className="text-text-inverse-muted text-lg mt-4 max-w-2xl mx-auto">
            Four stages. Measurable outcomes at every step. Nothing handed over until it works.
          </p>
        </motion.div>

        {/* Flush Card Grid */}
        <div
          className="border-t border-b border-white/10 grid grid-cols-1 lg:grid-cols-4"
          onMouseLeave={handleContainerLeave}
        >
          {STAGES.map((stage, index) => {
            const isActive = activeIndex === index;
            const isLast = index === STAGES.length - 1;

            return (
              <div
                key={stage.step}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                className={`relative px-[30px] py-[40px] cursor-pointer transition-colors duration-300
                  border-b lg:border-b-0
                  ${!isLast ? "border-r-0 lg:border-r border-white/10" : ""}
                  ${isActive ? "bg-white/5" : "hover:bg-white/[0.03]"}
                `}
              >
                {/* 4px top bar — expands to full width on active */}
                <div
                  className={`absolute top-0 left-0 h-[4px] bg-action-primary transition-all duration-500 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0, 0, 0.3642, 1)" }}
                />

                {/* Step number */}
                <p className="text-[12px] font-medium uppercase tracking-[2px] text-white/40 mb-3">
                  {stage.step}
                </p>

                {/* Title */}
                <h3 className="text-[18px] font-medium text-white uppercase tracking-[1px] mb-4">
                  {stage.title}
                </h3>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0, 0, 0.3642, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[14px] text-white/70 leading-relaxed mb-3">
                        {stage.description}
                      </p>
                      <p className="text-[11px] text-white/40 uppercase tracking-[2px] mb-6">
                        Timeline: {stage.timeline}
                      </p>
                      <Link
                        href={stage.cta.href}
                        className="inline-flex items-center gap-2 bg-action-primary text-[#0d1b2a] text-[12px] font-medium uppercase tracking-[2px] px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                      >
                        {stage.cta.label}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom dot indicator */}
                <div className="absolute bottom-4 left-[30px]">
                  <div
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      isActive ? "bg-action-primary" : "bg-white/20"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
