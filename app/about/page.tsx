import { Metadata } from "next";
import { Suspense } from 'react';
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "Built for the Gap Between AI Investment and AI Results | Maru Online",
  description: "Maru Online is an AI integration consultancy for South African SMEs. Founded by Jimmy Motsei with 20+ years in sales, marketing, and business systems. We bridge the gap between AI spend and AI results.",
};

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-dark text-white">Loading...</div>}>
      <AboutContent />
    </Suspense>
  );
}