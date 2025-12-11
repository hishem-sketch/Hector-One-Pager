/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hector: {
          primary: '#DE4A00',
          dark: '#B83D00',
          light: '#FF6B2C',
          black: '#1A1A1A',
          warm: '#FDF8F5',
          gray: '#6B7280',
        }
      },
      fontFamily: {
        display: ['"Red Hat Display"', 'sans-serif'],
        body: ['"Red Hat Text"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}