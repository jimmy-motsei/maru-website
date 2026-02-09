'use client';

import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  text?: string;
  title?: string;
  level: number;
}

interface TableOfContentsProps {
  items?: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [tocItems, setTocItems] = useState<TOCItem[]>(items || []);

  useEffect(() => {
    if (!items || items.length === 0) {
      // Auto-generate from headings
      const headings = document.querySelectorAll('h2, h3');
      const generated: TOCItem[] = [];
      headings.forEach((heading, index) => {
        const id = heading.id || `heading-${index}`;
        if (!heading.id) heading.id = id;
        generated.push({
          id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName[1])
        });
      });
      setTocItems(generated);
    }
  }, [items]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0% -80% 0%' }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  if (tocItems.length === 0) return null;

  return (
    <nav className="sticky top-24 p-4 bg-card-dark border border-white/10 rounded-xl">
      <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">On this page</h4>
      <ul className="space-y-2">
        {tocItems.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
            <a
              href={`#${item.id}`}
              className={`text-sm transition-colors ${
                activeId === item.id
                  ? 'text-[var(--color-cyan-primary)] font-medium'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {item.text || item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
