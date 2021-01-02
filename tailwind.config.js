const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: {
    layers: ["utilities"],
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        serif: ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        "570px": "570px",
      },
    },
  },
  variants: {},
  plugins: [],
}
