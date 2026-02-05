import { Metadata } from "next";
import { HomePageClient } from "@/components/homepage/HomePageClient";

export const metadata: Metadata = {
  title: "Building AI-Powered Revenue Systems for Growing SMEs | MaruOnline",
  description: "We use AI to reduce manual effort, prioritise real buying intent, and improve how revenue flows through your business. Strategic Revenue Infrastructure for South African SMEs.",
  openGraph: {
    title: "Building AI-Powered Revenue Systems for Growing SMEs",
    description: "AI-driven revenue infrastructure for South African SMEs. Move from activity to predictable revenue.",
  },
};

export default function Home() {
  return <HomePageClient />;
}
