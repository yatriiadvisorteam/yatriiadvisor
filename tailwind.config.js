/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "light":"#E9E8E8",
        "light-secondary":"#E9E8E8",
        "brand":"#364C63",
        "secondary":"#F3B340",
      }
    },
  },
  plugins: [],
}
