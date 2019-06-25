const ora = require("ora")
const fs = require("fs")
const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const TerserPlugin = require("terser-webpack-plugin")
const spinner = ora("building locale for production...")
const files = fs.readdirSync("./packages/locale/lang")
const localeEntry = {}

spinner.start()
/**
 * Get the files of language
 */

files.forEach(fileName => {
	const name = fileName.split(".")[0]
	localeEntry[name] = `./packages/locale/lang/${fileName}`
})

const webpackConfig = merge({
	entry: localeEntry,
	mode: "production",
	output: {
		path: path.resolve(__dirname, "../lib/locale"),
		publicPath: "/lib/locale/",
		filename: "[name].js",
		library: "ce/locale",
		libraryTarget: "umd"
	},

	optimization: {
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: true, // Must be set to true if using source-maps in production
				terserOptions: {
					// https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
				}
			})
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			progress: true,
			hide_modules: true
		}),
		new webpack.BannerPlugin({
			banner: `/*! CE-UI i18n v${
				require("../package.json").version
			} | https://github.com/Vapor-Team/ce-ui | (c) 2019 VaporTeam | MIT License */`,
			raw: true,
			entryOnly: true
		})
	]
})

webpack(webpackConfig, (err, stats) => {
	spinner.stop()
	if (err) throw err
	process.stdout.write(
		stats.toString({
			color: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false
		}) + "\n"
	)
})
