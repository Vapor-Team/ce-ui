import Vue from 'vue'
import { config } from '@lib/ts-utils/package'
import { LogType } from '@lib/ts-utils/types'
/**
 * isServer
 */
const isServer = Vue.prototype.$isServer
const hasOwnProperty = Object.prototype.hasOwnProperty
/**
 * 驼峰命名转换
 * @param string
 * @param options
 */
const nameConvert = (
  string: string,
  options: { separator?: string; split?: string }
) => {
  options = options || {}
  const separator = options.separator || '_'
  const split = options.split || /(?=[A-Z])/
  return string.split(split).join(separator).toLowerCase()
}
/**
 * 对象中是否含有某些属性
 * @param obj
 * @param key
 */
const hasOwn = (obj: any, key: string): boolean => {
  return hasOwnProperty.call(obj, key)
}
/**
 * 扩展属性
 * @param to
 * @param _from
 */
const extend = (to: any, _from: any): any => {
  for (let key in _from) {
    to[key] = _from[key]
  }
  return to
}
/**
 * 转换成对象
 * @param arr
 */
const toObject = (arr: any[]): any => {
  let res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}

/**
 * isDef
 * @param value
 */
const isDef = (value: any): boolean => {
  return value !== undefined && value !== null
}
/**
 * 是否是一个对象
 * @param x
 */
const isObj = (x: any): boolean => {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}
/**
 * 获取对象值
 * @param object
 * @param path
 */
const get = (object: any, path: string) => {
  const keys = path.split('.')
  let result = object
  keys.forEach((key) => {
    result = isDef(result[key]) ? result[key] : ''
  })
  return result
}

/**
 * 驼峰转换
 * @param str
 */
const camelize = (str: string): string => {
  return str.replace(/-(\w)/g, (_, c) => {
    return c.toUpperCase()
  })
}
/**
 * 是否是android
 */
const isAndroid = (): boolean => {
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase())
}
/**
 * 计算
 * @param num
 * @param min
 * @param max
 */
const range = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max)
}

/**
 * 过滤对象
 * @param data
 * @param cb
 */
const filterData = (
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

const stripScript = (content: string): string => {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

const stripStyle = (content: string): string => {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

const stripTemplate = (content: string): string => {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}
/**
 * 通用log方法
 * @param type
 * @param args
 */
const log = (type: LogType = 'log', ...args: any[]) => {
  const args_ = args
  if (config.noConsole && type === 'log') return
  if (config.noWarn && type === 'warn') return
  console[type](...args_)
}

export {
  log,
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

export default {
  log,
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
