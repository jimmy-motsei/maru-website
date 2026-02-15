"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { SplitHeadline } from "@/components/ui/SplitHeadline";
import { submitToHubSpot, HUBSPOT_FORMS } from "@/lib/hubspot";

const questions = [
  {
    id: "implementation_clarity",
    pillar: "Implementation Clarity",
    question: "Do you have a defined implementation roadmap for your current AI tools?",
    options: [
      { label: "No roadmap. Tools were adopted ad hoc.", score: 0 },
      { label: "Some rough plans exist but are not operationalized.", score: 25 },
      { label: "A roadmap exists with clear phases for key teams.", score: 50 },
      { label: "A structured roadmap is actively executed and reviewed.", score: 100 },
    ],
  },
  {
    id: "workflow_integration",
    pillar: "Workflow Integration",
    question: "How well are your AI tools integrated into daily team workflows?",
    options: [
      { label: "Mostly disconnected from real day-to-day execution.", score: 0 },
      { label: "Used occasionally, but not embedded in core workflows.", score: 25 },
      { label: "Integrated in some revenue-critical workflows.", score: 50 },
      { label: "Deeply integrated across teams with clear handoffs.", score: 100 },
    ],
  },
  {
    id: "team_adoption",
    pillar: "Team Adoption",
    question: "What level of team adoption and consistency do you currently have?",
    options: [
      { label: "Low adoption. AI use depends on individual effort.", score: 0 },
      { label: "Partial adoption with inconsistent output quality.", score: 25 },
      { label: "Good adoption with some governance and standards.", score: 50 },
      { label: "Strong adoption with repeatable standards and coaching.", score: 100 },
    ],
  },
  {
    id: "roi_measurement",
    pillar: "ROI Measurement",
    question: "How effectively do you measure ROI from AI implementation?",
    options: [
      { label: "No clear ROI measurement in place.", score: 0 },
      { label: "Basic metrics exist, but weak linkage to revenue outcomes.", score: 25 },
      { label: "Key implementation metrics tracked with periodic reviews.", score: 50 },
      { label: "Clear ROI dashboard tied to conversion, velocity, and margin.", score: 100 },
    ],
  },
  {
    id: "governance_compliance",
    pillar: "Governance & Compliance",
    question: "How mature are your controls for quality, risk, and POPIA compliance?",
    options: [
      { label: "No formal controls or compliance process.", score: 0 },
      { label: "Some controls exist, but enforcement is weak.", score: 25 },
      { label: "Documented controls with periodic quality checks.", score: 50 },
      { label: "Operational controls with continuous compliance monitoring.", score: 100 },
    ],
  },
];

const getTier = (score: number) => {
  if (score >= 86) {
    return {
      name: "Operationalized",
      color: "text-emerald-400",
      description:
        "Your implementation foundation is strong. Focus on optimization cycles to compound ROI.",
    };
  }
  if (score >= 61) {
    return {
      name: "Scaling",
      color: "text-action-primary",
      description:
        "You have momentum. Standardize execution and tighten measurement to unlock stronger returns.",
    };
  }
  if (score >= 41) {
    return {
      name: "Activating",
      color: "text-amber-300",
      description:
        "You have signals of progress, but implementation is not yet consistent enough for reliable ROI.",
    };
  }
  return {
    name: "Foundational",
    color: "text-red-400",
    description:
      "Your tools are not operationalized yet. Prioritize workflow integration and adoption before adding new tooling.",
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

  const score = Math.round(
    Object.values(answers).length
      ? Object.values(answers).reduce((a, b) => a + b, 0) / Object.values(answers).length
      : 0,
  );
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-sm border-b border-border-inverse-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <Link href="/" className="text-white font-bold text-3xl tracking-tight hover:text-action-primary transition-colors">
            M.
          </Link>
        </div>
        <div className="h-1 bg-card-dark">
          <motion.div
            className="h-full bg-action-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        </div>
      </header>

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
                  leadingText="Is Your AI Investment"
                  emphasisText="Implementation-Optimized?"
                  className="text-[36px] sm:text-[48px] md:text-[74px] lg:text-[88px] text-white mb-10"
                  breakClassName="hidden md:block"
                  leadingWeight="strong"
                  emphasisWeight="light"
                />

                <p className="text-[18px] md:text-[22px] text-text-inverse-muted leading-relaxed mb-10 max-w-3xl mx-auto">
                  Assess how well your AI tools run in real workflows, then improve ROI without adding more software.
                </p>

                <button onClick={handleNext} className="btn-primary-hero-cta">
                  Get Your Free AI Implementation Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="mt-7 text-sm text-text-inverse-muted">Takes less than 5 minutes</p>
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
                  leadingText="Your AI Implementation"
                  emphasisText="Audit Report"
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
                      animate={{ strokeDashoffset: 503 - (503 * score) / 100 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-white">{score}</span>
                    <span className="text-xs text-text-inverse-muted uppercase tracking-[2px]">out of 100</span>
                  </div>
                </div>

                <div className={`inline-flex px-4 py-2 rounded-full bg-card-dark border border-white/10 ${tier.color} mb-4`}>
                  <span className="font-semibold">{tier.name}</span>
                </div>

                <p className="text-text-inverse-muted max-w-2xl mx-auto mb-10">{tier.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
                  {questions.map((q) => (
                    <div key={q.id} className="rounded-lg border border-white/10 bg-card-dark px-3 py-4">
                      <p className="text-[10px] uppercase tracking-[2px] text-text-inverse-muted mb-2">{q.pillar}</p>
                      <p className="text-2xl font-semibold text-white">{answers[q.id] ?? 0}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center gap-4">
                  <Link href="/contact" className="btn-primary-hero-cta">
                    Book a Strategy Session
                    <ArrowRight className="w-5 h-5" />
                  </Link>
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
