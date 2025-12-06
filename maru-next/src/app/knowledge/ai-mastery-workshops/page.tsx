"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Dodecahedron } from "@/components/ui/Dodecahedron";
import { CategorySidebar } from "@/components/ui/CategorySidebar";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "AI Mastery Workshops", href: "/knowledge/ai-mastery-workshops" },
];

export default function AIMasteryWorkshopsArticle() {
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
            AI Mastery Workshops
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl"
          >
            Empower your team with practical AI skills and implementation strategies
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
                <h2 className="text-2xl font-bold text-dark mb-6">
                  AI Skills Training & Enablement
                </h2>
                <p className="text-dark/70 text-lg mb-12 leading-relaxed">
                  We help train your workforce on key skills they need to excel at their work using AI, with hands-on workshops and practical implementation strategies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-4">Workshop Programs</h3>
                    <p className="text-dark/70 mb-4 leading-relaxed">
                      Our comprehensive AI training programs are designed to bridge the gap between AI theory and practical business application, ensuring your team can implement AI solutions effectively.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "AI Fundamentals & Best Practices",
                        "Prompt Engineering Mastery",
                        "AI Tool Integration & Workflows",
                        "Data Analysis & AI Insights",
                        "AI Ethics & Responsible Use",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-dark/70">
                          <span className="w-2 h-2 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-dark mb-4">Training Formats</h3>
                    <p className="text-dark/70 mb-4 leading-relaxed">
                      We offer flexible training formats to suit your organization's needs, from intensive bootcamps to ongoing learning programs.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "In-Person Workshops",
                        "Virtual Training Sessions",
                        "Hybrid Learning Programs",
                        "Custom Corporate Training",
                        "Ongoing Support & Coaching",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-dark/70">
                          <span className="w-2 h-2 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-dark/10 pt-8">
                  <h3 className="text-xl font-bold text-dark mb-4">
                    Ready to Transform Your Team?
                  </h3>
                  <p className="text-dark/70 mb-6 leading-relaxed">
                    Let's discuss how AI training can empower your workforce and drive innovation in your organization.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-accent hover:bg-accent-dark text-dark font-medium rounded-full pl-8 pr-2 py-2.5 transition-colors group"
                  >
                    <span className="text-sm tracking-wide uppercase mr-4">Contact Us</span>
                    <span className="bg-dark text-white rounded-full p-3 group-hover:bg-black transition-colors">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
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
