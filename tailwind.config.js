/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add these lines to include markdown and mdx files
    "./posts/**/*.{md,mdx}",
    "./content/**/*.{md,mdx}",
    "./src/**/*.{md,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
