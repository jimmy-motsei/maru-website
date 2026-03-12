import { Metadata } from "next";
import { Suspense } from 'react';
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | AI Implementation Consultancy for African SMEs | Maru Online",
  description: "Maru is an AI implementation consultancy for South African SMEs. Founded by Jimmy Motsei with 20+ years in marketing and revenue systems. We build AI infrastructure that generates measurable ROI.",
};

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-dark text-white">Loading...</div>}>
      <AboutContent />
    </Suspense>
  );
}