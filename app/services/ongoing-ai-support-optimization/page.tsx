"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Search, Wrench, GraduationCap } from "lucide-react";
import { SplitHeadline } from "@/components/ui/SplitHeadline";
import { ServiceAccordion } from "@/components/ui/ServiceAccordion";
import { ServiceNeedHelpCTA } from "@/components/sections/ServiceNeedHelpCTA";

const breadcrumbs = [
  { label: "Homepage", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service", href: "/services/ongoing-ai-support-optimization" },
];

const accordionItems = [
  {
    title: "Monthly Performance Reviews",
    content:
      "Structured reviews of AI system performance against your business KPIs, with prioritized optimization actions.",
    features: [
      "KPI-driven review cadence",
      "Opportunity and risk tracking",
      "Actionable improvement backlog",
    ],
  },
  {
    title: "Proactive Updates",
    content:
      "We continuously evaluate and implement relevant AI improvements so your systems stay current and competitive.",
    features: [
      "Feature and capability updates",
      "Workflow refinement opportunities",
      "Performance and reliability tuning",
    ],
  },
  {
    title: "Priority Support",
    content:
      "Rapid-response support model for operational issues, with clear escalation paths and accountability.",
    features: [
      "Priority issue handling",
      "Dedicated support channel",
      "Service-level response expectations",
    ],
  },
  {
    title: "Quarterly Strategy Sessions",
    content:
      "Leadership-level planning sessions to align optimization priorities with growth targets and operational reality.",
    features: [
      "Quarterly strategic planning",
      "Roadmap reprioritization",
      "Next-phase initiative design",
    ],
  },
  {
    title: "POPIA Compliance Monitoring",
    content:
      "Ongoing compliance checks to ensure your AI operations remain aligned with evolving policy and data requirements.",
    features: [
      "Compliance posture checks",
      "Control validation and updates",
      "Risk mitigation recommendations",
    ],
  },
];

const otherServices = [
  {
    title: "AI Revenue Diagnostic",
    description:
      "A 360° audit of your current systems to identify the highest-impact AI and revenue opportunities.",
    points: ["Opportunity assessment", "POPIA scorecard", "90-day roadmap", "Executive strategy session"],
    href: "/services/ai-revenue-diagnostic",
    icon: Search,
    iconClassName: "text-cyan-500 bg-cyan-500/10 border-cyan-500/30",
  },
  {
    title: "Custom AI Solution Build",
    description:
      "Bespoke AI systems built around your existing platforms, workflows, and brand voice.",
    points: ["Platform integration", "Brand voice training", "POPIA-compliant architecture", "60-day optimization support"],
    href: "/services/custom-ai-solution-build",
    icon: Wrench,
    iconClassName: "text-amber-500 bg-amber-500/10 border-amber-500/30",
  },
  {
    title: "AI Training & Capability Building",
    description:
      "Hands-on team enablement to improve AI output quality, adoption, and execution consistency.",
    points: ["Prompt engineering mastery", "Workflow automation training", "Custom training playbooks", "30-day post-training support"],
    href: "/services/ai-training-capability-building",
    icon: GraduationCap,
    iconClassName: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
  },
];

export default function OngoingAISupportOptimizationPage() {
  return (
    <main className="bg-surface-muted min-h-screen">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] md:pt-[140px] pb-20 md:pb-24">
          <motion.nav initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[2px] text-text-secondary">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <Link href={crumb.href} className={index === breadcrumbs.length - 1 ? "text-text-primary" : "hover:text-text-primary transition-colors"}>
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 ? <span>/</span> : null}
                </li>
              ))}
            </ol>
          </motion.nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }} className="max-w-4xl">
            <SplitHeadline
              as="h1"
              leadingText="Ongoing AI Support &"
              emphasisText="Optimization"
              className="text-[36px] sm:text-[44px] md:text-[72px] lg:text-[86px] text-text-primary mb-10"
              breakBeforeEmphasis={false}
              leadingWeight="strong"
              emphasisWeight="light"
            />
          </motion.div>

          <motion.a
            href="#about-service"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[2px] font-semibold text-text-primary"
          >
            About Service
            <span className="w-9 h-9 rounded-full bg-surface-inverse border border-border-subtle flex items-center justify-center">
              <ArrowDown size={16} />
            </span>
          </motion.a>
        </div>
      </section>

      <section id="about-service" className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
            <div className="lg:col-span-4">
              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45 }}>
                <SplitHeadline
                  as="h2"
                  leadingText="Our Approach"
                  emphasisText="at a Glance"
                  className="text-[30px] sm:text-[34px] md:text-[44px] lg:text-[52px] text-text-primary mb-8 leading-[1.15]"
                  breakClassName="block"
                  leadingWeight="strong"
                  emphasisWeight="light"
                />

                <p className="text-text-secondary leading-relaxed mb-6">
                  Keep AI systems performing as your business goals and tools change.
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Get ongoing optimization, guidance, and compliance support.
                </p>

                <Link href="/contact" className="btn-primary-hero-cta group">
                  Start Your Support Plan
                  <span className="ml-2">→</span>
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              <ServiceAccordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-surface-inverse border-t border-border-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="text-[34px] sm:text-[42px] md:text-[56px] leading-[1.1] text-text-primary">
              <SplitHeadline as="h2" leadingText="Other" emphasisText="Services" breakBeforeEmphasis={false} leadingWeight="light" emphasisWeight="strong" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <Link href="/services" className="inline-flex items-center gap-3 text-xs uppercase tracking-[2px] font-semibold text-text-primary">
                View all
                <span className="w-9 h-9 rounded-full bg-surface-muted border border-border-subtle flex items-center justify-center">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherServices.map((service) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                className="border border-border-strong rounded-2xl p-6 sm:p-8 bg-surface-inverse"
              >
                <span className={`inline-flex w-10 h-10 rounded-xl border items-center justify-center mb-4 ${service.iconClassName}`}>
                  <service.icon size={20} />
                </span>
                <h3 className="text-3xl leading-tight text-text-primary maru-headline-split-strong mb-4">{service.title}</h3>
                <p className="copy-card text-text-secondary mb-6">{service.description}</p>
                <ul className="space-y-3 border-y border-border-subtle py-6 mb-7">
                  {service.points.map((point) => (
                    <li key={point} className="text-xs uppercase tracking-[2px] text-text-primary">
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="inline-flex items-center gap-3 text-xs uppercase tracking-[2px] font-semibold text-text-primary">
                  Learn More
                  <span className="w-9 h-9 rounded-full bg-[var(--color-brand-accent)] text-white border border-[var(--color-brand-accent)] flex items-center justify-center">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <ServiceNeedHelpCTA />
    </main>
  );
}
