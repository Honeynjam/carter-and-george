const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["proxima-nova", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      button: [
        "16px",
        {
          lineHeight: "150%",
          letterSpacing: "2%",
        },
      ],
      eyebrow: [
        "16px",
        {
          lineHeight: "100%",
          letterSpacing: "2%",
        },
      ],
      smaller: ["14px", "150%"],
      small: ["16px", "150%"],
      normal: ["18px", "150%"],
      md: ["20px", "150%"],
      lg: ["24px", "120%"],
      xl: ["30px", "120%"],
      "2xl": ["36px", "120%"],
      "3xl": ["48px", "110%"],
      "4xl": ["60px", "110%"],
      "5xl": ["72px", "110%"],
      "6xl": ["84px", "120%"],
      "7xl": ["96px", "120%"],
      number: ["24px", "100%"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#0A0A0A",
      white: "#ffffff",
      //
      blue: {
        DEFAULT: "#00A9E0",
      },
      // text
      gray: {
        primary: "#272724",
        secondary: "#595959",
        tertiary: "#A5A5A5",
        "secondary-alternate": "#C4C4C4",
        "tertiary-alternate": "#A5A5A5",
      },
      // stroke
      "stroke-light": "#CCCCCC",
      "stroke-dark": "#A5A5A5",
      // bg
      stone: "#FAF9F8",
    },
    borderRadius: {
      DEFAULT: "3px",
      full: "9999px",
    },
    extend: {
      transitionTimingFunction: {
        custom: "cubic-bezier(.1,.6,.4,1)",
      },
      spacing: {
        xs: "0.25rem",
        mini: "0.5rem",
        small: "1rem",
        "in-between": "1.25rem",
        normal: "1.5rem",
        medium: "2rem",
        large: "3rem",
        "side-padding": "4rem",
        xl: "5rem",
        "2xl": "7rem",
        "3xl": "10rem",
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
