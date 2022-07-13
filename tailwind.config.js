/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{jz,ts,jsx,tsx}",
    "./components/**/*.{jz,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColour: "rgba(128,0,128,0.8)",
      },
    },
  },
  plugins: [],
}
