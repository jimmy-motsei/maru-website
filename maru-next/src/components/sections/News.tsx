"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fadeUpVariants } from "@/lib/animations";

const newsItems = [
  {
    id: 1,
    category: "AI ADOPTION",
    date: "DECEMBER 2025",
    title: "Generative AI Adoption Doubles for Small Businesses in 2025",
    excerpt: "58% of SMEs now use generative AI—up from 40% in 2024. With 91% reporting revenue increases and 20+ hours saved monthly, the competitive advantage has never been clearer.",
    image: "/assets/images/articles/genai-adoption.png",
    link: "/knowledge/genai-adoption-smbs-2025",
  },
  {
    id: 2,
    category: "SKILLS",
    date: "DECEMBER 2025",
    title: "10 AI Tools Every South African SME Should Know in 2025",
    excerpt: "From ChatGPT to Zapier AI—practical AI tools that deliver immediate productivity gains. Most cost R0-R500/month and can save your team 20+ hours monthly.",
    image: "/assets/images/articles/ai-tools-productivity.png",
    link: "/knowledge/top-ai-tools-smb-productivity-2025",
  },
];

export function News() {
  return (
    <section className="bg-white py-24 md:py-32 text-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end md:items-center justify-between mb-16 gap-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Case studies, articles, and resources
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <Link 
              href="/knowledge" 
              className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase"
            >
              View All
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {newsItems.map((item) => (
            <motion.article 
              key={item.id}
              className="group flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              {/* Image */}
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg mb-8 bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-4 text-xs font-bold tracking-widest uppercase">
                <span className="text-accent">{item.category}</span>
                <span className="text-gray-400">{item.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                <Link href={item.link}>
                  {item.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="text-gray-500 leading-relaxed mb-8">
                {item.excerpt}
              </p>

              {/* Read More */}
              <div className="mt-auto">
                <Link 
                  href={item.link} 
                  className="group/btn flex items-center gap-3 text-xs font-bold tracking-widest uppercase"
                >
                  Read More
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover/btn:bg-accent group-hover/btn:text-white">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
