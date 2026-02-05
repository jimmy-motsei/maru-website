interface Props {
  params: Promise<{ partnerId: string }>
}

export default async function PartnerLandingPage(props: Props) {
  const params = await props.params;
  const partnerId = params.partnerId;

  // Capitalize for display
  const partnerName = partnerId.charAt(0).toUpperCase() + partnerId.slice(1).replace(/-/g, ' ');

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Re-using AtmosphericBackground effectively creates a consistent 'Maru' feel even on white pages 
          by adding subtle texture/glow if adapted, but here we'll stick to clean B2B as requested */}
       <div className="absolute inset-0 bg-slate-50 -z-10" />

      <section className="container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <div className="mb-8 p-4 bg-blue-50 rounded-full inline-block">
             <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Exclusive Partner Offer
             </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 max-w-4xl">
          Welcome clients of <span className="text-blue-600">{partnerName}</span>!
        </h1>

        <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
          As a valued partner of {partnerName}, you are eligible for a complimentary digital performance audit. 
          Identify hidden gaps in your marketing funnel today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <a href="https://leads.maruonline.com" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl text-lg w-full sm:w-auto">
                    Claim Your Free Digital Audit
                </button>
            </a>
        </div>
        
        <p className="mt-8 text-sm text-slate-400">
            Limited time offer for {partnerName} network.
        </p>
      </section>
    </main>
  )
}
