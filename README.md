# A test case for `postcss-rtlcss`

## Project structure
`postcss-rtlcss-test`
   |
   |__`scss`
   |    |__`carousel.scss`
   |
   |__`index.html` (imports `index.js`)
   |__`index.js` (imports `carousel.scss`)

## Building the Project
1. `npm i` to install dependencies (`postcss`, `postcss-rtlcss`, `rtlcss`, `sass`, `vite`).
2. `npm run compile:sass` to generate a css file (`assets/css/carousel.css`) with a map.
3. `npm run rtlcss` to generate its corresponding `rtl` css file (`assets/css/carousel.rtl.css`)
4. `npm run build` to build the `vite` project and generate a dist folder and files (`dist/assets/index-[hash].css`)

### Expected
The main file to pay attention to is `assets/css/carousel.rtl.css`. This contains the RTL version of `scss/carousel.scss`. Note the fliped selectors.

### Actual
Note the file `dist/assets/index-[hash].css` that is generated at build step 4 above. This file is the intended css file to be served in production. Even with configurations added to `postcss.config.js`, the selectors are not fliped.