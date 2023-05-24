/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 80px -40px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

