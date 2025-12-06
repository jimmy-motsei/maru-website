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
              <span className="font-thin text-gray-400">About</span> Us
            </motion.h2>

            <motion.p 
              className="text-lg leading-relaxed text-black/50"
              variants={fadeUpVariants}
            >
              At our design studio, we are a collective of talented individuals ignited by our unwavering passion for transforming ideas into reality. With a harmonious blend of diverse backgrounds and a vast array of skill sets, we join forces to create compelling solutions for our esteemed clients.
            </motion.p>

            <motion.p 
              className="text-lg leading-relaxed text-black/50"
              variants={fadeUpVariants}
            >
              Collaboration is at the heart of what we do. Our team thrives on the synergy that arises when unique perspectives converge, fostering an environment of boundless creativity. By harnessing our collective expertise, we produce extraordinary results that consistently surpass expectations.
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
                <h6 className="text-lg font-medium leading-snug">
                  AI First Approach <span className="font-thin">- Optimizing Processes,</span> Driving Growth.
                </h6>
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
                src="/assets/images/illustrations/cityscapes.png"
                alt="Maru AI Cityscape"
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
