/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3436', // Dark gray
        secondary: '#65737E', // Sage gray
        accent1: '#A6B3B3', // Light sage
        accent2: '#D8D0C3', // Beige
        accent3: '#C0B3A3', // Warm taupe
        accent4: '#B8C5D6', // Light blue
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
