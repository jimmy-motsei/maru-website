# Maru Online Website

> **Maru System** · Domain: **Consultancy** · Status: 🟢 **live** (maruonline.com)
> See [`MARU-SYSTEM.md`](MARU-SYSTEM.md) for the full map of all Maru repos.

Modern marketing website for Maru Online, built with Next.js, React, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 16.0.6 (App Router)
- **React:** 19.2.0
- **Styling:** Tailwind CSS v4 (beta)
- **Animations:** Framer Motion 12.23.25
- **Icons:** Lucide React
- **TypeScript:** 5.x
- **Deployment:** Vercel (recommended)

## 📁 Project Structure

```
maru-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Tailwind v4 global styles
│   ├── sitemap.ts         # Dynamic sitemap generator
│   ├── robots.ts          # Dynamic robots.txt generator
│   ├── services/          # Service pages
│   ├── knowledge/         # Blog/knowledge base
│   └── contact/           # Contact page
├── components/            # React components
│   ├── layout/           # Header, Footer, etc.
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   ├── ui/               # Reusable UI components
│   └── services/         # Service-specific components
├── lib/                  # Utility functions
├── config/               # Site configuration
├── data/                 # Static data (articles, etc.)
├── public/               # Static assets (images, fonts)
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server runs at [http://localhost:3000](http://localhost:3000)

## 🎨 Styling

This project uses **Tailwind CSS v4** (beta) with a custom theme defined in `app/globals.css`.

### Custom Theme

```css
@theme {
  /* Brand Colors */
  --color-accent: #3db8c6;        /* Maru Cyan */
  --color-dark: #000000;
  --color-light: #ffffff;
  
  /* Custom shadows */
  --shadow-neon-cyan: 0 0 5px #00f0ff, 0 0 20px rgba(0, 240, 255, 0.4);
}
```

### Animations

Custom animations are defined in `globals.css`:
- `fadeUp` - Fade in with upward motion
- `infiniteScroll` - Continuous horizontal scroll
- `rotate` - 360° rotation
- `float` - Gentle floating effect

## 📄 Pages

- `/` - Homepage
- `/services` - Services overview
- `/services/lead-generation` - Lead generation service
- `/services/office-automation` - Office automation service
- `/services/sales-systems` - Sales systems service
- `/services/whatsapp-solutions` - WhatsApp solutions service
- `/knowledge` - Knowledge base / blog
- `/contact` - Contact page
- `/privacy-policy` - Privacy policy
- `/ai-readiness` - AI readiness assessment

## 🔍 SEO

### Sitemap

Dynamic sitemap automatically generated at `/sitemap.xml` via `app/sitemap.ts`. Updates automatically when pages are added.

### Robots.txt

Dynamic robots.txt at `/robots.txt` via `app/robots.ts`.

### Metadata

Each page includes proper metadata (title, description, Open Graph tags) configured in the page's `metadata` export.

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

No environment variables required for basic functionality. Add as needed for:
- Analytics
- HubSpot integration
- Other third-party services

## 📝 Content Management

### Adding a New Blog Article

1. Create a new folder in `app/knowledge/[article-slug]/`
2. Add `page.tsx` with article content
3. Update `data/articles.ts` with article metadata
4. Run build to update sitemap automatically

### Adding a New Service

1. Create new folder in `app/services/[service-name]/`
2. Add `page.tsx` with service content
3. Update `app/sitemap.ts` to include the new route
4. Add service to navigation in `components/layout/Header.tsx`

## 🧹 Recent Updates

- ✅ Restructured from nested `maru-next/` to root-level Next.js project
- ✅ Removed legacy SCSS files (now using Tailwind v4 exclusively)
- ✅ Replaced static sitemaps with dynamic Next.js generation
- ✅ Removed outdated documentation files
- ✅ Updated TypeScript path aliases from `./src/*` to `./*`

## 📦 Dependencies

### Production
- `next` - React framework
- `react` & `react-dom` - UI library
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `clsx` & `tailwind-merge` - Class name utilities

### Development
- `typescript` - Type safety
- `tailwindcss` - CSS framework
- `@tailwindcss/postcss` - Tailwind v4 PostCSS plugin
- `prettier` - Code formatting
- `eslint-config-next` - Linting

## 🤝 Contributing

This is a private project for Maru Online. For questions or issues, contact the development team.

## 📄 License

Proprietary - All rights reserved by Maru Online
