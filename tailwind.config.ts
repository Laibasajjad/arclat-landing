import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      burgundy: "#6D1F3B",
      burgundyDark: "#53172D",
      cream: "#F9F4EF",
      gold: "#C8A45C",
      charcoal: "#2C2C2C",
    },
      fontFamily: {
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        body: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
