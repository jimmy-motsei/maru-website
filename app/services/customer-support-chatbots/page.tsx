"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, AlertCircle, Users, Settings, CheckCircle2, ChevronDown, Clock, ArrowRight, MessageSquare, Zap, Database, TrendingUp, Shield, RefreshCw } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { OtherServices } from "@/components/sections/OtherServices";
import { EmailModalAssessment } from "@/components/modals/EmailModalAssessment";
import { CTAPrimary } from "@/components/ui/CTAPrimary";
import { SplitHeadline } from "@/components/ui/SplitHeadline";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Customer Support Chatbots", href: "/services/customer-support-chatbots" },
];

const problemItems = [
  {
    title: "Generic Responses That Don't Help",
    description: "Template bots miss product context and fail on real customer questions.",
    impact: "Result: frustrated customers and lower trust in support.",
    icon: AlertCircle,
  },
  {
    title: "No Path to Human Support",
    description: "Without clear escalation, customers get stuck in loops and abandon support.",
    impact: "",
    icon: Users,
  },
  {
    title: "Disconnected From Your Systems",
    description: "If bots cannot access CRM, orders, or knowledge base, they cannot resolve issues.",
    impact: "",
    icon: Database,
  },
];

const solutionItems = [
  {
    title: "Trained on Your Knowledge, Not Generic Data",
    description: "We train your bot on your docs, policies, and support history.",
    benefits: [
      "Customers get relevant answers, not generic scripts",
      "Reduces \"I don't understand\" loops",
      "Bot actually resolves common questions instead of deflecting them",
    ],
    icon: Bot,
  },
  {
    title: "Smart Escalation to Humans",
    description: "We configure handoffs for complex, sensitive, or failed conversations.",
    benefits: [
      "Customers who need humans get to them quickly",
      "Your team handles actual problems, not chatbot failures",
      "Support experience improves instead of degrading",
    ],
    icon: Zap,
  },
  {
    title: "Connected to Your Business Systems",
    description: "We connect CRM, order, and support systems for real-time answers.",
    benefits: [
      "Bot handles real tasks, not just conversation",
      "Reduces support ticket volume for routine queries",
      "Customers get answers faster without waiting for agents",
    ],
    icon: Settings,
  },
  {
    title: "Continuous Improvement, Not Set-and-Forget",
    description: "We review failures monthly and retrain to improve resolution quality.",
    benefits: [
      "Bot accuracy improves as your business evolves",
      "New products/policies get incorporated into responses",
      "You're not stuck with outdated answers",
    ],
    icon: RefreshCw,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Diagnostic & Knowledge Audit",
    description: "Audit support conversations and knowledge assets to find coverage gaps.",
    timeline: "Week 1",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Bot Training & Integration",
    description: "Train bot responses, connect systems, and configure escalation rules.",
    timeline: "Weeks 2-3",
    icon: Settings,
  },
  {
    number: "03",
    title: "Testing & Refinement",
    description: "Test real scenarios, refine responses, and validate human handoffs.",
    timeline: "Week 3-4",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Launch & Ongoing Optimization",
    description: "Launch, monitor performance, and optimize monthly using live data.",
    timeline: "Week 4+",
    icon: TrendingUp,
  },
];

const useCases = [
  {
    title: "Order & Delivery Inquiries",
    items: [
      "Check order status without logging in",
      "Provide tracking information",
      "Answer delivery timeline questions",
      "Escalate complex shipping issues to support",
    ],
  },
  {
    title: "Product Information & Troubleshooting",
    items: [
      "Answer product specification questions",
      "Guide customers through basic troubleshooting",
      "Link to relevant documentation or videos",
      "Route complex technical issues to specialists",
    ],
  },
  {
    title: "Account & Billing Support",
    items: [
      "Help customers reset passwords",
      "Provide billing information",
      "Explain pricing or subscription details",
      "Escalate billing disputes to human agents",
    ],
  },
  {
    title: "Lead Qualification & Routing",
    items: [
      "Capture customer requirements",
      "Ask qualifying questions",
      "Route to appropriate sales or support team",
      "Schedule consultations or demos",
    ],
  },
];

const faqs = [
  {
    question: "How is this different from using a chatbot platform like Intercom or Drift?",
    answer: "Platforms provide tools. We deliver a trained, integrated, and optimized support system.",
  },
  {
    question: "Can the chatbot handle questions in multiple languages?",
    answer: "Yes. We start with your primary language, then expand once accuracy is stable.",
  },
  {
    question: "What happens when the bot can't answer a question?",
    answer: "It escalates with full context so agents can continue without repetition.",
  },
  {
    question: "How do you measure if the chatbot is working?",
    answer: "We track resolution rate, escalations, CSAT, and response speed in monthly reviews.",
  },
  {
    question: "What if our product or pricing changes?",
    answer: "We update training data during monthly optimization, usually within 1-2 business days.",
  },
];

export default function CustomerSupportChatbotsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="bg-[#161616] min-h-screen text-white">
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Customer Support"
        titleLight="That Actually Answers Questions"
        subtitle="AI chatbots trained on your knowledge to resolve support questions faster."
        onCtaClick={() => setIsModalOpen(true)}
      />

      {/* Problem Section - WHITE BACKGROUND */}
      <section className="py-section-tab lg:py-section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.div variants={fadeUpVariants}>
              <SplitHeadline
                as="h2"
                leadingText="Why Most"
                emphasisText="Chatbots Create More Problems"
                className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-h2 mb-12 md:mb-14 text-black leading-[1.2]"
                breakClassName="hidden md:block"
                leadingWeight="light"
                emphasisWeight="strong"
              />
            </motion.div>
            <motion.p className="text-gray-600 text-lg max-w-3xl mx-auto" variants={fadeUpVariants}>
              Most add friction instead of resolution.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
          >
            {problemItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="bg-gray-100 p-8 rounded-3xl border border-gray-300 border-l-4 border-l-red-500 hover:border-red-500 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-red-500/5 flex items-center justify-center text-red-500 border border-red-500/30 mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                {item.impact && (
                  <p className="copy-body text-gray-700 font-medium">{item.impact}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <p className="text-xl text-black font-bold">
              What works: business-trained bots, connected systems, and fast handoff to humans when needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section - DARK BACKGROUND */}
      <section className="py-section-tab lg:py-section bg-[#161616]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.div variants={fadeUpVariants}>
              <SplitHeadline
                as="h2"
                leadingText="How We"
                emphasisText="Build Chatbots That Actually Support Customers"
                className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-h2 mb-12 md:mb-14 text-white leading-[1.2]"
                breakClassName="hidden md:block"
                leadingWeight="light"
                emphasisWeight="strong"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-12 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainerVariants}
          >
            {solutionItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="bg-card-dark border border-card-border rounded-3xl p-8 hover:bg-card-dark-hover transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-highlight/10 flex items-center justify-center text-highlight border border-highlight/30">
                    <item.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-zinc-300 leading-relaxed mb-6">{item.description}</p>
                    
                    <div className="bg-highlight/5 border border-highlight/20 rounded-2xl p-6">
                      <p className="text-highlight font-bold mb-3">What This Fixes:</p>
                      <ul className="space-y-2">
                        {item.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-highlight shrink-0 mt-0.5" />
                            <span className="copy-body text-zinc-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section - WHITE BACKGROUND */}
      <section className="py-section-tab lg:py-section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.div variants={fadeUpVariants}>
              <SplitHeadline
                as="h2"
                leadingText="From Setup"
                emphasisText="to Support in 4 Weeks"
                className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-h2 mb-12 md:mb-14 text-black leading-[1.2]"
                leadingWeight="light"
                emphasisWeight="strong"
              />
            </motion.div>
          </motion.div>

          <div className="relative max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainerVariants}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  className="relative group"
                >
                  <div className="bg-gray-100 p-10 md:p-12 rounded-2xl border border-gray-300 border-l-4 border-l-highlight h-full relative z-10 hover:border-highlight hover:shadow-lg transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full border-2 border-highlight flex items-center justify-center mb-8 relative bg-white">
                        <span className="text-lg font-bold text-black">{step.number}</span>
                        {index < processSteps.length - 1 && (
                          <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 text-highlight/30">
                            <ArrowRight size={24} />
                          </div>
                        )}
                      </div>
                      
                      <div className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center text-highlight mb-6 bg-gray-50">
                        <step.icon size={24} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-black">{step.title}</h3>
                      <p className="copy-body text-gray-600 font-medium mb-4">{step.description}</p>
                      
                      <div className="mt-auto pt-4 border-t border-gray-300 w-full">
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                          <Clock size={14} className="text-highlight" />
                          <span className="font-medium">{step.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - DARK BACKGROUND */}
      <section className="py-section-tab lg:py-section bg-[#161616]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.div variants={fadeUpVariants}>
              <SplitHeadline
                as="h2"
                leadingText="What Your"
                emphasisText="Chatbot Can Handle"
                className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-h2 mb-12 md:mb-14 text-white leading-[1.2]"
                leadingWeight="light"
                emphasisWeight="strong"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="bg-card-dark border border-card-border rounded-3xl p-8 hover:bg-card-dark-hover transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{useCase.title}</h3>
                <ul className="space-y-3">
                  {useCase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-highlight shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section - WHITE BACKGROUND */}
      <section className="py-section-tab lg:py-section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.div variants={fadeUpVariants}>
              <SplitHeadline
                as="h2"
                leadingText="Straightforward"
                emphasisText="Pricing for SMEs"
                className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-h2 mb-12 md:mb-14 text-black leading-[1.2]"
                leadingWeight="light"
                emphasisWeight="strong"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
          >
            {/* Setup & Training */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-gray-100 p-8 rounded-3xl border border-gray-300 border-l-4 border-l-highlight hover:border-highlight hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold text-black mb-2">Setup & Training</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-black">R25,000 - R45,000</span>
              </div>
              <div className="text-gray-600 text-sm mb-6">(one-time)</div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-0.5" />
                  <span className="text-gray-700">Knowledge base audit and bot training</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-0.5" />
                  <span className="text-gray-700">System integration (CRM, help desk, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-0.5" />
                  <span className="text-gray-700">Testing and refinement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-0.5" />
                  <span className="text-gray-700">Price depends on complexity and data volume</span>
                </li>
              </ul>
            </motion.div>

            {/* Monthly Optimization */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-gray-100 p-8 rounded-3xl border border-gray-300 border-l-4 border-l-highlight hover:border-highlight hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold text-black mb-2">Monthly Optimization</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-black">R3,500 - R7,500</span>
              </div>
              <div className="text-gray-600 text-sm mb-6">(per month)</div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-0.5" />
                  <span className="text-gray-700">Performance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-0.5" />
                  <span className="text-gray-700">Conversation analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-0.5" />
                  <span className="text-gray-700">Training data updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly optimization calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ongoing support and refinement</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Pricing Exclusions */}
          <motion.div
            className="max-w-3xl mx-auto bg-highlight/5 border border-highlight/20 rounded-3xl p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
              <Shield size={28} className="text-highlight" />
              What You Don't Pay For:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-highlight shrink-0 mt-0.5" />
                <span className="text-gray-700">No per-conversation fees</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-highlight shrink-0 mt-0.5" />
                <span className="text-gray-700">No user licensing costs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-highlight shrink-0 mt-0.5" />
                <span className="text-gray-700">No hidden platform charges</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - DARK BACKGROUND */}
      <section className="py-section-tab lg:py-section bg-[#161616]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.div variants={fadeUpVariants}>
              <SplitHeadline
                as="h2"
                leadingText="Common"
                emphasisText="Questions"
                className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-h2 mb-12 md:mb-14 text-white leading-[1.2]"
                leadingWeight="light"
                emphasisWeight="strong"
              />
            </motion.div>
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
                className="border border-card-border rounded-xl overflow-hidden bg-card-dark hover:bg-card-dark-hover transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-white pr-8">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-highlight shrink-0 transition-transform ${
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

      {/* CTA Section - WHITE BACKGROUND */}
      <section className="py-section-tab lg:py-section bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.div variants={fadeUpVariants}>
              <SplitHeadline
                as="h2"
                leadingText="Ready to"
                emphasisText="Fix Your Support Experience?"
                className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-h2 mb-12 md:mb-14 text-black leading-[1.2]"
                breakClassName="hidden md:block"
                leadingWeight="light"
                emphasisWeight="strong"
              />
            </motion.div>
            <motion.p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto" variants={fadeUpVariants}>
              Start with a free support diagnostic. We'll analyze your most common customer questions, identify what a chatbot could handle, and show you exactly where you're losing time to repetitive support requests.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUpVariants}>
              <CTAPrimary onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto">
                GET FREE SUPPORT DIAGNOSTIC
              </CTAPrimary>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-gray-300 text-black font-bold hover:border-highlight hover:text-highlight transition-all"
              >
                See a Live Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <OtherServices currentServiceId="customer-support-chatbots" />

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
