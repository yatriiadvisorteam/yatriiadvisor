/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'primary': `linear-gradient(#364C63})`,
      }),
      colors:{
        light:"#E9E8E8",
      }
    },
  },
  plugins: [],
}
