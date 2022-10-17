/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "pink-soft":"#FEF4F4",
        "gary-soft":"#f1f5f9s"
      }
    },
    container:{
      padding:"2em",
      center:true
    },
    screens:{
      sm:"640px",
      md:"768px",
      lg:"1024px",
      xl:"1280px"
    }
  },
  plugins: [],
}