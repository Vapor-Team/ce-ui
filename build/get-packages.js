const fs = require('fs')
const path = require('path')
const excludes = ['index.ts', 'theme-chalk', 'mixins', 'utils', '.DS_Store']

module.exports = {
  getComponents() {
    const dirs = fs.readdirSync(
      path.resolve(__dirname, '../packages/components/')
    )
    return dirs.filter(dirName => {
      return !excludes.includes(dirName)
    })
  },
  getDirectives() {
    const dirs = fs.readdirSync(
      path.resolve(__dirname, '../packages/directives/')
    )
    return dirs.filter(dirName => {
      return !excludes.includes(dirName)
    })
  }
}
