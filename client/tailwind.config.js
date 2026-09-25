/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'ui-serif', 'serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(22, 70, 46, 0.10)',
        card: '0 10px 35px rgba(17, 58, 39, 0.08)'
      }
    }
  },
  plugins: []
};
