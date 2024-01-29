/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      data: {
        active: 'active~="true"',
        wrong: 'wrong~="true"',
        correct: 'correct~="true"',
        error: `error~="true"`,
      },
      animation: {
        shake: "shake 100ms linear",
        alert: "alert 1500ms linear",
      },
      keyframes: {
        shake: {
          from: { rotate: "2deg" },
          to: { rotate: "-2deg" },
        },
        alert: {
          "0%": { transform: "scaleX(0)" },
          "10%": { transform: "scaleX(1)" },
          "13%": { transform: "scale(1.1)" },
          "16%": { transform: "scale(1)" },
          "55%": { transform: "scaleX(1)" },
          "65%": { opacity: "0.75" },
          "85%": { opacity: "0.45" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
