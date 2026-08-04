import { Metadata } from "next";
import { seo } from "@/lib/seo";
import POPIAChecklistPageClient from "./POPIAChecklistPageClient";

export const metadata: Metadata = {
  title: "Free POPIA-Compliant AI Checklist | Maru Online",
  description: "Download your free checklist to ensure your AI implementations comply with South African POPIA regulations. Avoid R10 million penalties and build customer trust.",
  ...seo('/resources/popia-ai-checklist'),
};

export default function POPIAChecklistPage() {
  return <POPIAChecklistPageClient />;
}
