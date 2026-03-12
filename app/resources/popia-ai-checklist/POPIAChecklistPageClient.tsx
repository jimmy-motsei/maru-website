"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Download, FileText, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";

const formSchema = z.object({
  firstname: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(2, "Company name is required"),
  consent: z.boolean().refine((val) => val === true, "You must agree to receive the checklist"),
});

type FormData = z.infer<typeof formSchema>;

const CHECKLIST_HIGHLIGHTS = [
  "5-part compliance audit covering data collection, AI processing, and third-party tools",
  "Ready-to-use checkboxes for each POPIA requirement",
  "Third-party vendor compliance questionnaire",
  "30-day implementation action plan",
  "Data subject rights handling guide",
];

const STATS = [
  { value: "83%", label: "of SA businesses unknowingly non-compliant" },
  { value: "R10M", label: "maximum penalty for POPIA violations" },
  { value: "30", label: "days to respond to data subject requests" },
];

export default function POPIAChecklistPageClient() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setFormStatus(null);

    // Simulate API call - in production, this would submit to HubSpot
    // and trigger the email workflow
    try {
      // TODO: Replace with actual HubSpot form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setFormStatus({
        success: true,
        message: "Success! Check your email for the POPIA AI Checklist. (Check spam if you don't see it within 5 minutes.)",
      });
      reset();
    } catch {
      setFormStatus({
        success: false,
        message: "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-deep-navy">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-section-tab lg:py-section overflow-hidden">
        <AtmosphericBackground variant="hero" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-electric-cyan" />
                <span className="text-electric-cyan text-sm font-bold uppercase tracking-wider">Free Resource</span>
              </div>

              <h1 className="text-[34px] md:text-[58px] lg:text-[68px] leading-[1.1] font-thin text-white mb-6 font-sans">
                The <span className="font-bold text-electric-cyan">POPIA-Compliant</span><br />
                AI Checklist
              </h1>

              <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-xl">
                83% of South African businesses using AI risk POPIA non-compliance. 
                Avoid <strong className="text-warm-amber">R10 million penalties</strong> with this practical checklist.
              </p>

              {/* What's Included */}
              <div className="mb-10">
                <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">What's Inside:</h3>
                <ul className="space-y-3">
                  {CHECKLIST_HIGHLIGHTS.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-warm-amber shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 p-6 bg-card-dark rounded-xl border border-white/10">
                {STATS.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-electric-cyan">{stat.value}</div>
                    <div className="text-xs text-white/50 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-deep-navy/10 rounded-lg">
                  <FileText className="w-6 h-6 text-deep-navy" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-deep-navy">Get Your Free Checklist</h2>
                  <p className="text-sm text-gray-500">Instant download via email</p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <input
                    {...register("firstname")}
                    type="text"
                    placeholder="Your Name"
                    disabled={isSubmitting}
                    className="w-full h-[50px] px-5 rounded-lg bg-gray-50 border border-gray-200 focus:border-electric-cyan focus:ring-0 outline-none transition-colors text-deep-navy placeholder:text-gray-400"
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Work Email"
                    disabled={isSubmitting}
                    className="w-full h-[50px] px-5 rounded-lg bg-gray-50 border border-gray-200 focus:border-electric-cyan focus:ring-0 outline-none transition-colors text-deep-navy placeholder:text-gray-400"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <input
                    {...register("company")}
                    type="text"
                    placeholder="Company Name"
                    disabled={isSubmitting}
                    className="w-full h-[50px] px-5 rounded-lg bg-gray-50 border border-gray-200 focus:border-electric-cyan focus:ring-0 outline-none transition-colors text-deep-navy placeholder:text-gray-400"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    {...register("consent")}
                    type="checkbox"
                    id="consent"
                    disabled={isSubmitting}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-electric-cyan focus:ring-electric-cyan"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                    I agree to receive the POPIA AI Checklist and occasional updates from Maru Online. 
                    I can unsubscribe at any time. View our{" "}
                    <Link href="/privacy" className="text-electric-cyan hover:underline">Privacy Policy</Link>.
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-red-500 text-sm">{errors.consent.message}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[60px] flex items-center justify-center gap-3 bg-warm-amber hover:opacity-90 text-deep-navy font-bold text-lg rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <Download className="w-5 h-5" />
                  <span>{isSubmitting ? "Sending..." : "Download Free Checklist"}</span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>

                {/* Status */}
                {formStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-sm font-medium ${
                      formStatus.success
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2 pt-4 border-t border-gray-100">
                  <Shield className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-400">POPIA-compliant form. Your data is secure.</span>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="bg-warm-amber/10 border-y border-warm-amber/20 py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-center">
            <AlertTriangle className="w-6 h-6 text-warm-amber shrink-0" />
            <p className="text-white/90">
              <strong className="text-warm-amber">Don't wait for an audit.</strong> The Information Regulator is actively investigating AI-related POPIA violations. Get compliant today.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-tab lg:py-section">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[34px] md:text-[48px] font-thin text-white mb-6">
              Need Help <span className="font-bold text-electric-cyan">Implementing</span> Changes?
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              We help South African SMEs operationalize AI while staying POPIA-compliant.
              Book a free 30-minute consultation for your situation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-electric-cyan hover:bg-cyan-400 text-deep-navy font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 shadow-lg"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
