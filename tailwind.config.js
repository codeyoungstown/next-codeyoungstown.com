/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cy-gray": "#222322",
        colt: "#A48C7B",
        white: "#ffffff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
