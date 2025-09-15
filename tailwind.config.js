/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bright: "#D2B0FF",
          light: "#B09AFF",
          DEFAULT: "#9683EC",
          dark: "#5F61BB",
          deep: "#343E92",
        },
        light: {
          DEFAULT: "#FBFBFB",
          soft: "#D0D0D0",
          dark: "#808080",
        },
        dark: {
          soft: "#232323",
          DEFAULT: "#191919",
          deep: "#101010",
        },
      },
    },
  },
  plugins: [],
}
