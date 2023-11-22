/** @type {import('tailwindcss').Config} */
/*eslint no-undef: "error"*/
/*eslint-env node*/
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
