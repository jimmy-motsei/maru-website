import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "AI Integration Services for South African SMEs | Maru Online",
  description: "Four structured services to turn your existing AI tools into a connected revenue system. Fixed-scope engagements from R25,000. POPIA-compliant by design.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
