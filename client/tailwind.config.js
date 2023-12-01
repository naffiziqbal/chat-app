/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      text: "#000000",
      base: "#ffffff",
      background: "#f2f7f4",
      primary: "#5c9976",
      secondary: "#cfe2d7",
      accent: "#568f6f",
    },
  },
};
