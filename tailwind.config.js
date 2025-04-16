/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        }
      }
    },
    fontFamily:{
      'font1':['"M PLUS 1 Code"','monospace']
    }
  },
  plugins: [],
}

