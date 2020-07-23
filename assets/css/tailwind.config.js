const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        handwriting: ["Sriracha", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        rose: {
          "400": "#B47E7E",
          "600": "#A57070",
          "800": "#7a4848",
        },
        shell: {
          "100": "#FDF6ED",
          "200": "#FBEDDA",
          "300": "#FBEDDA",
          "400": "#F7DBB6",
          "500": "#F5D1A3",
          "600": "#F3C891",
          "700": "#F1BF7E",
          "800": "#EFB66C",
          "900": "#EDAD5A",
          "1700": "#372506",
          "1800": "#251704",
          "1900": "#120C02"
        },
        coffee: {
          "100": "#F8F6F1",
          "200": "#EAE5D6",
          "300": "#DCD4BC",
          "400": "#CEC3A1",
          "500": "#C0B187",
          "600": "#B29F6C",
          "700": "#A08C54",
          "800": "#867546",
          "900": "#6B5D38",
          "1000": "#50462A",
          "1100": "#352F1C",
          "1200": "#1B180E",
        }
      },
      maxWidth: {
        "7xl": "80rem",
        "8xl": "88rem"
      }
    }
  },
  variants: {},
  plugins: []
}
