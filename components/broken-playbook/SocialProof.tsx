"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Nkosi",
    company: "Swift Logistics",
    problem: "We hired an agency that implemented a complex marketing automation system with 15-stage email nurture sequences. It was designed for B2B SaaS companies with long sales cycles. We're a logistics company—our sales cycle is 2-3 weeks.",
    switch: "Maru diagnosed that our actual problem was slow quote turnaround, not lack of nurture emails. They automated our quote generation and follow-up process instead.",
    result: "Quote-to-close time dropped from 12 days to 4 days. Close rate improved from 18% to 31%. We're using 3 tools instead of 8. Monthly software cost down from R15,000 to R4,500."
  },
  {
    name: "David Martinez",
    company: "TechConsult SA",
    problem: "I paid for HubSpot Enterprise because 'you need a proper CRM to scale.' Spent 3 months setting it up. My team hated it—too complex for our 4-person sales operation. Half the features sat unused.",
    switch: "Maru showed me I was losing deals because of slow follow-up, not lack of CRM features. They set up simple automation in our existing system that actually matched how we sell.",
    result: "Response time to new leads: 42 hours to 3 hours. Follow-up consistency: 2 touches to 7 touches on average. We closed 23% more deals in the first quarter. Downgraded to HubSpot Starter and saved R8,000/month."
  },
  {
    name: "Jennifer Patel",
    company: "GrowthLab",
    problem: "We rebuilt our entire website because an agency said 'modern B2B sites need interactive experiences and personalization.' Cost R180,000. Looked beautiful. Conversion rate stayed at 1.9%.",
    switch: "Maru's diagnostic showed our value proposition was unclear and our contact form was broken on mobile. Simple fixes—no rebuild needed.",
    result: "Conversion rate: 1.9% to 5.3%. That's 178% more leads from the same traffic. Total cost: R12,000 vs. the R180,000 we'd already wasted. Fixed in 3 weeks instead of 3 months."
  }
];

export function SocialProof() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#050505] mb-16 text-center leading-tight">
            <span className="font-light text-zinc-500">SMEs Who Switched</span>{" "}
            <span className="font-bold text-[#050505]">to the Right Playbook</span>
          </h2>

          <div className="max-w-6xl mx-auto space-y-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-zinc-200 rounded-2xl p-8 md:p-10 hover:border-highlight hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-8 h-8 text-highlight flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-semibold text-[#050505]">
                      {testimonial.name}
                    </h3>
                    <p className="text-zinc-600">{testimonial.company}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Problem */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <h4 className="text-sm font-semibold text-red-900 mb-2">
                      The Enterprise Playbook They Tried:
                    </h4>
                    <p className="text-zinc-700 leading-relaxed">
                      "{testimonial.problem}"
                    </p>
                  </div>

                  {/* Switch */}
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                    <h4 className="text-sm font-semibold text-amber-900 mb-2">
                      The SME Approach:
                    </h4>
                    <p className="text-zinc-700 leading-relaxed">
                      "{testimonial.switch}"
                    </p>
                  </div>

                  {/* Result */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                    <h4 className="text-sm font-semibold text-green-900 mb-2">
                      The Result:
                    </h4>
                    <p className="text-zinc-800 font-medium leading-relaxed">
                      "{testimonial.result}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
