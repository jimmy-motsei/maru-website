"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
    >
      <Link
        href={`/knowledge/${article.slug}`}
        className="block bg-white rounded-xl overflow-hidden h-full group hover:shadow-lg transition-all duration-300"
      >
        {/* Category & Date Header */}
        <div className="px-8 pt-8 pb-4">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-accent font-medium uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-dark/40">{article.date}</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-accent transition-colors">
            {article.title}
          </h3>
          <p className="text-dark/60 text-sm leading-relaxed mb-6 line-clamp-3">
            {article.excerpt}
          </p>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-dark group-hover:text-accent transition-colors">
            <span className="text-sm font-medium">Read more</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
