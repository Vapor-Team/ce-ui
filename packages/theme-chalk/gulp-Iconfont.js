/*
 * @Author: Mark
 * @Date: 2020-07-12 19:40:06
 * @LastEditors: Mark
 * @LastEditTime: 2020-07-13 01:47:44
 * @Description: gulp-iconfont
 */
const gulp = require('gulp')
const rename = require('gulp-rename')
const icon = 'ce-icon'
const fontName = `${icon}-font`
const svgSymbols2js = require('gulp-svg-symbols2js')
const iconFontCss = require('gulp-iconfont-css')
const iconFont = require('gulp-iconfont')
const uglifyEs = require('gulp-uglify-es').default
const gulpIf = require('gulp-if')
const svgSymbols = require('gulp-svg-symbols')
const compile = {
  svgToFonts() {
    const runTimestamp = Math.round(Date.now() / 1000)
    return gulp
      .src(`./src/svg/**/*.svg`)
      .pipe(
        iconFontCss({
          fontName: fontName,
          cssClass: icon + '--',
          path: './src/template/_iconfont.styl',
          cacheBuster: runTimestamp,
          targetPath: '../components/icon/index.styl',
          fontPath: './fonts/'
        })
      )
      .pipe(
        iconFont({
          fontName: fontName, // required
          prependUnicode: true, // recommended option
          formats: ['svg', 'ttf', 'eot', 'woff', 'woff2']
        })
      )
      .pipe(gulp.dest(`./src/fonts`))
  },
  /**
   * 编译处理svg
   */
  svgToSymbol() {
    return gulp
      .src(`./src/svg/**/*.svg`)
      .pipe(
        svgSymbols({
          slug: (name) => {
            return name
          },
          id: `${icon}--%f`,
          // optional: define a global class for every SVG
          svgAttrs: {
            class: `${icon}__symbol`,
            xmlns: `http://www.w3.org/2000/svg`,
            'aria-hidden': `true`,
            'data-enabled': true
          },
          // optional: customize another class for each SVG
          class: `.${icon}--%f`,
          // choose the vue template
          templates: ['default-svg', 'default-stylus'],
          transformData(svg, defaultData, options) {
            /******
            svg is same object as the one passed to the templates (see above)

            defaultData are the ones needed by default templates
            see /lib/get-default-data.js

            options are the one you have set in your gulpfile,
              minus templates & transformData
            *******/

            return {
              // Return every datas you need
              id: defaultData.id,
              class: defaultData.class,
              width: `1em`,
              height: `1em`
            }
          }
        })
      )
      .pipe(svgSymbols2js())
      .pipe(
        gulpIf((file) => {
          return file.extname === '.js'
        }, uglifyEs())
      )
      .pipe(
        gulpIf(
          (file) => {
            return file.extname === '.js'
          },
          rename('iconfont.min.js'),
          rename('iconfont.styl')
        )
      )
      .pipe(gulp.dest(`./src/components/icon`))
  }
}
const watch = {
  /**
   * 监听字体库
   */
  symbol() {
    return gulp.watch('./src/svg/**/*.svg', compile.svgToSymbol)
  },
  /**
   * 监听svgToFonts
   */
  iconFonts() {
    return gulp.watch('./src/svg/**/*.svg', compile.svgToFonts)
  }
}

exports.build = gulp.parallel(compile.svgToFonts, compile.svgToSymbol)
exports.default = gulp.series(
  compile.svgToFonts,
  compile.svgToSymbol,
  gulp.parallel(watch.symbol, watch.iconFonts)
)
