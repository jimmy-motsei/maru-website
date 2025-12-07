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
  { label: "WhatsApp Solutions", href: "/services/whatsapp-solutions" },
];

const accordionItems = [
  {
    title: "AI Chatbots",
    content:
      "Deploy intelligent chatbots that understand natural language and handle complex conversations. Our bots qualify leads, answer FAQs, schedule appointments, and escalate to humans when needed—all while learning from every interaction.",
  },
  {
    title: "Personalized Messaging",
    content:
      "Go beyond broadcast messages with personalization that makes each customer feel valued. Our system uses customer data to craft relevant messages, product recommendations, and offers that drive engagement and conversions.",
  },
  {
    title: "24/7 Customer Engagement",
    content:
      "Never miss a customer inquiry again. Our WhatsApp solutions provide instant responses around the clock, maintaining consistent service quality whether it's 3 PM or 3 AM, weekday or weekend.",
  },
  {
    title: "Conversation Analytics",
    content:
      "Understand what your customers are really saying. Our analytics dashboard reveals trending topics, sentiment patterns, response times, and conversion metrics so you can continuously optimize your messaging strategy.",
  },
];

const pricingTiers = [
  {
    price: "2,999",
    title: "Starter Bot",
    description: "Basic FAQ bot with up to 1,000 conversations per month and standard integrations.",
    href: "/contact",
  },
  {
    price: "7,999",
    title: "Business Messaging",
    description: "Advanced AI, unlimited conversations, CRM integration, and broadcast campaigns.",
    href: "/contact",
  },
  {
    price: "Custom",
    title: "Enterprise Platform",
    description: "Multi-channel orchestration, custom AI training, and dedicated account management.",
    href: "/contact",
  },
];

export default function WhatsAppSolutionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="WhatsApp"
        titleLight="Solutions"
        subtitle="Engage customers 24/7 with intelligent chatbots that deliver personalized messaging at scale, turning conversations into conversions around the clock."
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
                  We design conversational experiences that feel human while leveraging AI to scale. Our WhatsApp solutions integrate with your existing systems to create seamless customer journeys from first contact to conversion.
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
        headline="Messaging packages"
        subheadline="for every business"
        tiers={pricingTiers}
        customCTAText="Get Custom Quote"
        customCTAHref="/contact"
      />

      {/* Other Services */}
      <OtherServices currentServiceId="whatsapp-solutions" />
    </main>
  );
}
