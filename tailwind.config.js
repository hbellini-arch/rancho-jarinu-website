/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#a4530c",
        "primary-dark": "#823e00",
        "primary-container": "#ffdcc7",
        "secondary": "#506350",
        "secondary-dark": "#384b39",
        "secondary-container": "#d2e9d0",
        "sage": "#8da28c",
        "espresso": "#3a230a",
        "espresso-dark": "#241607",
        "espresso-card": "#2e1c09",
        "warm-cream": "#eee9c1",
        "linen-border": "#e3dec0",
        "surface": "#fff8f5",
        "surface-container-low": "#fff1e7",
        "surface-container": "#ffeada",
        "on-surface": "#2b1702",
        "on-surface-variant": "#554338",
        "outline-variant": "#dbc2b3"
      },
      fontFamily: {
        headline: ["Newsreader", "serif"],
        display: ["Newsreader", "serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}
