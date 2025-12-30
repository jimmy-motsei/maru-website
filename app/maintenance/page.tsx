import { MaintenanceView } from "@/components/MaintenanceView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Upgrade In Progress | Maru Online",
  description: "We are currently improving our platform. Please check back shortly.",
  robots: "noindex, nofollow",
};

export default function MaintenancePage() {
  return <MaintenanceView />;
}
