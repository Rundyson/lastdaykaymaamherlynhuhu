/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3932",
        secondary: "#F2F0EB",
        green: "#0B8751",
        lightgreen: "#F1F8F5",
        mintgreen: "#D4E9E2",
        iccolor: "#212121",
        fhover: "#9C9C9C",
        scolor: "#CBA258",
      },
      backgroundImage: {
        mobile:
          " linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),  url('../starbs/hero-mobile_2021.jpg')",
        dekstop:
          " linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),  url('../starbs/xl-hero-desktop_2021.jpg')",
        dekstop2:
          " linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),  url('../starbs/844262945b2a8b8cfb29.png')",
      },
    },
  },
  plugins: [],
};

