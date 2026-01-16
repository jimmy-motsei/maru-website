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
        'cyan-primary': 'var(--color-cyan-primary)',
        'cyan-hover': 'var(--color-cyan-hover)',
        'accent': 'var(--color-accent)',
        'dark': 'var(--color-dark)',
      },
    },
  },
  plugins: [],
};

export default config;
