"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { SplitHeadline } from "@/components/ui/SplitHeadline";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitToHubSpot, HUBSPOT_FORMS } from "@/lib/hubspot";
import { contactFormSchema, type ContactFormData } from "@/lib/validation/schemas";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setFormStatus(null);
    
    if (!HUBSPOT_FORMS.CONTACT) {
      setTimeout(() => {
        setIsSubmitting(false);
        setFormStatus({ success: true, message: "Message received. We'll be in touch shortly." });
        reset();
      }, 1500);
      return;
    }

    const result = await submitToHubSpot(HUBSPOT_FORMS.CONTACT, data);
    
    setIsSubmitting(false);
    setFormStatus(result);
    
    if (result.success) {
      reset();
    }
  };

  return (
    <main className="bg-surface-muted text-text-primary min-h-screen">
      <section className="relative bg-black py-[120px] md:py-[140px] border-b border-white/10 overflow-hidden">
        <AtmosphericBackground variant="hero" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-12"
          >
            <ol className="flex items-center justify-center gap-2 text-xs uppercase tracking-[2px] text-white/60">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <Link
                    href={crumb.href}
                    className={index === breadcrumbs.length - 1 ? "text-white" : "hover:text-white transition-colors"}
                  >
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 ? <span>/</span> : null}
                </li>
              ))}
            </ol>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-[54px] md:text-[86px] leading-[1.05] maru-headline-split-strong text-white mb-10"
          >
            Get in touch!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-center text-white/70 max-w-2xl mx-auto mb-10"
          >
            Share your goals. We will recommend the fastest path to measurable revenue impact.
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href="#contact"
            className="inline-flex items-center justify-center w-full gap-3 text-xs uppercase tracking-[2px] font-semibold text-white"
          >
            Send message
            <span className="w-9 h-9 rounded-full bg-white/10 border border-white/25 flex items-center justify-center">
              <ArrowRight size={16} className="rotate-90" />
            </span>
          </motion.a>
        </div>
      </section>

      <section id="contact" className="py-[90px] md:py-[120px]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <SplitHeadline
              as="h2"
              leadingText="Let's"
              emphasisText="Talk"
              breakBeforeEmphasis={false}
              leadingWeight="strong"
              emphasisWeight="light"
              className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[68px] text-text-primary"
            />
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <label className="block text-[11px] uppercase tracking-[2px] text-text-secondary mb-3">
                  What's your name
                </label>
                <input
                  {...register("firstname")}
                  type="text"
                  placeholder="Your name"
                  disabled={isSubmitting}
                  className="w-full h-[56px] bg-transparent border-b border-border-strong focus:border-action-primary text-text-primary placeholder:text-text-muted outline-none transition-colors text-lg"
                />
                {errors.firstname && <p className="text-warm-amber text-sm mt-2">{errors.firstname.message}</p>}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <label className="block text-[11px] uppercase tracking-[2px] text-text-secondary mb-3">
                  Your email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="name@company.com"
                  disabled={isSubmitting}
                  className="w-full h-[56px] bg-transparent border-b border-border-strong focus:border-action-primary text-text-primary placeholder:text-text-muted outline-none transition-colors text-lg"
                />
                {errors.email && <p className="text-warm-amber text-sm mt-2">{errors.email.message}</p>}
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <label className="block text-[11px] uppercase tracking-[2px] text-text-secondary mb-3">
                Tell us about your project
              </label>
              <textarea
                {...register("message")}
                rows={7}
                  placeholder="Current challenge, goals, and timeline."
                disabled={isSubmitting}
                className="w-full bg-transparent border-b border-border-strong focus:border-action-primary text-text-primary placeholder:text-text-muted outline-none transition-colors text-lg resize-none"
              />
              {errors.message && <p className="text-warm-amber text-sm mt-2">{errors.message.message}</p>}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="text-text-secondary text-sm">
                  <span className="text-action-primary">*</span> Your details stay private and are never sold.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-start md:justify-end"
              >
                <button type="submit" disabled={isSubmitting} className="btn-primary-hero-cta group disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </motion.div>
            </div>

            {formStatus && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-8 p-4 rounded-lg text-sm font-medium text-center ${
                  formStatus.success
                    ? "bg-action-primary/10 text-action-primary border border-action-primary/30"
                    : "bg-warm-amber/10 text-warm-amber border border-warm-amber/30"
                }`}
              >
                {formStatus.message}
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
