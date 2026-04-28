"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SplitHeadline } from "@/components/ui/SplitHeadline";

interface Stage {
  step: string;
  title: string;
  description: string;
}

const STAGES: Stage[] = [
  {
    step: "01",
    title: "Audit",
    description:
      "Map your stack and data flows. Find every place AI should be producing revenue — and isn't. You get a plain-language gap report with prioritised fixes.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "Design the integration before we build anything. Define which tools connect and how data moves between them. No surprises mid-build.",
  },
  {
    step: "03",
    title: "Integrate",
    description:
      "Build the connections and configure AI behaviours. Test every handoff against your revenue KPIs. Nothing ships until it works.",
  },
  {
    step: "04",
    title: "Hand Over",
    description:
      "Train your team to own and evolve the system. Receive runbooks and a 90-day optimisation schedule. Results compound over time.",
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
                className={`relative px-5 py-7 sm:px-[30px] sm:py-[40px] cursor-pointer transition-colors duration-300
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

                {/* Expandable description */}
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
                      <p className="text-[14px] leading-relaxed text-[rgb(130,130,130)]">
                        {stage.description}
                      </p>
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

        {/* Single CTA below grid */}
        <div className="mt-10 text-center">
          <Link
            href="/ai-implementation-assessment"
            className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[2px] text-action-primary hover:opacity-70 transition-opacity duration-300"
          >
            Get your free integration audit
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
