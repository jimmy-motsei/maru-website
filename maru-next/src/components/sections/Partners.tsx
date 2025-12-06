"use client";

import Image from "next/image";

const partners = [
  { name: "B2B Group 8", logo: "/images/partners/b2b.png" },
  { name: "Digivation", logo: "/images/partners/digivation.png" },
  { name: "Roka Initiatives", logo: "/images/partners/roka.png" },
  { name: "Ditsala Protection Services", logo: "/images/partners/ditsala.png" },
  { name: "Dikeme Farms", logo: "/images/partners/dikeme.jpg" },
  { name: "Queens Massive Hire", logo: "/images/partners/queens.png" },
  { name: "Forever Greens", logo: "/images/partners/forever_greens.png" },
  { name: "Itonga Resourcing", logo: "/images/partners/itonga.png" },
  { name: "Maine Makhadzi", logo: "/images/partners/maine.png" },
  { name: "Simelane Refrigeration", logo: "/images/partners/simelane.png" },
  { name: "Wanoura", logo: "/images/partners/wanoura.png" },
  { name: "Xarra Consulting", logo: "/images/partners/xarra_consulting.png" },
];

export function Partners() {
  // Duplicate the array for seamless infinite scroll
  const allPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-white border-t border-gray-100 overflow-hidden text-black">
      <div className="relative">
        {/* Infinite Scrolling Container */}
        <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
          {allPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 px-12 flex items-center justify-center min-w-[200px]"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={80}
                className="h-16 w-auto object-contain transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
