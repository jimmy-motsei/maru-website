"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Search, Workflow, Blocks } from "lucide-react";
import { SplitHeadline } from "@/components/ui/SplitHeadline";
import { ServiceAccordion } from "@/components/ui/ServiceAccordion";
import { ServiceNeedHelpCTA } from "@/components/sections/ServiceNeedHelpCTA";

const breadcrumbs = [
  { label: "Homepage", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service", href: "/services/whatsapp-solutions" },
];

const accordionItems = [
  {
    title: "Behavior-Triggered Sequences",
    content:
      "We automate follow-up based on real prospect behavior so messages go out when intent is highest, not on a fixed manual schedule.",
    features: [
      "Automated trigger detection across touchpoints",
      "Time-delay logic for follow-up cadence",
      "Sequence testing and performance tuning",
    ],
  },
  {
    title: "Multi-Channel Orchestration",
    content:
      "Follow-up is coordinated across email, SMS, and WhatsApp so prospects are reached on the channels they actually use.",
    features: [
      "WhatsApp, SMS, and email coordination",
      "Channel preference routing",
      "Unified engagement tracking",
    ],
  },
  {
    title: "Smart Handoff to Sales",
    content:
      "High-intent leads are identified and escalated quickly so your sales team can engage at the right moment with full context.",
    features: [
      "Behavior-based lead temperature scoring",
      "Instant handoff alerts for hot leads",
      "Conversation context synced into CRM",
    ],
  },
  {
    title: "Personalization at Scale",
    content:
      "Every automated follow-up includes dynamic, relevant context so outreach feels human and specific rather than generic.",
    features: [
      "Dynamic fields and context injection",
      "Segment-aware message variations",
      "Brand and tone consistency guardrails",
    ],
  },
  {
    title: "Re-Engagement Campaigns",
    content:
      "Dormant leads are automatically reactivated with tailored win-back messaging to recover pipeline value that would otherwise be lost.",
    features: [
      "Dormancy triggers (30/60/90 day)",
      "Fresh win-back sequence rotation",
      "Reactivation performance reporting",
    ],
  },
];

const otherServices = [
  {
    title: "Website Conversion Optimization",
    description:
      "Identify where visitors drop off and apply prioritized fixes that increase qualified lead conversion.",
    points: ["Behavior diagnostics", "Conversion gap analysis", "Revenue-prioritized roadmap", "Implementation guidance"],
    href: "/services/lead-generation",
    icon: Search,
    iconClassName: "text-cyan-500 bg-cyan-500/10 border-cyan-500/30",
  },
  {
    title: "Sales Process Optimization",
    description:
      "Fix stalled opportunities by reducing manual sales friction and tightening pipeline execution.",
    points: ["Pipeline leak detection", "Workflow automation", "CRM integration", "Sales enablement"],
    href: "/services/sales-systems",
    icon: Workflow,
    iconClassName: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
  },
  {
    title: "Marketing Integration",
    description:
      "Connect your stack so data flows automatically across marketing, sales, and operations systems.",
    points: ["Tech stack audit", "Integration architecture", "Workflow automation", "Ongoing optimization"],
    href: "/services/office-automation",
    icon: Blocks,
    iconClassName: "text-amber-500 bg-amber-500/10 border-amber-500/30",
  },
];

export default function WhatsAppSolutionsPage() {
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
              leadingText="Follow-Up"
              emphasisText="Automation"
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
                  Automate follow-up based on real pipeline behavior and lead intent.
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Respond faster, convert more leads, and cut admin time.
                </p>

                <Link href="/assessments/pipeline-leak" className="btn-primary-hero-cta group">
                  Start Free Diagnostic
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
                <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>
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
