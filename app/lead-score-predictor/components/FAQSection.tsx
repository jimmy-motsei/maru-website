'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What information do you need?",
    answer: "We only need your email address, company name, and answers to 8 simple questions about your website and business goals. No sensitive data or website access required."
  },
  {
    question: "How accurate is the scoring?",
    answer: "Our AI model has been trained on data from 10,000+ B2B websites and achieves 85% accuracy in predicting lead generation potential. The score correlates strongly with actual conversion improvements seen by our users."
  },
  {
    question: "What happens after I complete it?",
    answer: "You'll receive your Lead Generation Score (0-100) immediately on screen, plus a detailed PDF report sent to your email with specific recommendations prioritized by impact."
  },
  {
    question: "Will you spam me?",
    answer: "Absolutely not. You'll receive your results and 2-3 follow-up tips to help you improve your score. You can unsubscribe instantly with one click. We respect your inbox."
  },
  {
    question: "Can I use this for my clients?",
    answer: "Yes! Many agencies use our Lead Score Predictor to audit client websites. The PDF report is designed to be shared with stakeholders and makes a great addition to proposals."
  }
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-dark py-12 md:py-32 relative overflow-hidden text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="inline-flex items-center justify-center w-14 h-14 bg-[#22d3ee]/10 rounded-full mb-6 border border-[#22d3ee]/30"
            >
              <HelpCircle className="w-7 h-7 text-[#22d3ee]" />
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="font-bold mb-4"
            >
              <span className="font-light text-zinc-500">Common</span> Questions
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="text-white/60"
            >
              Everything you need to know before getting started
            </motion.p>
          </div>

          {/* FAQ Accordion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-2xl border border-[#22d3ee]/10 overflow-hidden hover:border-[#22d3ee]/30 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center border border-[#22d3ee]/20"
                  >
                    <ChevronDown className="w-4 h-4 text-[#22d3ee]" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-zinc-400 leading-relaxed border-t border-[#22d3ee]/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
