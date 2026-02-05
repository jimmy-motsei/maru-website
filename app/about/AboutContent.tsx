"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

export default function AboutContent() {
  return (
    <main className="bg-dark">
      {/* Hero Banner - Dark with Atmospheric Background */}
      <section className="relative min-h-[80vh] flex items-end pb-24 overflow-hidden">
        {/* Background Atmosphere */}
        <AtmosphericBackground variant="hero" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-[clamp(150px,20vh,200px)] pb-[clamp(80px,12vh,140px)]">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ul className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-accent hover:text-accent-light transition-colors"
                >
                  Homepage
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-white/60">About</li>
            </ul>
          </motion.nav>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-h1 font-medium text-white mb-14 leading-[1.2]">
              Built <span className="font-thin text-white/60">Different.</span> <br className="hidden md:block" />
              Built <span className="font-thin text-white/60">for SMEs.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl">
              A marketing consultancy founded on a decade of watching good businesses struggle with tools that weren't designed for their stage.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#about-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-3 text-accent hover:text-accent-light transition-colors group mt-4"
          >
            <span className="text-sm font-medium">Our story</span>
            <ArrowDown size={16} className="animate-bounce" />
          </motion.a>
        </div>
      </section>

      {/* About Content Section - Light Background */}
      <section id="about-content" className="bg-white py-32 text-black">
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
              <motion.p 
                className="text-xl leading-relaxed text-black font-semibold"
                variants={fadeUpVariants}
              >
                Our founder's marketing career revealed a pattern: SMEs investing in technology that made their problems worse, not better.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                Empty CRMs. Generic automation. Websites with traffic but no conversions.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                It wasn't a skills problem or a budget problem. It was a methodology gap. The marketing playbooks being sold to SMEs were designed for enterprises—different scale, different resources, different constraints.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                The solution wasn't more tools. It was understanding how these systems actually function for businesses at this stage.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                So we rebuilt from the ground up. Learned web development and systems architecture. Mastered the technical layer most agencies outsource. Studied where marketing technology breaks down—and how to fix it without enterprise complexity or enterprise pricing.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                Today, we use AI to diagnose faster and implement more precisely. But the differentiation comes from understanding SME marketing at a systems level—what actually works, what creates friction, and how to bridge the gap.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                We started with lead generation because that's where revenue bleeds first. But the mission is broader: solving marketing problems that keep good businesses stuck.
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
                    "<span className="font-bold">We solve</span> <span className="font-light">marketing problems with</span> <span className="font-bold">AI precision</span><span className="font-light">—not AI hype.</span>"
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
    </main>
  );
}