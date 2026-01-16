"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, AlertCircle, Map, FileText, Mail, MessageSquare, Code2, TrendingUp, CheckCircle2, HelpCircle, ChevronDown, Clock, ArrowRight } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { OtherServices } from "@/components/sections/OtherServices";
import { EmailModalAssessment } from "@/components/modals/EmailModalAssessment";
import { CTAPrimary } from "@/components/ui/CTAPrimary";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Website Conversion", href: "/services/lead-generation" },
];

const discoveryItems = [
  {
    title: "Your Current Lead Conversion Score",
    description: "vs. industry benchmarks—see exactly where you stand",
    icon: BarChart3,
  },
  {
    title: "Specific Gaps Causing Visitors to Leave",
    description: "Without converting—no more guessing what's wrong",
    icon: AlertCircle,
  },
  {
    title: "Priority Fixes Ranked by Revenue Impact",
    description: "Focus on what will move the needle fastest",
    icon: Map,
  },
  {
    title: "Custom Roadmap to Double Your Conversion Rate",
    description: "Step-by-step plan tailored to your business",
    icon: FileText,
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Free AI Assessment",
    description: "Get your lead score in 2 minutes",
    icon: Mail,
  },
  {
    number: "02",
    title: "Gap Analysis",
    description: "We identify your conversion leaks",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Implementation",
    description: "We fix the critical issues",
    icon: Code2,
  },
  {
    number: "04",
    title: "Optimization",
    description: "Continuous improvement based on data",
    icon: TrendingUp,
  },
];

const faqs = [
  {
    question: "What exactly do I get from the free assessment?",
    answer: "You'll receive a detailed report showing your current conversion rate, where visitors drop off, specific issues hurting your performance, and a prioritized roadmap of fixes ranked by potential revenue impact.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients see measurable improvements within 30 days of implementing our priority fixes. Quick wins (like fixing broken forms or improving CTAs) can show results within a week.",
  },
  {
    question: "Do you work with any CMS or platform?",
    answer: "Yes. We work with all major platforms including WordPress, Webflow, Shopify, custom-built sites, and more. Our analysis focuses on conversion principles that apply regardless of technology.",
  },
  {
    question: "What if my traffic is low? Will this still help?",
    answer: "Absolutely. Even with lower traffic, fixing conversion issues means you're maximizing every visitor. As you scale traffic later, you'll be converting at a much higher rate from day one.",
  },
  {
    question: "How is this different from hiring a conversion consultant?",
    answer: "We combine AI-powered analysis with hands-on implementation. You don't just get recommendations—we actually fix the issues for you and monitor performance ongoing.",
  },
];

export default function LeadGenerationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="bg-[#050505] min-h-screen text-white">
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Is Your Website"
        titleLight="Leaking Leads?"
        subtitle="Most B2B websites convert only 1-2% of visitors. Our AI analysis finds exactly where you're losing prospects—and how to fix it."
        onCtaClick={() => setIsModalOpen(true)}
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
              Our AI-powered Website Lead Grader analyzes your site in 2 minutes and reveals:
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
                className="bg-gray-100 p-8 rounded-3xl border border-gray-300 border-l-4 border-l-[#22d3ee] flex items-start gap-6 group hover:border-[#22d3ee] hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#22d3ee]/5 flex items-center justify-center text-[#22d3ee] border border-[#22d3ee]/30 group-hover:scale-110 group-hover:bg-[#22d3ee]/10 transition-all">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-600">
              <Clock size={16} className="text-[#22d3ee]" />
              <span>Avg. completion time: <b className="text-black">2 min 14 sec</b></span>
            </div>
          </div>
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
                You're spending money driving traffic to a website that doesn't convert. Every day, potential customers visit your site, don't find what they need, and leave—never to return.
              </motion.p>
              <motion.p className="text-xl font-semibold text-white" variants={fadeUpVariants}>
                You suspect something's wrong, but you don't know what.
              </motion.p>
              <motion.p className="text-[#22d3ee] text-xl font-bold" variants={fadeUpVariants}>
                We show you exactly what's broken and how to fix it.
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
              From diagnosis to results in 4 strategic steps
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
                  <div className="bg-gray-100 p-10 md:p-12 rounded-2xl border border-gray-300 border-l-4 border-l-[#22d3ee] h-full relative z-10 hover:border-[#22d3ee] hover:shadow-lg transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full border-2 border-[#22d3ee] flex items-center justify-center mb-8 relative bg-white">
                        <span className="text-lg font-bold text-black">{step.number}</span>
                        {index < workflowSteps.length - 1 && (
                          <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 text-[#22d3ee]/30">
                            <ArrowRight size={24} />
                          </div>
                        )}
                      </div>
                      
                      <div className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center text-[#22d3ee] mb-6 bg-gray-50">
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

          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            {[
              "Takes 2 minutes",
              "No credit card",
              "Free forever",
              "Unsubscribe anytime"
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="flex items-center justify-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle2 size={16} className="text-[#22d3ee] shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
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
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Analyze your actual data, not assumptions</p>
                    <p className="text-zinc-400 text-sm">We look at real visitor behavior, not guesswork</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Identify specific problems, not generic 'opportunities'</p>
                    <p className="text-zinc-400 text-sm">Pinpoint exactly where you're losing leads</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Prioritize fixes by revenue impact, not what's trendy</p>
                    <p className="text-zinc-400 text-sm">Focus on changes that actually drive results</p>
                  </div>
                </div>
              </motion.div>

              <motion.p className="text-xl text-[#22d3ee] font-bold" variants={fadeUpVariants}>
                You get actionable insights whether you hire us or not. If the diagnostic reveals problems you can't fix yourself, we're here.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-4xl md:text-5xl mb-6" variants={fadeUpVariants}>
              <span className="font-extralight text-gray-400">Ready to Fix</span>{" "}
              <span className="font-medium text-black">Your Conversion Leaks?</span>
            </motion.h2>
            <motion.p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto" variants={fadeUpVariants}>
              Start with a free diagnostic. Get actionable insights in 2 minutes.
            </motion.p>
            <motion.div variants={fadeUpVariants}>
              <CTAPrimary onClick={() => setIsModalOpen(true)} className="w-full md:w-auto">
                GET YOUR FREE WEBSITE GRADE
              </CTAPrimary>
            </motion.div>
          </motion.div>
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
              <span className="font-extralight text-gray-400">Ready to Fix</span>{" "}
              <span className="font-medium text-black">Your Conversion Leaks?</span>
            </motion.h2>
            <motion.p className="text-gray-600 text-lg" variants={fadeUpVariants}>
              Choose the package that fits your growth stage.
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
              className="bg-gray-100 p-8 rounded-3xl border border-gray-300 border-l-4 border-l-[#22d3ee] hover:border-[#22d3ee] hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold text-black mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">R5,999</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly conversion audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic optimization fixes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Quarterly strategy sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              <CTAPrimary onClick={() => setIsModalOpen(true)} className="w-full">
                Get Started with Starter
              </CTAPrimary>
            </motion.div>

            {/* Growth Tier - Featured */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-gray-100 p-8 rounded-3xl border-2 border-[#22d3ee] relative shadow-lg"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#22d3ee] text-black px-4 py-1 rounded-full text-sm font-bold">
                ⭐ MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Growth</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">R12,999</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Everything in Starter, plus:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced A/B testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lead nurturing automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">CRM integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly optimization sprints</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">3 hours monthly consulting</span>
                </li>
              </ul>
              <CTAPrimary onClick={() => setIsModalOpen(true)} className="w-full">
                Get Started with Growth
              </CTAPrimary>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-gray-100 p-8 rounded-3xl border border-gray-300 border-l-4 border-l-[#22d3ee] hover:border-[#22d3ee] hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold text-black mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">R24,999</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Everything in Growth, plus:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-site optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom conversion funnels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced attribution modeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited optimization support</span>
                </li>
              </ul>
              <CTAPrimary onClick={() => setIsModalOpen(true)} className="w-full">
                Get Custom Quote
              </CTAPrimary>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - DARK BACKGROUND */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-6" variants={fadeUpVariants}>
              <span className="font-extralight text-zinc-500">Frequently Asked</span>{" "}
              <span className="font-medium text-white">Questions</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeUpVariants}
                className="border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:bg-white/[0.07] transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-white pr-8">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#22d3ee] shrink-0 transition-transform ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-8 pb-6 text-zinc-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <OtherServices currentServiceId="lead-generation" />

      {/* Email Modal */}
      {isModalOpen && (
        <EmailModalAssessment 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
}
