"use client";

import { motion } from "framer-motion";
import { CTAPrimary } from "@/components/ui/CTAPrimary";
import { MessageSquare, LineChart } from "lucide-react";

export function EngagementPaths() {
  return (
    <section className="bg-[#161616] py-24 lg:py-40 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-h2 font-medium text-white mb-14 leading-[1.2]">
              Ways to <span className="font-thin">Engage</span> <br className="hidden md:block" />
              <span>(When You’re Ready)</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Path 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900/30 border border-zinc-800 p-10 lg:p-14 rounded-[2rem] flex flex-col justify-between"
            >
              <div>
                <LineChart className="w-10 h-10 text-highlight mb-8" />
                <h3 className="text-2xl text-white font-medium mb-4">Assess Your Revenue System</h3>
                <p className="text-zinc-500 mb-10 leading-relaxed font-light">
                  Get objective data on your current pipeline maturity and revenue leakage before planning any changes.
                </p>
              </div>
              <CTAPrimary href="/assessments/lead-score">
                Run the Website Lead Grader
              </CTAPrimary>
            </motion.div>

            {/* Path 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card-dark border border-card-border p-10 lg:p-14 rounded-[2rem] flex flex-col justify-between"
            >
              <div>
                <MessageSquare className="w-10 h-10 text-white mb-8" />
                <h3 className="text-2xl text-white font-medium mb-4">Discuss an Engagement</h3>
                <p className="text-zinc-500 mb-10 leading-relaxed font-light">
                  For businesses already running marketing and sales operations looking for system-level interventions.
                </p>
              </div>
              <button 
                className="group relative inline-flex items-center justify-center bg-white text-black font-bold uppercase text-sm tracking-widest px-8 py-4 rounded-full hover:bg-zinc-200 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Request a Conversation
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 text-center max-w-2xl mx-auto"
          >
            <p className="text-zinc-500 text-sm italic font-light leading-relaxed">
              "Not sure where to start? The Website Lead Grader will point you in the right direction — <span className="text-white">even if we never work together.</span>"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
