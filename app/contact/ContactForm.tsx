import Script from 'next/script'

export default function ContactForm() {
  return (
    <>
      <iframe
        id="jotform-enquiry"
        title="Client Enquiry Form"
        src="https://form.jotform.com/261259120322042"
        style={{
          width:     '100%',
          minHeight: '600px',
          border:    'none',
          display:   'block',
        }}
        scrolling="no"
        allowFullScreen
      />
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
        onLoad={() => {
          const w = window as Window & { jotformEmbedHandler?: (selector: string, origin: string) => void }
          if (w.jotformEmbedHandler) {
            w.jotformEmbedHandler(
              "iframe[id='jotform-enquiry']",
              "https://form.jotform.com"
            )
          }
        }}
      />
    </>
  )
}
