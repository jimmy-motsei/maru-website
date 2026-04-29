"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SplitHeadline } from "@/components/ui/SplitHeadline";

type FormState = "idle" | "submitting" | "success" | "error";

export function LeadMagnetForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg]   = useState("");
  const [fields, setFields]       = useState({
    fullName:        "",
    email:           "",
    companyWebsite:  "",
    biggestChallenge: "Converting leads to sales",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(fields),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  }

  const isSubmitting = formState === "submitting";

  return (
    <section className="bg-surface py-section-tab lg:py-section border-t border-border-inverse-subtle relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-action-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[2px] text-action-primary text-[12px] font-medium mb-6 block">
               Free Resource
            </span>
            <SplitHeadline
              as="h2"
              leadingText="Ready To Operationalize"
              emphasisText="Your AI Investment?"
              className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[62px] font-sans text-text-inverse mb-6 leading-[1.1]"
              breakClassName="block"
              leadingWeight="light"
              emphasisWeight="strong"
            />
            <p className="text-lg text-text-inverse-muted mb-8 leading-relaxed">
              Get your free <strong>AI Implementation Scorecard</strong> to find revenue leaks and fix priorities in one session.
            </p>

            <ul className="space-y-4 mb-10">
                {[
                    "Score your current AI stack against revenue outcomes",
                    "Find the leaks draining qualified pipeline opportunities",
                    "Follow a practical 30-day implementation checklist",
                    "Use a gap template to align sales and marketing"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-action-primary" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            <div className="p-6 bg-card-dark rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-action-primary/20 flex items-center justify-center text-action-primary font-bold text-lg shrink-0">
                        !
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-1">Limited Availability</h4>
                        <p className="text-white/60 text-sm">We onboard five implementation partners monthly to protect delivery quality.</p>
                    </div>
                </div>
            </div>
          </motion.div>


          {/* RIGHT: Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl"
          >
             <h3 className="text-2xl font-bold text-text-primary mb-6">Get Your Scorecard</h3>

             {formState === "success" ? (
               <div className="py-10 text-center">
                 <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                 <p className="text-xl font-bold text-text-primary mb-2">You&apos;re in!</p>
                 <p className="text-text-muted">Check your inbox — your scorecard is on its way.</p>
               </div>
             ) : (
               <form className="space-y-5" onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-text-primary pl-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={fields.fullName}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            disabled={isSubmitting}
                            className="w-full h-[50px] px-6 rounded-lg bg-surface-muted border border-border-strong focus:border-action-primary focus:ring-0 outline-none transition-colors text-text-primary disabled:opacity-60"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-text-primary pl-1">Work Email</label>
                        <input
                            type="email"
                            name="email"
                            value={fields.email}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            disabled={isSubmitting}
                            className="w-full h-[50px] px-6 rounded-lg bg-surface-muted border border-border-strong focus:border-action-primary focus:ring-0 outline-none transition-colors text-text-primary disabled:opacity-60"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-text-primary pl-1">Company Website</label>
                    <input
                        type="text"
                        name="companyWebsite"
                        value={fields.companyWebsite}
                        onChange={handleChange}
                        placeholder="company.com"
                        disabled={isSubmitting}
                        className="w-full h-[50px] px-6 rounded-lg bg-surface-muted border border-border-strong focus:border-action-primary focus:ring-0 outline-none transition-colors text-text-primary disabled:opacity-60"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-text-primary pl-1">Biggest Challenge</label>
                    <select
                        name="biggestChallenge"
                        value={fields.biggestChallenge}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full h-[50px] px-6 rounded-lg bg-surface-muted border border-border-strong focus:border-action-primary focus:ring-0 outline-none transition-colors text-text-primary appearance-none disabled:opacity-60"
                    >
                        <option>Converting leads to sales</option>
                        <option>Team adoption of tools</option>
                        <option>Measuring ROI</option>
                        <option>Technical integration</option>
                        <option>Other</option>
                    </select>
                </div>

                {formState === "error" && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[60px] flex items-center justify-center gap-2 bg-action-primary hover:opacity-90 text-text-primary font-bold text-lg rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 mt-4 group disabled:opacity-60 disabled:pointer-events-none"
                >
                    {isSubmitting ? "Submitting…" : "Get Instant Access"}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>

                <p className="text-center text-xs text-text-muted mt-4">
                    We respect your privacy. Unsubscribe at any time.
                </p>

               </form>
             )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
