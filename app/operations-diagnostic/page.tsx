"use client";

/**
 * Maru Online — Operations Diagnostic Assessment Page
 * File: app/operations-diagnostic/page.tsx
 * 
 * Flow:
 * Step 0: Framing (pre-assessment context)
 * Steps 1-5: Questions (one per screen)
 * Step 6: Results (level revealed, ungated)
 * Step 7: Email gate (name + email + optional website)
 * Step 8: Confirmation (report sent)
 */

import { useState, useEffect } from "react";
import { calculateScore, ScoreResult } from "@/lib/assessment/scoring";
import { BGPattern } from "@/components/ui/bg-pattern";

// ── Question definitions ───────────────────────────────────────────────────

const questions = [
  {
    id: "q1",
    text: "How would you describe the way your business manages day-to-day operations?",
    options: [
      { value: "clear-processes", label: "We have clear processes that most of the team follows consistently" },
      { value: "people-dependent", label: "We have processes but they depend heavily on specific people knowing what to do" },
      { value: "same-problems", label: "Most things work but we often find ourselves solving the same problems repeatedly" },
      { value: "organised-chaos", label: "Honestly, it's organised chaos — we get things done but not always efficiently" },
    ],
  },
  {
    id: "q2",
    text: "Where does your team's time go that you wish it didn't?",
    options: [
      { value: "chasing-information", label: "Chasing information that should already be in one place" },
      { value: "repetitive-tasks", label: "Doing the same tasks repeatedly that feel like they should just happen automatically" },
      { value: "manual-errors", label: "Fixing mistakes that came from information being entered or moved manually" },
      { value: "waiting-on-others", label: "Waiting on other people or systems before work can continue" },
      { value: "too-busy-to-track", label: "Honestly, I'm not sure — we're too busy to track it properly" },
    ],
  },
  {
    id: "q3",
    text: "When a new client or order comes into your business, what happens next?",
    options: [
      { value: "handles-personally", label: "Someone handles it personally and figures it out as they go" },
      { value: "rough-process", label: "We have a rough process but it varies depending on who's available" },
      { value: "defined-manual", label: "We have a defined process but it involves a lot of manual steps across different tools" },
      { value: "streamlined-automatic", label: "We have a streamlined process — information flows automatically from one step to the next" },
    ],
  },
  {
    id: "q4",
    text: "If you could fix one thing about how your business operates in the next six months, what would it be?",
    options: [
      { value: "reduce-manual-tasks", label: "Reduce the amount of time my team spends on repetitive manual tasks" },
      { value: "less-people-dependent", label: "Make the business less dependent on specific people to keep things running" },
      { value: "better-visibility", label: "Get better visibility into what's actually happening across the business" },
      { value: "convert-more-leads", label: "Convert more of the enquiries or leads we're already receiving" },
      { value: "scale-without-hiring", label: "Scale the business without having to hire proportionally more people" },
    ],
  },
  {
    id: "q5",
    text: "Have you tried to improve how your business operations run before?",
    options: [
      { value: "no-not-priority", label: "No — this hasn't been a priority until now" },
      { value: "tried-internally", label: "Yes — we tried to figure it out internally but haven't got far" },
      { value: "brought-someone-in", label: "Yes — we brought someone in to help but it didn't fully deliver what we needed" },
      { value: "something-in-place", label: "Yes — we have something in place but it needs to work better" },
    ],
  },
];

// ── Types ──────────────────────────────────────────────────────────────────

type Answers = Record<string, string>;
type Step = "intro" | number | "results" | "gate" | "done";

// ── Component ──────────────────────────────────────────────────────────────

export default function AssessmentPage() {
  const [step, setStep] = useState<Step>("intro");
  const [answers, setAnswers] = useState<Answers>({});
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [progress, setProgress] = useState(0);
  const [notionUrl, setNotionUrl] = useState<string | null>(null);

  // Update progress bar
  useEffect(() => {
    if (step === "intro") setProgress(0);
    else if (typeof step === "number") setProgress((step / questions.length) * 80);
    else if (step === "results") setProgress(85);
    else if (step === "gate") setProgress(95);
    else if (step === "done") setProgress(100);
  }, [step]);

  // ── Handlers ─────────────────────────────────────────────────────────────

  function handleStart() {
    setStep(0);
  }

  function handleAnswer(questionId: string, value: string) {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    const currentIndex = typeof step === "number" ? step : 0;
    const nextIndex = currentIndex + 1;

    if (nextIndex >= questions.length) {
      // All answered — calculate score
      const result = calculateScore({
        q1: newAnswers.q1,
        q2: newAnswers.q2,
        q3: newAnswers.q3,
        q4: newAnswers.q4,
        q5: newAnswers.q5,
      });
      setScoreResult(result);
      setStep("results");
    } else {
      setStep(nextIndex);
    }
  }

  async function handleGateSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/assessment/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers,
          name: name.trim(),
          email: email.trim(),
          website: website.trim() || undefined,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      const data = await response.json();
      if (data.notionPageUrl) {
        setNotionUrl(data.notionPageUrl);
      }

      setStep("done");
    } catch {
      setSubmitError("Something went wrong. Please try again or email hello@maruonline.com directly.");
    } finally {
      setSubmitting(false);
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <main
      className="relative min-h-screen flex items-center text-[#c9d1d9]"
      style={{ backgroundColor: "var(--color-bg-navy)" }}
    >
      <BGPattern
        variant="grid"
        mask="none"
        size={40}
        fill="rgba(61, 184, 198, 0.07)"
        className="z-0"
      />

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-[#1e2a38]">
        <div
          className="h-full bg-[#04B3CC] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-20">

        {/* ── INTRO ─────────────────────────────────────────────────────── */}
        {step === "intro" && (
          <div className="animate-fade-in">
            <p className="text-xs font-mono text-[#04B3CC] tracking-widest uppercase mb-6">
              Maru Online · Operations Diagnostic
            </p>
            <h1 className="text-3xl font-semibold text-[#e6edf3] leading-tight mb-4">
              Find out where your business is losing time and money to manual processes.
            </h1>
            <p className="text-[#768390] text-lg mb-8 leading-relaxed">
              Five questions. Two minutes. Instant result.
            </p>

            <div className="bg-[#e8f4f6] border border-[#04B3CC]/30 rounded-lg p-6 mb-8">
              <p className="text-[#0d1117] text-sm leading-relaxed mb-3">
                Answer based on how things actually work in your business today — not how you'd like them to work. The more honest your answers, the more useful your result.
              </p>
              <p className="text-[#3a4a5c] text-sm leading-relaxed">
                At the end, you'll see where your business sits and what a realistic first step looks like.
              </p>
            </div>

            <button
              onClick={handleStart}
              className="bg-[#04B3CC] text-[#0d1117] font-semibold px-8 py-4 rounded-lg text-base hover:bg-[#03a0b7] transition-colors cursor-pointer"
            >
              Start the assessment →
            </button>
          </div>
        )}

        {/* ── QUESTIONS ─────────────────────────────────────────────────── */}
        {typeof step === "number" && step < questions.length && (
          <QuestionStep
            key={step}
            question={questions[step]}
            questionNumber={step + 1}
            totalQuestions={questions.length}
            onAnswer={(value) => handleAnswer(questions[step].id, value)}
          />
        )}

        {/* ── RESULTS ───────────────────────────────────────────────────── */}
        {step === "results" && scoreResult && (
          <div className="animate-fade-in">
            <p className="text-xs font-mono text-[#04B3CC] tracking-widest uppercase mb-6">
              Your result
            </p>

            <div className="bg-[#111820] border border-[#04B3CC]/30 rounded-lg p-8 mb-8">
              <div className="inline-block bg-[#04B3CC]/10 border border-[#04B3CC]/30 rounded px-3 py-1 text-xs font-mono text-[#04B3CC] tracking-wider uppercase mb-4">
                {scoreResult.label}
              </div>
              <p className="text-[#e6edf3] text-xl font-semibold mb-4 leading-snug">
                {scoreResult.tagline}
              </p>
              <p className="text-[#c9d1d9] text-sm leading-relaxed">
                {scoreResult.summary}
              </p>
            </div>

            {/* Teaser for detailed report */}
            <div className="bg-[#161e28] border border-[#1e2a38] rounded-lg p-6 mb-8">
              <p className="text-[#e6edf3] font-semibold mb-2">
                Your detailed report goes deeper.
              </p>
              <p className="text-[#768390] text-sm leading-relaxed">
                It breaks down exactly where your biggest integration opportunities are — and what a realistic first step looks like for a business at your stage. Enter your details below to receive it.
              </p>
            </div>

            <button
              onClick={() => setStep("gate")}
              className="bg-[#04B3CC] text-[#0d1117] font-semibold px-8 py-4 rounded-lg text-base hover:bg-[#03a0b7] transition-colors cursor-pointer w-full"
            >
              Get my free detailed report →
            </button>
          </div>
        )}

        {/* ── EMAIL GATE ────────────────────────────────────────────────── */}
        {step === "gate" && (
          <div className="animate-fade-in">
            <p className="text-xs font-mono text-[#04B3CC] tracking-widest uppercase mb-6">
              Your report
            </p>
            <h2 className="text-2xl font-semibold text-[#e6edf3] mb-2">
              Where should we send it?
            </h2>
            <p className="text-[#768390] text-sm mb-8 leading-relaxed">
              Your report will arrive as a Notion page — a structured document you can return to and share. It includes personalised observations based on your answers and a recommended next step.
            </p>

            <form onSubmit={handleGateSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#768390] uppercase tracking-wider mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First name is fine"
                  required
                  className="w-full bg-[#111820] border border-[#1e2a38] rounded-lg px-4 py-3 text-[#e6edf3] placeholder-[#768390] text-sm focus:outline-none focus:border-[#04B3CC] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#768390] uppercase tracking-wider mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourbusiness.com"
                  required
                  className="w-full bg-[#111820] border border-[#1e2a38] rounded-lg px-4 py-3 text-[#e6edf3] placeholder-[#768390] text-sm focus:outline-none focus:border-[#04B3CC] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#768390] uppercase tracking-wider mb-2">
                  Business website{" "}
                  <span className="text-[#1e2a38] normal-case font-sans">(optional — helps us personalise your report)</span>
                </label>
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="yourbusiness.com"
                  className="w-full bg-[#111820] border border-[#1e2a38] rounded-lg px-4 py-3 text-[#e6edf3] placeholder-[#768390] text-sm focus:outline-none focus:border-[#04B3CC] transition-colors"
                />
                <p className="text-[#768390] text-xs mt-1">
                  Don't have a website yet? Leave this blank — it's useful context but not required.
                </p>
              </div>

              {submitError && (
                <p className="text-red-400 text-sm">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#04B3CC] text-[#0d1117] font-semibold px-8 py-4 rounded-lg text-base hover:bg-[#03a0b7] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {submitting ? "Sending your report..." : "Send my report →"}
              </button>

              <p className="text-[#768390] text-xs text-center leading-relaxed">
                We'll email you a link to your Notion report. No spam. Unsubscribe any time.
              </p>
            </form>
          </div>
        )}

        {/* ── DONE ──────────────────────────────────────────────────────── */}
        {step === "done" && (
          <div className="animate-fade-in text-center">
            <div className="inline-block bg-[#04B3CC]/10 border border-[#04B3CC]/30 rounded-full p-6 mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#04B3CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold text-[#e6edf3] mb-3">
              Your report is on its way.
            </h2>
            <p className="text-[#768390] text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Check your inbox for a link to your Notion report. It includes personalised observations based on your answers and a clear recommended next step.
            </p>

            <div className="bg-[#111820] border border-[#1e2a38] rounded-lg p-6 text-left mb-8">
              <p className="text-[#e6edf3] font-semibold text-sm mb-2">
                While you wait — one thing worth knowing:
              </p>
              <p className="text-[#768390] text-sm leading-relaxed">
                The report will invite you to book a 30-minute discovery call. That call is where we review what the diagnostic found and tell you honestly whether a full engagement makes sense. No commitment required beyond the conversation.
              </p>
            </div>

            {notionUrl && (
              <div
                style={{
                  background: "rgba(61,184,198,0.05)",
                  border: "1px solid rgba(61,184,198,0.2)",
                  borderRadius: "8px",
                  padding: "1rem 1.25rem",
                  marginBottom: "1.5rem",
                  textAlign: "left",
                }}
              >
                <p
                  className="text-[#768390] text-xs uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Your report
                </p>
                <a
                  href={notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#04B3CC] text-sm hover:underline"
                >
                  View your Notion report →
                </a>
              </div>
            )}

            <a
              href="/"
              className="text-[#04B3CC] text-sm hover:underline"
            >
              ← Back to Maru Online
            </a>
          </div>
        )}

      </div>
    </main>
  );
}

// ── Question Step Component ────────────────────────────────────────────────

function QuestionStep({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: {
  question: typeof questions[0];
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (value: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelect(value: string) {
    setSelected(value);
    // Small delay so user sees the selection before advancing
    setTimeout(() => onAnswer(value), 200);
  }

  return (
    <div className="animate-fade-in">
      <p className="text-xs font-mono text-[#768390] tracking-widest uppercase mb-6">
        Question {questionNumber} of {totalQuestions}
      </p>

      <h2 className="text-xl font-semibold text-[#e6edf3] leading-snug mb-8">
        {question.text}
      </h2>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`w-full text-left bg-[#111820] border rounded-lg px-5 py-4 text-sm leading-relaxed transition-all cursor-pointer ${
              selected === option.value
                ? "border-[#04B3CC] text-[#e6edf3] bg-[#04B3CC]/5"
                : "border-[#1e2a38] text-[#c9d1d9] hover:border-[#768390] hover:text-[#e6edf3]"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
