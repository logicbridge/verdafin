export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
      colors: {
        white: "#FFFFFF",
        offwhite: "#FDFDFD",
        softwhite: "#FCF9F9",

        black: "#000000",
        "black-muted": "rgba(0,0,0,0.3)",

        text: {
          primary: "#5F5858",
          secondary: "#707070",
          muted: "#777777",
        },

        brand: {
          blue: "#1683F4",
          green: "#30C142",
          greenLight: "#45D367",
          greenSoft: "#60D97D",
        },
      },
    },
  },
  plugins: [],
}
