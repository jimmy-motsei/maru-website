"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Dodecahedron } from "@/components/ui/Dodecahedron";
import { CategorySidebar } from "@/components/ui/CategorySidebar";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "AI Adoption", href: "/knowledge/ai-adoption-south-african-smbs" },
];

export default function AIAdoptionArticle() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-dark relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <Dodecahedron />
        </div>

        <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
          {/* Breadcrumbs */}
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

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 max-w-4xl"
          >
            AI Adoption Surges Among South Africa's Small and Medium Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl"
          >
            Analysis and insights for South African SMEs on AI adoption, implementation strategies, and business transformation opportunities.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#f5f5f5] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 lg:p-12"
              >
                <h2 className="text-2xl font-bold text-dark mb-6">Summary</h2>
                <p className="text-dark/70 mb-6 leading-relaxed">
                  South Africa's small and medium businesses (SMBs) are experiencing a notable surge in artificial intelligence adoption, driven by the need to improve operational efficiency, enhance customer experiences, and maintain competitive positioning in an increasingly digital economy.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  The adoption patterns show SMBs leveraging AI across various business functions, including customer service, marketing, operations management, and data analytics. This widespread implementation demonstrates the accessibility and practical value of AI solutions for businesses of all sizes in the South African market.
                </p>

                <h3 className="text-xl font-bold text-dark mb-4">Key Takeaways</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Rapid Adoption Trend:</strong>{" "}
                      <span className="text-dark/70">
                        South African SMBs are quickly adopting AI technologies, indicating a shift toward digital-first business models and competitive strategies.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Operational Benefits:</strong>{" "}
                      <span className="text-dark/70">
                        AI adoption is delivering measurable improvements in operational efficiency, customer service, and business performance across various sectors.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Competitive Necessity:</strong>{" "}
                      <span className="text-dark/70">
                        The surge in AI adoption suggests that AI implementation has become a competitive necessity rather than a luxury for South African businesses.
                      </span>
                    </div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-dark mb-4">SA SME Relevance</h3>
                <p className="text-dark/70 mb-6 leading-relaxed">
                  South African SMEs should accelerate AI adoption to remain competitive as the trend shows increasing adoption among peers. Early adopters can gain notable competitive advantages, while late adopters risk falling behind.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  The surge in adoption also indicates growing market demand for AI solutions, creating opportunities for SMEs to develop and offer AI-related services and products.
                </p>

                <div className="border-t border-dark/10 pt-8 mt-8">
                  <p className="text-dark/60 text-sm mb-2">
                    <strong>Source:</strong>{" "}
                    <a
                      href="https://www.zawya.com/en/economy/africa/ai-adoption-surges-among-south-africas-smbs-peu44xxo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Zawya
                    </a>
                  </p>
                  <p className="text-dark/50 text-sm italic">
                    This article provides analysis and insights based on publicly available information. All quotes and references are properly attributed to their original sources.
                  </p>
                </div>
              </motion.article>
            </div>

            {/* Sidebar */}
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
