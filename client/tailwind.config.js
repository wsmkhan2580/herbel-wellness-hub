/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'ui-serif', 'serif'],
        serif: ['Georgia', 'ui-serif', 'serif']
      },
      colors: {
        brand: {
          dark: '#173f2f',
          dark2: '#1f4a38',
          cream: '#f6f1e2',
          creamCard: '#f0e8d2',
          gold: '#c9963f',
          goldDark: '#b9812e',
          goldLight: '#e4c98a'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(23, 63, 47, 0.10)',
        card: '0 10px 35px rgba(23, 63, 47, 0.10)'
      }
    }
  },
  plugins: []
};
