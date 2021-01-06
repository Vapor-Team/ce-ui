import Vue from 'vue'
import deepmerge from 'deepmerge'
import defaultLang from './lang/zh-CN'

let lang = defaultLang
let merged = false
let i18nHandler = (...args) => {
  const vueI18n = Object.getPrototypeOf(this || Vue).$t

  if (typeof vueI18n === 'function' && !!Vue.locale) {
    if (!merged) {
      merged = true
      Vue.locale(
        Vue.config.lang,
        deepmerge(lang, Vue.locale(Vue.config.lang) || {}, {
          clone: true
        })
      )
    }
    return vueI18n.apply(this, args)
  }
}

export const t = (...args) => {
  let value = i18nHandler.apply(this, args)
  if (value !== null && typeof value !== 'undefined') {
    return value
  }

  const array = args[0].split('.')
  let current = lang

  for (let i = 0, len = array.length; i < len; i++) {
    const property = array[i]
    value = current[property]

    if (i === len - 1) {
      return value
    } else if (!value) {
      return ''
    }
    current = value
  }

  return ''
}

export const use = (l) => {
  lang = l || lang
}

export const i18n = (fn) => {
  i18nHandler = fn || i18nHandler
}

export default {
  use,
  t,
  i18n
}
