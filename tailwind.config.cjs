/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        plusjakartasans: ["Plus Jakarta Sans"],
      },
      colors: {
        "very-light-grayish-blue": "hsl(210, 60%, 98%)",
        "light-grayish-blue-1": "hsl(211, 68%, 94%)",
        "light-grayish_blue-2": "hsl(205, 33%, 90%)",
        "grayish-blue": "hsl(219, 14%, 63%)",
        "dark-grayish-blue": "hsl(219, 12%, 42%)",
        "very-dark-blue": "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
