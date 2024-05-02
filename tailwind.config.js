import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./.vitepress/theme/**/*.{vue,js,jsx,html}", "./**/*.{md,html}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
