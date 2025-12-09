"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Database, Bot, Zap, TrendingUp } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceWorkflow } from "@/components/services/ServiceWorkflow";
import { ServiceAccordion } from "@/components/ui/ServiceAccordion";
import { PricingSection } from "@/components/sections/PricingSection";
import { OtherServices } from "@/components/sections/OtherServices";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Lead Generation", href: "/services/lead-generation" },
];

const accordionItems = [
  {
    title: "AI Lead Scoring",
    content:
      "Our AI-powered lead scoring system analyzes behavioral patterns, engagement metrics, and demographic data to rank prospects by their likelihood to convert. This means your sales team spends their time on leads that are genuinely ready to buy, dramatically improving close rates and reducing wasted outreach.",
  },
  {
    title: "Prospect Identification",
    content:
      "Using machine learning algorithms, we identify ideal customer profiles from your existing data and automatically surface lookalike prospects across multiple channels. Our system continuously learns from your wins to find more of your best-fit customers.",
  },
  {
    title: "Pipeline Automation",
    content:
      "Automate the entire lead nurturing journey from first touch to sales-ready handoff. Our workflows handle follow-ups, content delivery, and engagement tracking automatically, ensuring no lead falls through the cracks while maintaining a personalized experience.",
  },
  {
    title: "Conversion Optimization",
    content:
      "We analyze every touchpoint in your funnel to identify friction points and opportunities. Through A/B testing, personalization, and continuous optimization, we help you convert more visitors into qualified leads and more leads into customers.",
  },
];

const pricingTiers = [
  {
    price: "4,999",
    title: "Starter Package",
    description: "Perfect for small businesses looking to automate their lead capture and basic scoring.",
    href: "/contact",
  },
  {
    price: "9,999",
    title: "Growth Package",
    description: "Advanced lead scoring, CRM integration, and automated nurturing sequences for scaling teams.",
    href: "/contact",
  },
  {
    price: "Custom",
    title: "Enterprise Solution",
    description: "Full-scale lead generation infrastructure with custom integrations and dedicated support.",
    href: "/contact",
  },
];

export default function LeadGenerationPage() {
  return (
    <main>
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Lead Generation"
        titleLight="Automation"
        subtitle="Transform your CRM from a simple contact manager into a powerhouse of sales opportunities. Our AI-powered lead scoring and qualification systems help your team focus on high-value prospects."
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
                  We take a data-driven approach to lead generation, combining AI intelligence with proven marketing strategies. Our systems learn from every interaction to continuously improve your pipeline quality and conversion rates.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#22d3ee] hover:text-[#22d3ee]/80 transition-colors group"
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

          {/* Workflow Diagram */}
          <div className="mt-12 border-t border-gray-200/60 pt-12">
            <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
            <ServiceWorkflow 
              steps={[
                {
                  id: "step-1",
                  title: "Data Aggregation",
                  description: "We connect your data sources (Webforms, Social, Email) into a centralized hub.",
                  icon: Database,
                },
                {
                  id: "step-2",
                  title: "AI Enrichment",
                  description: "Our AI enriches raw leads with company data and behavioral insights.",
                  icon: Bot,
                },
                {
                  id: "step-3",
                  title: "Smart Scoring",
                  description: "Leads are ranked by intent. Hot leads are flagged instantly.",
                  icon: Zap,
                },
                {
                  id: "step-4",
                  title: "Sales Handoff",
                  description: "Qualified opportunities sync to your CRM and alert your sales team.",
                  icon: TrendingUp,
                },
              ]} 
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        headline="Flexible packages"
        subheadline="for every stage"
        tiers={pricingTiers}
        customCTAText="Get Custom Quote"
        customCTAHref="/contact"
      />

      {/* Other Services */}
      <OtherServices currentServiceId="lead-generation" />
    </main>
  );
}
