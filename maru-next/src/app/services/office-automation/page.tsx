import { Metadata } from "next";
import OfficeAutomationContent from "./OfficeAutomationContent";

export const metadata: Metadata = {
  title: "Office Ops Automation Services | Maru Online",
  description: "Streamline document processing and automate repetitive workflows with our AI-powered operational solutions.",
};

export default function OfficeAutomationPage() {
  return <OfficeAutomationContent />;
}
