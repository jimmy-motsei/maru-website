import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors: {
        'highlight': 'var(--color-highlight)',
        'highlight-hover': 'var(--color-highlight-hover)',
        'cyan-primary': 'var(--color-cyan-primary)',
        'cyan-hover': 'var(--color-cyan-hover)',
        'accent': 'var(--color-accent)',
        'orange-accent': 'var(--color-orange-accent)',
        'dark': 'var(--color-dark)',
        'card-border': 'var(--color-card-border)',
        'electric-cyan': '#00D9FF',
        'warm-amber': '#00A1A5',
        'deep-navy': '#0A1219',
      },
      fontSize: {
        h1: ['86px', '1.2'],
        h2: ['68px', '1.2'],
        h3: ['42px', '1.2'],
        h4: ['28px', '1.2'],
        h5: ['20px', '1.5'],
        h6: ['18px', '1.5'],
      },
      spacing: {
        'section': '120px',
        'section-tab': '90px',
        'input': '70px',
        'card': '60px',         // card padding (desktop)
        'card-mobile': '32px',  // card padding (mobile) = p-8
        'container-x': '30px',  // horizontal container padding
        'grid-gap': '30px',     // standard grid gap
      },
      fontWeight: {
        'body': '300',    // base body copy weight
        'eyebrow': '500', // eyebrow / label weight
      },
      borderRadius: {
        'pill': '70px',
      },
    },
  },
  plugins: [],
};

export default config;
