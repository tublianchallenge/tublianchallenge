/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'space-grotesk': ['Space Grotesk', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {}
  },
  plugins: []
};