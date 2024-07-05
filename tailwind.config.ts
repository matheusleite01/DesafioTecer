import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      background: "#F8F8F8",
      gray: "#DFDFDF",
      purple: "#A51A7D",
      green: "#04C012",
      black: "#302F2B",
      dsLogo: "#7e22ce",
      borderGray: "#9C9C9C",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.5rem",
      base: "1rem",
      xl: "1.25rem",
      xll: "2.5rem"
    },
    height: {
      "128": "32.5rem",
    },
  },
  plugins: [],
};
export default config;
