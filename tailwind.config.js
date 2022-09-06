/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px'
      },
      borderRadius: {
        '3xl': '2rem'
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif']
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightGrey: 'hsl(217, 12%, 63%)',
        mediumGrey: 'hsl(216, 12%, 54%)',
        darkBlue: 'hsl(213, 19%, 18%)',
        veryDarkBlue: 'hsl(216, 12%, 8%)',
        orange: 'hsl(25, 97%, 53%)'
      }
    }
  },
  plugins: []
}
