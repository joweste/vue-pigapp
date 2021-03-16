// const colors = require("tailwindcss/colors");
module.exports = {
  purge: [
    { mode: "layers" },
    { content: ["./public/**/*.html", "./src/**/*.vue"] },
  ],
  darkMode: false, // or 'media' or 'class'
  // theme: {
  //   extend: {},
  // },
  theme: {
    extend: {
      colors: {
        primaria: "#17A8E6",
        rosa: "#F4AE97",
        yellow: "#FFCF5C",
        red: "#FF647C",
        green: "#00C48C",
        info: "#356EFF",
        black: "#151522",
        black_2: "#333333",
        black_3: "#666666",
        cinza: "#999999",
        cinza_claro: "#E4E4E4",
        branco: "#FFFFFF",
        degrade_rose_i: "#F4AE97",
        degrade_rose_f: "#F7D4CA",
        degrade_azul_i: "#62E0E7",
        degrade_azul_f: "#17A8E6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
