import { Metadata } from "next";
import GenAIAdoptionContent from "./GenAIAdoptionContent";

export const metadata: Metadata = {
  title: "GenAI Adoption 2025 Trends | Maru Knowledge",
  description: "Report: Generative AI adoption doubles for small businesses in 2025. Explore the latest trends and statistics.",
};

export default function GenAIAdoptionPage() {
  return <GenAIAdoptionContent />;
}
