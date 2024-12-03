module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths if necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }), // Add this plugin
  ],
};
