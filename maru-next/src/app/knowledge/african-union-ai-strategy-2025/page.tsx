"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { CategorySidebar } from "@/components/ui/CategorySidebar";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "AU AI Strategy", href: "/knowledge/african-union-ai-strategy-2025" },
];

export default function AfricanUnionAIStrategyArticle() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-dark relative min-h-[50vh] flex items-end overflow-hidden">
        <AtmosphericBackground variant="hero" />

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
            Africa's Continental AI Strategy: What It Means for SA Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mb-6"
          >
            The African Union endorsed a unified AI governance framework in July 2024, with implementation beginning 2025-2026.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 text-sm"
          >
            <span className="text-white/40">Sources:</span>
            <a
              href="https://au.int/en/documents/artificial-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              African Union*
            </a>
            <a
              href="https://montrealethics.ai/africa-ai-strategy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              Montreal AI Ethics*
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
                  In July 2024, the African Union Executive Council endorsed a Continental AI Strategy, with its initial implementation phase scheduled for 2025-2026. This non-binding framework aims to foster unified national AI policies across Africa, promoting ethical, inclusive, and equitable standards for AI development and deployment.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  The strategy represents a significant step toward Africa taking ownership of its AI future, rather than simply adopting frameworks developed elsewhere. For South African businesses, this creates both regulatory alignment opportunities and new market access possibilities across the continent.
                </p>

                <h3 className="text-xl font-bold text-dark mb-4">Key Strategic Objectives</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Unified AI Governance:</strong>{" "}
                      <span className="text-dark/70">
                        Harmonized national policies to enable cross-border AI services and reduce regulatory fragmentation.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">SME Adoption Support:</strong>{" "}
                      <span className="text-dark/70">
                        Encouraging AI adoption by the private sector, including dedicated support for small and medium enterprises.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Skills Development:</strong>{" "}
                      <span className="text-dark/70">
                        Building AI capabilities through infrastructure investment, data platforms, and workforce training programs.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Ethical Standards:</strong>{" "}
                      <span className="text-dark/70">
                        Promoting responsible AI development that respects human rights and African values.
                      </span>
                    </div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-dark mb-4">Opportunities for SA Businesses</h3>
                <p className="text-dark/70 mb-6 leading-relaxed">
                  South African businesses developing AI solutions are well-positioned to expand across the continent as the strategy creates more harmonized regulatory environments. The AfCFTA (African Continental Free Trade Area) combined with aligned AI policies reduces barriers to offering AI services in other African markets.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  The strategy's emphasis on "AI made in Africa" also creates opportunities for local SMEs to develop solutions tailored to African contexts—addressing challenges in agriculture, healthcare, finance, and energy that global AI solutions may not fully address.
                </p>

                <div className="border-t border-dark/10 pt-8 mt-8">
                  <p className="text-dark/60 text-sm mb-2">
                    <strong>Sources:</strong> African Union, Montreal AI Ethics Institute, ECDPM
                  </p>
                  <p className="text-dark/50 text-sm italic">
                    This article provides analysis based on official AU documents and policy research.
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
