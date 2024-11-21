/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        'quicksand-light': ['quicksand-light', 'sans-serif'],
        'quicksand-regular': ['quicksand-regular', 'sans-serif'],
        'quicksand-medium': ['quicksand-medium', 'sans-serif'],
        'quicksand-semiBold': ['quicksand-semiBold', 'sans-serif'],
        'quicksand-bold': ['quicksand-bold', 'sans-serif'],
        'inter-regular': ['inter-regular', 'sans-serif'],
        'inter-medium': ['inter-medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

