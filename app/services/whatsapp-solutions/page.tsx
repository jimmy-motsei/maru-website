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
    title: "AI Assistants",
    // title: "AI Chatbots",
    subtitle: "Answer common questions instantly, any time of day",
    content:
      "Stop losing leads because you're closed or in a meeting. Our AI assistants qualify prospects, answer FAQs, and schedule appointments—even at 2am on a Saturday.",
      // "Stop losing leads because you're closed or in a meeting. Our AI chatbots qualify prospects, answer FAQs, and schedule appointments—even at 2am on a Saturday.",
    features: [
      "Natural language understanding (no rigid scripts)",
      "Intelligent lead qualification and routing",
      "Automatic appointment scheduling",
      "FAQ responses with 95%+ accuracy",
      "Seamless handoff to human agents when needed",
    ],
    timeSaved: "Typical impact: 60-80% reduction in response time, 24/7 availability",
  },
  {
    title: "Personalized Messaging",
    subtitle: "Tailored offers based on customer behavior",
    content:
      "Generic broadcasts don't work. Our system analyzes customer data to send the right message, to the right person, at the right time—with offers they actually want.",
    features: [
      "Behavioral triggers (abandoned carts, browsing history)",
      "Dynamic product recommendations",
      "Personalized promotions based on purchase history",
      "Smart segmentation (demographics, engagement level)",
      "A/B testing to optimize messaging",
    ],
    timeSaved: "Typical impact: 3-5x higher conversion rates vs. generic broadcasts",
  },
  {
    title: "24/7 Customer Engagement",
    subtitle: "Never miss a lead, even at 2am",
    content:
      "Your competitors are responding while you're asleep. Our AI handles inquiries instantly, books appointments, and nurtures leads around the clock—no burnt-out team required.",
    features: [
      "Instant responses to common questions",
      "After-hours lead capture and qualification",
      "International time zone support",
      "Automatic escalation for urgent issues",
      "Conversation continuity (context remembered across sessions)",
    ],
    timeSaved: "Typical impact: 40-60% increase in after-hours lead capture",
  },
  {
    title: "Conversation Analytics",
    subtitle: "See what customers really want",
    content:
      "Stop guessing what your customers need. Our analytics show you trending questions, sentiment patterns, and conversion bottlenecks—so you can improve continuously.",
    features: [
      "Real-time conversation dashboards",
      "Sentiment analysis (happy, frustrated, confused customers)",
      "Topic clustering (what people ask most)",
      "Response time and resolution metrics",
      "Conversion tracking (chat → booking → sale)",
    ],
    timeSaved: "Typical impact: Identify and fix service gaps 10x faster",
  },
];

const pricingTiers = [
  {
    price: "2,999",
    title: "Starter",
    subtitle: "Test WhatsApp automation with your best customers",
    description: "Perfect for small businesses taking their first step into conversational commerce.",
    features: [
      "Basic FAQ assistant (up to 50 common questions)",
      // "Basic FAQ chatbot (up to 50 common questions)",
      "1,000 conversations per month",
      "Standard integrations (CRM, calendar)",
      "Basic analytics dashboard",
      "Email support",
    ],
    bestFor: "Businesses getting 50-100 WhatsApp inquiries/month",
    href: "/booking?plan=whatsapp-starter",
  },
  {
    price: "7,999",
    title: "Growth",
    subtitle: "Turn WhatsApp into a revenue channel",
    description: "For growing businesses ready to scale customer engagement and drive sales.",
    features: [
      "Everything in Starter, plus:",
      "Advanced AI (handles complex questions)",
      "Unlimited conversations",
      "Personalized messaging and broadcast campaigns",
      "CRM integration and lead routing",
      "Appointment scheduling automation",
      "Advanced analytics and A/B testing",
      "5 hours monthly optimization",
    ],
    bestFor: "Businesses with 500+ monthly inquiries or running marketing campaigns",
    href: "/booking?plan=whatsapp-growth",
    featured: true,
  },
  {
    price: "Custom",
    title: "Enterprise",
    subtitle: "Multi-channel orchestration at scale",
    description: "For established businesses managing high-volume customer conversations across channels.",
    features: [
      "Everything in Growth, plus:",
      "Custom AI training (your brand voice and knowledge)",
      "Multi-channel support (WhatsApp, SMS, web chat)",
      "E-commerce integration (Shopify, WooCommerce)",
      "Payment processing in-chat",
      "Dedicated account manager",
      "White-label options",
      "Unlimited optimization and support",
    ],
    bestFor: "Organizations handling 5,000+ conversations/month",
    href: "/booking?plan=whatsapp-enterprise",
  },
];

export default function WhatsAppSolutionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="WhatsApp Business"
        titleLight="Solutions"
        subtitle="Meet your customers where they already are—at scale"
        description="Turn WhatsApp into a 24/7 sales and support channel. Engage customers with intelligent, personalized conversations that feel human, not robotic."
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
                  Conversations That <span className="font-light">Feel Human,</span>
                  <br />
                  Scale Like <span className="font-light">Software</span>
                </h2>
                <p className="text-dark/80 mb-8 leading-relaxed">
                  We design conversational experiences that feel personal while leveraging AI to handle hundreds of chats simultaneously. Your customers get instant answers, you get qualified leads—everyone wins.
                </p>
                <Link
                  href="/ai-readiness"
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
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        headline="Choose Your"
        subheadline="Messaging Plan"
        description="Start small and scale up, or go all-in from day one. Every package includes setup, bot training, and 30 days of optimization."
        tiers={pricingTiers}
        customCTAText="Schedule a Demo"
        customCTAHref="/booking"
      />

      {/* Other Services */}
      <OtherServices currentServiceId="whatsapp-solutions" />
    </main>
  );
}
