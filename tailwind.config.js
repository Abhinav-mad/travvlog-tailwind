/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Palanquin', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
