import { randomUUID } from 'node:crypto'

// The editorial section shape shared by the legacy articles and the bot output.
export type ArticleSection = {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'callout' | 'quote'
  text?: string
  items?: string[]
  label?: string
}

type PTSpan = { _type: 'span'; _key: string; text: string; marks: string[] }
type PTBlock = {
  _type: 'block'
  _key: string
  style: string
  markDefs: []
  listItem?: 'bullet'
  level?: number
  children: PTSpan[]
}

const key = () => randomUUID().slice(0, 12)

function span(text: string): PTSpan {
  return { _type: 'span', _key: key(), text, marks: [] }
}

function block(style: string, text: string, listItem?: 'bullet'): PTBlock {
  return {
    _type: 'block',
    _key: key(),
    style,
    markDefs: [],
    ...(listItem ? { listItem, level: 1 } : {}),
    children: [span(text)],
  }
}

/** Convert editorial Section[] content into Sanity Portable Text blocks. */
export function sectionsToPortableText(sections: ArticleSection[]): PTBlock[] {
  const out: PTBlock[] = []
  for (const s of sections) {
    switch (s.type) {
      case 'paragraph':
        if (s.text) out.push(block('normal', s.text))
        break
      case 'heading':
        if (s.text) out.push(block('h2', s.text))
        break
      case 'subheading':
        if (s.text) out.push(block('h3', s.text))
        break
      case 'list':
        for (const item of s.items ?? []) out.push(block('normal', item, 'bullet'))
        break
      case 'callout':
        out.push(block('blockquote', [s.label, s.text].filter(Boolean).join(' — ')))
        break
      case 'quote':
        if (s.text) out.push(block('blockquote', s.text))
        if (s.label) out.push(block('normal', s.label))
        break
    }
  }
  return out
}
