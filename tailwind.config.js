/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#4BC0AF',
        magenta: '#C82D91',
        dark: '#282828',
        cream: '#FAF9F5',
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
