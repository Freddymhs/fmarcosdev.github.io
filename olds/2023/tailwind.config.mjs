/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      green: "#095957",
      yellow: "#F1DE63",
      black: "#252830",
      white: "#eff3f4",
    },
    fontFamily: {
      //   sans: ["Graphik", "sans-serif"],
      //   serif: ["Merriweather", "serif"],
    },
    extend: {
      //   spacing: {
      //     "8xl": "96rem",
      //     "9xl": "128rem",
      //   },
      //   borderRadius: {
      //     "4xl": "2rem",
      //   },
    },
  },
  plugins: [],
};
// ******** primary element colors
// DFD829 yellow  | background
// 252830  252830  | items
// * hover
/////////// eff3f4  eff3f4  | text
/////////// 252830  252830  | background
// 095957 green   | text o relevant things
