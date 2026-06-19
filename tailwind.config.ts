import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F4",
        teal: {
          50: "#DDEEEE",
          100: "#C9E2E1",
          500: "#5D9C9A",
          700: "#4A7E7C",
          900: "#224947",
        },
        pearl: "#FFFDF9",
        ink: "#1F3433",
        champagne: "#D8C3A5",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      boxShadow: {
        soft: "0 22px 55px rgba(74, 126, 124, 0.16)",
        card: "0 14px 35px rgba(31, 52, 51, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
