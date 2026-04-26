import Image from 'next/image'

type ImageSplitProps = {
  src: string
  alt: string
  eyebrow?: string
  heading: string
  body: string
  imagePosition?: 'left' | 'right'
  bg?: string
}

export default function ImageSplit({
  src,
  alt,
  eyebrow,
  heading,
  body,
  imagePosition = 'left',
  bg = 'var(--color-bg-canvas)',
}: ImageSplitProps) {
  const imageCol = (
    <div
      style={{
        position:     'relative',
        width:        '100%',
        aspectRatio:  '4/3',
        borderRadius: '8px',
        overflow:     'hidden',
        flexShrink:   0,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover', objectPosition: 'center top' }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )

  const textCol = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {eyebrow && (
        <span
          className="label-eyebrow"
          style={{ marginBottom: '1.25rem' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          marginBottom: '1.25rem',
          color: bg === 'var(--color-bg-navy)' || bg === 'var(--color-bg-navy-deep)'
            ? 'var(--color-ink-inverted)'
            : 'var(--color-ink-primary)',
        }}
      >
        {heading}
      </h2>
      <p
        className={
          bg === 'var(--color-bg-navy)' || bg === 'var(--color-bg-navy-deep)'
            ? 'body-on-navy'
            : 'body-muted'
        }
        style={{ marginBottom: 0, maxWidth: '520px' }}
      >
        {body}
      </p>
    </div>
  )

  return (
    <section style={{ backgroundColor: bg, padding: '0' }}>
      <div
        className="px-6 md:px-[60px] py-24"
        style={{ maxWidth: '1100px', margin: '0 auto' }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {imagePosition === 'left' ? (
            <>{imageCol}{textCol}</>
          ) : (
            <>{textCol}{imageCol}</>
          )}
        </div>
      </div>
    </section>
  )
}
