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
    content:
      "Eliminate manual data entry and keep your CRM perfectly up-to-date with automated workflows. Our integrations sync contacts, activities, and deal stages in real-time, giving your team a single source of truth without the busywork.",
  },
  {
    title: "Conversation Intelligence",
    content:
      "Every sales call becomes a learning opportunity. Our AI analyzes conversations to identify winning patterns, coach reps in real-time, and surface insights about objections, competitors, and customer needs that would otherwise be lost.",
  },
  {
    title: "Deal Tracking & Forecasting",
    content:
      "Get accurate pipeline visibility with AI-powered deal scoring and forecasting. Our system predicts close probabilities, identifies at-risk deals, and provides recommended next actions to keep opportunities moving forward.",
  },
  {
    title: "Sales Analytics & Reporting",
    content:
      "Transform raw sales data into actionable insights. Our dashboards track key metrics, visualize trends, and automatically generate reports that help you make data-driven decisions to optimize your sales process.",
  },
];

const pricingTiers = [
  {
    price: "5,999",
    title: "Essential CRM Package",
    description: "Core CRM automation and basic reporting for small sales teams getting started.",
    href: "/contact",
  },
  {
    price: "12,999",
    title: "Sales Intelligence Suite",
    description: "Full conversation intelligence, advanced forecasting, and custom integrations.",
    href: "/contact",
  },
  {
    price: "Custom",
    title: "Enterprise Platform",
    description: "Complete sales ecosystem transformation with dedicated support and training.",
    href: "/contact",
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
        subtitle="Automate your CRM workflows and unlock conversation intelligence that helps close deals faster while reducing manual data entry by up to 80%."
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
                <p className="text-dark/60 mb-8 leading-relaxed">
                  We believe your CRM should work for you, not the other way around. Our sales system automations integrate seamlessly with your existing tools while adding intelligence layers that help your team sell smarter.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-dark hover:text-accent transition-colors group"
                >
                  <span className="font-medium">Book a discovery call</span>
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
        headline="Investment options"
        subheadline="for every team"
        tiers={pricingTiers}
        customCTAText="Get Custom Quote"
        customCTAHref="/contact"
      />

      {/* Other Services */}
      <OtherServices currentServiceId="sales-systems" />
    </main>
  );
}
