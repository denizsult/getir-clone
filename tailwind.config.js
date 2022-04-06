module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
   
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '640px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1350px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    letterSpacing: {
      tightest: '-0.08em',
    },
    fontFamily: {
      standart: ["Open Sans", "Helvetica Neue", 'Helvetica', 'Arial', "sans-serif"]
    },
    extend: {
      backgroundImage: {
        slider1: "url(./src/assets/images/slider/slider-1.jpg)",
        slider2: "url(./src/assets/images/slider/slider-2.jpg)",
        slider3: "url(./src/assets/images/slider/slider-3.jpg)",
        card: "url(./src/assets/images/card-cover.png)",
      },

      colors: {
        sinkWhite: 'rgb(219, 219, 255)',
        primary: '#5d3ebc',
        primarySmooth: 'rgb(93, 62, 188)',
        primarySmoothBg: 'rgb(93, 62, 188, 0.2)',
        brandYellow: 'rgb(255, 211, 0)',
        topBar: 'rgb(76, 51, 152)',
        greyDark: '#3e3e3e'
      }
    },
  },

}