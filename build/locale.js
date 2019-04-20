require("shelljs/global")

const ora = require("ora")
const fs = require("fs")
const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const baseWebpackConfig = require("./webpack.base.conf")

const spinner = ora("building locale for dev...")

spinner.start()
baseWebpackConfig.entry = {}

/**
 * Get the files of language
 */
const files = fs.readdirSync("./packages/locale/lang")
const localeEntry = {}

files.forEach(fileName => {
  const name = fileName.split(".")[0]
  localeEntry[name] = `./packages/locale/lang/${fileName}`
})

const webpackConfig = merge(baseWebpackConfig, {
  entry: localeEntry,
  output: {
    path: path.resolve(__dirname, "../dist/locale"),
    publicPath: "/dist/locale/",
    filename: "[name].js",
    library: "ce/locale",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      progress: true,
      hide_modules: true
    }),
    new webpack.BannerPlugin({
      banner: `/*! CE-UI i18n v${require("../package.json").version} | https://github.com/Vapor-Team/ce-ui | (c) 2019 VaporTeam | MIT License */`,
      raw: true,
      entryOnly: true
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
})

webpack(webpackConfig, (err, stats) => {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    color: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + "\n")
})
