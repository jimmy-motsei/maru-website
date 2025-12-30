'use client';

import React from 'react';

export default function TableOfContents({ items }: { items: any[] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="text-sm">
      <h3 className="font-semibold mb-2">On this page</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="pl-2 border-l-2 border-slate-200">
            <a href={`#${item.id}`} className="text-slate-600 hover:text-slate-900">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
