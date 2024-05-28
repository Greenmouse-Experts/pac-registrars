/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#202A44",
        grayPrimary: "#CDCDCD",
        grayPrimary2:"#606060",
        orangePrimary:"#F57C00",
       
      },
      backgroundImage: {
        heroImg: "url('/images/hero-1.png')",
        aboutImg: "url('/images/accordion-about.png')",
        footerImg: "url('/images/footer-bg.png')",
      },

      fontFamily: {
        syne: ["Montserrat", " sans-serif"],
        montserrat: ["Montserrat", " sans-serif"],
        sora: ["Sora"," sans-serif"],
        kaushan: ["Kaushan Script", "cursive"]
      },
    },
  },

  plugins: [],
};
