import { Metadata } from "next";
import { Suspense } from 'react';
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Maru Online",
  description: "Established in 2002, MaruOnline brings over two decades of marketing expertise. We use AI as a strategic tool to help high-performing SMEs break through growth plateaus.",
};

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-dark text-white">Loading...</div>}>
      <AboutContent />
    </Suspense>
  );
}