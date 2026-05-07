'use client'

import { useEffect } from 'react'

export default function ContactForm() {
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (typeof e.data !== 'string') return
      try {
        const data = JSON.parse(e.data)
        if (data.action === 'setHeight' && data.formID === '261259120322042') {
          const iframe = document.getElementById('jotform-enquiry') as HTMLIFrameElement
          if (iframe) iframe.style.height = `${data.value}px`
        }
      } catch {}
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  return (
    <iframe
      id="jotform-enquiry"
      title="Client Enquiry Form"
      src="https://form.jotform.com/261259120322042"
      style={{
        width:     '100%',
        minHeight: '600px',
        height:    '600px',
        border:    'none',
        display:   'block',
      }}
      allow="geolocation; microphone; camera"
      allowFullScreen
    />
  )
}
