import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F7F2",
        charcoal: "#333333",
        ink: "#1F1D1A",
        bone: "#EFE9DF",
        linen: "#F4EFE6",
        moss: "#7D8464",
        brass: "#A88454",
        clay: "#B66A50"
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        editorial: "0 24px 80px rgba(51, 51, 51, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
