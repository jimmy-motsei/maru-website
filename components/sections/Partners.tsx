"use client";

import Image from "next/image";

const partners = [
  { name: "B2B Group 8", logo: "/images/partners/B2B-logo.png" },
  { name: "Digivation", logo: "/images/partners/digivation_test.png", heightClass: "h-[30px]" },
  { name: "Roka Initiatives", logo: "/images/partners/Roka-logo.png", heightClass: "h-10" },
  { name: "Ditsala Protection Services", logo: "/images/partners/Ditsala-logo.png" },
  { name: "Dikeme Farms", logo: "/images/partners/Dikeme-logo.png" },
  { name: "Queens Massive Hire", logo: "/images/partners/Queens-logo.png" },
  { name: "Forever Greens", logo: "/images/partners/forever-greens.png" },
  { name: "Itonga Resourcing", logo: "/images/partners/itonga-logo.png" },
  { name: "Maine Makhadzi", logo: "/images/partners/maine-logo.png" },
  { name: "Simelane Refrigeration", logo: "/images/partners/simelane-logo.png" },
  { name: "Wanoura", logo: "/images/partners/wanoura-logo.png" },
  { name: "Xarra Consulting", logo: "/images/partners/xarra_consulting.png", heightClass: "h-10" },
  { name: "Singila", logo: "/images/partners/Singila-logo.png" },
  { name: "Embryo", logo: "/images/partners/embryo-logo.png" },
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
                className={`w-auto object-contain transition-all duration-300 hover:scale-105 ${
                  // @ts-ignore
                  partner.heightClass || "h-[50px]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
