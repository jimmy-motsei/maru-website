import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "AI & Automation Services | Maru Online",
  description: "Explore our AI solutions: Lead Generation, CRM Automation, Office Ops, and WhatsApp Chatbots designed for growth.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
