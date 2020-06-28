const fs = require('fs-extra')
const path = require('path')
const humpConversion = require('uppercamelcase')
// 拿到packages目录下的所以含组件的文件名字
const Components = require('./get-packages')['getComponents']()
const Directives = require('./get-packages')['getDirectives']()
const packageJson = require('../package.json')
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
  const componentsIndexContent = `
${TIPS}
import { CreateComponents } from '@lib/ts-utils/create-basic'
${
    handlerArr(Components_, (name) => {
      return `import ${humpConversion(name)}_ from "./${name}"`
    }).join('\n')
    }
${
    Components_.map(name => {
      return `export const ${humpConversion(name)} = CreateComponents(${humpConversion(name)}_)`
    }).join('\n')
    }
export default {
  ${Components_.map(name => {
      return humpConversion(name)
    }).join(',\n  ')}
}`
  const content = `
${TIPS}
import { ${Components_.map(name => {
    return humpConversion(name)
  }).join(', ')} } from './components'
import { ${Directives_.map(name => {
    return humpConversion(name)
  }).join(', ')} } from './directives'
const version = '${version}'
const components = [ ${Components_.map(name => {
    return humpConversion(name)
  }).join(', ')} ]
const directives = [ ${Directives_.map(name => {
    return humpConversion(name)
  }).join(', ')} ]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
  directives.forEach(Directive => {
    Vue.use(Directive)
  })
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,\n  ${Components_.map(name => {
    return humpConversion(name)
  }).join(',\n  ')}${',\n  '}${Directives_.map(name => {
    return humpConversion(name)
  }).join(',\n  ')}
}
export default {
  install,
  version,\n  ${Components_.map(name => {
    return humpConversion(name)
  }).join(',\n  ')}${',\n  '}${Directives_.map(name => {
    return humpConversion(name)
  }).join(',\n  ')}
}`
  fs.writeFileSync(path.join(__dirname, '../packages/components/index.ts'), componentsIndexContent)
  fs.writeFileSync(path.join(__dirname, '../packages/index.js'), content)
}

buildPackagesEntry()
