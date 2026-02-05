"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Database, Target, Cpu } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Senior Leadership",
    content: "Engagement is led by practitioners, not account managers. You get systems thinking from experts who have built these infrastructures before."
  },
  {
    icon: Database,
    title: "Data-First Methodology",
    content: "We don't guess. Every intervention begins with a technical and operational audit of your existing revenue flow."
  },
  {
    icon: Cpu,
    title: "Systems Over Tactics",
    content: "Tactics change every week. Infrastructure lasts years. We focus on the underlying systems that make growth repeatable and sustainable."
  },
  {
    icon: Target,
    title: "Measurable Outcomes",
    content: "Success isn't measured in clicks or views. It's measured in reduced friction, improved qualification, and Predictable Revenue."
  }
];

export function ProofCredibility() {
  return (
    <section className="bg-zinc-900/10 py-24 lg:py-40 border-t border-zinc-800/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:sticky md:top-32 md:w-1/3"
            >
              <h2 className="text-h2 font-medium text-white mb-8 leading-[1.2]">
                Built on <span className="font-thin">Experience, Data, and</span> <br />
                <span>Measurable Outcomes</span>
              </h2>
              <p className="text-zinc-500 font-light leading-relaxed">
                We believe that the era of "throwing marketing at the wall" is over for serious SMEs. Professional growth requires professional infrastructure.
              </p>
            </motion.div>

            <div className="md:w-2/3 grid sm:grid-cols-2 gap-12">
              {principles.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-10 h-10 border border-zinc-800 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="w-5 h-5 text-highlight" />
                  </div>
                  <h3 className="text-white font-medium text-lg">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
