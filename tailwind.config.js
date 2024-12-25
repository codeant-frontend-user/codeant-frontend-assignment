/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-active":
          "0px 1px 2px 0px rgba(10, 13, 18, 0.05), 0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset, 0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset",
        "custom-xs": "0px 1px 2px 0px rgba(10, 13, 18, 0.05)",
        "inner-border": "inset 0px 0px 0px 1px rgba(10, 13, 18, 0.04)",
      },
    },
  },
  plugins: [],
};
