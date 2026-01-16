import type { Metadata } from "next";
import { Suspense } from "react";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { FooterCTA } from "@/components/layout/FooterCTA";
import { PageFrame } from "@/components/layout/PageFrame";
import { ConversionTracking } from "@/components/analytics/ConversionTracking";
import { PerformanceMonitor } from "@/components/analytics/PerformanceMonitor";
import { JourneyAnalytics } from "@/components/analytics/JourneyAnalytics";
import CookieConsent from "@/components/ui/CookieConsent";
import CookieManager from "@/components/CookieManager";
import { Analytics } from "@vercel/analytics/react";

import BookingModal from "@/components/ui/BookingModal";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Maru Online | AI Marketing Solutions",
  description: "Bridge your business into the age of AI with Maru Online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased font-sans bg-dark text-white`}
        suppressHydrationWarning
      >
        <ConversionTracking />
        <PerformanceMonitor />
        <Suspense fallback={null}>
          <JourneyAnalytics />
        </Suspense>
        <Header />
        <PageFrame />
        {children}
        <FooterCTA />
        <CookieManager />
        <CookieConsent />
        <BookingModal />
        <Analytics />
      </body>
    </html>
  );
}
