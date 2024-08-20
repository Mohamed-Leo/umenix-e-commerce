/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2b38d1",
        borderGray: "#E5E8EC",
        textPrimary: "#515d66",
      },
    },
  },
  plugins: [],
};
