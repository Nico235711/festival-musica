const { src, dest, watch, series } = require("gulp") 
const sass = require('gulp-sass')(require('sass'))
const imagemin = require("gulp-imagemin")
// const webp = require("gulp-webp")

const concat = require("gulp-concat")

// utilidades CSS
const autoprefixer = require("autoprefixer")
const postcss = require("gulp-postcss")
const cssnano = require("cssnano")
const sourcemaps = require("gulp-sourcemaps")

// utilidades JS
const terser = require("gulp-terser-js")
const rename = require("gulp-rename")

const paths = {
  scss: "src/scss/**/*.scss",
  img: "src/img/**/*",
  js: "src/js/**/*.js"
}

const build = {
  css: "dist/css",
  img: "dist/img",
  js: "dist/js"
}

function css() {
  return src( paths.scss )
    .pipe( sourcemaps.init() )
    .pipe( sass() )
    .pipe( postcss( [autoprefixer(), cssnano()] ))
    .pipe( sourcemaps.write(".") )
    .pipe( dest(build.css) )
}

function javascript() {
  return src( paths.js )
    .pipe( sourcemaps.init() )
    .pipe( concat("bundle.js") )
    .pipe( terser() )
    .pipe( sourcemaps.write(".") )
    .pipe( rename({ suffix: ".min" }) )
    .pipe( dest(build.js) )
}

function minificarImagenes() {
  return src( paths.img )
    .pipe( imagemin() )
    .pipe( dest(build.img) )
}

// function versionWebp() {
//   return src( paths.img )
//     .pipe( webp() )
//     .pipe( dest(build.img) )
// }

function watchFiles() {
  watch( paths.scss, css )
  watch( paths.js, javascript )
}

exports.minificarImagenes = minificarImagenes;

exports.default = series(css, javascript, watchFiles);