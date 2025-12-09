import { Metadata } from "next";
import AIAdoptionContent from "./AIAdoptionContent";

export const metadata: Metadata = {
  title: "AI Adoption in South African SMEs | Maru Knowledge",
  description: "Analysis of AI adoption trends among South African small businesses. Learn why 2024/2025 is the tipping point.",
};

export default function AIAdoptionPage() {
  return <AIAdoptionContent />;
}
