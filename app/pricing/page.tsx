import Link from 'next/link';
import { Check } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Maru Online',
  description: 'Simple, flat-rate pricing for AI-powered marketing services. Choose the plan that fits your business needs.',
};

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '/booking?plan=Starter',
    price: 'R4,950',
    description: 'Perfect for local businesses just starting their digital journey.',
    features: [
      'Google Business Profile Optimization',
      'Basic SEO Setup (5 Pages)',
      'Monthly Performance Report',
      '1 Blog Post / Month',
      'Email Support'
    ],
    featured: false,
  },
  {
    name: 'Growth',
    id: 'tier-growth',
    href: '/booking?plan=Growth',
    price: 'R12,500',
    description: 'The complete engine for businesses ready to scale aggressively.',
    features: [
      'Everything in Starter',
      'Advanced SEO Strategy',
      'Google Ads Management',
      'Social Media Content (8 posts/mo)',
      'Bi-Weekly Strategy Calls',
      'Dedicated Account Manager'
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/booking?plan=Enterprise',
    price: 'R28,000+',
    description: 'Custom AI integration and full-service marketing department.',
    features: [
      'Everything in Growth',
      'Custom AI Chatbot Development',
      'LinkedIn Lead Gen Automation',
      'Video Content Production',
      'Weekly Deep-Dive Analysis',
      '24/7 Priority Support'
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Simple, flat-rate pricing.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            No hidden retainer fees. Choose the pace that suits your cash flow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl p-8 ring-1 transition-transform hover:scale-[1.02] duration-300 ${
                tier.featured
                  ? 'bg-dark ring-accent shadow-[0_0_30px_rgba(61,184,198,0.15)] relative border-l-4 border-accent'
                  : 'bg-white/5 ring-white/10 hover:ring-accent/50 border-l-4 border-transparent hover:border-accent/30'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold leading-5 text-dark shadow-sm">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold leading-8 text-white">{tier.name}</h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-zinc-400">/month</span>
                </p>
                <p className="mt-6 text-sm leading-6 text-zinc-300">{tier.description}</p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-zinc-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-accent" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={tier.href}
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${
                  tier.featured
                    ? 'bg-accent text-dark hover:bg-accent-light'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Choose {tier.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
