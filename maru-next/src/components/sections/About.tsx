"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUpVariants, staggerContainerVariants, scaleInVariants } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="bg-white py-32 text-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          className="grid items-center gap-16 lg:grid-cols-2"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <motion.h2 
              className="text-5xl font-bold leading-tight md:text-6xl lg:text-[68px]"
              variants={fadeUpVariants}
            >
              <span className="font-thin text-gray-400">Trusted AI &</span> Automation Experts
            </motion.h2>

            <motion.p 
              className="text-lg leading-relaxed text-black/80"
              variants={fadeUpVariants}
            >
              Established in 2002, MaruOnline has a wealth of experience and expertise in several marketing disciplines. What we bring to AI Solutions Development is rooted in the experience we have; from creating brands from scratch, to growing existing ones.
            </motion.p>

            <motion.p 
              className="text-lg leading-relaxed text-black/80"
              variants={fadeUpVariants}
            >
              AI to us is a tool to better do what we do best—help SME brands and businesses to compete effectively in a crowded marketplace. By leveraging intelligent automation, we level the playing field, giving you the operational power of a large enterprise without the overhead. We turn technology into your competitive advantage.
            </motion.p>

            {/* Quote Block */}
            <motion.div 
              className="mt-12 flex items-center gap-6 rounded-2xl bg-gray-50 p-8 border-l-4 border-accent"
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
                <h6 className="text-lg font-medium leading-snug mb-2">
                  "We automate all the boring stuff, so you can focus on growing your business"
                </h6>
                <p className="text-sm text-black/60 font-medium">
                  Founder - Jimmy Motsei
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl border border-black/5" />
            <motion.div 
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
              variants={scaleInVariants}
            >
              <Image
                src="/assets/images/illustrations/visionary-woman.png"
                alt="Visionary African Woman - AI & Automation Leadership"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
