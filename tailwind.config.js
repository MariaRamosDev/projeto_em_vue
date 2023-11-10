/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      text: "#fff1f2",
      background: "#881337",
      header: "#fecdd3",
      image: "#fecdd3",
    },
    fontFamily: {
      roboto: "Roboto Slab",
    },
  },
  plugins: [],
};
