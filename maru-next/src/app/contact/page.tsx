"use client";


import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { submitToHubSpot, HUBSPOT_FORMS } from "@/lib/hubspot";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Johannesburg, South Africa"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@maruonline.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 5:00 PM", "Sat - Sun: Closed"],
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    
    // Check if form ID is configured
    if (!HUBSPOT_FORMS.CONTACT) {
        // Fallback for demo purposes if no ID is set
        setTimeout(() => {
            setIsSubmitting(false);
            setFormStatus({ success: true, message: "Thank you! We'll be in touch shortly." });
            setFormData({ firstname: "", email: "", company: "", message: "" });
        }, 1000);
        return;
    }

    const result = await submitToHubSpot(HUBSPOT_FORMS.CONTACT, formData);
    
    setIsSubmitting(false);
    setFormStatus(result);
    
    if (result.success) {
      setFormData({ firstname: "", email: "", company: "", message: "" });
    }
  };

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-dark relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <AtmosphericBackground variant="hero" />

        <div className="container mx-auto px-6 lg:px-8 py-24 relative z-10 text-center">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <ol className="flex items-center justify-center gap-2 text-sm">
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
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-8"
          >
            Ready to Scale with AI?
          </motion.h1>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="#contact-form"
            className="inline-flex items-center gap-3 text-white/60 hover:text-accent transition-colors group"
          >
            <span className="text-sm font-medium tracking-wider uppercase">Start Conversation</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform rotate-90" />
          </motion.a>
        </div>
      </section>

      {/* Map Section -- Removed/Disabled as per request */}
      <section className="relative hidden">
        <motion.div
           className="w-full h-[400px] bg-gray-900 flex items-center justify-center text-white/20"
        >
           Map Placeholder
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl text-center mb-20"
          >
            Start Your <span className="font-light">Transformation</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-8"
            >
              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div variants={fadeUpVariants}>
                    <input
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 bg-transparent text-dark placeholder:text-dark/70 focus:border-accent focus:outline-none transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </motion.div>
                  <motion.div variants={fadeUpVariants}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Business Email"
                      className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 bg-transparent text-dark placeholder:text-dark/70 focus:border-accent focus:outline-none transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </motion.div>
                </div>

                <motion.div variants={fadeUpVariants}>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company name (optional)"
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 bg-transparent text-dark placeholder:text-dark/70 focus:border-accent focus:outline-none transition-colors"
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your automation challenges..."
                    rows={4}
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 bg-transparent text-dark placeholder:text-dark/70 focus:border-accent focus:outline-none transition-colors resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div
                  variants={fadeUpVariants}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                >
                  <p className="text-dark/60 text-sm">
                    <span className="text-accent">*</span> We promise not to disclose your personal information to third parties.
                  </p>
                  
                  <div className="flex flex-col items-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center gap-4 bg-dark text-white px-8 py-4 rounded-full hover:bg-accent transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="font-medium">
                        {isSubmitting ? "Sending..." : "Submit Request"}
                      </span>
                      {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </button>
                    {formStatus && (
                      <p className={`mt-2 text-sm ${formStatus.success ? "text-green-600" : "text-red-500"}`}>
                        {formStatus.message}
                      </p>
                    )}
                  </div>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-4"
            >
              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <motion.div key={item.title} variants={fadeUpVariants} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dark/5 flex items-center justify-center">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-dark/60 text-sm">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={fadeUpVariants} className="mt-12 pt-8 border-t border-dark/10">
                <h4 className="font-bold text-dark mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/jrmotsei/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark/10 flex items-center justify-center text-dark hover:bg-accent hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/maru_africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark/10 flex items-center justify-center text-dark hover:bg-accent hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/maruonlin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark/10 flex items-center justify-center text-dark hover:bg-accent hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/maru_automations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark/10 flex items-center justify-center text-dark hover:bg-accent hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            >
              Ready to Transform Your Business with AI?
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-white/60 text-lg max-w-2xl mx-auto mb-10"
            >
              Book a free discovery call to discuss your AI automation needs and explore how we can help your business grow.
            </motion.p>
            <motion.div variants={fadeUpVariants}>
              <Link
                href="https://calendly.com/hello-maruonline"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent text-dark px-8 py-4 rounded-full font-medium hover:bg-white transition-colors group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
