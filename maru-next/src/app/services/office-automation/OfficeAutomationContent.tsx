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
  { label: "Office Automation", href: "/services/office-automation" },
];

const accordionItems = [
  {
    title: "Document Processing",
    content:
      "Transform how you handle documents with intelligent OCR and data extraction. Our AI reads invoices, contracts, and forms, automatically pulling key information into your systems—no manual data entry required.",
  },
  {
    title: "Workflow Automation",
    content:
      "Replace repetitive manual processes with automated workflows that run 24/7. From approval chains to data syncing between apps, we build the automations that free your team to focus on strategic work.",
  },
  {
    title: "Task Management Integration",
    content:
      "Connect your task management tools with intelligent routing and assignment. Our systems automatically create, assign, and track tasks based on triggers, ensuring nothing falls through the cracks.",
  },
  {
    title: "Process Optimization",
    content:
      "We analyze your existing workflows to identify bottlenecks and inefficiencies. Then we design optimized processes that reduce handling time, eliminate errors, and improve team productivity.",
  },
];

const pricingTiers = [
  {
    price: "3,999",
    title: "Starter Automation",
    description: "Basic document processing and up to 5 automated workflows per month.",
    href: "/contact",
  },
  {
    price: "8,999",
    title: "Business Efficiency",
    description: "Advanced OCR, unlimited workflows, and multi-app integrations for growing teams.",
    href: "/contact",
  },
  {
    price: "Custom",
    title: "Enterprise Operations",
    description: "Full digital transformation with custom integrations and process redesign.",
    href: "/contact",
  },
];

export default function OfficeAutomationPage() {
  return (
    <main>
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Office Ops"
        titleLight="Automation"
        subtitle="Streamline document processing and automate repetitive workflows, freeing your team to focus on strategic work that drives real business growth."
      />

      {/* Service Details Section */}
      <section id="service-details" className="bg-[#f5f5f5] py-24 lg:py-32">
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
                  Your <span className="font-light">Approach</span>
                  <br />
                  and <span className="font-light">Work Specifics</span>
                </h2>
                <p className="text-dark/80 mb-8 leading-relaxed">
                  We audit your existing operations to find the highest-impact automation opportunities. Our solutions integrate with your current tools while introducing AI capabilities that multiply your team's effectiveness.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-dark hover:text-accent transition-colors group"
                >
                  <span className="font-medium">Get Your Free AI Readiness Assessment</span>
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
        headline="Efficiency packages"
        subheadline="that scale with you"
        tiers={pricingTiers}
        customCTAText="Get Custom Quote"
        customCTAHref="/contact"
      />

      {/* Other Services */}
      <OtherServices currentServiceId="office-automation" />
    </main>
  );
}
