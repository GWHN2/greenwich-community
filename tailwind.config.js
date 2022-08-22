/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d5d7e9",
          200: "#abafd3",
          300: "#8087bd",
          400: "#565fa7",
          500: "#2c3791",
          600: "#232c74",
          700: "#1a2157",
          800: "#12163a",
          900: "#090b1d",
        },
        secondary: {
          100: "#ffe1cc",
          200: "#ffc399",
          300: "#ffa566",
          400: "#ff8733",
          500: "#ff6900",
          600: "#cc5400",
          700: "#993f00",
          800: "#662a00",
          900: "#331500",
        },
      },
    },
  },
  container: {
    center: true,
  },
  plugins: [],
  variants: ["responsive"],
};
