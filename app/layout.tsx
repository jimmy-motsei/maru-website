import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { FooterCTA } from "@/components/layout/FooterCTA";
import { PageFrame } from "@/components/layout/PageFrame";
import { ConversionTracking } from "@/components/analytics/ConversionTracking";
import { PerformanceMonitor } from "@/components/analytics/PerformanceMonitor";
import { JourneyAnalytics } from "@/components/analytics/JourneyAnalytics";
import CookieConsent from "@/components/CookieConsent";
import CookieManager from "@/components/CookieManager";
import { Analytics } from "@vercel/analytics/react";

import BookingModal from "@/components/ui/BookingModal";

const outfit = localFont({
  src: "../public/fonts/outfit/Outfit-Variable.woff2",
  variable: "--font-outfit",
  display: "swap",
});

const inter = localFont({
  src: "../public/fonts/inter/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Most SME Marketing Fails for One Reason: The Wrong Playbook | Maru Online",
  description: "You're running enterprise marketing strategies on SME budgets. Free diagnostics show exactly where the playbook breaks down for your business—and what to fix first.",
  openGraph: {
    title: "Most SME Marketing Fails for One Reason: The Wrong Playbook",
    description: "Free diagnostics show exactly where the playbook breaks down for your business.",
    url: "https://maruonline.com",
    siteName: "Maru Online",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Most SME Marketing Fails for One Reason: The Wrong Playbook",
    description: "Free diagnostics show exactly where the playbook breaks down for your business.",
  },
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
        {/* HubSpot Tracking Script */}
        <Script
          id="hs-script-loader"
          src="//js-eu1.hs-scripts.com/146669350.js"
          strategy="afterInteractive"
          async
          defer
        />
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
