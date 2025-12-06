"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Dodecahedron } from "@/components/ui/Dodecahedron";
import { CategorySidebar } from "@/components/ui/CategorySidebar";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "AI Chatbots for SMBs", href: "/knowledge/ai-customer-service-smb-2024" },
];

export default function AICustomerServiceArticle() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-dark relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <Dodecahedron />
        </div>

        <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <Link
                    href={crumb.href}
                    className={`transition-colors ${
                      index === breadcrumbs.length - 1
                        ? "text-accent"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-white/30">/</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 max-w-4xl"
          >
            24/7 Customer Support Without the Cost: AI Chatbots for SMBs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mb-6"
          >
            35% of AI deployments among SMBs are customer service bots, delivering 20-40% cost savings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 text-sm"
          >
            <span className="text-white/40">Sources:</span>
            <a
              href="https://www.forbes.com/sites/forbestechcouncil/2024/ai-chatbots-small-business/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              Forbes*
            </a>
            <a
              href="https://biztechmagazine.com/article/2024/ai-customer-service"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              BizTech*
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#f5f5f5] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 lg:p-12"
              >
                <h2 className="text-2xl font-bold text-dark mb-6">Summary</h2>
                <p className="text-dark/70 mb-6 leading-relaxed">
                  AI-powered chatbots have become the most popular AI deployment for small and medium businesses, comprising 35% of all AI agent implementations. These virtual assistants offer 24/7 customer support, handle routine inquiries, and improve response times—all while significantly reducing operational costs.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  For South African SMBs, chatbots represent one of the most accessible and impactful entry points into AI adoption. With platforms like WhatsApp being the dominant communication channel for customers, AI-powered WhatsApp bots are particularly relevant for the local market.
                </p>

                <h3 className="text-xl font-bold text-dark mb-4">Key Benefits</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">20-40% Cost Savings:</strong>{" "}
                      <span className="text-dark/70">
                        Reduced staffing costs and improved efficiency in handling customer inquiries.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">24/7 Availability:</strong>{" "}
                      <span className="text-dark/70">
                        Never miss a customer inquiry, whether it's 3 PM or 3 AM, weekday or weekend.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Instant Responses:</strong>{" "}
                      <span className="text-dark/70">
                        Immediate answers to FAQs improve customer satisfaction and reduce wait times.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Lead Qualification:</strong>{" "}
                      <span className="text-dark/70">
                        Chatbots can qualify leads, book appointments, and hand off to humans when needed.
                      </span>
                    </div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-dark mb-4">Getting Started</h3>
                <p className="text-dark/70 mb-6 leading-relaxed">
                  For South African SMBs, WhatsApp chatbots offer the best starting point given WhatsApp's dominance as a customer communication channel. Modern AI chatbot platforms start from R3,000-8,000 per month, making them accessible for businesses of most sizes.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  Key success factors include starting with a focused use case (like FAQ responses or appointment booking), ensuring smooth human handoff for complex queries, and continuously training the bot based on customer interactions.
                </p>

                <div className="border-t border-dark/10 pt-8 mt-8">
                  <p className="text-dark/60 text-sm mb-2">
                    <strong>Sources:</strong> Forbes, BizTech Magazine, Navigating X Research
                  </p>
                  <p className="text-dark/50 text-sm italic">
                    This article provides analysis based on industry research and market trends.
                  </p>
                </div>
              </motion.article>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <CategorySidebar currentCategory="transformation" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
