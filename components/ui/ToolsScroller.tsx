'use client'

import Image from 'next/image'

const tools = [
  { name: 'Claude',     src: '/images/tools/claude.svg',     width: 100, height: 40  },
  { name: 'ChatGPT',    src: '/images/tools/chatgpt.svg',    width: 36,  height: 36  },
  { name: 'Perplexity', src: '/images/tools/perplexity.svg', width: 36,  height: 36  },
  { name: 'Notion',     src: '/images/tools/notion.svg',     width: 36,  height: 36  },
  { name: 'HubSpot',    src: '/images/tools/hubspot.svg',    width: 100, height: 30  },
  { name: 'Zapier',     src: '/images/tools/zapier.svg',     width: 80,  height: 36  },
  { name: 'Make',       src: '/images/tools/make.svg',       width: 36,  height: 36  },
  { name: 'Calendly',   src: '/images/tools/calendly.svg',   width: 36,  height: 36  },
  { name: 'Google',     src: '/images/tools/google.svg',     width: 36,  height: 36  },
]

// Duplicate for seamless loop
const track = [...tools, ...tools]

export default function ToolsScroller() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderTop:       '1px solid var(--color-border-default)',
        borderBottom:    '1px solid var(--color-border-default)',
        padding:         '1.75rem 0',
        overflow:        'hidden',
        position:        'relative',
      }}
    >
      {/* Fade masks on left and right */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          inset:      0,
          background: 'linear-gradient(to right, var(--color-bg-secondary) 0%, transparent 8%, transparent 92%, var(--color-bg-secondary) 100%)',
          zIndex:     2,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display:   'flex',
          width:     'max-content',
          animation: 'tools-scroll 32s linear infinite',
        }}
      >
        {track.map((tool, i) => (
          <div
            key={`${tool.name}-${i}`}
            style={{
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              padding:        '0 2.5rem',
              opacity:        0.5,
              transition:     'opacity 0.2s',
              flexShrink:     0,
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.opacity = '1')}
            onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.opacity = '0.5')}
          >
            <Image
              src={tool.src}
              alt={tool.name}
              width={tool.width}
              height={tool.height}
              style={{ objectFit: 'contain', height: '28px', width: 'auto' }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes tools-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .tools-scroll-track { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
