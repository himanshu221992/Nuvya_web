import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFFFF",
        blush: "#FFF1F8",
        skybaby: "#ECF9FF",
        mintbaby: "#F0FFF7",
        lavenderbaby: "#F7F2FF",
        cocoa: "#243041",
        peach: "#FFF3EC",
        brandPink: "#D83A8C",
        brandDark: "#073B4C"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;