'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value.trim(),
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem('company') as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
    }

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })

      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMsg(json.error || 'Something went wrong. Please try again.')
        setState('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setState('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width:           '100%',
    fontFamily:      'var(--font-body)',
    fontSize:        'var(--text-body)',
    fontWeight:      300,
    color:           'var(--color-ink-primary)',
    backgroundColor: 'transparent',
    border:          'none',
    borderBottom:    '1px solid var(--color-border-default)',
    borderRadius:    0,
    padding:         '0.625rem 0',
    outline:         'none',
    transition:      'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily:    'var(--font-body)',
    fontSize:      'var(--text-label)',
    fontWeight:    500,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase' as const,
    color:         'var(--color-ink-tertiary)',
    display:       'block',
    marginBottom:  '0.5rem',
  }

  const fieldStyle: React.CSSProperties = {
    display:       'flex',
    flexDirection: 'column',
  }

  if (state === 'success') {
    return (
      <div
        style={{
          padding:      '2.5rem',
          borderRadius: '8px',
          border:       '1px solid var(--color-cyan)',
          backgroundColor: 'var(--color-cyan-light)',
          textAlign:    'center',
        }}
      >
        <p
          style={{
            fontFamily:  'var(--font-display)',
            fontSize:    'var(--text-h3-serif)',
            fontWeight:  400,
            color:       'var(--color-navy)',
            marginBottom: '0.5rem',
          }}
        >
          Message sent.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize:   'var(--text-body)',
            fontWeight: 300,
            color:      'var(--color-ink-secondary)',
            margin:     0,
          }}
        >
          We'll be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Name + Email row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="grid-cols-contact">
        <div style={fieldStyle}>
          <label htmlFor="cf-name" style={labelStyle}>Full name *</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            disabled={state === 'submitting'}
            style={inputStyle}
            onFocus={e  => (e.currentTarget.style.borderBottomColor = 'var(--color-cyan)')}
            onBlur={e   => (e.currentTarget.style.borderBottomColor = 'var(--color-border-default)')}
          />
        </div>
        <div style={fieldStyle}>
          <label htmlFor="cf-email" style={labelStyle}>Email address *</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="you@yourbusiness.co.za"
            disabled={state === 'submitting'}
            style={inputStyle}
            onFocus={e  => (e.currentTarget.style.borderBottomColor = 'var(--color-cyan)')}
            onBlur={e   => (e.currentTarget.style.borderBottomColor = 'var(--color-border-default)')}
          />
        </div>
      </div>

      {/* Company */}
      <div style={fieldStyle}>
        <label htmlFor="cf-company" style={labelStyle}>Company <span style={{ color: 'var(--color-ink-tertiary)', fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
        <input
          id="cf-company"
          name="company"
          type="text"
          placeholder="Your business name"
          disabled={state === 'submitting'}
          style={inputStyle}
          onFocus={e  => (e.currentTarget.style.borderBottomColor = 'var(--color-cyan)')}
          onBlur={e   => (e.currentTarget.style.borderBottomColor = 'var(--color-border-default)')}
        />
      </div>

      {/* Message */}
      <div style={fieldStyle}>
        <label htmlFor="cf-message" style={labelStyle}>Message *</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about your business, the problem you're trying to solve, and your timeline."
          disabled={state === 'submitting'}
          style={{
            ...inputStyle,
            borderBottom: 'none',
            border:       '1px solid var(--color-border-default)',
            borderRadius: '8px',
            padding:      '0.75rem 1rem',
            resize:       'vertical',
          }}
          onFocus={e  => (e.currentTarget.style.borderColor = 'var(--color-cyan)')}
          onBlur={e   => (e.currentTarget.style.borderColor = 'var(--color-border-default)')}
        />
      </div>

      {/* Error message */}
      {state === 'error' && (
        <p
          style={{
            fontFamily:      'var(--font-body)',
            fontSize:        'var(--text-meta)',
            fontWeight:      400,
            color:           '#C0392B',
            backgroundColor: '#FDECEA',
            border:          '1px solid #F5C6C2',
            borderRadius:    '6px',
            padding:         '0.75rem 1rem',
            margin:          0,
          }}
        >
          {errorMsg}
        </p>
      )}

      {/* Submit row */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Button
          type="submit"
          variant="primary"
          disabled={state === 'submitting'}
        >
          {state === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize:   'var(--text-meta)',
            fontWeight: 300,
            color:      'var(--color-ink-tertiary)',
            margin:     0,
          }}
        >
          Handled in compliance with POPIA. We'll respond within one business day.
        </p>
      </div>
    </form>
  )
}
