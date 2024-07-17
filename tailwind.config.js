/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose50: 'hsl(20, 50%, 98%)',
        rose100: 'hsl(13, 31%, 94%)',
        rose300: 'hsl(14, 25%, 72%)',
        rose400: 'hsl(7, 20%, 60%)',
        rose500: 'hsl(12, 20%, 44%)',
        rose900: 'hsl(14, 65%, 9%)',
        redGiven: 'hsl(14, 86%, 42%)',
        greenGiven: 'hsl(159, 69%, 38%)',
      },

      fontFamily: {
        'red-hat-text': '"Red Hat Text", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      },

      keyframes: {
        'loading': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },

      animation: {
        'load-1': 'loading 1s ease-in-out infinite',
        'load-2': 'loading 1s ease-in-out 0.2s infinite',
        'load-3': 'loading 1s ease-in-out 0.4s infinite'
      }
    },
  },
  plugins: [],
}

