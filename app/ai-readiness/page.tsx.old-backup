"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { SplitHeadline } from "@/components/ui/SplitHeadline";
import { submitToHubSpot, HUBSPOT_FORMS } from "@/lib/hubspot";

const questions = [
  {
    id: "ai_tool_usage",
    pillar: "AI Tool Usage",
    question: "Which best describes how your business currently uses AI tools?",
    options: [
      { label: "We don't use any AI tools yet.", score: 1 },
      { label: "We use one or two tools but mostly for basic tasks.", score: 2 },
      { label: "We use several AI tools across different parts of the business.", score: 3 },
      { label: "AI tools are integrated into most of our key workflows.", score: 4 },
    ],
  },
  {
    id: "tool_connectivity",
    pillar: "Tool Connectivity",
    question: "How connected are your business tools to each other?",
    options: [
      { label: "Most things are separate — we copy information between systems manually.", score: 1 },
      { label: "Some tools are connected but a lot still requires manual input.", score: 2 },
      { label: "Most of our tools talk to each other automatically.", score: 3 },
      { label: "Everything is integrated — data flows between systems without manual intervention.", score: 4 },
    ],
  },
  {
    id: "lead_automation",
    pillar: "Lead & Enquiry Handling",
    question: "When a new lead or enquiry comes in, what happens?",
    options: [
      { label: "Someone on the team handles it manually when they get to it.", score: 1 },
      { label: "We have a basic process but it's not always followed consistently.", score: 2 },
      { label: "We have an automated acknowledgement but follow-up is still manual.", score: 3 },
      { label: "The entire follow-up sequence is automated until a human needs to step in.", score: 4 },
    ],
  },
  {
    id: "manual_task_burden",
    pillar: "Manual Task Burden",
    question: "How much of your team's time goes to repetitive manual tasks — scheduling, chasing, data entry, follow-ups?",
    options: [
      { label: "More than half our time.", score: 1 },
      { label: "Roughly a quarter to half our time.", score: 2 },
      { label: "Less than a quarter — we've automated most of it.", score: 3 },
      { label: "Almost none — our workflows are largely automated.", score: 4 },
    ],
  },
  {
    id: "roi_tracking",
    pillar: "ROI Tracking",
    question: "Do you know what your current AI tools are costing you versus what they're producing?",
    options: [
      { label: "No — we don't track this.", score: 1 },
      { label: "We have a rough sense but nothing precise.", score: 2 },
      { label: "We track costs but not the revenue impact.", score: 3 },
      { label: "Yes — we measure both cost and return on our AI investment.", score: 4 },
    ],
  },
  {
    id: "website_performance",
    pillar: "Website as Business Tool",
    question: "How would you describe your website's performance as a business tool?",
    options: [
      { label: "It's basically a brochure — it doesn't generate leads or do much for us.", score: 1 },
      { label: "It generates some interest but conversion is low.", score: 2 },
      { label: "It generates consistent leads that feed our pipeline.", score: 3 },
      { label: "It's a core part of our revenue system — fully integrated with our CRM and workflows.", score: 4 },
    ],
  },
  {
    id: "implementation_history",
    pillar: "Implementation Track Record",
    question: "When you've tried to implement new tools or automations in the past, what usually happens?",
    options: [
      { label: "We haven't really tried.", score: 1 },
      { label: "We try but it doesn't stick — the team goes back to the old way.", score: 2 },
      { label: "It works initially but breaks down over time without maintenance.", score: 3 },
      { label: "New tools get adopted and integrated successfully most of the time.", score: 4 },
    ],
  },
  {
    id: "honest_assessment",
    pillar: "Honest Self-Assessment",
    question: "What's the most honest description of where your business is with AI right now?",
    options: [
      { label: "We know we should be doing something but haven't started.", score: 1 },
      { label: "We've invested in tools but we're not getting the return we expected.", score: 2 },
      { label: "We're getting some value but we know there's more on the table.", score: 3 },
      { label: "AI is working well for us — we're looking to go deeper.", score: 4 },
    ],
  },
];

const getTier = (score: number) => {
  if (score >= 27) {
    return {
      name: "Advanced",
      color: "text-emerald-400",
      heading: "Your AI foundation is strong. The question now is how to go deeper.",
      description:
        "You're ahead of most SA SMEs in your adoption and integration. The opportunity at this stage is usually in measurement — knowing precisely what your AI investment is producing and where the next layer of return sits. Businesses at your level typically benefit most from a targeted optimisation engagement rather than a foundational build.",
      cta: "A 20-minute call will help us understand your current setup and whether there's a specific optimisation worth pursuing.",
      ctaLabel: "Book a 20-minute call",
      ctaHref: "/booking",
    };
  }
  if (score >= 21) {
    return {
      name: "Partial integration",
      color: "text-action-primary",
      heading: "You're getting some return — but there's a layer of value you haven't unlocked yet.",
      description:
        "You've done the hard work of adopting AI tools and getting your team to use them. The next layer is connecting those tools more deeply into your revenue workflows — so that the automation compounds rather than stays isolated. The businesses that move from 'some value' to 'significant value' usually make one or two structural changes, not a dozen small ones.",
      cta: "A diagnostic will identify which structural changes would have the most impact for your specific setup.",
      ctaLabel: "Book your diagnostic — R4,500",
      ctaHref: "/contact",
    };
  }
  if (score >= 15) {
    return {
      name: "Investment made, returns pending",
      color: "text-amber-300",
      heading: "You've invested in AI tools. They're not paying for themselves yet.",
      description:
        "This is the most common position for SA SMEs right now — real spend, real tools, underwhelming results. In most cases the tools aren't the problem. The connections between them are. A workflow audit almost always surfaces two or three integration gaps that, when closed, unlock the return on investment that's already been made.",
      cta: "A diagnostic will show you exactly what those gaps are — and what they're costing you in Rands.",
      ctaLabel: "Book your diagnostic — R4,500",
      ctaHref: "/contact",
    };
  }
  return {
    name: "Foundation stage",
    color: "text-sky-400",
    heading: "Your AI investment hasn't started yet — and that's actually an advantage.",
    description:
      "Most businesses that struggle with AI implementation do so because they adopted tools before they had the right foundation. You have the opportunity to build it correctly from the start. The first step is understanding which processes in your business are ready for automation — and which ones need to be fixed first.",
    cta: "A diagnostic will give you a personalised picture of where to start — specific to your business and your sector.",
    ctaLabel: "Book your diagnostic — R4,500",
    ctaHref: "/contact",
  };
};

export default function AIImplementationAssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0); // 0=intro, 1..n questions, n+1=form, n+2=results
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalQuestions = questions.length;
  const isIntro = currentStep === 0;
  const isQuestion = currentStep >= 1 && currentStep <= totalQuestions;
  const isForm = currentStep === totalQuestions + 1;
  const isResults = currentStep === totalQuestions + 2;
  const currentQuestion = isQuestion ? questions[currentStep - 1] : null;

  const score = Object.values(answers).length
    ? Object.values(answers).reduce((a, b) => a + b, 0)
    : 0;
  const tier = getTier(score);

  const progress = isQuestion ? (currentStep / totalQuestions) * 100 : isForm || isResults ? 100 : 0;

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setTimeout(handleNext, 250);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      firstname: formData.name,
      email: formData.email,
      company: formData.company,
      ai_readiness_score_result: score,
      ai_readiness_tier_result: tier.name,
    };

    if (HUBSPOT_FORMS.AI_READINESS) {
      await submitToHubSpot(HUBSPOT_FORMS.AI_READINESS, submissionData);
    } else {
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    setIsSubmitting(false);
    handleNext();
  };

  return (
    <main className="min-h-screen bg-surface text-text-inverse">
      {/* Progress bar — sits below the shared Header */}
      <div className="fixed top-[60px] left-0 right-0 z-40 h-1 bg-card-dark">
        <motion.div
          className="h-full bg-action-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        />
      </div>

      <div className="pt-32 md:pt-40 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatePresence mode="wait">
            {isIntro && (
              <motion.section
                key="intro"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-action-primary/10 border border-action-primary/40 mb-8">
                  <Sparkles size={16} className="text-action-primary" />
                  <span className="text-xs font-semibold text-action-primary uppercase tracking-[2px]">
                    AI Implementation Assessment
                  </span>
                </div>

                <SplitHeadline
                  as="h1"
                  leadingText="Find out where your"
                  emphasisText="AI investment stands."
                  className="text-[36px] sm:text-[48px] md:text-[74px] lg:text-[88px] text-white mb-10"
                  breakClassName="hidden md:block"
                  leadingWeight="strong"
                  emphasisWeight="light"
                />

                <p className="text-[18px] md:text-[22px] text-text-inverse-muted leading-relaxed mb-10 max-w-3xl mx-auto">
                  Eight questions. Instant results. No email required to see your score.
                </p>

                <button onClick={handleNext} className="btn-primary-hero-cta">
                  Start the AI Readiness Check
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="mt-7 text-sm text-text-inverse-muted">Takes about 3 minutes</p>
              </motion.section>
            )}

            {isQuestion && currentQuestion && (
              <motion.section
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-text-inverse-muted mb-4">
                  Question {currentStep} of {totalQuestions}
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-action-primary/10 text-action-primary text-xs font-semibold tracking-[2px] uppercase mb-6">
                  {currentQuestion.pillar}
                </div>
                <h2 className="text-[30px] sm:text-[36px] md:text-[42px] leading-tight maru-headline-split-strong text-white mb-8">
                  {currentQuestion.question}
                </h2>

                <div className="space-y-4">
                  {currentQuestion.options.map((option) => {
                    const isSelected = answers[currentQuestion.id] === option.score;
                    return (
                      <button
                        key={option.label}
                        onClick={() => handleAnswer(currentQuestion.id, option.score)}
                        className={`w-full text-left p-5 sm:p-6 rounded-xl border transition-colors ${
                          isSelected
                            ? "border-action-primary bg-action-primary/10"
                            : "border-white/10 bg-card-dark hover:border-action-primary/60"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-base sm:text-lg leading-relaxed text-white">{option.label}</span>
                          {isSelected ? <CheckCircle size={22} className="text-action-primary shrink-0 mt-0.5" /> : null}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <button onClick={handlePrev} className="inline-flex items-center gap-2 text-text-inverse-muted hover:text-white transition-colors">
                    <ArrowLeft size={18} />
                    Back
                  </button>
                  {answers[currentQuestion.id] !== undefined ? (
                    <button onClick={handleNext} className="inline-flex items-center gap-2 text-action-primary hover:opacity-80 transition-opacity">
                      Next
                      <ArrowRight size={18} />
                    </button>
                  ) : null}
                </div>
              </motion.section>
            )}

            {isForm && (
              <motion.section
                key="form"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
                className="max-w-xl mx-auto"
              >
                <div className="text-center mb-8">
                  <h2 className="text-[34px] sm:text-[42px] maru-headline-split-strong text-white mb-3">See Your Results</h2>
                  <p className="text-text-inverse-muted">
                    Enter your details to view your AI Implementation Audit report.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-[52px] px-5 rounded-lg bg-card-dark border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-action-primary"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-[52px] px-5 rounded-lg bg-card-dark border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-action-primary"
                    placeholder="Work Email"
                  />
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-[52px] px-5 rounded-lg bg-card-dark border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-action-primary"
                    placeholder="Company Name"
                  />

                  <button type="submit" disabled={isSubmitting} className="btn-primary-hero-cta w-full sm:w-full">
                    {isSubmitting ? "Processing..." : "View My Score"}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                <button onClick={handlePrev} className="mt-6 mx-auto inline-flex items-center gap-2 text-text-inverse-muted hover:text-white transition-colors">
                  <ArrowLeft size={18} />
                  Back to questions
                </button>
              </motion.section>
            )}

            {isResults && (
              <motion.section
                key="results"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <SplitHeadline
                  as="h2"
                  leadingText="Your AI Readiness"
                  emphasisText="Score"
                  className="text-[34px] sm:text-[46px] md:text-[56px] text-white mb-8"
                  breakClassName="hidden md:block"
                  leadingWeight="light"
                  emphasisWeight="strong"
                />

                <div className="relative w-44 h-44 mx-auto mb-7">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="88" cy="88" r="80" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="10" />
                    <motion.circle
                      cx="88"
                      cy="88"
                      r="80"
                      fill="none"
                      stroke="var(--color-action-primary)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={503}
                      initial={{ strokeDashoffset: 503 }}
                      animate={{ strokeDashoffset: 503 - (503 * (score - 8)) / 24 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-white">{score}</span>
                    <span className="text-xs text-text-inverse-muted uppercase tracking-[2px]">out of 32</span>
                  </div>
                </div>

                <div className={`inline-flex px-4 py-2 rounded-full bg-card-dark border border-white/10 ${tier.color} mb-4`}>
                  <span className="font-semibold">{tier.name}</span>
                </div>

                <p className="text-lg font-semibold text-white max-w-2xl mx-auto mb-4">{tier.heading}</p>
                <p className="text-text-inverse-muted max-w-2xl mx-auto mb-8">{tier.description}</p>

                <div className="rounded-xl border border-white/10 bg-card-dark px-6 py-5 max-w-xl mx-auto mb-10 text-left">
                  <p className="text-sm text-text-inverse-muted mb-3">{tier.cta}</p>
                  <Link href={tier.ctaHref} className="btn-primary-hero-cta inline-flex">
                    {tier.ctaLabel}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
                  {questions.map((q) => (
                    <div key={q.id} className="rounded-lg border border-white/10 bg-card-dark px-3 py-4">
                      <p className="text-[10px] uppercase tracking-[2px] text-text-inverse-muted mb-2">{q.pillar}</p>
                      <p className="text-2xl font-semibold text-white">{answers[q.id] ?? "—"}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center gap-4">
                  <Link href="/" className="text-sm text-text-inverse-muted hover:text-white transition-colors">
                    Return to Homepage
                  </Link>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
