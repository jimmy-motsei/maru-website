import { Metadata } from "next";
import WebsiteDevelopmentPage from "./WebDevelopmentPage";

export const metadata: Metadata = {
  title: "High-Performance Web Development | Maru Online",
  description: "Transform your website into a 24/7 lead generation engine. Blazing fast, SEO-optimized, and built for conversion.",
  keywords: "web development, Next.js, React, high-performance website, SEO, lead generation, South Africa",
  openGraph: {
    title: "High-Performance Web Development | Maru Online",
    description: "Transform your website into a 24/7 lead generation engine. Blazing fast, SEO-optimized, and built for conversion.",
    type: "website",
  },
};

export default function Page() {
  return <WebsiteDevelopmentPage />;
}
