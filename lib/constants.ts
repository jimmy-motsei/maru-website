export const SITE_CONFIG = {
  name: "Maru Online",
  description: "Bridge your business into the age of AI",
  url: "https://maruonline.com",
  ogImage: "https://maruonline.com/og.jpg",
  links: {
    twitter: "https://twitter.com/maruonline",
    github: "https://github.com/maruonline",
  },
  contact: {
    email: "hello@maruonline.com",
    phone: "+27(0)83 393 4864",
    address: {
      kzn: "247 Ballito Village, Ballito, 4420",
      gauteng: "61 4th Street, Linden, Johannesburg",
    },
  },
};

export const NAV_LINKS = [
  { name: "Homepage", href: "/" },
  {
    name: "Services",
    href: "/services",
    subItems: [
      { name: "SmartGuest AI", href: "/services/smartguest-ai" },
      { name: "BizInsight AI", href: "/services/bizinsight-ai" },
      { name: "AI Mastery Workshops", href: "/services/ai-mastery-workshops" },
      { name: "Custom AI Solutions", href: "/services/custom-ai-solutions" },
    ],
  },
  {
    name: "Resources",
    href: "/knowledge",
    subItems: [{ name: "Knowledge", href: "/knowledge" }],
  },
  {
    name: "Other pages",
    href: "/contact",
    subItems: [
      { name: "Contact", href: "/contact" },
      { name: "404", href: "/404" },
    ],
  },
];
