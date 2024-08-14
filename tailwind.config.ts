import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        bebas: '"Bebas Neue", sans-serif',
        m2: '"M PLUS 2", Helvetica, sans-serif',
      },
      colors: {
        "black-bg": "#0f0f0f",
        primary: {
          100: "hsla(350, 91%, 65%, 1)",
        },
      },
      letterSpacing: {
        8: "8px",
        12: "12px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(100vw) translateY(100vh)",
            opacity: "1",
          },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-100vw)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        meteor: "meteor 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
