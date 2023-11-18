/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        "1-vw":"10%",
        "1.5vw":"1.5vw",
        "2-vw":"20%",
        "3-vw":"30%",
        "4-vw":"40%",
        "5-vw":"50%",
        "6-vw":"60%",
        "7-vw":"70%",
        "8-vw":"80%",
        "9-vw":"90%",
      },
    },
  },
  plugins: [],
}

