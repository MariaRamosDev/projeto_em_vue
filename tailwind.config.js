/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {},
    colors: {
      text: "#fff1f2",
      background: "#881337",
      header: "#fda4af",
      image: "#fecdd3",
    },
    fontFamily: {
      roboto: "Roboto Slab",
    },
  },
  plugins: [],
};
