import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - beige, yellow, greys with burgundy highlights
        beige: {
          50: "#faf8f5",
          100: "#f5f0e8",
          200: "#ebe0d0",
          300: "#dccbb0",
          400: "#c9af8a",
          500: "#b89668",
          DEFAULT: "#f5f0e8",
        },
        burgundy: {
          DEFAULT: "#722F37",
          light: "#8B3A44",
          dark: "#5C262D",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#D4B23E",
          dark: "#A88620",
        },
        grey: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
