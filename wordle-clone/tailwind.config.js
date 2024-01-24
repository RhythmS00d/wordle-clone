/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      data: {
        active: 'key~="active"',
        wrong: 'key~="wrong"',
        correct: 'key~="correct"',
      },
    },
  },
  plugins: [],
};
