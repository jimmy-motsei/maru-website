"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials: {
  name: string;
  company: string;
  problem: string;
  switch: string;
  result: string;
}[] = [];

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
