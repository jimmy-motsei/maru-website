"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Dodecahedron } from "@/components/ui/Dodecahedron";
import { CategorySidebar } from "@/components/ui/CategorySidebar";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "GenAI Adoption 2025", href: "/knowledge/genai-adoption-smbs-2025" },
];

export default function GenAIAdoptionArticle() {
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
            Generative AI Adoption Doubles for Small Businesses in 2025
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mb-6"
          >
            58% of SMBs now use generative AI—up from 40% in 2024. The competitive advantage of early adoption has never been clearer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 text-sm"
          >
            <span className="text-white/40">Sources:</span>
            <a
              href="https://www.salesforce.com/news/stories/small-business-ai-trends-2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              Salesforce*
            </a>
            <a
              href="https://www.uschamber.com/small-business/small-business-ai-report"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              US Chamber*
            </a>
            <a
              href="https://www.smb-gr.com/reports"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              SMB Group*
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
                  The adoption of generative AI among small and medium-sized businesses has accelerated dramatically in 2025, with approximately 58% of SMBs now using the technology—nearly double the rate from 2023. This surge reflects a fundamental shift in how smaller businesses approach technology adoption and compete in an increasingly AI-driven marketplace.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  According to recent studies, 91% of AI-using SMBs report revenue increases, with an average 34% boost to their bottom line. Beyond revenue, businesses are saving 20+ hours per month through automation—time that can be redirected to strategic growth initiatives.
                </p>

                <h3 className="text-xl font-bold text-dark mb-4">Key Statistics</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">58% Adoption Rate:</strong>{" "}
                      <span className="text-dark/70">
                        Up from 40% in 2024 and double the rate from 2023, showing exponential growth.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">91% Revenue Increase:</strong>{" "}
                      <span className="text-dark/70">
                        The vast majority of SMBs using AI report measurable revenue improvements.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">20+ Hours Saved Monthly:</strong>{" "}
                      <span className="text-dark/70">
                        Automation of repetitive tasks frees up significant time for strategic work.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">R500-R2,000 Monthly Savings:</strong>{" "}
                      <span className="text-dark/70">
                        Direct cost savings from AI implementation across operations.
                      </span>
                    </div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-dark mb-4">SA SME Relevance</h3>
                <p className="text-dark/70 mb-6 leading-relaxed">
                  South African SMEs should view these global trends as both an opportunity and a warning. Early adopters are gaining competitive advantages that compound over time, while late adopters risk falling behind as AI becomes embedded in standard business operations.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  The most accessible entry points for SA businesses include customer service chatbots, content generation for marketing, automated data entry, and AI-powered analytics. Most tools are available at R0-R500/month, making the barrier to entry lower than ever.
                </p>

                <div className="border-t border-dark/10 pt-8 mt-8">
                  <p className="text-dark/60 text-sm mb-2">
                    <strong>Sources:</strong> Salesforce SMB Report 2024, US Chamber of Commerce, SMB Group Survey 2025
                  </p>
                  <p className="text-dark/50 text-sm italic">
                    This article provides analysis based on publicly available research and industry reports.
                  </p>
                </div>
              </motion.article>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <CategorySidebar currentCategory="ai-adoption" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
