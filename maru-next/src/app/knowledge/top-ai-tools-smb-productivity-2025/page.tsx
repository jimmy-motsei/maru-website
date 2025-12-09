"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { CategorySidebar } from "@/components/ui/CategorySidebar";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "Top AI Tools 2025", href: "/knowledge/top-ai-tools-smb-productivity-2025" },
];

const aiTools = [
  {
    name: "ChatGPT",
    category: "General AI Assistant",
    price: "Free - R350/month",
    specialty: "The most versatile AI assistant on the market",
    useCase: "Content creation, research, coding assistance, brainstorming",
    description: "OpenAI's flagship product excels at everything from drafting marketing copy to debugging code. GPT-4o handles images, voice, and text seamlessly. The free tier is surprisingly capable, while Plus unlocks faster responses and the latest models.",
  },
  {
    name: "Claude",
    category: "General AI Assistant",
    price: "Free - R350/month",
    specialty: "Best for long-form writing and nuanced analysis",
    useCase: "Long-form writing, analysis, complex reasoning tasks",
    description: "Anthropic's Claude outshines competitors in handling lengthy documents (up to 200k tokens) and producing thoughtful, well-structured content. Its 'thinking' approach makes it ideal for complex business reports, legal documents, and strategic planning.",
  },
  {
    name: "Microsoft Copilot",
    category: "Productivity Suite",
    price: "R550/user/month",
    specialty: "Seamless integration with Microsoft 365",
    useCase: "Office documents, email drafting, meeting summaries",
    description: "If your team lives in Excel, Word, and Outlook, Copilot is a game-changer. It drafts emails from bullet points, generates pivot tables from natural language, and summarizes hour-long meetings into actionable notes—all within familiar interfaces.",
  },
  {
    name: "Notion AI",
    category: "Workspace Assistant",
    price: "R180/user/month",
    specialty: "AI-powered knowledge management",
    useCase: "Note-taking, project documentation, content summarization",
    description: "Built directly into Notion's workspace, this AI understands your company wiki and project docs. Ask questions about past decisions, auto-generate meeting agendas, or translate technical docs into client-friendly summaries instantly.",
  },
  {
    name: "HubSpot AI",
    category: "Sales & Marketing",
    price: "Included in plans",
    specialty: "CRM-integrated marketing intelligence",
    useCase: "Email personalization, lead scoring, content suggestions",
    description: "HubSpot's AI features analyze your contact database to predict which leads are ready to buy, personalize email campaigns at scale, and suggest optimal send times. The Breeze assistant writes social posts and blog content matched to your brand voice.",
  },
  {
    name: "Zapier AI",
    category: "Workflow Automation",
    price: "From R350/month",
    specialty: "No-code automation connecting 6,000+ apps",
    useCase: "Connecting apps, automating repetitive tasks, data transfer",
    description: "Zapier's AI can now build entire automation workflows from plain English descriptions. Say 'When someone fills out my Typeform, add them to Mailchimp and notify my team on Slack' and watch the magic happen. Perfect for non-technical teams.",
  },
  {
    name: "Canva AI",
    category: "Design",
    price: "Free - R200/month",
    specialty: "Instant professional design for non-designers",
    useCase: "Image generation, design suggestions, brand templates",
    description: "Magic Design generates complete presentations from a single prompt. Magic Write handles copywriting. Background Remover and Magic Resize save hours of manual work. Teams without dedicated designers can now produce agency-quality visuals.",
  },
  {
    name: "Otter.ai",
    category: "Meeting Assistant",
    price: "Free - R200/month",
    specialty: "Real-time transcription with speaker identification",
    useCase: "Meeting transcription, action items, searchable notes",
    description: "Otter joins your Zoom, Teams, or Google Meet calls automatically, transcribes with 95%+ accuracy, and identifies who said what. Its AI then extracts action items and key decisions. Never take meeting notes manually again.",
  },
  {
    name: "Grammarly",
    category: "Writing Assistant",
    price: "Free - R250/month",
    specialty: "Professional communication quality at scale",
    useCase: "Grammar checking, tone adjustment, clarity improvements",
    description: "Beyond spell-check, Grammarly's AI rewrites unclear sentences, adjusts tone for different audiences (formal, friendly, confident), and checks consistency across documents. The Business tier adds brand voice guidelines for team-wide consistency.",
  },
  {
    name: "Perplexity",
    category: "Research Assistant",
    price: "Free - R350/month",
    specialty: "AI search with verifiable sources",
    useCase: "Research with sources, fact-checking, market analysis",
    description: "Think of Perplexity as ChatGPT meets Google Scholar. Every answer includes clickable citations so you can verify claims. Pro Search digs deeper for competitor analysis, industry trends, and market research—perfect for informed business decisions.",
  },
];

export default function TopAIToolsArticle() {
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
            10 AI Tools Every South African SME Should Know in 2025
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mb-6"
          >
            From ChatGPT to Zapier AI—practical AI tools that deliver immediate productivity gains at accessible price points.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 text-sm"
          >
            <span className="text-white/40">Sources:</span>
            <a
              href="https://www.hubspot.com/ai-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              HubSpot*
            </a>
            <a
              href="https://www.thryv.com/blog/ai-for-small-business/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              Thryv*
            </a>
            <a
              href="https://www.forbes.com/advisor/business/software/best-ai-tools/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
            >
              Forbes*
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
                  AI tools have become increasingly accessible for small and medium businesses, with most solutions available at R0-R500/month. These tools can save your team 20+ hours monthly through automation of routine tasks, content generation, and improved decision-making.
                </p>
                <p className="text-dark/70 mb-8 leading-relaxed">
                  Here are the 10 AI tools that offer the best value and practicality for South African SMEs in 2025:
                </p>

                <div className="space-y-6 mb-8">
                  {aiTools.map((tool, index) => (
                    <div
                      key={tool.name}
                      className="border border-dark/10 rounded-lg p-5 hover:border-accent/30 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-bold text-dark text-lg">
                            {index + 1}. {tool.name}
                          </h3>
                          <p className="text-sm text-accent font-medium">{tool.category}</p>
                        </div>
                        <span className="text-sm text-dark/60 whitespace-nowrap bg-dark/5 px-3 py-1 rounded-full">
                          {tool.price}
                        </span>
                      </div>
                      <p className="text-dark font-semibold text-sm mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {tool.specialty}
                      </p>
                      <p className="text-dark/70 text-sm leading-relaxed mb-3">{tool.description}</p>
                      <p className="text-dark/50 text-xs italic">
                        <span className="font-medium">Best for:</span> {tool.useCase}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-dark mb-4">Getting Started Tips</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-dark/70">
                      Start with free tiers to test which tools fit your workflow before committing to paid plans.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-dark/70">
                      Focus on one or two tools initially rather than trying to adopt everything at once.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-dark/70">
                      Invest time in learning prompt engineering—it dramatically improves AI output quality.
                    </span>
                  </li>
                </ul>

                <div className="border-t border-dark/10 pt-8 mt-8">
                  <p className="text-dark/60 text-sm mb-2">
                    <strong>Sources:</strong> HubSpot, Thryv, Forbes, VisionVix
                  </p>
                  <p className="text-dark/50 text-sm italic">
                    Prices are approximate and may vary. Always check current pricing on official websites.
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
