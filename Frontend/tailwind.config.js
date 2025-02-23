/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
        },
        emerald: {
          600: '#059669',
          700: '#047857',
          800: '#065F46',
        },
        blue: {
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
        },
        rose: {
          600: '#E11D48',
          700: '#BE123C',
          800: '#9F1239',
        },
        amber: {
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
        },
      },
    },
  },
  plugins: [],
} 