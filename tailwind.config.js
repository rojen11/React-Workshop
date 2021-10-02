module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: "#1D1D26",
        primary: "#FFADC4",
        background: "#181820",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
