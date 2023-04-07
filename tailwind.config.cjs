/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [{ pattern: /hljs+/ }],
  theme: {
    hljs: {
      theme: "night-owl",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-highlightjs"),
  ],
};
