"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Dodecahedron } from "@/components/ui/Dodecahedron";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { CategorySidebar } from "@/components/ui/CategorySidebar";
import { articles } from "@/data/articles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function KnowledgePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-dark relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none scale-125">
          <Dodecahedron />
        </div>

        <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 max-w-4xl"
          >
            <span className="font-bold">Exploring the</span>{" "}
            <span className="font-light text-white/80">World of AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mb-12"
          >
            Insights, analysis, and developments in AI for South African SMBs
          </motion.p>

          <motion.a
            href="#publications"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 text-white/60 hover:text-accent transition-colors group"
          >
            <span className="text-sm font-medium">Publications</span>
            <ArrowDown size={16} className="animate-bounce" />
          </motion.a>
        </div>
      </section>

      {/* Articles Section */}
      <section id="publications" className="bg-[#f5f5f5] py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Articles Grid */}
            <div className="lg:col-span-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {articles.map((article, index) => (
                  <ArticleCard key={article.id} article={article} index={index} />
                ))}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <CategorySidebar />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-dark py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay <span className="font-light">Updated</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Get the latest AI insights and developments delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-dark font-medium rounded-full hover:bg-accent-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
