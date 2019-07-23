const fs = require("fs-extra")
const path = require("path")
const uppercamelize = require("uppercamelcase")
// 拿到packages目录下的所以含组件的文件名字
const Components = require("./get-components")()
const packageJson = require("../package.json")
const version = process.env.VERSION || packageJson.version
const TIPS = `/* eslint-disable */
// This file is auto gererated by build/build-entry.js`
function handlerArr(data, callback, newEle = null) {
	let arr = []
	if (Array.isArray(data)) {
		arr = data.map(e => {
			return callback && callback(e)
		})
		if (newEle) {
			arr.unshift(newEle)
		}
	}
	return arr
}
function buildPackagesEntry() {
	const uninstallComponents = []
	const importList = Components.map(name => {
		return uppercamelize(name)
	})
	const exportList = Components.map(name => {
		return `${uppercamelize(name)}`
	})
	const installList = exportList.filter(name => {
		return !~uninstallComponents.indexOf(uppercamelize(name))
	})
const componentsIndexContent = `
${TIPS}
${
	handlerArr(Components, (name) => {
		return `import ${uppercamelize(name)} from "./${name}"`
	}).join("\n")
}
export {
	${
		Components.map(name => {
		return uppercamelize(name)
	}).join(",\n	")}
}
export default {
	${Components.map(name => {
		return uppercamelize(name)
	}).join(",\n	")}
}`
const content = `
${TIPS}
import { ${importList.join(", ")} } from './components'
const version = '${version}'
const components = [ ${installList.join(", ")} ]
const install = Vue => {
	components.forEach(Component => {
		Vue.use(Component)
	})
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}
export {
	install,
	version,\n	${exportList.join(",\n	")}
}
export default {
	install,
	version,\n	${exportList.join(",\n	")}
}`
const utilsCreatContent = `
${TIPS}
${
	handlerArr(Components, (name) => {
		return `import ${uppercamelize(name)} from "../components/${name}"`
	}, "import createBasic from './create-basic'").join("\n")
}
export default function (sfc) {
	sfc.props = Object.assign(sfc.props || {}, BaseCard.props)
	sfc.components = Object.assign(sfc.components || {}, {
		${Components.map(name => {
		return uppercamelize(name)
	}).join(",\n		")}
	})
	sfc.inheritAttrs = false
	return createBasic(sfc)
}`
	fs.writeFileSync(path.join(__dirname, "../packages/components/index.js"), componentsIndexContent)
	fs.writeFileSync(path.join(__dirname, "../packages/utils/create.js"), utilsCreatContent)
	fs.writeFileSync(path.join(__dirname, "../packages/index.js"), content)
}

buildPackagesEntry()
