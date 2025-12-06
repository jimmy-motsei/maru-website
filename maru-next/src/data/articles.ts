export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  date: string;
  datePublished: string;
  readTime: string;
  featured?: boolean;
  archived?: boolean;
}

export const categories = [
  { name: "AI Adoption", slug: "ai-adoption" },
  { name: "Regulation", slug: "regulation" },
  { name: "Transformation", slug: "transformation" },
  { name: "Skills", slug: "skills" },
  { name: "Business", slug: "business" },
];

// Current active articles
export const articles: Article[] = [
  {
    id: "1",
    slug: "genai-adoption-smbs-2025",
    title: "Generative AI Adoption Doubles for Small Businesses in 2025",
    excerpt:
      "58% of SMBs now use generative AI—up from 40% in 2024. With 91% reporting revenue increases and 20+ hours saved monthly, the competitive advantage of AI adoption has never been clearer.",
    category: "AI Adoption",
    categorySlug: "ai-adoption",
    date: "December 6, 2025",
    datePublished: "2025-12-06",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "sa-national-ai-policy-2024",
    title: "South Africa's National AI Policy Framework: What SMBs Need to Know",
    excerpt:
      "The October 2024 policy aims to attract ZAR 70 billion in investment by 2030 and cultivate 100-300 AI startups. Here's what South African SMBs need to prepare for.",
    category: "Regulation",
    categorySlug: "regulation",
    date: "December 6, 2025",
    datePublished: "2025-12-06",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: "3",
    slug: "ai-customer-service-smb-2024",
    title: "24/7 Customer Support Without the Cost: AI Chatbots for SMBs",
    excerpt:
      "35% of AI deployments among SMBs are customer service bots, delivering 20-40% cost savings. Learn how chatbots are transforming customer engagement for South African businesses.",
    category: "Transformation",
    categorySlug: "transformation",
    date: "December 6, 2025",
    datePublished: "2025-12-06",
    readTime: "5 min read",
  },
  {
    id: "4",
    slug: "african-union-ai-strategy-2025",
    title: "Africa's Continental AI Strategy: What It Means for SA Businesses",
    excerpt:
      "The African Union endorsed a unified AI governance framework in July 2024, with implementation beginning 2025-2026. This pan-African approach opens new opportunities for cross-border AI services.",
    category: "Regulation",
    categorySlug: "regulation",
    date: "December 6, 2025",
    datePublished: "2025-12-06",
    readTime: "5 min read",
  },
  {
    id: "5",
    slug: "top-ai-tools-smb-productivity-2025",
    title: "10 AI Tools Every South African SMB Should Know in 2025",
    excerpt:
      "From ChatGPT to Zapier AI—practical AI tools that deliver immediate productivity gains. Most cost R0-R500/month and can save your team 20+ hours monthly.",
    category: "Skills",
    categorySlug: "skills",
    date: "December 6, 2025",
    datePublished: "2025-12-06",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: "6",
    slug: "bridging-ai-skills-gap-sa-2025",
    title: "Closing the AI Skills Gap: Training Strategies for SA SMBs",
    excerpt:
      "46% of businesses cite skills gaps as their top AI adoption barrier. Here are practical training strategies to upskill your team without breaking the budget.",
    category: "Skills",
    categorySlug: "skills",
    date: "December 6, 2025",
    datePublished: "2025-12-06",
    readTime: "6 min read",
  },
];

// Archived articles (previous content)
export const archivedArticles: Article[] = [
  {
    id: "archived-1",
    slug: "ai-adoption-south-african-smbs",
    title: "AI Adoption Surges Among South Africa's Small and Medium Businesses",
    excerpt:
      "South Africa's small and medium businesses (SMBs) are experiencing a notable surge in artificial intelligence adoption.",
    category: "AI Adoption",
    categorySlug: "ai-adoption",
    date: "January 3, 2025",
    datePublished: "2025-01-03",
    readTime: "5 min read",
    archived: true,
  },
  {
    id: "archived-2",
    slug: "ai-business-transformation",
    title: "AI Business Transformation in South Africa",
    excerpt:
      "South African businesses are undergoing significant transformation through AI adoption.",
    category: "Transformation",
    categorySlug: "transformation",
    date: "January 3, 2025",
    datePublished: "2025-01-03",
    readTime: "4 min read",
    archived: true,
  },
  {
    id: "archived-3",
    slug: "ai-mastery-workshops",
    title: "AI Mastery Workshops - Training & Enablement",
    excerpt:
      "Empower your team with practical AI skills and implementation strategies.",
    category: "Skills",
    categorySlug: "skills",
    date: "January 3, 2025",
    datePublished: "2025-01-03",
    readTime: "6 min read",
    archived: true,
  },
  {
    id: "archived-4",
    slug: "ai-regulation-human-security",
    title: "AI Regulation and Human Security in South Africa",
    excerpt:
      "South Africa is developing comprehensive AI regulation frameworks.",
    category: "Regulation",
    categorySlug: "regulation",
    date: "January 3, 2025",
    datePublished: "2025-01-03",
    readTime: "5 min read",
    archived: true,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug) ||
    archivedArticles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((article) => article.categorySlug === categorySlug);
}
