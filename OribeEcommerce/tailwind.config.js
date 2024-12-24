/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        area: 'w-[1604px]',
      },
      fontFamily: {
        'DM': ['DM Sans', 'serif', ]
        
      },
      colors: {
        'primary': '#262626',
      },
    },
  },
  plugins: [],
}