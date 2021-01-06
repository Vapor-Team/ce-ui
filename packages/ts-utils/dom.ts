/* eslint-disable prefer-spread */
import { trim, hasOwn, camelCase } from './index'
/**
 * 添加css
 * @param el
 * @param cls
 */
export function addClass(el: Element, cls: string): void {
  if (!el) return
  let curClass = el.className
  const classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}
/**
 * 是否有该样式
 * @param el
 * @param cls
 */
export function hasClass(el: Element, cls: string): boolean {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1)
    throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}
/**
 * 移出样式
 * @param el
 * @param cls
 */
export function removeClass(el: Element, cls: string): void {
  if (!el || !cls) return
  const classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}
/**
 * 设置样式
 * @param element
 * @param styleName
 * @param value
 */
export function setStyle(element: Element, styleName: any, value: any): void {
  if (!element || !styleName) return
  if (typeof styleName === 'object') {
    for (const prop in styleName) {
      if (hasOwn(styleName, prop)) {
        setStyle(element, prop, styleName[prop])
      }
    }
  } else {
    styleName = camelCase(styleName)
    element.setAttribute(styleName, value)
  }
}

/**
 * Bind after-leave event for vue instance. Make sure after-leave is called in any browsers.
 *
 * @param {Vue} instance Vue instance.
 * @param {Function} callback callback of after-leave event
 * @param {Number} speed the speed of transition, default value is 300ms
 * @param {Boolean} once weather bind after-leave once. default value is false.
 */
export function afterLeave(
  instance: Vue,
  callback: () => void,
  speed = 300,
  once = false
) {
  if (!instance || !callback) throw new Error('instance & callback is required')
  let called = false
  const afterLeaveCallback = function (...args: []) {
    if (called) return
    called = true
    callback && callback.apply(null, args)
  }
  if (once) {
    instance.$once('after-leave', afterLeaveCallback)
  } else {
    instance.$on('after-leave', afterLeaveCallback)
  }
  setTimeout(() => {
    afterLeaveCallback()
  }, speed)
}
