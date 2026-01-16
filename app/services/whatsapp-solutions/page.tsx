"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Target, TrendingUp, DollarSign, Zap, MessageSquare, Mail, Send, CheckCircle2, Calendar, Database, Users, ArrowRight } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { OtherServices } from "@/components/sections/OtherServices";
import { CTAPrimary } from "@/components/ui/CTAPrimary";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";
import Link from "next/link";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Follow-Up Automation", href: "/services/whatsapp-solutions" },
];

const discoveryItems = [
  {
    title: "Your Average Follow-Up Response Time",
    description: "vs. industry benchmarks—see where you stand",
    icon: Clock,
  },
  {
    title: "How Many Touches Your Team Averages Before Giving Up",
    description: "Most stop at 2, winners average 8+",
    icon: Target,
  },
  {
    title: "Estimated Deals Lost to Slow or Inconsistent Follow-Up",
    description: "The real cost of manual follow-up",
    icon: TrendingUp,
  },
  {
    title: "ROI Projection: What Automation Would Save and Generate",
    description: "Time saved + revenue recovered",
    icon: DollarSign,
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Behavior Triggers",
    description: "Prospect takes an action (downloads content, visits pricing page)",
    icon: Zap,
  },
  {
    number: "02",
    title: "Smart Sequencing",
    description: "Our AI determines the right message, channel, and timing",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Automated Outreach",
    description: "Messages sent via email, SMS, or WhatsApp",
    icon: Send,
  },
  {
    number: "04",
    title: "Human Handoff",
    description: "Hot leads escalated to your team at the perfect moment",
    icon: Users,
  },
];

const automationItems = [
  "Post-inquiry follow-up sequences",
  "Meeting reminders and confirmations",
  "Proposal follow-ups",
  "Re-engagement campaigns for cold leads",
  "Customer onboarding communications",
  "Appointment scheduling and confirmations",
];

const channels = [
  { name: "Email marketing platforms", description: "Mailchimp, HubSpot, etc.", icon: Mail },
  { name: "WhatsApp Business API", description: "Direct messaging integration", icon: MessageSquare },
  { name: "SMS/text messaging", description: "Multi-carrier support", icon: Send },
  { name: "CRM systems", description: "Pipedrive, Salesforce, HubSpot", icon: Database },
  { name: "Calendar/scheduling tools", description: "Calendly, Google Calendar", icon: Calendar },
  { name: "Customer databases", description: "Seamless data sync", icon: Users },
];

export default function WhatsAppSolutionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#050505] min-h-screen text-white">
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Stop Losing Deals to"
        titleLight="Slow Follow-Up"
        subtitle="80% of sales require 5+ follow-ups, but most reps give up after 2. We automate intelligent, multi-channel follow-up that feels personal—without the manual work."
      />

      {/* Discovery Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-6" variants={fadeUpVariants}>
              <span className="font-extralight text-gray-400">What You'll</span> <span className="font-medium text-black">Discover</span>
            </motion.h2>
            <motion.p className="text-gray-600 text-lg mb-2" variants={fadeUpVariants}>
              Our Follow-Up Readiness Assessment reveals:
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
          >
            {discoveryItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="bg-gray-100 p-8 rounded-3xl border border-gray-300 border-l-4 border-l-[var(--color-cyan-primary)] flex items-start gap-6 group hover:border-[var(--color-cyan-primary)] hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[var(--color-cyan-primary)]/5 flex items-center justify-center text-[var(--color-cyan-primary)] border border-[var(--color-cyan-primary)]/30 group-hover:scale-110 group-hover:bg-[var(--color-cyan-primary)]/10 transition-all">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Problem We Solve Section - DARK BACKGROUND */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-8" variants={fadeUpVariants}>
                <span className="font-extralight text-zinc-500">The Problem</span>{" "}
                <span className="font-medium text-white">We Solve</span>
              </motion.h2>
            </motion.div>
            <motion.div 
              className="space-y-6 text-lg text-zinc-300 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.p variants={fadeUpVariants}>
                Your leads go cold because consistent follow-up is impossible to maintain manually. Your team forgets, gets busy, or doesn't know what to say next.
              </motion.p>
              <motion.p className="text-xl font-semibold text-white" variants={fadeUpVariants}>
                Meanwhile, competitors who respond faster win the deal.
              </motion.p>
              <motion.p className="text-[var(--color-cyan-primary)] text-xl font-bold" variants={fadeUpVariants}>
                We make follow-up automatic, intelligent, and relentless—without feeling robotic.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-6" variants={fadeUpVariants}>
              <span className="font-extralight text-gray-400">How</span>{" "}
              <span className="font-medium text-black">It Works</span>
            </motion.h2>
            <motion.p className="text-gray-600 text-lg" variants={fadeUpVariants}>
              Automated follow-up flow that feels personal
            </motion.p>
          </motion.div>

          <div className="relative max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainerVariants}
            >
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  className="relative group"
                >
                  <div className="bg-gray-100 p-10 md:p-12 rounded-2xl border border-gray-300 border-l-4 border-l-[var(--color-cyan-primary)] h-full relative z-10 hover:border-[var(--color-cyan-primary)] hover:shadow-lg transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full border-2 border-[var(--color-cyan-primary)] flex items-center justify-center mb-8 relative bg-white">
                        <span className="text-lg font-bold text-black">{step.number}</span>
                        {index < workflowSteps.length - 1 && (
                          <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 text-[var(--color-cyan-primary)]/30">
                            <ArrowRight size={24} />
                          </div>
                        )}
                      </div>
                      
                      <div className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center text-[var(--color-cyan-primary)] mb-6 bg-gray-50">
                        <step.icon size={24} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-black">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Gets Automated Section - DARK BACKGROUND */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center" variants={fadeUpVariants}>
                <span className="font-extralight text-zinc-500">What Gets</span>{" "}
                <span className="font-medium text-white">Automated</span>
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {automationItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUpVariants}
                    className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[var(--color-cyan-primary)]/50 transition-colors"
                  >
                    <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Channels We Integrate Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center" variants={fadeUpVariants}>
              <span className="font-extralight text-gray-400">Channels We</span>{" "}
              <span className="font-medium text-black">Integrate</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {channels.map((channel, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  className="bg-gray-100 p-6 rounded-2xl border border-gray-300 border-l-4 border-l-[var(--color-cyan-primary)] hover:border-[var(--color-cyan-primary)] hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-cyan-primary)]/5 flex items-center justify-center text-[var(--color-cyan-primary)] mb-4 border border-[var(--color-cyan-primary)]/30">
                    <channel.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{channel.name}</h3>
                  <p className="text-gray-600 text-sm">{channel.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Start With Diagnostics Section - DARK BACKGROUND */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-12" variants={fadeUpVariants}>
                <span className="font-extralight text-zinc-500">Why We Start</span>{" "}
                <span className="font-medium text-white">With Diagnostics</span>
              </motion.h2>
              
              <motion.p className="text-xl text-white mb-6" variants={fadeUpVariants}>
                Unlike agencies that pitch before understanding your business, we start with diagnostics.
              </motion.p>
              
              <motion.p className="text-lg text-zinc-300 mb-8 leading-relaxed" variants={fadeUpVariants}>
                Most agencies will give you a quote based on 30 minutes of discovery. We think that's backwards.
              </motion.p>
              
              <motion.p className="text-lg text-zinc-300 mb-8 leading-relaxed" variants={fadeUpVariants}>
                Our free diagnostic does what a traditional agency discovery process costs <span className="text-white font-semibold">R15,000+ for:</span>
              </motion.p>

              <motion.div className="space-y-4 mb-8" variants={fadeUpVariants}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Analyze your actual data, not assumptions</p>
                    <p className="text-zinc-400 text-sm">We look at real follow-up patterns, not guesswork</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Identify specific problems, not generic 'opportunities'</p>
                    <p className="text-zinc-400 text-sm">Pinpoint exactly where leads are dropping off</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Prioritize fixes by revenue impact, not what's trendy</p>
                    <p className="text-zinc-400 text-sm">Focus on automation that recovers the most lost deals</p>
                  </div>
                </div>
              </motion.div>

              <motion.p className="text-xl text-[var(--color-cyan-primary)] font-bold" variants={fadeUpVariants}>
                You get actionable insights whether you hire us or not. If the diagnostic reveals problems you can't fix yourself, we're here.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-6" variants={fadeUpVariants}>
              <span className="font-extralight text-gray-400">Choose Your</span>{" "}
              <span className="font-medium text-black">Messaging Plan</span>
            </motion.h2>
            <motion.p className="text-gray-600 text-lg" variants={fadeUpVariants}>
              Start simple, scale as you grow
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainerVariants}
          >
            {/* Starter Tier */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-gray-100 p-8 rounded-3xl border border-gray-300 border-l-4 border-l-[var(--color-cyan-primary)] hover:border-[var(--color-cyan-primary)] hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold text-black mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">R2,999</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic email automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 1,000 contacts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">3 automated sequences</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              <CTAPrimary className="w-full">
                Get Started with Starter
              </CTAPrimary>
            </motion.div>

            {/* Growth Tier - Featured */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-gray-100 p-8 rounded-3xl border-2 border-[var(--color-cyan-primary)] relative shadow-lg"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-cyan-primary)] text-black px-4 py-1 rounded-full text-sm font-bold">
                ⭐ MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Growth</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">R7,999</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Everything in Starter, plus:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">WhatsApp Business integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">SMS capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 5,000 contacts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited sequences</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-channel campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">3 hours monthly optimization</span>
                </li>
              </ul>
              <CTAPrimary className="w-full">
                Get Started with Growth
              </CTAPrimary>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-gray-100 p-8 rounded-3xl border border-gray-300 border-l-4 border-l-[var(--color-cyan-primary)] hover:border-[var(--color-cyan-primary)] hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold text-black mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">Custom</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Everything in Growth, plus:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom channel integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced AI personalization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited contacts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">24/7 support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-cyan-primary)] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom SLAs</span>
                </li>
              </ul>
              <CTAPrimary className="w-full">
                Get Custom Quote
              </CTAPrimary>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <OtherServices currentServiceId="whatsapp-solutions" />
    </main>
  );
}
