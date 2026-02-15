"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";
import { ServiceNeedHelpCTA } from "@/components/sections/ServiceNeedHelpCTA";
import { AshleySpine } from "@/components/services/AshleySpine";

const breadcrumbs = [
  { label: "Homepage", href: "/" },
  { label: "Services", href: "/services" },
];

const services = [
  {
    title: "AI Revenue\nDiagnostic",
    description:
      "A focused audit to find fast AI wins, reduce friction, and protect compliance.",
    bullets: ["Opportunity assessment", "POPIA scorecard", "90-day roadmap", "Executive strategy session"],
    href: "/services/ai-revenue-diagnostic",
    offset: true,
  },
  {
    title: "Custom AI\nSolution Build",
    description:
      "Custom AI systems built for your stack, workflows, and revenue priorities.",
    bullets: ["Custom development", "Platform integration", "Brand voice training", "Compliance architecture"],
    href: "/services/custom-ai-solution-build",
    offset: false,
  },
  {
    title: "AI Training &\nCapability Building",
    description:
      "Hands-on training that improves AI output quality, adoption, and team execution.",
    bullets: ["Hands-on workshops", "Prompt engineering", "Workflow automation", "30-day support"],
    href: "/services/ai-training-capability-building",
    offset: true,
  },
  {
    title: "Ongoing AI Support &\nOptimization",
    description:
      "Ongoing optimization to keep AI performance, compliance, and results on track.",
    bullets: ["Monthly reviews", "Priority support", "Quarterly strategy", "Compliance monitoring"],
    href: "/services/ongoing-ai-support-optimization",
    offset: false,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-surface text-text-inverse">
      <section className="relative bg-black overflow-hidden pb-24 md:pb-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-[112px] sm:pt-[128px] md:pt-[152px] lg:pt-[168px]">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12 md:mb-16"
          >
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[2px] text-white/60">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <Link href={crumb.href} className={index === breadcrumbs.length - 1 ? "text-white" : "hover:text-white transition-colors"}>
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 ? <span>/</span> : null}
                </li>
              ))}
            </ol>
          </motion.nav>

          <motion.div initial="hidden" animate="visible" variants={staggerContainerVariants} className="max-w-4xl">
            <motion.div variants={fadeUpVariants}>
              <h1 className="maru-headline-split text-[38px] sm:text-[52px] md:text-[78px] lg:text-[92px] xl:text-[106px] leading-[0.95] text-white mb-12 md:mb-16 tracking-[-0.02em]">
                <span className="maru-headline-split-strong">This is </span>
                <span className="maru-headline-split-light">what</span>
                <br />
                <span className="maru-headline-split-strong">we do </span>
                <span className="maru-headline-split-light">best</span>
              </h1>
            </motion.div>

            <motion.a
              variants={fadeUpVariants}
              href="#services"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[2px] font-semibold text-action-primary"
            >
              Our services
              <span className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-action-primary">
                <ArrowDown size={16} />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-black pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 md:gap-12 xl:gap-16">
            <div className="hidden xl:block xl:col-span-3">
              <AshleySpine />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainerVariants}
              className="xl:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-10 lg:gap-y-12"
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeUpVariants}
                  className={service.offset ? "md:mt-10 xl:mt-16" : ""}
                >
                  <Link
                    href={service.href}
                    className="group block h-full border-b border-white/10 pb-9 transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    <h3 className="text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.08] text-white maru-headline-split-strong mb-5 whitespace-pre-line">
                      {service.title}
                    </h3>
                    <div className="h-px bg-white/10 mb-4 sm:mb-5" />
                    <p className="copy-card text-white/65 mb-6 min-h-0 md:min-h-[96px]">{service.description}</p>
                    <div className="h-px bg-white/10 mb-2" />
                    <ul className="mb-6">
                      {service.bullets.map((item) => (
                        <li key={item} className="text-[11px] uppercase tracking-[2px] text-white/80 py-3 border-b border-white/10">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[2px] font-semibold text-action-primary">
                      Explore Service
                      <span className="w-9 h-9 rounded-full bg-[var(--color-brand-accent)] text-white border border-[var(--color-brand-accent)] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ServiceNeedHelpCTA />
    </main>
  );
}
