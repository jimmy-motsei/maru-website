import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Maru Online | AI Marketing Solutions",
  description: "Bridge your business into the age of AI with Maru Online. We combine comprehensive marketing solutions with cutting-edge AI technology.",
};

import { Header } from "@/components/layout/Header";
import { FooterCTA } from "@/components/layout/FooterCTA";
import { PageFrame } from "@/components/layout/PageFrame";
import Preloader from "@/components/ui/Preloader";

// HubSpot Portal ID
const HUBSPOT_PORTAL_ID = "146669350";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased font-sans bg-dark text-white`}
        suppressHydrationWarning
      >
        <Preloader />
        <Header />
        <PageFrame />
        {children}
        <FooterCTA />
        
        {/* HubSpot Tracking Code */}
        <Script
          id="hs-script-loader"
          src={`//js-eu1.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
