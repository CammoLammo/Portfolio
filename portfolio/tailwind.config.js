/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    patterns: {
      opacities: {
          100: "1",
          80: ".80",
          60: ".60",
          40: ".40",
          20: ".20",
          10: ".10",
          5: ".05",
      },
      sizes: {
          1: "0.25rem",
          2: "0.5rem",
          4: "1rem",
          6: "1.5rem",
          8: "2rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          32: "8rem",
      }
    },
    extend: {
      fontFamily: {
        'body': ['Poppins', 'sans-serif']
      },
      colors: {
        'portfolio': {
          'background': "#191A19",
          'background-dark': "#171717",
          'background-light': "#232323",
          'green-dark': "#1E5128",
          'green': "#4E9F3D",
          'green-light': "#D8E9A8",
        },
      }
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns')
  ],
}

