const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    }
  },
  variants: {
    scale: ['group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
}
