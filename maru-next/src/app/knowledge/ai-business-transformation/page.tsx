"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { CategorySidebar } from "@/components/ui/CategorySidebar";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "Business Transformation", href: "/knowledge/ai-business-transformation" },
];

export default function AIBusinessTransformationArticle() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-dark relative min-h-[50vh] flex items-end overflow-hidden">
        <AtmosphericBackground variant="sidebar" />

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
            AI Business Transformation in South Africa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl"
          >
            South African businesses are undergoing significant transformation through AI adoption, reshaping traditional business models and creating new opportunities for growth and innovation.
          </motion.p>
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
                  South African businesses are undergoing significant transformation through AI adoption, reshaping traditional business models and creating new opportunities for growth and innovation across various sectors.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  The transformation encompasses changes in operational processes, customer engagement strategies, decision-making frameworks, and competitive positioning as organizations leverage AI technologies to drive efficiency and create value.
                </p>

                <h3 className="text-xl font-bold text-dark mb-4">Transformation Areas</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Operational Efficiency:</strong>{" "}
                      <span className="text-dark/70">
                        AI is streamlining business processes, reducing costs, and improving productivity across various functions.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Customer Experience:</strong>{" "}
                      <span className="text-dark/70">
                        Personalized services and improved customer interactions through AI-powered solutions.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Data-Driven Decision Making:</strong>{" "}
                      <span className="text-dark/70">
                        Enhanced analytics and insights enabling better strategic and operational decisions.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Innovation Acceleration:</strong>{" "}
                      <span className="text-dark/70">
                        Faster product development and service innovation through AI capabilities.
                      </span>
                    </div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-dark mb-4">Sector Impact</h3>
                <p className="text-dark/70 mb-6 leading-relaxed">
                  Different sectors are experiencing transformation at varying paces, with financial services, retail, and manufacturing leading the adoption curve. Each sector presents unique opportunities and challenges for AI implementation.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  The transformation is creating new business models and revenue streams while also requiring organizations to adapt their workforce strategies and organizational structures to maximize AI benefits.
                </p>

                <div className="border-t border-dark/10 pt-8 mt-8">
                  <p className="text-dark/60 text-sm mb-2">
                    <strong>Source:</strong> South African Business AI Transformation Report
                  </p>
                  <p className="text-dark/50 text-sm italic">
                    This article provides analysis and insights based on publicly available information.
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
