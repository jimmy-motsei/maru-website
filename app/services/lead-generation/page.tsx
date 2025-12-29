"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Database, Bot, Zap, TrendingUp, BarChart3, AlertCircle, Map, FileText, Mail, MessageSquare, Code2, CheckCircle2, HelpCircle, ChevronDown, Clock } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceAccordion } from "@/components/ui/ServiceAccordion";
import { OtherServices } from "@/components/sections/OtherServices";
import { EmailModalAssessment } from "@/components/modals/EmailModalAssessment";
import { CTAPrimary } from "@/components/ui/CTAPrimary";
import { cn } from "@/lib/utils";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Lead Generation", href: "/services/lead-generation" },
];

const discoveryItems = [
  {
    title: "Lead Generation Score",
    description: "Comprehensive 0-100 rating of your current system with industry benchmarks",
    icon: BarChart3,
  },
  {
    title: "Gap Analysis",
    description: "Identify exactly what's missing from your funnel and why leads are escaping",
    icon: AlertCircle,
  },
  {
    title: "Growth Roadmap",
    description: "Step-by-step plan prioritized by impact to increase conversions 5-6x",
    icon: Map,
  },
  {
    title: "Custom PDF Report",
    description: "Detailed analysis you can share with your team and stakeholders",
    icon: FileText,
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Share Your Email",
    description: "So we can send your results",
    icon: Mail,
  },
  {
    number: "02",
    title: "Answer 8 Questions",
    description: "About your website & goals",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Our AI Analyzes",
    description: "We do all the work",
    icon: Code2,
  },
  {
    number: "04",
    title: "Get Your Score",
    description: "Results in your inbox instantly",
    icon: Mail,
  },
];

const faqs = [
  {
    question: "What information do you need?",
    answer: "We just need some basic information about your current website, marketing activities, and goals to provide an accurate assessment.",
  },
  {
    question: "How accurate is the scoring?",
    answer: "Our AI model is trained on thousands of high-performing B2B websites and industry benchmarks to provide a highly accurate assessment of your lead generation potential.",
  },
  {
    question: "What happens after I complete it?",
    answer: "You'll receive an instant score on screen and a detailed PDF report in your inbox with actionable steps to improve your results.",
  },
  {
    question: "Will you spam me?",
    answer: "Never. We only send your report and occasional high-value insights about lead generation. You can unsubscribe at any time.",
  },
  {
    question: "Can I use this for my clients?",
    answer: "Yes, agencies often use our assessment to identify opportunities for their clients and demonstrate the value of lead generation optimization.",
  },
];

export default function LeadGenerationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Is your website optimized"
        titleLight="for lead capture?"
        subtitle="take our free Ai-Powered Lead Scoring Assessment"
        onCtaClick={() => setIsModalOpen(true)}
      />

      <EmailModalAssessment 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Discovery Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-500 mb-2">
              What You'll Discover <span className="font-bold text-black text-4xl md:text-5xl">in 2 Minutes</span>
            </h2>
            <p className="text-[#22d3ee] text-xl font-medium">
              Our AI-powered analysis reveals everything you need to 5x your leads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {discoveryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#f2f2f2] p-8 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 flex items-start gap-6 group hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#e0f7fa] flex items-center justify-center text-[#22d3ee] shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-500 shadow-sm">
              <Clock size={16} className="text-[#22d3ee]" />
              <span>Avg. completion time: <b>2 min 14 sec</b></span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-[#d7d7d7] text-black overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-600 mb-2">
              Here's <span className="font-bold text-black text-4xl md:text-5xl">How It Works</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Get your personalized lead score in 4 simple steps
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-[#f2f2f2] p-10 md:p-12 rounded-2xl border border-black/5 h-full relative z-10 hover:border-[#22d3ee]/30 transition-colors shadow-sm">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#22d3ee] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full border-2 border-[#22d3ee] flex items-center justify-center mb-8 relative bg-white">
                        <span className="text-lg font-bold text-black">{step.number}</span>
                        {index < workflowSteps.length - 1 && (
                          <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 text-[#22d3ee]/30">
                            <ArrowRight size={24} />
                          </div>
                        )}
                      </div>
                      
                      <div className="w-12 h-12 rounded-xl border border-black/10 flex items-center justify-center text-[#22d3ee] mb-6">
                        <step.icon size={24} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-black">{step.title}</h3>
                      <p className="text-black text-sm leading-relaxed font-medium">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Takes 2 minutes",
              "No credit card",
              "Free forever",
              "Unsubscribe anytime"
            ].map((text, i) => (
              <div key={i} className="flex items-center justify-center gap-2 bg-black/5 py-3 px-4 rounded-full border border-black/10">
                <CheckCircle2 size={16} className="text-green-600 shrink-0" />
                <span className="text-xs font-medium text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-400 mb-4">
            Ready to <span className="font-bold text-black">See Your Score?</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Join <span className="text-[#22d3ee] font-bold">1,247+</span> B2B companies who've already discovered their lead generation potential
          </p>

          <CTAPrimary
            onClick={() => setIsModalOpen(true)}
            className="min-w-[300px]"
          >
            GET MY FREE LEAD SCORE NOW
          </CTAPrimary>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#22d3ee]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#22d3ee]" />
              <span>Results in 2 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#22d3ee]" />
              <span>Free PDF report included</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-12 h-12 rounded-full border border-[#22d3ee] flex items-center justify-center text-[#22d3ee] mb-6">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-400 mb-2">
              Common <span className="font-bold text-white">Questions</span>
            </h2>
            <p className="text-gray-400">Everything you need to know before getting started</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden bg-[#050505]"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left group transition-colors hover:bg-white/5"
                >
                  <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={cn(
                      "text-gray-500 transition-transform duration-300",
                      openFaqIndex === index && "rotate-180"
                    )} 
                  />
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <OtherServices currentServiceId="lead-generation" />
    </main>
  );
}
