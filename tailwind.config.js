/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        lightPurple: "#393F6E",
        darkPurple: "#343964",
      },
      fontSize: {
        mediumm: "1.5rem",
        semiboldd: "1.25rem",
        semiboldmediumm: "1rem",
        boldd: "0.875rem",
      },
      colors: {
        primary: "#373d6d",
        secondary: "#343963",
      },
      backgroundImage: {
        activeGradient: "linear-gradient(#E65895, #BC6BE8)",
      },
    },
  },
  plugins: [],
};
