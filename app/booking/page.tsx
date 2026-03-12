import type { Metadata } from 'next';
import Script from 'next/script';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Book a Consultation | Maru Online',
  description: 'Schedule a free discovery call with the Maru Online team.',
};

export default function BookingPage() {
  const calendlyUrl = `${siteConfig.calendly.discoveryCall}?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=22d3ee`;

  return (
    <main className="min-h-screen bg-dark py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center text-3xl font-bold tracking-tight text-white mb-2">
          Book a Free Consultation
        </h1>
        <p className="text-center text-sm text-zinc-400 mb-8">
          Pick a time that works for you and let&apos;s build your growth plan.
        </p>

        <div className="rounded-lg border border-white/10 overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url={calendlyUrl}
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </div>
    </main>
  );
}
