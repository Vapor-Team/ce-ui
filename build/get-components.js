const fs = require("fs")
const path = require("path")

const excludes = [
	"index.js",
	"theme-chalk",
	"mixins",
	"utils",
	".DS_Store"
]

module.exports = function () {
	const dirs = fs.readdirSync(path.resolve(__dirname, "../packages/components/"))
	console.log(dirs.filter(dirName => {
		return excludes.indexOf(dirName) === -1
	}))
	return dirs.filter(dirName => {
		return excludes.indexOf(dirName) === -1
	})
}
