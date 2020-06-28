const fs = require('fs-extra')
const path = require('path')
const { handlerArr } = require('./utils')
const packageJson = require('../package.json')
const humpConversion = require('uppercamelcase')
// 拿到packages目录下的所以含组件的文件名字
const Components = require('./get-packages')['getComponents']()
const Directives = require('./get-packages')['getDirectives']()
const version = process.env.VERSION || packageJson.version
const TIPS = `/* eslint-disable */
// This file is auto gererated by build/build-entry.js`
/**
 * 写入文件
 */
const buildPackagesEntry = () => {
  /**
   * 卸载的组件
   */
  const uninstallComponents = []
  const uninstallDirectives = []
  const Components_ = Components.filter(name => {
    if (!uninstallComponents.includes(name)) return name
  })
  const Directives_ = Directives.filter(name => {
    if (!uninstallDirectives.includes(name)) return name
  })
  const componentsIndexContent = `${TIPS}\nimport { CreateComponents } from '@lib/ts-utils/create-basic'\n${
    handlerArr(Components_, (name) => {
      return `import ${humpConversion(name)}_ from "./${name}"`
    }).join('\n')
    }\n${
    Components_.map(name => {
      return `export const ${humpConversion(name)} = CreateComponents(${humpConversion(name)}_)`
    }).join('\n')
    }\nexport default {\n  ${Components_.map(name => {
      return humpConversion(name)
    }).join(',\n  ')}\n}`
  const content = `${TIPS}\nimport { ${Components_.map(name => {
    return humpConversion(name)
  }).join(', ')} } from './components'\nimport { ${Directives_.map(name => {
    return humpConversion(name)
  }).join(', ')} } from './directives'\nconst version = '${version}'\nconst components = [ ${Components_.map(name => {
    return humpConversion(name)
  }).join(', ')} ]\nconst directives = [ ${Directives_.map(name => {
    return humpConversion(name)
  }).join(', ')} ]\nconst install = Vue => {\n  components.forEach(Component => {
    Vue.use(Component)
  })\n  directives.forEach(Directive => {
    Vue.use(Directive)
  })\n}\n/* istanbul ignore if */\nif (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)\n}\nexport {
  install,
  version,\n  ${Components_.map(name => {
    return humpConversion(name)
  }).join(',\n  ')}${',\n  '}${Directives_.map(name => {
    return humpConversion(name)
  }).join(',\n  ')}\n}\nexport default {
  install,
  version,\n  ${Components_.map(name => {
    return humpConversion(name)
  }).join(',\n  ')}${',\n  '}${Directives_.map(name => {
    return humpConversion(name)
  }).join(',\n  ')}\n}`
  fs.writeFileSync(path.join(__dirname, '../packages/components/index.ts'), componentsIndexContent)
  fs.writeFileSync(path.join(__dirname, '../packages/index.js'), content)
}

buildPackagesEntry()
