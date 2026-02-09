"use client";

import { ServiceHero } from "@/components/sections/ServiceHero";
import { OtherServices } from "@/components/sections/OtherServices";
import { ServiceAccordion } from "@/components/ui/ServiceAccordion";
import { CTAPrimary } from "@/components/ui/CTAPrimary";
import { SplitHeadline } from "@/components/ui/SplitHeadline";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";
import { BarChart3, AlertCircle, Map, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Website Conversion", href: "/services/lead-generation" },
];

const accordionItems = [
  {
    title: "Deep-Dive Analysis",
    subtitle: "Beyond surface-level metrics",
    content: "We convert generic traffic data into actionable insights. Our AI analyzes user behavior patterns, heatmaps, and session recordings to understand not just 'what' is happening, but 'why' users are leaving your site.",
    features: [
      "User behavior heatmap analysis",
      "Session recording review",
      "Traffic source quality assessment",
      "Device & browser performance checks",
    ],
    timeSaved: "⚡ Identifies hidden bottlenecks in minutes, not months",
  },
  {
    title: "Conversion Gap Identification",
    subtitle: "Pinpoint where you're losing money",
    content: "We identify the specific friction points—confusing copy, broken forms, hidden CTAs—that are causing 98% of your visitors to leave without converting. We turn these gaps into your biggest growth opportunities.",
    features: [
      "Form abandonment tracking",
      "Checkout flow friction analysis",
      "CTA visibility & click-through audit",
      "Copy clarity & relevance scoring",
    ],
    timeSaved: "🔍 Finds leaks that standard analytics tools miss",
  },
  {
    title: "Revenue-First Prioritization",
    subtitle: "Focus on fixes that drive ROI",
    content: "Not all website issues are equal. We rank every recommendation by potential revenue impact, so you stop wasting time on cosmetic changes and start fixing the blockers that actually affect your bottom line.",
    features: [
      "ROI-based issue scoring",
      "Implementation effort vs. impact matrix",
      "Quick-win identification",
      "Revenue recovery projections",
    ],
    timeSaved: "💰 Prioritizes your roadmap for maximum profitability",
  },
  {
    title: "Strategic Implementation",
    subtitle: "From insights to results",
    content: "We don't just hand you a report and walk away. We provide a step-by-step roadmap for implementation, helping you execute changes that are statistically proven to increase conversion rates.",
    features: [
      "Detailed implementation guides",
      "A/B testing hypotheses",
      "Post-fix performance monitoring",
      "Continuous optimization strategy",
    ],
    timeSaved: "🚀 Accelerates your path to higher conversion rates",
  },
];

const discoveryCards = [
  {
    icon: BarChart3,
    color: "teal",
    value: "Lead Score",
    label: "Current Status",
    description: "See exactly where you stand vs. industry benchmarks. Know your true conversion potential."
  },
  {
    icon: AlertCircle,
    color: "orange",
    value: "Visitor Gaps",
    label: "Leak Assessment",
    description: "Identify exactly why visitors leave without converting. No more guessing what's wrong."
  },
  {
    icon: Map,
    color: "teal",
    value: "Revenue Priority",
    label: "Ranked Fixes",
    description: "Focus on the specific fixes that will move the needle fastest. Ranked by revenue impact."
  },
  {
    icon: FileText,
    color: "orange",
    value: "Custom Roadmap",
    label: "Action Plan",
    description: "Receive a step-by-step plan tailored to your business to double your conversion rate."
  }
];

export default function LeadGenerationPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Is Your Website"
        titleLight="Leaking Leads?"
        subtitle="Most B2B websites convert only 1-2% of visitors. Our AI analysis finds exactly where you're losing prospects—and how to fix it."
      />

      {/* Approach and Work Specifics Section - WHITE BACKGROUND */}
      <section id="service">
        <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Description */}
            <div className="lg:col-span-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainerVariants}
              >
                <motion.div variants={fadeUpVariants}>
                  <SplitHeadline
                    as="h2"
                    leadingText="Your"
                    emphasisText="Approach and Work Specifics"
                    className="text-h3 mb-8 text-black leading-[1.2]"
                    leadingWeight="light"
                    emphasisWeight="strong"
                  />
                </motion.div>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed mb-8"
                  variants={fadeUpVariants}
                >
                  We don't guess. We analyze. Our process is built on data-driven diagnostics that reveal the hidden reasons why your visitors aren't becoming customers.
                </motion.p>

                <motion.p 
                  className="text-gray-600 leading-relaxed mb-8"
                  variants={fadeUpVariants}
                >
                  From heatmap analysis to friction-point identification, we provide a clear, prioritized path to doubling your website's performance.
                </motion.p>

                <motion.div variants={fadeUpVariants}>
                  <CTAPrimary href="https://leads.maruonline.com">
                    Get Your Free Audit
                  </CTAPrimary>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Accordion */}
            <div className="lg:col-span-8">
              <ServiceAccordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section - DARK BACKGROUND */}
      <section className="py-24 lg:py-32 bg-[#09121A]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.div variants={fadeUpVariants}>
              <SplitHeadline
                as="h2"
                leadingText="What You'll"
                emphasisText="Discover"
                className="text-h2 mb-6 text-white leading-[1.2]"
                breakBeforeEmphasis={false}
                leadingWeight="light"
                emphasisWeight="strong"
              />
            </motion.div>
            <motion.p className="text-zinc-400 text-lg" variants={fadeUpVariants}>
              Our AI-powered Website Lead Grader analyzes your site in 2 minutes and reveals:
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {discoveryCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="bg-card-dark border border-card-border p-8 rounded-2xl min-h-[280px] flex flex-col items-start hover:border-highlight transition-colors duration-300 group"
              >
                {/* Icon Container */}
                <div 
                  className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                    card.color === "teal" 
                      ? "bg-[#20A1A4]/10 text-[#20A1A4]" 
                      : "bg-highlight/10 text-highlight"
                  )}
                >
                  <card.icon size={26} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="mt-auto w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{card.value}</h3>
                  <p className="text-zinc-400 font-medium mb-4 uppercase tracking-wide text-xs">{card.label}</p>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <OtherServices currentServiceId="lead-generation" />
    </main>
  );
}
