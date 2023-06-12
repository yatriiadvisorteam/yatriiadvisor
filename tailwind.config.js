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
        "secondary":"#FFFFFF",
        "extra":"#F02222",
        "unkown":"#F3B340",
        "br":"#F3B340",
        "button":"#364C63",
        "frame":"#F2F2F2",
        "black":"#000000",
        "hover":"#FFB950"
        
      }
    },
  },
  plugins: [],
}

