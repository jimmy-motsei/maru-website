"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function PageFrame() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="hidden md:block fixed bottom-0 left-0 w-full z-40 pointer-events-none">
      
      {/* Left Element: HOMEPAGE */}
      {/* Fixed at bottom-10 left-8 */}
      <div className="absolute bottom-10 left-8 w-0 h-0 pointer-events-auto">
        <Link 
          href="/" 
          className="flex items-center gap-2 origin-bottom-left -rotate-90 translate-y-full whitespace-nowrap text-xs font-bold tracking-[0.2em] text-zinc-500 hover:text-white transition-colors uppercase"
        >
          Homepage
        </Link>
      </div>

      {/* Right Element: SCROLL TO TOP */}
      {/* Fixed at bottom-10 right-8 */}
      <div className="absolute bottom-10 right-8 w-0 h-0 pointer-events-auto">
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 origin-bottom-left -rotate-90 whitespace-nowrap text-xs font-bold tracking-[0.2em] text-zinc-500 hover:text-white transition-colors uppercase"
        >
          <ArrowUp size={14} className="rotate-90" />
          Scroll to Top
        </button>
      </div>

    </div>
  );
}
