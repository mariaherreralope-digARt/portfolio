/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      },
      colors: {
        primary: '#c13a10',
        secondary: '#f7d670',
        accent: '#fff1e0',
        dark: '#525f50',
      },
    },
},
  plugins: [],
}
