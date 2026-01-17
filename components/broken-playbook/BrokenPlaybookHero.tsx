"use client";

import { motion } from "framer-motion";

export function BrokenPlaybookHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#050505] py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
            Most SME Marketing Fails for One Reason:{" "}
            <span className="text-[var(--color-cyan-primary)] font-semibold">
              The Wrong Playbook
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-10 leading-relaxed">
            You're running enterprise marketing strategies on an SME budget and infrastructure. 
            That's not a skill problem—it's a methodology problem. Free diagnostics show you 
            exactly where the playbook breaks down for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("diagnostics")}
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-cyan-primary)] text-black font-bold uppercase text-sm rounded-full hover:bg-[#35C4BE] transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:-translate-y-1"
            >
              Find Where It's Breaking
            </button>

            <button
              onClick={() => scrollToSection("why-it-matters")}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold uppercase text-sm rounded-full hover:bg-white/15 transition-all duration-300 border border-white/20"
            >
              Why This Matters
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
