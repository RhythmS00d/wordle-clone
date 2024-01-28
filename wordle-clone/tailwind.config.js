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
      },
      keyframes: {
        shake: {
          from: { rotate: "2deg" },
          to: { rotate: "-2deg" },
        },
      },
    },
  },
  plugins: [],
};
