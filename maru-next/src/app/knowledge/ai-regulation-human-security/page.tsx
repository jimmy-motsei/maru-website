"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Dodecahedron } from "@/components/ui/Dodecahedron";
import { CategorySidebar } from "@/components/ui/CategorySidebar";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "AI Regulation", href: "/knowledge/ai-regulation-human-security" },
];

export default function AIRegulationArticle() {
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
            AI Regulation and Human Security in South Africa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl"
          >
            South Africa is developing comprehensive AI regulation frameworks to address human security concerns while fostering innovation.
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
                  South Africa is developing comprehensive AI regulation frameworks to address human security concerns while fostering innovation. The regulatory approach balances technological advancement with ethical considerations and human rights protection.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  The regulatory framework focuses on ensuring AI systems are developed and deployed responsibly, with particular attention to protecting human rights, preventing discrimination, and maintaining transparency in AI decision-making processes.
                </p>

                <h3 className="text-xl font-bold text-dark mb-4">Key Regulatory Areas</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Human Rights Protection:</strong>{" "}
                      <span className="text-dark/70">
                        Ensuring AI systems respect and protect fundamental human rights and freedoms.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Transparency and Accountability:</strong>{" "}
                      <span className="text-dark/70">
                        Requiring clear explanations of AI decision-making processes and establishing accountability mechanisms.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Bias Prevention:</strong>{" "}
                      <span className="text-dark/70">
                        Implementing measures to prevent and detect algorithmic bias and discrimination.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">Data Protection:</strong>{" "}
                      <span className="text-dark/70">
                        Aligning AI regulations with existing data protection laws and privacy requirements.
                      </span>
                    </div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-dark mb-4">Business Implications</h3>
                <p className="text-dark/70 mb-6 leading-relaxed">
                  South African businesses developing or implementing AI solutions must ensure compliance with these regulatory frameworks. This includes conducting impact assessments, implementing ethical AI practices, and maintaining transparency in AI operations.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  The regulatory environment creates both challenges and opportunities for businesses, requiring investment in compliance while also providing a framework for responsible AI innovation that builds trust with customers and stakeholders.
                </p>

                <div className="border-t border-dark/10 pt-8 mt-8">
                  <p className="text-dark/60 text-sm mb-2">
                    <strong>Source:</strong> Government of South Africa AI Policy Framework
                  </p>
                  <p className="text-dark/50 text-sm italic">
                    This article provides analysis and insights based on publicly available information.
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
