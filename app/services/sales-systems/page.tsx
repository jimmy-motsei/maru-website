"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceAccordion } from "@/components/ui/ServiceAccordion";
import { PricingSection } from "@/components/sections/PricingSection";
import { OtherServices } from "@/components/sections/OtherServices";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Sales Systems", href: "/services/sales-systems" },
];

const accordionItems = [
  {
    title: "CRM Automation",
    subtitle: "Eliminate the busywork slowing down your sales cycle",
    content:
      "Never lose a deal to a forgotten follow-up or outdated data again. Our automations keep your CRM clean, current, and working for you—not the other way around.",
    features: [
      "Auto-logged calls, emails, and meetings",
      "Smart task creation based on deal stage",
      "Duplicate detection and data cleanup",
      "Custom workflows for your sales process",
      "Integration with email, calendar, and phone systems",
    ],
  },
  {
    title: "Conversation Intelligence",
    subtitle: "Turn every sales call into a coaching opportunity",
    content:
      "Our AI analyzes every conversation to identify what's working, surface objections before they kill deals, and give reps real-time guidance on how to win.",
    features: [
      "Automatic call transcription and analysis",
      "Win/loss pattern recognition across your team",
      "Real-time objection alerts and recommended responses",
      "Competitor mention tracking",
      "Personalized coaching insights for each rep",
    ],
  },
  {
    title: "Deal Tracking & Forecasting",
    subtitle: "Know exactly which deals will close—and which need attention",
    content:
      "Stop relying on gut feel and optimistic reps. Our AI predicts deal outcomes based on actual behavior patterns, so you can forecast accurately and intervene before deals go cold.",
    features: [
      "AI-powered close probability scores",
      "Early warning alerts for at-risk deals",
      "Pipeline health dashboards",
      "Revenue forecasting based on real conversion data",
      "Deal stage automation (move deals forward automatically)",
    ],
  },
  {
    title: "Sales Analytics & Reporting",
    subtitle: "See what's driving revenue—and what's wasting time",
    content:
      "No more spreadsheet archaeology. Get instant visibility into what's working across your entire sales operation, from first touch to closed deal.",
    features: [
      "Real-time performance dashboards",
      "Rep activity vs. results analysis",
      "Lead source ROI tracking",
      "Sales velocity metrics (time-to-close by stage)",
      "Custom reports that answer your specific questions",
    ],
  },
];

const pricingTiers = [
  {
    price: "5,999",
    title: "Essentials",
    subtitle: "Stop losing deals to manual chaos",
    description: "Perfect for teams of 2-5 reps who need the basics done right.",
    features: [
      "CRM auto-logging (calls, emails, meetings)",
      "Task automation by deal stage",
      "Basic pipeline reporting",
      "Email integration",
      "2 hours monthly optimization support",
    ],
    bestFor: "Small teams drowning in admin work",
    href: "/booking?plan=sales-essentials",
  },
  {
    price: "12,999",
    title: "Growth",
    subtitle: "Turn your CRM into a revenue engine",
    description: "For teams of 5-15 reps ready to scale intelligently.",
    features: [
      "Everything in Essentials, plus:",
      "Conversation intelligence (call analysis)",
      "AI deal scoring and forecasting",
      "Advanced analytics and custom reports",
      "Lead routing automation",
      "5 hours monthly optimization support",
    ],
    bestFor: "Growing teams that need predictable revenue",
    href: "/booking?plan=sales-growth",
    featured: true,
  },
  {
    price: "24,999",
    title: "Enterprise",
    subtitle: "Compete with enterprise sales operations",
    description: "For teams of 15+ reps who need every advantage.",
    features: [
      "Everything in Growth, plus:",
      "Real-time coaching and objection handling",
      "Multi-team reporting and benchmarking",
      "Custom integrations (ERP, billing, etc.)",
      "Dedicated account manager",
      "Unlimited optimization support",
    ],
    bestFor: "Established teams optimizing for efficiency",
    href: "/booking?plan=sales-enterprise",
  },
  {
    price: "Custom",
    title: "Custom Solutions",
    subtitle: "Have specific needs? Let's build something tailored.",
    description: "We create custom sales automation for unique workflows, complex integrations, or industry-specific requirements.",
    href: "/booking?plan=custom",
  },
];

export default function SalesSystemsPage() {
  return (
    <main>
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Sales Systems"
        titleLight="Automation"
        subtitle="Your sales team should be selling, not doing data entry"
        description="Automate your CRM, unlock AI-powered conversation insights, and eliminate up to 80% of manual admin work. Let your team focus on what actually closes deals."
      />

      {/* Service Details Section */}
      <section id="service-details" className="bg-[#f5f5f5] py-12 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Intro */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
                  How We <span className="font-light">Build Systems</span>
                  <br />
                  That Actually <span className="font-light">Get Used</span>
                </h2>
                <p className="text-dark/80 mb-8 leading-relaxed">
                  Your CRM should make selling easier, not harder. We integrate seamlessly with your existing tools and add AI layers that coach your team in real-time—no system overhaul required.
                </p>
                <Link
                  href="/services/lead-generation"
                  className="inline-flex items-center gap-2 text-[#22d3ee] hover:text-[#22d3ee]/80 transition-colors group"
                >
                  <span className="font-medium">Get Your Free Lead Score Analysis</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Accordion */}
            <div className="lg:col-span-8">
              <ServiceAccordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        headline="Choose Your"
        subheadline="Starting Point"
        description="Start with essential automation or go all-in with enterprise intelligence. Every package includes setup, training, and 30 days of optimization support."
        tiers={pricingTiers}
        customCTAText="Schedule a Strategy Call"
        customCTAHref="/booking"
      />

      {/* Other Services */}
      <OtherServices currentServiceId="sales-systems" />
    </main>
  );
}
