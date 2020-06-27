import Vue from 'vue'

const isServer = Vue.prototype.$isServer
const hasOwnProperty = Object.prototype.hasOwnProperty
export const nameConvert = (string: string, options: { separator?: string; split?: string }) => {
  options = options || {}
  const separator = options.separator || '_'
  const split = options.split || /(?=[A-Z])/
  return string
    .split(split)
    .join(separator)
    .toLowerCase()
}
export const hasOwn = (obj: any, key: string): boolean => {
  return hasOwnProperty.call(obj, key)
}

export const extend = (to: any, _from: any): any => {
  for (let key in _from) {
    to[key] = _from[key]
  }
  return to
}

export const toObject = (arr: any[]): any => {
  let res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}

export const isDef = (value: any): boolean => {
  return value !== undefined && value !== null
}

export const isObj = (x: any): boolean => {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

export const get = (object: any, path: string) => {
  const keys = path.split('.')
  let result = object

  keys.forEach((key) => {
    result = isDef(result[key]) ? result[key] : ''
  })

  return result
}

export const camelize = (str: string): string => {
  return str.replace(/-(\w)/g, (_, c) => {
    return c.toUpperCase()
  })
}

export const isAndroid = (): boolean => {
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase())
}

export const range = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max)
}

export const filterData = (
  data: { [key: string]: any },
  cb: (key: string) => boolean
): { [key: string]: any } => {
  if (!isObj(data)) return {}
  return Object.keys(data).reduce((_: { [key: string]: any }, key_: string) => {
    if (cb && cb(key_)) {
      _[key_] = data[key_]
    }
    return _
  }, {})
}

export const stripScript = (content: string): string => {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

export const stripStyle = (content: string): string => {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

export const stripTemplate = (content: string): string => {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}

export default {
  hasOwn,
  extend,
  toObject,
  get,
  range,
  isObj,
  isDef,
  isServer,
  camelize,
  nameConvert,
  isAndroid,
  stripStyle,
  filterData,
  stripScript,
  stripTemplate
}
