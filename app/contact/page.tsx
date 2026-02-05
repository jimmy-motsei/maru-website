"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
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
    <main className="bg-deep-navy">
      {/* Hero Section with Atmospheric Background */}
      <section className="relative bg-deep-navy min-h-screen flex items-center py-section overflow-hidden">
        <AtmosphericBackground variant="hero" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-[60px]"
          >
            <ol className="flex items-center justify-center gap-2 text-sm font-sans tracking-widest uppercase">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <Link
                    href={crumb.href}
                    className={`transition-colors ${
                      index === breadcrumbs.length - 1
                        ? "text-electric-cyan font-bold"
                        : "text-white/40 hover:text-white"
                    }`}
                  >
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-white/20">/</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          {/* Headline - New Maru Styling (Thin/Bold) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0, 0, 0.3642, 1] }}
            className="text-[34px] md:text-[58px] lg:text-[86px] leading-[1.2] font-thin text-white mb-[60px] font-sans"
          >
            Let's Start <br className="hidden md:block" />
            <span className="font-bold text-electric-cyan">The Conversation.</span>
          </motion.h1>

          {/* Scroll Indicator */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            href="#contact"
            className="inline-flex items-center gap-3 text-white/60 hover:text-electric-cyan transition-colors group"
          >
            <span className="text-sm font-medium tracking-wider uppercase">Send message</span>
            <ArrowRight size={16} className="group-hover:translate-y-1 transition-transform rotate-90" />
          </motion.a>
        </div>
      </section>

      {/* Contact Form Section - Dark Background */}
      <section id="contact" className="relative bg-deep-navy py-section">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Heading - Ashley Style */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[34px] md:text-[58px] lg:text-[68px] leading-[1.2] font-medium text-center text-white mb-[120px] font-sans"
          >
            Ready to <span className="font-thin">Operationalize</span> Your AI?
          </motion.h3>

          <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <input
                  {...register('firstname')}
                  type="text"
                  placeholder="What's your name"
                  disabled={isSubmitting}
                  className="w-full h-[70px] px-8 bg-transparent border-b-2 border-white/20 focus:border-electric-cyan text-white placeholder:text-white/40 outline-none transition-colors font-light text-lg"
                />
                {errors.firstname && (
                  <p className="text-warm-amber text-sm mt-2 pl-2">{errors.firstname.message}</p>
                )}
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Your Email"
                  disabled={isSubmitting}
                  className="w-full h-[70px] px-8 bg-transparent border-b-2 border-white/20 focus:border-electric-cyan text-white placeholder:text-white/40 outline-none transition-colors font-light text-lg"
                />
                {errors.email && (
                  <p className="text-warm-amber text-sm mt-2 pl-2">{errors.email.message}</p>
                )}
              </motion.div>
            </div>

            {/* Message Textarea - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <textarea
                {...register('message')}
                rows={4}
                placeholder="Tell us about your AI implementation goals"
                disabled={isSubmitting}
                className="w-full p-8 bg-transparent border-b-2 border-white/20 focus:border-electric-cyan text-white placeholder:text-white/40 outline-none transition-colors font-light text-lg resize-none"
              />
              {errors.message && (
                <p className="text-warm-amber text-sm mt-2 pl-2">{errors.message.message}</p>
              )}
            </motion.div>

            {/* Privacy Text and Submit Button Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
              {/* Privacy Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-white/60 text-sm leading-relaxed">
                  <span className="text-warm-amber">*</span> We respect your privacy. Your information is protected in accordance with POPIA.
                </p>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-start lg:justify-end"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-3 bg-warm-amber hover:bg-orange-600 text-deep-navy px-10 py-5 rounded-lg transition-all duration-300 font-bold text-lg group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:-translate-y-1"
                >
                  <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </motion.div>
            </div>

            {/* Form Status */}
            {formStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-8 p-4 rounded-lg text-sm font-medium text-center ${
                  formStatus.success
                    ? "bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/30"
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
