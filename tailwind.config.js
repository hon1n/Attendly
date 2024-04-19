module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#1582FF",
          secondary: "#F0F0F0",
          black: {
            DEFAULT: "#000",
            350: "#9C9C9C",
            900: "#181818",
          }
        },
        fontFamily: {
          sfthin: ["SF-Thin", "display"],
          sfultralight: ["SF-Ultralight", "display"],
          sflight: ["SF-Light", "display"],
          sfregular: ["SF-Regular", "display"],
          sfmedium: ["SF-Medium", "display"],
          sfsemibold: ["SF-Semibold", "display"],
          sfbold: ["SF-Bold", "display"],
          sfblack: ["SF-Black", "display"],
          sfheavy: ["SF-Heavy", "display"],
        },
      },
    },
    plugins: [],
  };