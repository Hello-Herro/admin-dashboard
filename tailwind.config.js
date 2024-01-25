/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "admin-html/dashboard.html",
    "src/js/script.js",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        fontFamily: {
          inter: ["'Inter'", "sans-serif"],
        },
        backgroundImage: {
          "select-arrow":
            'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTExLjk5OTcgMTMuMTcxNEwxNi45NDk1IDguMjIxNjhMMTguMzYzNyA5LjYzNTg5TDExLjk5OTcgMTUuOTk5OUw1LjYzNTc0IDkuNjM1ODlMNy4wNDk5NiA4LjIyMTY4TDExLjk5OTcgMTMuMTcxNFoiIGZpbGw9InJnYmEoMTU2LDE2MywxNzUsMSkiPjwvcGF0aD48L3N2Zz4=")',
        },
      },
    },
    container: {
      center: true,
      padding: "50px",
    },
    extend: {
      colors: {
        primary: "#94a3b8",
        secondary: "#94a3b8",
        tertiary: "#64748b",
        white: "#cbd5e1",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), "@tailwindcss/typography", "@tailwindcss/aspect-ratio"],
};
