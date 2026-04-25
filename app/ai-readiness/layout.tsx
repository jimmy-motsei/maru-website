import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Diagnostic — Find Where Your Business Is Losing Time | Maru Online",
  description:
    "Five questions. Instant result. Find out exactly where your business is losing time to manual processes — and what to address first. Free.",
};

export default function AIReadinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
