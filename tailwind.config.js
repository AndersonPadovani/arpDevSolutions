/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-text": "#438cbd",
        "color-text-error": "#ca3b3b",

        "color-background": "#5dade2",

        "color-background-black": "#00000080",
      },
    },
    screens: {
      phone: "640px",
      // => @media (min-width: 640px) { ... }

      tablet: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
