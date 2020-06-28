const path = require('path')
/**
 * 增加 Highlight hljs 的 classname
 */
const wrapCustomClass = function (render) {
  return function (...args) {
    return render(...args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

/**
 * Format HTML string
 */
const convertHtml = function (str) {
  return str.replace(/(&#x)(\w{4});/gi, $0 => {
    return String.fromCharCode(
      parseInt(
        encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'),
        16
      )
    )
  })
}

/**
 * resolve函数
 */
const resolve = function (dir) {
  return path.join(__dirname, '../', dir)
}
const handlerArr = function (data, callback, newEle = null) {
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

module.exports = {
  resolve,
  handlerArr,
  convertHtml,
  wrapCustomClass
}
