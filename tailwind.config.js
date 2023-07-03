/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      pureWhite: "hsl(0,0%,100%)",
      mainColor: "hsl(0, 97%, 63%)",
      mainBlue: "hsl(223, 30%, 9%)",
      secBlue: "hsl(223,36%,14%)",
      lightBlue: "hsl(223, 23%, 46%)",
    },
    fontSize: {
      HeadingL: [
        "32px",
        {
          fontWeight: "300",
          letterSpacing: "-0.5px",
        },
      ],
      HeadingM: [
        "24px",
        {
          fontWeight: "300",
        },
      ],
      HeadingS: [
        "24px",
        {
          fontWeight: "500",
        },
      ],
      HeadingXS: [
        "18px",
        {
          fontWeight: "500",
        },
      ],
      BodyM: [
        "15px",
        {
          fontWeight: "300",
        },
      ],
      BodyS: [
        "13px",
        {
          fontWeight: "300",
        },
      ],
    },
  },
  plugins: [],
};
