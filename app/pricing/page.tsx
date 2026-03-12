import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | What Does AI Integration Actually Cost? | Maru Online",
  description:
    "Fixed-scope pricing for AI integration. Every engagement is scoped to your stack, team, and revenue objectives. Get a full quote after a free 30-minute Discovery Call.",
};

const services = [
  {
    id: "ai-revenue-diagnostic",
    label: "Start Here",
    name: "AI Revenue Diagnostic",
    price: "From R25,000",
    priceNote: "Fixed-scope · Typically 2 weeks",
    description:
      "A focused audit of your AI tools, workflows, and data flows. You get a prioritised integration roadmap and quick wins you can act on in 30 days — whether you hire us or not.",
    featured: false,
  },
  {
    id: "custom-ai-solution-build",
    label: "Most Common",
    name: "Custom AI Solution Build",
    price: "From R45,000",
    priceNote: "Fixed-scope · Typically 4–8 weeks",
    description:
      "Custom AI integration built for your existing stack. We design the architecture, build the connections, configure the behaviours, and test across the full system.",
    featured: true,
  },
  {
    id: "ai-training-capability-building",
    label: "",
    name: "AI Training & Capability Building",
    price: "From R15,000",
    priceNote: "Fixed-scope · Typically 2 weeks",
    description:
      "Hands-on training so your team can run, improve, and own your AI systems. Includes prompt engineering, workflow walkthroughs, and 30 days of follow-up support.",
    featured: false,
  },
  {
    id: "ongoing-ai-support-optimisation",
    label: "",
    name: "Ongoing AI Support & Optimisation",
    price: "From R8,500/month",
    priceNote: "Monthly retainer · Minimum 3-month commitment",
    description:
      "Monthly optimisation retainer. Monthly performance reviews, priority support, quarterly strategy sessions, and compliance monitoring. Available after initial implementation.",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-dark py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <span className="uppercase tracking-[2px] text-zinc-500 text-[12px] font-medium mb-6 block">
            Pricing
          </span>
          <h1 className="text-h1 font-medium text-white leading-[1.2] mb-8">
            What Does AI Integration{" "}
            <span className="font-thin">Actually Cost?</span>
          </h1>
          <p className="text-lg leading-8 text-zinc-300 mx-auto max-w-2xl">
            Every engagement is scoped to your specific stack, team, and revenue
            objectives. Pricing is fixed-scope — you know the full investment
            before work begins. Final quotes are generated after a free
            30-minute Discovery Call.
          </p>
        </div>

        {/* Pricing Cards — 2×2 grid on desktop */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative flex flex-col justify-between rounded-3xl p-8 ring-1 transition-transform hover:scale-[1.02] duration-300 ${
                service.featured
                  ? "bg-dark ring-accent shadow-[0_0_30px_rgba(61,184,198,0.15)] border-l-4 border-accent"
                  : "bg-card-dark ring-white/10 hover:ring-accent/50 border-l-4 border-transparent hover:border-accent/30"
              }`}
            >
              {service.label && (
                <div className="absolute -top-4 left-8 rounded-full bg-[#E8A020] px-3 py-1 text-xs font-semibold leading-5 text-dark shadow-sm">
                  {service.label}
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold leading-8 text-white">
                  {service.name}
                </h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {service.price}
                  </span>
                </p>
                <p className="mt-6 text-base leading-7 text-zinc-300">
                  {service.description}
                </p>
                <p className="mt-4 text-sm text-zinc-500 italic">
                  {service.priceNote}
                </p>
              </div>

              <Link
                href="/booking"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${
                  service.featured
                    ? "bg-accent text-dark hover:bg-accent-light"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Book a Discovery Call
              </Link>
            </div>
          ))}
        </div>

        {/* Note block */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-base leading-7 text-zinc-400">
            All prices are starting points. Your final quote is generated after a
            free 30-minute Discovery Call where we scope your specific
            requirements. No obligation.
          </p>
          <Link
            href="/booking"
            className="mt-8 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-dark hover:bg-accent-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Book Your Free Discovery Call
          </Link>
        </div>
      </div>
    </div>
  );
}
