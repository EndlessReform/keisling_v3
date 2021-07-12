module.exports = {
   purge: [
     './src/**/*.html',
     './src/**/*.js',
   ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors: {
        black: "#231F20",
        white: {
          DEFAULT: "#FCFCF6",
          dark: "#FAF0F5",
        },
        gray: "#75787D",
        blue: "#1D64CC",
        green: "#377765",
        orange: "#F49B7F",
        yellow: "#F8E16C",
        purple: "#BBADFF",
        red: "#DA2C38",
      },
      fontFamily: {
        sans: ['Basier Circle', 'sans-serif'],
        mono: ['Basier Circle Mono', 'monospace'],
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "800px",
          xl: "1024px"
        }
      },
      extend: {},
    },
    variants: {},
    plugins: [],
  }