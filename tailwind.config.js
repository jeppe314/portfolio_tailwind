/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        devblue: "#3e99ec",
        bracketpink: "#fc00f2",
        stringorange: "#d87832",
        intgreen: "#c5f478",
        darkgray: "#26262d",
        woodsmoke: "#17171c",
        tuna: "#2e2e38",
        gunpowder: "#444455",
      },
      fontFamily: {
        sans: ["Space Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
}
