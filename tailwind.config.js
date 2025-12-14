/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cambio-blue': '#0000FF',
        'cambio-pink': '#FF00FF',
        'cambio-yellow': '#FFD700',
      },

      // 🔥 Aquí agregamos la fuente DELA GOTHIC
      fontFamily: {
        sans: ['var(--font-inter)'], // Lo que ya tenías
        dela: ['"Dela Gothic One"', 'sans-serif'], // NUEVA fuente
      },
    },
  },
  plugins: [],
};
