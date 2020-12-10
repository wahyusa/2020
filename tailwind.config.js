const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    layers: ['components', 'utilities'],
    content: [
      "/*.html",
      "./_imports/*.html",
    ],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
      // Build your palette here
      fuchsia: colors.fuchsia,
      bluegray: colors.blueGray,
      gray: colors.gray,
    },
    },
  },
  variants: {},
  plugins: [],
};
