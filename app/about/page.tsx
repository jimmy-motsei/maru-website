import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Maru Online",
  description: "Established in 2002, MaruOnline brings over two decades of marketing expertise. We use AI as a strategic tool to help high-performing SMEs break through growth plateaus.",
};

export default function AboutPage() {
  return <AboutContent />;
}