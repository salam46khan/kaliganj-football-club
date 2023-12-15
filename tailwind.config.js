/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NormalText: ['Jost', 'sans-serif'],
        TitleText: ['Prompt', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

