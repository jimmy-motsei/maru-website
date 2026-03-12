"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Wrench, GraduationCap, LineChart } from "lucide-react";
import { SplitHeadline } from "@/components/ui/SplitHeadline";
import { ServiceAccordion } from "@/components/ui/ServiceAccordion";
import { ServiceNeedHelpCTA } from "@/components/sections/ServiceNeedHelpCTA";

const breadcrumbs = [
  { label: "Homepage", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service", href: "/services/ai-revenue-diagnostic" },
];

const accordionItems = [
  {
    title: "AI Opportunity Assessment",
    content:
      "Quantified revenue impact analysis for each identified opportunity across your current marketing and sales systems.",
    features: [
      "Revenue opportunity modeling",
      "Priority ranking by impact",
      "Quick-win opportunity list",
    ],
  },
  {
    title: "POPIA Compliance Scorecard",
    content:
      "5-pillar POPIA audit with risk ratings and remediation priorities to reduce compliance risk before scaling AI initiatives.",
    features: [
      "Consent and data handling audit",
      "Risk ratings by control area",
      "Remediation priority matrix",
    ],
  },
  {
    title: "Tech Stack Evaluation",
    content:
      "Integration feasibility analysis for recommended AI tools based on your existing systems and workflows.",
    features: [
      "Integration readiness review",
      "System dependency mapping",
      "Implementation feasibility notes",
    ],
  },
  {
    title: "90-Day Implementation Roadmap",
    content:
      "A prioritized action plan with timelines, investment guidance, and expected ROI so your team can execute with clarity.",
    features: [
      "Milestone-based delivery plan",
      "Cost and effort estimates",
      "Expected ROI by phase",
    ],
  },
  {
    title: "Executive Presentation",
    content:
      "60-minute strategy session with your leadership team to align on findings, priorities, and execution next steps.",
    features: [
      "Leadership alignment session",
      "Recommended decision points",
      "Execution ownership clarity",
    ],
  },
];

const otherServices = [
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
  {
    title: "Ongoing AI Support & Optimization",
    description:
      "Continuous performance tuning, strategic guidance, and proactive updates as AI evolves.",
    points: ["Monthly performance reviews", "Priority support", "Quarterly strategy sessions", "Ongoing POPIA monitoring"],
    href: "/services/ongoing-ai-support-optimization",
    icon: LineChart,
    iconClassName: "text-cyan-500 bg-cyan-500/10 border-cyan-500/30",
  },
];

export default function AIRevenueDiagnosticPage() {
  return (
    <main className="bg-surface-muted min-h-screen">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] md:pt-[140px] pb-section-tab lg:pb-section">
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[2px] text-text-secondary">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <Link
                    href={crumb.href}
                    className={index === breadcrumbs.length - 1 ? "text-text-primary" : "hover:text-text-primary transition-colors"}
                  >
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 ? <span>/</span> : null}
                </li>
              ))}
            </ol>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-4xl"
          >
            <SplitHeadline
              as="h1"
              leadingText="AI Revenue"
              emphasisText="Diagnostic"
              className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[86px] text-text-primary mb-10"
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

      <section id="about-service" className="pb-section-tab lg:pb-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
              >
                <SplitHeadline
                  as="h2"
                  leadingText="Our Approach"
                  emphasisText="at a Glance"
                  className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[52px] text-text-primary mb-8 leading-[1.15]"
                  breakClassName="block"
                  leadingWeight="strong"
                  emphasisWeight="light"
                />

                <p className="text-text-secondary leading-relaxed mb-6">
                  Audit your revenue system to identify high-impact AI opportunities quickly.
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Get a prioritized, POPIA-aware roadmap your team can execute.
                </p>

                <Link href="/ai-implementation-assessment" className="btn-primary-hero-cta group">
                  Get Your Free AI Implementation Audit
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

      <section className="py-section-tab lg:py-section bg-surface-inverse border-t border-border-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-[34px] sm:text-[42px] md:text-[38px] leading-[1.1] text-text-primary"
            >
              <SplitHeadline
                as="h2"
                leadingText="Other"
                emphasisText="Services"
                breakBeforeEmphasis={false}
                leadingWeight="light"
                emphasisWeight="strong"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
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
                className="border border-border-strong rounded-2xl p-8 lg:p-[60px] bg-surface-inverse"
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
