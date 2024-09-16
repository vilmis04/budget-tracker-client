/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-color-danger": "#ef4444",
        "app-color-background": "#16653",
      },
    },
  },
  plugins: [],
};
