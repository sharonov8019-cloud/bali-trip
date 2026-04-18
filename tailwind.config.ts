import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Тропическая палитра
        bg: "#FAF6EE",           // песочный фон
        card: "#FFFFFF",
        ink: "#1F2A2E",          // основной текст
        ink2: "#5C6A6F",         // вторичный
        jungle: "#2F6F4F",       // зелень
        ocean: "#1C6B8C",        // вода
        sunset: "#E0653A",       // закат
        coral: "#E97A6F",
        gold: "#D9A441",
        line: "#E6DFCF",
      },
      boxShadow: {
        card: "0 1px 2px rgba(31,42,46,0.06), 0 8px 24px rgba(31,42,46,0.06)",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Inter", "SF Pro Text", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
