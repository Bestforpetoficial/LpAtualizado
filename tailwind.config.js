/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      boxShadow: {
        'text': '5px 5px 10px black', 
      },
      rotate: {
        '360': '360deg',
      },
      boxShadow: {
        'custom': '0 4px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '5px 5px 10px black', 
        },
      });
    }
  ],
}
