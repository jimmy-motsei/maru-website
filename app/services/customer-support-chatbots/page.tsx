"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, AlertCircle, Users, Settings, CheckCircle2, ChevronDown, Clock, ArrowRight, MessageSquare, Zap, Database, TrendingUp, Shield, RefreshCw } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { OtherServices } from "@/components/sections/OtherServices";
import { EmailModalAssessment } from "@/components/modals/EmailModalAssessment";
import { CTAPrimary } from "@/components/ui/CTAPrimary";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Customer Support Chatbots", href: "/services/customer-support-chatbots" },
];

const problemItems = [
  {
    title: "Generic Responses That Don't Help",
    description: "Most chatbots are deployed with template answers that don't understand your specific products, services, or customer scenarios. A customer asks about your pricing structure, and the bot responds with \"I can help you with that!\"—then doesn't.",
    impact: "The result: frustrated customers who feel like they're talking to a wall, not getting support.",
    icon: AlertCircle,
  },
  {
    title: "No Path to Human Support",
    description: "Chatbots that trap customers in endless loops with no clear escalation to a real person don't reduce support tickets—they multiply them. Customers get angry, demand to speak to someone, and your team spends more time dealing with chatbot frustration than actual problems.",
    impact: "",
    icon: Users,
  },
  {
    title: "Disconnected From Your Systems",
    description: "A chatbot that can't check order status, pull account information, or access your knowledge base is just a fancy FAQ. It can't actually help customers, so they bypass it entirely and go straight to your already-overwhelmed support team.",
    impact: "",
    icon: Database,
  },
];

const solutionItems = [
  {
    title: "Trained on Your Knowledge, Not Generic Data",
    description: "We don't deploy template chatbots. We train your bot on your product documentation, support history, FAQs, and policies—so it understands your business context and gives accurate answers to your specific customer questions.",
    benefits: [
      "Customers get relevant answers, not generic scripts",
      "Reduces \"I don't understand\" loops",
      "Bot actually resolves common questions instead of deflecting them",
    ],
    icon: Bot,
  },
  {
    title: "Smart Escalation to Humans",
    description: "Your chatbot should know when it can't help. We build in intelligent handoff triggers—when a question is complex, when sentiment turns negative, or when a customer explicitly asks for a person. No endless loops. No trapped customers.",
    benefits: [
      "Customers who need humans get to them quickly",
      "Your team handles actual problems, not chatbot failures",
      "Support experience improves instead of degrading",
    ],
    icon: Zap,
  },
  {
    title: "Connected to Your Business Systems",
    description: "We integrate your chatbot with your CRM, order management, knowledge base, and support tools—so it can actually help customers check order status, update account details, or pull relevant information without requiring manual lookups.",
    benefits: [
      "Bot handles real tasks, not just conversation",
      "Reduces support ticket volume for routine queries",
      "Customers get answers faster without waiting for agents",
    ],
    icon: Settings,
  },
  {
    title: "Continuous Improvement, Not Set-and-Forget",
    description: "We monitor chatbot performance, analyze failed conversations, and update training data monthly. When customers ask questions the bot can't answer, we teach it—so your chatbot gets smarter over time, not stale.",
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
    description: "We analyze your current support data—what questions customers ask, where they get stuck, what information they need. Then we audit your knowledge base, documentation, and support resources to identify gaps.",
    timeline: "Week 1",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Bot Training & Integration",
    description: "We train your chatbot on your business data, set up system integrations (CRM, order management, help desk), and configure escalation rules for when human support is needed.",
    timeline: "Weeks 2-3",
    icon: Settings,
  },
  {
    number: "03",
    title: "Testing & Refinement",
    description: "We test the bot with real customer scenarios, refine responses, fix edge cases, and ensure handoffs to human agents work smoothly. You approve before we go live.",
    timeline: "Week 3-4",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Launch & Ongoing Optimization",
    description: "We deploy your chatbot, monitor performance, and schedule monthly optimization calls to review failed conversations, update training data, and improve accuracy.",
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
    answer: "Platform chatbots give you the technology—we give you a trained, integrated solution. We handle the knowledge base setup, system integration, and ongoing optimization. You get a chatbot that actually works for your business, not a tool you have to figure out yourself.",
  },
  {
    question: "Can the chatbot handle questions in multiple languages?",
    answer: "Yes, but we recommend starting with your primary language first. Once the bot is performing well, we can add language support. Trying to go multilingual from day one usually means worse performance in all languages.",
  },
  {
    question: "What happens when the bot can't answer a question?",
    answer: "It escalates to your human support team with full conversation context. Your agents see what the customer asked, what the bot tried, and why it couldn't help—so they can pick up the conversation without making the customer repeat themselves.",
  },
  {
    question: "How do you measure if the chatbot is working?",
    answer: "We track resolution rate (percentage of conversations resolved without human help), escalation rate, customer satisfaction scores, and average resolution time. You get monthly reports showing what's working and where we need to improve.",
  },
  {
    question: "What if our product or pricing changes?",
    answer: "That's what the monthly optimization includes. When you update products, policies, or pricing, we update the chatbot's training data so it stays accurate. Changes typically take 1-2 business days to implement.",
  },
];

export default function CustomerSupportChatbotsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="bg-[#09121A] min-h-screen text-white">
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Customer Support"
        titleLight="That Actually Answers Questions"
        subtitle="AI chatbots built for your business, trained on your knowledge—not generic scripts that frustrate customers."
        onCtaClick={() => setIsModalOpen(true)}
      />

      {/* Problem Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-h2 font-medium mb-14 text-black leading-[1.2]" variants={fadeUpVariants}>
              Why Most <span className="font-thin text-gray-400">Chatbots Create</span> <br className="hidden md:block" />
              <span>More Problems</span>
            </motion.h2>
            <motion.p className="text-gray-600 text-lg max-w-3xl mx-auto" variants={fadeUpVariants}>
              Than they solve
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
                  <p className="text-gray-700 font-medium text-sm">{item.impact}</p>
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
              Here's what works: Chatbots trained on your actual business data, connected to your systems, with clear handoff to humans when needed. Not AI hype—AI that solves specific support problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section - DARK BACKGROUND */}
      <section className="py-24 bg-[#09121A]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-h2 font-medium mb-14 text-white leading-[1.2]" variants={fadeUpVariants}>
              How We <span className="font-thin text-zinc-500">Build Chatbots That</span> <br className="hidden md:block" />
              <span>Actually Support Customers</span>
            </motion.h2>
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
                className="bg-white/5 border border-card-border rounded-3xl p-8 hover:bg-white/[0.07] transition-all"
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
                            <span className="text-zinc-300 text-sm">{benefit}</span>
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-h2 font-medium mb-14 text-black leading-[1.2]" variants={fadeUpVariants}>
              From Setup <span className="font-thin text-gray-400">to Support in</span> <span>4 Weeks</span>
            </motion.h2>
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
                      <p className="text-gray-600 text-sm leading-relaxed font-medium mb-4">{step.description}</p>
                      
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
      <section className="py-24 bg-[#09121A]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-h2 font-medium mb-14 text-white leading-[1.2]" variants={fadeUpVariants}>
              What Your <span className="font-thin text-zinc-500">Chatbot Can Handle</span>
            </motion.h2>
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
                className="bg-white/5 border border-card-border rounded-3xl p-8 hover:bg-white/[0.07] transition-all"
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-h2 font-medium mb-14 text-black leading-[1.2]" variants={fadeUpVariants}>
              Straightforward <span className="font-thin text-gray-400">Pricing for</span> <span>SMEs</span>
            </motion.h2>
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
      <section className="py-24 bg-[#09121A]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-h2 font-medium mb-14 text-white leading-[1.2]" variants={fadeUpVariants}>
              Common <span className="font-thin text-zinc-500">Questions</span>
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
                className="border border-card-border rounded-xl overflow-hidden bg-white/5 hover:bg-white/[0.07] transition-colors"
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
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-h2 font-medium mb-14 text-black leading-[1.2]" variants={fadeUpVariants}>
              Ready to <span className="font-thin text-gray-400">Fix Your</span> <br className="hidden md:block" />
              <span>Support Experience?</span>
            </motion.h2>
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
