"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { CategorySidebar } from "@/components/ui/CategorySidebar";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "SA AI Policy 2024", href: "/knowledge/sa-national-ai-policy-2024" },
];

export default function SANationalAIPolicyArticle() {
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
            South Africa's National AI Policy Framework: What SMEs Need to Know
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mb-6"
          >
            The October 2024 policy aims to attract ZAR 70 billion in investment by 2030 and cultivate 100-300 AI startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 text-sm"
          >
            <span className="text-white/40">Sources:</span>
            <a
              href="https://www.gov.za/documents/national-ai-policy-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              SA Government*
            </a>
            <a
              href="https://www.michalsons.com/blog/south-africa-ai-regulation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              Michalsons*
            </a>
            <a
              href="https://www2.deloitte.com/za/en/pages/technology/articles/ai-in-africa.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              Deloitte*
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
                  In October 2024, South Africa unveiled its draft National AI Policy Framework, marking a significant step toward establishing comprehensive AI governance. The framework sets ambitious targets: attracting ZAR 70 billion (USD 3.7 billion) in investment by 2030, cultivating 100-300 AI startups, and developing 5,000 AI experts.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  While dedicated AI laws are not yet formalized, existing regulations like the Protection of Personal Information Act (POPIA) already govern how businesses can use AI, particularly regarding data processing and automated decision-making. The policy framework is expected to form the basis for enforceable AI legislation by 2026.
                </p>

                <h3 className="text-xl font-bold text-dark mb-4">Key Policy Areas</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">POPIA Compliance:</strong>{" "}
                      <span className="text-dark/70">
                        Strict rules for processing personal information, including consent requirements for AI training data and individuals' rights regarding automated decisions.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Ethical AI Guidelines:</strong>{" "}
                      <span className="text-dark/70">
                        Focus on transparency, accountability, and bias prevention in AI systems deployed by businesses.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Data Governance:</strong>{" "}
                      <span className="text-dark/70">
                        Requirements for clear audit trails and robust data governance in AI systems.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Investment Incentives:</strong>{" "}
                      <span className="text-dark/70">
                        Government commitment to fostering AI ecosystem through research funding and startup support.
                      </span>
                    </div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-dark mb-4">SA SME Action Items</h3>
                <p className="text-dark/70 mb-6 leading-relaxed">
                  South African SMEs should start preparing now for formal AI regulation. Key steps include developing internal ethical AI guidelines, auditing existing AI systems for bias and compliance, and implementing strong data governance policies that align with POPIA requirements.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  The policy framework creates opportunities as well—businesses that demonstrate responsible AI practices will be better positioned to access government support programs and attract investment as the ecosystem develops.
                </p>

                <div className="border-t border-dark/10 pt-8 mt-8">
                  <p className="text-dark/60 text-sm mb-2">
                    <strong>Sources:</strong> Government of South Africa, Michalsons, Deloitte Africa
                  </p>
                  <p className="text-dark/50 text-sm italic">
                    This article provides analysis based on publicly available policy documents and legal commentary.
                  </p>
                </div>
              </motion.article>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <CategorySidebar currentCategory="regulation" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
