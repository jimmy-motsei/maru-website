import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  description: string;
  lastUpdated?: string;
  effectiveDate?: string;
  children: React.ReactNode;
}

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
  { name: "Cookie Policy", href: "/cookie-policy" },
];

export function LegalLayout({
  title,
  description,
  lastUpdated,
  effectiveDate,
  children,
}: LegalLayoutProps) {
  return (
    <>
      {/* Banner */}
      <div className="bg-dark pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <nav className="flex gap-2 text-sm text-light-soft mb-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Homepage
            </Link>
            <span>/</span>
            <span className="text-white">{title}</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6">
            {title}
          </h1>
          <p className="text-light-soft max-w-2xl">{description}</p>
        </div>
      </div>

      {/* Content */}
      <section className="bg-dark py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {(lastUpdated || effectiveDate) && (
                <div className="mb-12 text-light-soft">
                  {lastUpdated && (
                    <p>
                      <strong className="text-white">Last updated:</strong>{" "}
                      {lastUpdated}
                    </p>
                  )}
                  {effectiveDate && (
                    <p>
                      <strong className="text-white">Effective date:</strong>{" "}
                      {effectiveDate}
                    </p>
                  )}
                </div>
              )}
              <div className="prose prose-invert prose-lg max-w-none">
                {children}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h4 className="text-white font-medium mb-4">
                    Legal Documents
                  </h4>
                  <ul className="space-y-3">
                    {legalLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-light-soft hover:text-accent transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-4">Need Help?</h4>
                  <p className="text-light-soft text-sm mb-4">
                    If you have questions about our policies, please contact us.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
                  >
                    Contact Us
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
