import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        wtm: {
          light: '#4fc3f7',
          blue: '#0076cf',
          deep: '#0334ab',
          mint: '#1ce9b6',
          teal: '#00bfa5',
          dark: '#202124',
          white: '#ffffff',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
