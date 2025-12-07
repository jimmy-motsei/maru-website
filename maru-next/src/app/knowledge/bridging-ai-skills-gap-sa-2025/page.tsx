"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Dodecahedron } from "@/components/ui/Dodecahedron";
import { CategorySidebar } from "@/components/ui/CategorySidebar";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "AI Skills Gap", href: "/knowledge/bridging-ai-skills-gap-sa-2025" },
];

export default function BridgingAISkillsGapArticle() {
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
            Closing the AI Skills Gap: Training Strategies for SA SMEs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mb-6"
          >
            46% of businesses cite skills gaps as their top AI adoption barrier. Here are practical training strategies for South African SMEs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 text-sm"
          >
            <span className="text-white/40">Sources:</span>
            <a
              href="https://omdena.com/blog/ai-skills-gap/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              Omdena*
            </a>
            <a
              href="https://www2.deloitte.com/insights/us/en/focus/human-capital-trends.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              Deloitte*
            </a>
            <a
              href="https://sabusinessintegrator.co.za/ai-skills-development/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              SA Business Integrator*
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
                  The AI skills gap is the number one barrier to adoption for SMEs globally, with 46% of business leaders identifying it as their primary challenge. For South African businesses, this is compounded by a broader digital skills shortage and limited access to specialized training programs.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  However, in-house upskilling is often more cost-effective than hiring AI specialists—and with the right approach, any team can develop practical AI capabilities that drive real business value.
                </p>

                <h3 className="text-xl font-bold text-dark mb-4">The Skills Gap Challenge</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">46% cite skills as top barrier:</strong>{" "}
                      <span className="text-dark/70">
                        More than cost or technology concerns, lack of skills prevents adoption.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">39% lack training time:</strong>{" "}
                      <span className="text-dark/70">
                        Day-to-day operations leave little room for learning new technologies.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-dark">51% don't understand AI:</strong>{" "}
                      <span className="text-dark/70">
                        Business leaders admit they don't fully grasp how AI fits their specific needs.
                      </span>
                    </div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-dark mb-4">Practical Training Strategies</h3>
                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-dark mb-2">1. Start with Prompt Engineering</h4>
                    <p className="text-dark/70 text-sm">
                      The fastest ROI comes from teaching your team to use existing AI tools effectively. Focus on crafting prompts that get consistent, useful outputs.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-dark mb-2">2. Identify AI Champions</h4>
                    <p className="text-dark/70 text-sm">
                      Select 1-2 enthusiastic team members to become internal AI experts who can train and support colleagues.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-dark mb-2">3. Learn by Doing</h4>
                    <p className="text-dark/70 text-sm">
                      Assign specific business problems for teams to solve using AI, rather than abstract learning exercises.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-dark mb-2">4. Leverage Free Resources</h4>
                    <p className="text-dark/70 text-sm">
                      Google, Microsoft, and HubSpot offer free AI training modules. YouTube tutorials cover most tools comprehensively.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-bold text-dark mb-2">5. Consider Structured Workshops</h4>
                    <p className="text-dark/70 text-sm">
                      For faster results, professional workshops provide hands-on training tailored to your specific business context.
                    </p>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-lg p-6 mb-8">
                  <h4 className="font-bold text-dark mb-2">Need Help Upskilling Your Team?</h4>
                  <p className="text-dark/70 text-sm mb-4">
                    Our AI Mastery Workshops provide hands-on training designed specifically for South African SMEs—from AI fundamentals to advanced implementation strategies.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-accent hover:gap-3 gap-2 transition-all"
                  >
                    <span className="text-sm font-medium">Learn more about our training programs</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="border-t border-dark/10 pt-8 mt-8">
                  <p className="text-dark/60 text-sm mb-2">
                    <strong>Sources:</strong> Omdena, Deloitte, SA Business Integrator, Daijobu AI
                  </p>
                  <p className="text-dark/50 text-sm italic">
                    This article provides analysis based on industry research and workforce development studies.
                  </p>
                </div>
              </motion.article>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <CategorySidebar currentCategory="skills" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
