/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Mulish", "sans-serif"],
    },
    extend: {
      colors: {
        "teal-dark": "#088395",
        "teal-light": "#37B7C3",
        "blue-dark": "#071952",
      },
    },
  },
  plugins: [],
}

