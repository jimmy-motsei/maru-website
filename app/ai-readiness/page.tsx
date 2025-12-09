"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";

import { submitToHubSpot, HUBSPOT_FORMS } from "@/lib/hubspot";

// Assessment Questions
const questions = [
  {
    id: "strategy",
    pillar: "Strategy",
    question: "Does your organization have a defined AI strategy?",
    options: [
      { label: "No AI strategy exists", score: 0 },
      { label: "We're exploring AI but have no formal plan", score: 25 },
      { label: "We have a basic AI roadmap", score: 50 },
      { label: "We have a comprehensive AI strategy aligned with business goals", score: 100 },
    ],
  },
  {
    id: "data",
    pillar: "Data",
    question: "How would you describe your organization's data management practices?",
    options: [
      { label: "Data is siloed and inconsistent", score: 0 },
      { label: "Some data is organized but quality varies", score: 25 },
      { label: "We have centralized data with basic governance", score: 50 },
      { label: "We have clean, well-governed data infrastructure ready for AI", score: 100 },
    ],
  },
  {
    id: "automation",
    pillar: "Automation",
    question: "What level of automation exists in your current workflows?",
    options: [
      { label: "Most processes are manual", score: 0 },
      { label: "A few processes are automated", score: 25 },
      { label: "Many processes are automated with basic tools", score: 50 },
      { label: "We have extensive automation with intelligent workflows", score: 100 },
    ],
  },
  {
    id: "team",
    pillar: "Team Readiness",
    question: "Does your team have the skills to implement and manage AI tools?",
    options: [
      { label: "No AI expertise in-house", score: 0 },
      { label: "Limited understanding of AI capabilities", score: 25 },
      { label: "Some team members have AI experience", score: 50 },
      { label: "We have dedicated AI talent or strong technical capabilities", score: 100 },
    ],
  },
  {
    id: "budget",
    pillar: "Budget",
    question: "Has your organization allocated budget for AI initiatives?",
    options: [
      { label: "No budget allocated", score: 0 },
      { label: "Exploring budget options", score: 25 },
      { label: "Some budget allocated for pilot projects", score: 50 },
      { label: "Significant budget committed to AI transformation", score: 100 },
    ],
  },
];

// Tier definitions
const getTier = (score: number) => {
  if (score >= 86) return { name: "Pacesetter", color: "text-green-400", description: "You're ahead of the curve! Your organization is well-positioned to leverage AI for competitive advantage." };
  if (score >= 61) return { name: "Chaser", color: "text-accent", description: "You're on the right track! With some focused improvements, you can accelerate your AI adoption." };
  if (score >= 31) return { name: "Follower", color: "text-yellow-400", description: "There's room to grow. Consider prioritizing foundational elements to build AI readiness." };
  return { name: "Laggard", color: "text-red-400", description: "You're at the starting line. Let's identify quick wins to begin your AI journey." };
};

export default function AIReadinessPage() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro, 1-5 = questions, 6 = form, 7 = results
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalQuestions = questions.length;
  const isIntro = currentStep === 0;
  const isQuestion = currentStep >= 1 && currentStep <= totalQuestions;
  const isForm = currentStep === totalQuestions + 1;
  const isResults = currentStep === totalQuestions + 2;

  const currentQuestion = isQuestion ? questions[currentStep - 1] : null;

  // Calculate score
  const calculateScore = () => {
    const values = Object.values(answers);
    if (values.length === 0) return 0;
    return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  };

  const score = calculateScore();
  const tier = getTier(score);

  // Handlers
  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const handleAnswer = (questionId: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
    setTimeout(() => handleNext(), 300); // Auto-advance after selection
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const submissionData = {
        firstname: formData.name,
        email: formData.email,
        company: formData.company,
        ai_readiness_score_result: score,
        ai_readiness_tier_result: tier.name
    };

    if (HUBSPOT_FORMS.AI_READINESS) {
        await submitToHubSpot(HUBSPOT_FORMS.AI_READINESS, submissionData);
    } else {
        // Simulate API call - replace with actual lead capture
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    
    setIsSubmitting(false);
    handleNext();
  };

  // Progress percentage
  const progress = isQuestion ? (currentStep / totalQuestions) * 100 : isForm || isResults ? 100 : 0;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Maru<span className="text-accent">.</span>
          </Link>
          <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
        {/* Progress Bar */}
        <div className="h-1 bg-white/10">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatePresence mode="wait">
            {/* INTRO SCREEN */}
            {isIntro && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
                  <Sparkles size={16} className="text-accent" />
                  <span className="text-sm font-medium text-accent">AI Readiness Assessment</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Find Out If Your Business{" "}
                  <span className="font-light text-white/60">Is AI-Ready</span>
                </h1>

                <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto">
                  Answer 5 quick questions to discover your organization's AI readiness score 
                  and get personalized recommendations.
                </p>

                <button
                  onClick={handleNext}
                  className="group inline-flex items-center gap-4 bg-accent hover:bg-accent-dark text-black font-bold rounded-full pl-8 pr-3 py-4 transition-all duration-300"
                >
                  <span className="text-sm tracking-widest uppercase">Get your free assessment</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <ArrowRight size={18} />
                  </span>
                </button>

                <p className="mt-8 text-sm text-white/40">Takes less than 2 minutes</p>
              </motion.div>
            )}

            {/* QUESTION SCREENS */}
            {isQuestion && currentQuestion && (
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                {/* Step Indicator */}
                <div className="text-sm text-white/40 mb-4">
                  Question {currentStep} of {totalQuestions}
                </div>

                {/* Pillar Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6">
                  {currentQuestion.pillar}
                </div>

                {/* Question */}
                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                  {currentQuestion.question}
                </h2>

                {/* Options */}
                <div className="space-y-4">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = answers[currentQuestion.id] === option.score;
                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(currentQuestion.id, option.score)}
                        className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                          isSelected
                            ? "border-accent bg-accent/10 text-white"
                            : "border-white/10 bg-white/5 text-white/80 hover:border-white/30 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option.label}</span>
                          {isSelected && <CheckCircle size={20} className="text-accent" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className="mt-12 flex items-center justify-between">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={18} />
                    <span>Back</span>
                  </button>

                  {answers[currentQuestion.id] !== undefined && (
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
                    >
                      <span>Next</span>
                      <ArrowRight size={18} />
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* LEAD CAPTURE FORM */}
            {isForm && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Almost There!
                  </h2>
                  <p className="text-white/60">
                    Enter your details to see your personalized AI readiness report.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6 max-w-md mx-auto">
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Company Name</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent-dark text-black font-bold py-4 rounded-full transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "See My Results"}
                  </button>
                </form>

                <button
                  onClick={handlePrev}
                  className="mt-8 mx-auto flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <ArrowLeft size={18} />
                  <span>Back to questions</span>
                </button>
              </motion.div>
            )}

            {/* RESULTS SCREEN */}
            {isResults && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Your AI Readiness Report
                </h2>

                {/* Score Circle */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="12"
                    />
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="88"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeLinecap="round"
                      className="text-accent"
                      strokeDasharray={553}
                      initial={{ strokeDashoffset: 553 }}
                      animate={{ strokeDashoffset: 553 - (553 * score) / 100 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                      className="text-5xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {score}
                    </motion.span>
                    <span className="text-sm text-white/60">out of 100</span>
                  </div>
                </div>

                {/* Tier Badge */}
                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 ${tier.color}`}>
                  <span className="font-bold">{tier.name}</span>
                </div>

                <p className="text-white/60 mb-12 max-w-lg mx-auto">
                  {tier.description}
                </p>

                {/* Pillar Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
                  {questions.map((q) => {
                    const pillarScore = answers[q.id] || 0;
                    return (
                      <div key={q.id} className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-xs text-white/40 uppercase tracking-wider mb-2">{q.pillar}</div>
                        <div className="text-2xl font-bold">{pillarScore}</div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-4 bg-accent hover:bg-accent-dark text-black font-bold rounded-full pl-8 pr-3 py-4 transition-all duration-300"
                  >
                    <span className="text-sm tracking-widest uppercase">book a free consultation</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                      <ArrowRight size={18} />
                    </span>
                  </Link>

                  <div>
                    <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">
                      Return to Homepage
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
