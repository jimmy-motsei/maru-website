"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUpVariants, staggerContainerVariants, scaleInVariants } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="bg-white py-32 text-black">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Single Column: Text Content */}
          <div className="space-y-8">
            <motion.h2 
              className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl mb-8"
              variants={fadeUpVariants}
            >
              <span className="font-light text-gray-600">The</span> Anti-Agency
            </motion.h2>

            <motion.p 
              className="text-xl leading-relaxed text-black font-semibold"
              variants={fadeUpVariants}
            >
              We're not another AI agency that discovered marketing last year.
            </motion.p>

            <motion.p 
              className="text-lg leading-relaxed text-black/80"
              variants={fadeUpVariants}
            >
              Our founder spent years in marketing before rebuilding this business around a simple observation: SMEs are drowning in tools they don't know how to use. CRMs sitting empty. Automation sending generic emails. Websites that look good but convert nobody.
            </motion.p>

            <motion.p 
              className="text-lg leading-relaxed text-black/80"
              variants={fadeUpVariants}
            >
              The problem isn't the tools. It's that most businesses try to do enterprise marketing on an SME budget, guided by agencies that learned their craft from blog posts.
            </motion.p>

            <motion.p 
              className="text-lg leading-relaxed text-black/80"
              variants={fadeUpVariants}
            >
              We took a different path. Instead of scaling an agency, we went deep—learning web development, mastering digital systems, understanding how the pieces actually fit together. Not from theory, but from building, breaking, and fixing marketing systems until we understood what works.
            </motion.p>

            <motion.p 
              className="text-lg leading-relaxed text-black/80"
              variants={fadeUpVariants}
            >
              Now we use AI to diagnose problems faster and implement solutions more precisely. But the insight comes from understanding how SME marketing actually fails—and how to fix it without the enterprise price tag.
            </motion.p>

            <motion.p 
              className="text-lg leading-relaxed text-black/80"
              variants={fadeUpVariants}
            >
              We started with lead generation because it's where most businesses bleed revenue. But our mission is broader: solving the marketing problems that keep SMEs stuck, one system at a time.
            </motion.p>

            {/* Quote Block - Relocated to end */}
            <motion.div 
              className="mt-16 flex items-center gap-6 rounded-2xl bg-gray-50 p-8 border-l-4 border-accent"
              variants={fadeUpVariants}
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                <Image 
                  src="/images/brand/founder.jpg" 
                  alt="Founder" 
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h6 className="text-lg leading-snug mb-2">
                  "<span className="font-bold">We solve</span> <span className="font-light">marketing problems using</span> <span className="font-bold">AI intelligence</span><span className="font-light">—not AI hype.</span>"
                </h6>
                <p className="text-sm text-black/60 font-medium">
                  Founder - Jimmy Motsei
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
