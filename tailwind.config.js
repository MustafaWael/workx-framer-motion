/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: "'Roboto', sans-serif",
    },

    colors: {
      orange: "hsl(23.05deg 83.89% 58.63%)",
      "orange-100": "#fff2e9",
      gray: "hsl(253.85deg 8.07% 31.57%)",
      DarkSlateGrey: "hsl(248deg 20.55% 14.31%)",
      darkblue: "hsl(243.53deg 22.08% 15.1%)",
      lightblue: " hsl(217.5deg 66.67% 92.94%)",
      floralwhite: "hsl(34, 100%, 94.12%)",
      lemonChiffon: "hsl(24.55deg 100% 95.69%)",
      white: "#FFF",
    },
  },
  plugins: [],
};
