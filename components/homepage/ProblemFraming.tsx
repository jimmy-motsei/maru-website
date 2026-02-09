"use client";

import { motion } from "framer-motion";

export function ProblemFraming() {
  return (
    <section id="problem-framing" className="bg-[#161616] py-24 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-h2 font-medium text-white mb-14 leading-[1.2]">
              Most growing SMEs <span className="font-thin">don’t have a</span> <br className="hidden md:block" />
              <span>marketing problem.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                  If your business already attracts leads or enquiries but growth still feels unpredictable, the issue isn’t activity.
                </p>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                  Most businesses focus on increasing the volume of leads, but the real bottleneck is how those leads are handled after they arrive.
                </p>
              </div>
              
              <div className="space-y-8">
                <ul className="space-y-6">
                  {["Leads come in, but too many go nowhere.", "Sales follow-ups are inconsistent or delayed.", "Marketing and sales systems don’t talk to each other."].map((item, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-highlight mt-3" />
                      <p className="text-lg text-white font-light">{item}</p>
                    </li>
                  ))}
                </ul>
                
                <p className="text-lg text-zinc-400 italic pt-4">
                  That’s what we mean by a broken revenue system — and it’s far more common than most businesses realise.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
