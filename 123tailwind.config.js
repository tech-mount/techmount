/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // No need to include "css"
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  