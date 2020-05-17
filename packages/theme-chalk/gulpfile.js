'use strict'
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const postcss = require('gulp-postcss')
const stylus = require('gulp-stylus')
const pxToUnits = require('postcss-px2units')
const pxToViewPort = require('postcss-px-to-viewport')
const cssnano = require('cssnano')
const presetenv = require('postcss-preset-env')
const rename = require('gulp-rename')
const toBem = require('postcss-bem-fix')
let bemConfig = {
  shortcuts: {
    component: 'b',
    modifier: 'm',
    descendent: 'e'
  },
  separators: {
    descendent: '__',
    modifier: '--'
  }
}

function compileCssToVw(done) {
  return gulp
    .src('./src/*.styl')
    .pipe(stylus())
    .pipe(
      postcss([
        toBem(bemConfig),
        pxToViewPort({
          viewportWidth: 750, // (Number) The width of the viewport.
          viewportHeight: 1334, // (Number) The height of the viewport.
          unitPrecision: 3, // (Number) 转换的时候除不尽保留3位小数.
          viewportUnit: 'vw', // (String) 转换为vw单位.
          selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
          minPixelValue: 1, // (Number) 小于或等于'1px'不转换为视窗单位.
          mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
          unitToConvert: 'px'
        }),
        presetenv(),
        cssnano({
          'cssnano-preset-advanced': {
            zIndex: false,
            autoprefixer: true
          }
        })
      ])
    )
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: '.vw'
      })
    )
    .pipe(gulp.dest('./lib'))
}

function compileCssToPx(done) {
  return gulp
    .src('./src/*.styl')
    .pipe(stylus())
    .pipe(
      postcss([
        toBem(bemConfig),
        presetenv(),
        pxToUnits({
          divisor: 1,
          targetUnits: 'px'
        })
      ])
    )
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: '.px'
      })
    )
    .pipe(gulp.dest('./lib'))
}

function compileCssToRelease(done) {
  return gulp
    .src('./src/*.styl')
    .pipe(stylus())
    .pipe(
      postcss([
        toBem(bemConfig),
        presetenv(),
        pxToUnits({
          divisor: 1,
          targetUnits: 'px'
        })
      ])
    )
    .pipe(cleanCSS())
    .pipe(
      rename({
        extname: '.css'
      })
    )
    .pipe(gulp.dest('./lib'))
}

function compileCssToDev(done) {
  return gulp
    .src('./src/**/*.styl')
    .pipe(stylus())
    .pipe(
      postcss([
        toBem(bemConfig),
        presetenv(),
        pxToUnits({
          divisor: 1,
          targetUnits: 'px'
        })
      ])
    )
    .pipe(cleanCSS())
    .pipe(
      rename({
        extname: '.css'
      })
    )
    .pipe(gulp.dest('./lib'))
}
function copyFont(done) {
  return gulp.src('./src/fonts/**').pipe(gulp.dest('./lib/fonts'))
}
// 监视构建
function watchCss(done) {
  return gulp.watch('./src/**', gulp.parallel(compileCssToDev))
}

function watchFonts(done) {
  return gulp.watch('./src/fonts/**', copyFont)
}

exports.build = gulp.parallel(
  // compileCssToVw, // 构建 vw_css
  // compileCssToPx, // 构建 px_css
  compileCssToRelease,
  copyFont
)

exports.default = gulp.series(
  // compileCssToVw, // 构建 vw_css
  // compileCssToPx, // 构建 px_css
  compileCssToDev,
  copyFont,
  gulp.parallel(watchCss, watchFonts)
)
