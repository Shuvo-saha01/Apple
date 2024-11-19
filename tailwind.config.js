// tailwind.config.js
export default {
  darkMode: 'dark',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins
      },
    },
  },
  plugins: [],
};
