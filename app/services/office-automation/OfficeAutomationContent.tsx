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
    subtitle: "Extract data from invoices, contracts, and forms instantly",
    content:
      "Stop manually typing information from PDFs into spreadsheets. Our AI reads, extracts, and routes document data automatically—with 99%+ accuracy.",
    features: [
      "Instant data extraction from invoices, receipts, and purchase orders",
      "Automatic filing and categorization",
      "Smart form recognition (no templates needed)",
      "Integration with accounting and ERP systems",
      "Exception alerts for errors or missing information",
    ],
    timeSaved: "Typical time saved: 15-25 hours per week per person handling documents",
  },
  {
    title: "Workflow Automation",
    subtitle: "Approvals, handoffs, and notifications—all automatic",
    content:
      "Every manual step in a process is a delay waiting to happen. We connect your systems so work flows between teams without emails, Slack messages, or 'following up.'",
    features: [
      "Multi-step approval workflows (purchase orders, leave requests, expenses)",
      "Automatic task handoffs between departments",
      "Smart notification routing (right person, right time)",
      "Conditional logic (different paths for different scenarios)",
      "Audit trails for compliance",
    ],
    timeSaved: "Typical time saved: 10-20 hours per week across the team",
  },
  {
    title: "Task Management Integration",
    subtitle: "Connect your tools so nothing falls through the cracks",
    content:
      "Your work lives across email, Slack, project management tools, and CRMs. We make them talk to each other so tasks sync automatically and everyone sees the same truth.",
    features: [
      "Two-way sync between tools (Asana, Monday, ClickUp, etc.)",
      "Auto-create tasks from emails, forms, or CRM events",
      "Status update automation across platforms",
      "Smart reminders based on priority and deadlines",
      "Centralized dashboard across all tools",
    ],
    timeSaved: "Typical time saved: 5-10 hours per week on coordination and status updates",
  },
  {
    title: "Process Optimization",
    subtitle: "Find and fix bottlenecks before they cost you money",
    content:
      "Most businesses have no idea where time disappears in their operations. We map your processes, identify delays, and implement systems that keep work moving.",
    features: [
      "Process mapping and bottleneck analysis",
      "Cycle time tracking and reporting",
      "Automated escalations for stalled work",
      "Resource allocation insights",
      "Continuous improvement recommendations",
    ],
    timeSaved: "Typical time saved: 20-40% reduction in process completion time",
  },
];

const pricingTiers = [
  {
    price: "3,999",
    title: "Starter",
    subtitle: "Automate your biggest time-waster first",
    description: "Perfect for small teams looking to eliminate one high-impact bottleneck.",
    features: [
      "1 automated workflow or document process",
      "Basic integration with 2-3 tools",
      "Setup and training included",
      "30 days optimization support",
      "Email support",
    ],
    bestFor: "Teams spending 10+ hours/week on one repetitive task",
    href: "/booking?plan=office-starter",
  },
  {
    price: "8,999",
    title: "Growth",
    subtitle: "End-to-end automation for scaling operations",
    description: "For growing businesses ready to eliminate multiple operational bottlenecks.",
    features: [
      "Everything in Starter, plus:",
      "Up to 5 automated workflows",
      "Advanced document processing (OCR, smart routing)",
      "Multi-app integrations (unlimited tools)",
      "Process mapping and optimization",
      "Monthly performance reporting",
      "5 hours ongoing optimization",
    ],
    bestFor: "Teams wasting 20+ hours/week on admin work",
    href: "/booking?plan=office-growth",
    featured: true,
  },
  {
    price: "Custom",
    title: "Enterprise",
    subtitle: "Complete digital transformation",
    description: "For established operations ready to compete at enterprise efficiency levels.",
    features: [
      "Everything in Growth, plus:",
      "Custom workflow design and implementation",
      "ERP and legacy system integration",
      "Advanced analytics and reporting dashboards",
      "Dedicated automation engineer",
      "Unlimited optimization and support",
      "Quarterly process audits",
    ],
    bestFor: "Organizations automating entire departments",
    href: "/booking?plan=office-enterprise",
  },
];

export default function OfficeAutomationPage() {
  return (
    <main>
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Office Operations"
        titleLight="Automation"
        subtitle="Stop paying people to do robot work"
        description="Eliminate up to 70% of repetitive admin tasks with intelligent automation. Free your team from data entry, document processing, and approval bottlenecks—so they can focus on work that actually grows your business."
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
                  How We Find <span className="font-light">Hours Hidden</span>
                  <br />
                  in Your <span className="font-light">Operations</span>
                </h2>
                <p className="text-dark/80 mb-8 leading-relaxed">
                  We don't automate for automation's sake. We audit where your team wastes time on repetitive work, then build systems that eliminate those bottlenecks—without disrupting how you operate today.
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
        description="Start with one high-impact automation or transform your entire operation. Every package includes setup, training, and 30 days of optimization support."
        tiers={pricingTiers}
        customCTAText="Get Custom Quote"
        customCTAHref="/booking"
      />

      {/* Other Services */}
      <OtherServices currentServiceId="office-automation" />
    </main>
  );
}
