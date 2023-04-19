/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '468px',
      sd: '768px',
      md: '991px',
      lg: '1200px',
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
