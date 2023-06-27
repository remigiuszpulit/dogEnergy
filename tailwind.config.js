/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      brightness: {
        19: '.19',
        175: '1.75',
      },
      minHeight: {
        800: '800px',
      },
      height: {
        800: '800px',
        400: '400px',
      }
    },
  },
  plugins: [],
}
