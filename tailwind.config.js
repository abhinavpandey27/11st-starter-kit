const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.md'],
  darkMode: 'media',
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      'darkbg-green': '#132E39',
      'lightbg-yellow': '#F3F3EE',
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['18px', '27px'],
      lg: ['22px', '28px'],
      xl: ['28px', '28px'],
      
    },
    fontStyle: ['hover', 'focus'],
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        dmono: ['DM Mono', ...defaultTheme.fontFamily.mono]
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
