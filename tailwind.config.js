/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vt-black': '#080808',
        'vt-dark': '#0a0a0a',
        'vt-charcoal': '#111111',
        'vt-card': '#141414',
        'vt-silver': '#a0a0a0',
        'vt-chrome': '#e8e8e8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
