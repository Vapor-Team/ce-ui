/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

const ELEMENT = '__'
const MODS = '--'

const join = (name: string, el: string, symbol: string): string => {
  return el ? name + symbol + el : name
}

const prefix = (name: string, mods: any): any => {
  if (typeof mods === 'string') {
    return join(name, mods, MODS)
  }

  if (Array.isArray(mods)) {
    return mods.map((item) => {
      return prefix(name, item)
    })
  }

  const ret: {
    [key: string]: any
  } = {}
  mods &&
    Object.keys(mods).forEach((key) => {
      ret[name + MODS + key] = mods[key]
    })
  return ret
}

export default {
  methods: {
    b(this: Vue, el: string, mods: any) {
      const { name } = this.$options
      if (el && typeof el !== 'string') {
        mods = el
        el = ''
      }
      el = join(name ? name : '', el, ELEMENT)
      return mods ? [el, prefix(el, mods)] : el
    }
  }
}
