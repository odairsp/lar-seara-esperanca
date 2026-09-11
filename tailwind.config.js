/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        alvorada: "#EEF2F5",
        papel: "#FBFAF7",
        tinta: "#1B2E3E",
        vela: "#C7982E",
        "vela-suave": "#E4C878",
        bruma: "#7D8E9B",
        noite: "#0F1D28",
        "noite-2": "#16283A",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.045)", opacity: "0.7" },
        },
      },
      animation: {
        breathe: "breathe 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
