// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F4EF",
        pinkLight: "#FFBBCB",
        purpleLight: "#DFBACD",
        coral: "#FF5E43",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        orelega: "var(--font-orelega)",
        grandstander: "var(--font-grandstander)",
      },
    },
  },
  plugins: [],
};
