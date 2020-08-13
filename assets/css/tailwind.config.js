const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        purple: "2px 2px 8px 0px rgba(255, 51, 109, 0.7)"
      }
    }
  },
  variants: {
    scale: ['group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
}
