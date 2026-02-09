"use client";

import { ServiceHero } from "@/components/sections/ServiceHero";
import { OtherServices } from "@/components/sections/OtherServices";
import { ServiceAccordion } from "@/components/ui/ServiceAccordion";
import { CTAPrimary } from "@/components/ui/CTAPrimary";
import { SplitHeadline } from "@/components/ui/SplitHeadline";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Follow-Up Automation", href: "/services/whatsapp-solutions" },
];

const accordionItems = [
  {
    title: "Behavior-Triggered Sequences",
    subtitle: "Smart automation that responds to prospect actions",
    content: "Our system monitors prospect behavior—downloads, page visits, email opens—and automatically triggers personalized follow-up sequences. No manual tracking required. The right message reaches them at the exact moment they're most engaged.",
    features: [
      "Automatic trigger detection across email, website, and CRM",
      "Customizable delay timing between touches",
      "Multi-channel coordination (email, SMS, WhatsApp)",
      "A/B testing for sequence optimization",
    ],
    timeSaved: "⏱️ Saves 15+ hours per week on manual follow-up tracking",
  },
  {
    title: "Multi-Channel Orchestration",
    subtitle: "Reach prospects where they actually respond",
    content: "Not everyone responds to email. Our platform intelligently routes messages across email, SMS, and WhatsApp based on past engagement patterns. If a prospect ignores emails but opens WhatsApp messages, we adapt automatically.",
    features: [
      "WhatsApp Business API integration",
      "SMS delivery with carrier optimization",
      "Email platform sync (HubSpot, Mailchimp, etc.)",
      "Channel preference learning over time",
    ],
    timeSaved: "📈 Increases response rates by 3-5x vs. email-only",
  },
  {
    title: "Smart Handoff to Sales",
    subtitle: "Know exactly when a lead is ready to talk",
    content: "Our AI analyzes engagement signals—reply speed, question types, page visits—to score lead temperature. When someone hits 'hot' status, your team gets an instant notification with full context. No more cold calling lukewarm leads.",
    features: [
      "Real-time lead scoring based on behavior",
      "Instant Slack/email alerts for hot leads",
      "Conversation history auto-populated in CRM",
      "Suggested talking points based on engagement",
    ],
    timeSaved: "🎯 Reduces time-to-contact for hot leads from days to minutes",
  },
  {
    title: "Personalization at Scale",
    subtitle: "Automation that doesn't feel robotic",
    content: "Every message is dynamically personalized using data from your CRM, website activity, and past interactions. We insert names, company details, specific pain points, and relevant case studies—automatically. It feels like a 1:1 conversation, even at 1,000 contacts.",
    features: [
      "Dynamic field insertion (name, company, industry, etc.)",
      "Conditional content blocks based on segment",
      "Industry-specific case study matching",
      "Tone adjustment based on prospect seniority",
    ],
    timeSaved: "✨ Maintains personal touch while scaling to 10x more leads",
  },
  {
    title: "Re-Engagement Campaigns",
    subtitle: "Revive cold leads without manual effort",
    content: "Leads go cold. It happens. Our system automatically identifies dormant contacts and launches re-engagement sequences with fresh angles, new offers, or updated case studies. Many 'dead' leads just needed better timing.",
    features: [
      "Automatic dormancy detection (30/60/90 day triggers)",
      "Fresh content rotation to avoid repetition",
      "Win-back offer suggestions based on segment",
      "Unsubscribe prevention with preference centers",
    ],
    timeSaved: "♻️ Recovers 15-25% of previously cold leads",
  },
];

export default function WhatsAppSolutionsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section with Animated Clouds */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Stop Losing Deals to"
        titleLight="Slow Follow-Up"
        subtitle="80% of sales require 5+ follow-ups, but most reps give up after 2. We automate intelligent, multi-channel follow-up that feels personal—without the manual work."
      />

      {/* Approach and Work Specifics Section - WHITE BACKGROUND */}
      <section id="service">
        <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Description */}
            <div className="lg:col-span-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainerVariants}
              >
                <motion.div variants={fadeUpVariants}>
                  <SplitHeadline
                    as="h2"
                    leadingText="Your"
                    emphasisText="Approach and Work Specifics"
                    className="text-h3 mb-8 text-black leading-[1.2]"
                    leadingWeight="light"
                    emphasisWeight="strong"
                  />
                </motion.div>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed mb-8"
                  variants={fadeUpVariants}
                >
                  At Maru, we don't believe in generic automation. Every follow-up system is built around your actual sales process, your team's capacity, and your prospects' behavior patterns.
                </motion.p>

                <motion.p 
                  className="text-gray-600 leading-relaxed mb-8"
                  variants={fadeUpVariants}
                >
                  We start with diagnostics to understand where leads drop off, then build intelligent sequences that recover those lost opportunities—automatically.
                </motion.p>

                <motion.div variants={fadeUpVariants}>
                  <CTAPrimary href="https://leads.maruonline.com">
                    Start Free Diagnostic
                  </CTAPrimary>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Accordion */}
            <div className="lg:col-span-8">
              <ServiceAccordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Start With Diagnostics Section - DARK BACKGROUND */}
      <section className="py-24 lg:py-32 bg-[#09121A]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.div variants={fadeUpVariants}>
                <SplitHeadline
                  as="h2"
                  leadingText="We start with"
                  emphasisText="Diagnostics of your current processes"
                  className="text-h2 mb-14 text-white leading-[1.2]"
                  breakClassName="hidden md:block"
                  leadingWeight="light"
                  emphasisWeight="strong"
                />
              </motion.div>
              
              <motion.p className="text-xl text-white mb-6" variants={fadeUpVariants}>
                We aim to understand your current systems and operations before recommending the right solutions. Our free Diagnostics allow us to be best placed to recommend the most appropriate solutions.
              </motion.p>
              
              <motion.div className="space-y-6 mb-8" variants={fadeUpVariants}>
                <motion.div 
                  className="bg-card-dark p-6 rounded-2xl border border-card-border transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02, 
                    borderColor: "#04B3CC",
                    boxShadow: "0 0 30px rgba(32, 161, 164, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white font-semibold mb-2 text-lg">Analyze your actual data, not assumptions</h3>
                  <p className="text-zinc-400">We look at real follow-up patterns, not guesswork</p>
                </motion.div>
                
                <motion.div 
                  className="bg-card-dark p-6 rounded-2xl border border-card-border transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02, 
                    borderColor: "#04B3CC",
                    boxShadow: "0 0 30px rgba(32, 161, 164, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white font-semibold mb-2 text-lg">Identify specific problems, not generic 'opportunities'</h3>
                  <p className="text-zinc-400">Pinpoint exactly where leads are dropping off</p>
                </motion.div>
                
                <motion.div 
                  className="bg-card-dark p-6 rounded-2xl border border-card-border transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02, 
                    borderColor: "#04B3CC",
                    boxShadow: "0 0 30px rgba(32, 161, 164, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white font-semibold mb-2 text-lg">Prioritize fixes by revenue impact, not what's trendy</h3>
                  <p className="text-zinc-400">Focus on automation that recovers the most lost deals</p>
                </motion.div>
              </motion.div>

              <motion.p className="text-xl text-highlight font-bold" variants={fadeUpVariants}>
                You get actionable insights whether you hire us or not. If the diagnostic reveals problems you can't fix yourself, we're here.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <OtherServices currentServiceId="whatsapp-solutions" />
    </main>
  );
}
