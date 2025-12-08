"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  { text: "Automation", weight: "font-extralight" },  // 200 weight
  { text: "Strategy", weight: "font-semibold" },      // 600 weight (bold but not too heavy)
  { text: "Growth", weight: "font-extralight" },      // 200 weight
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"words" | "brand" | "exit">("words");

  useEffect(() => {
    // 1. Check Session Storage
    const hasVisited = sessionStorage.getItem("maru_visited");
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    // 2. Lock Body Scroll
    document.body.style.overflow = "hidden";

    // 3. Animation Timeline (SLOWED DOWN 50%)
    const timeline = async () => {
      // Phase 1: Words visible
      // Hold for 3 seconds (was 2s, now slower)
      await new Promise((r) => setTimeout(r, 3000));

      // Phase 2: Switch to Brand
      setPhase("brand");

      // Hold brand for 2 seconds (was 1.5s)
      await new Promise((r) => setTimeout(r, 2000));

      // Phase 3: Exit (Fade out)
      setPhase("exit");

      // Wait for fade animation to complete (1.2s)
      await new Promise((r) => setTimeout(r, 1200));

      // Cleanup
      document.body.style.overflow = "";
      sessionStorage.setItem("maru_visited", "true");
      setIsLoading(false);
    };

    timeline();

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center"
          exit={{
            opacity: 0,
            transition: { duration: 1.2, ease: "easeInOut" },
          }}
        >
          <AnimatePresence mode="wait">
            {/* PHASE 1: Words */}
            {phase === "words" && (
              <motion.div
                key="words"
                className="flex items-center gap-4 md:gap-6"
                exit={{
                  y: -40,
                  opacity: 0,
                  filter: "blur(10px)",
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
              >
                {words.map((word, i) => (
                  <motion.span
                    key={word.text}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.5,  // SLOWED: Was 1.0s, now 1.5s (50% slower)
                      ease: [0.22, 1, 0.36, 1], // Power3.out equivalent
                      delay: i * 0.4, // SLOWED: Increased stagger for deliberate effect
                    }}
                    className={`text-4xl md:text-6xl text-white tracking-tighter ${word.weight}`}
                  >
                    {word.text}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* PHASE 2: Brand */}
            {phase === "brand" && (
              <motion.span
                key="brand"
                initial={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.6 },
                }}
                transition={{
                  duration: 1.2, // SLOWED: Was 0.8s
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-4xl md:text-6xl font-extralight text-white tracking-tight lowercase"
              >
                maruonline.com
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      ) : (
        // Fade-out overlay
        <motion.div
          key="fadeout"
          className="fixed inset-0 z-[9999] bg-[#050505]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
}
