import Vue from 'vue'

const isServer = Vue.prototype.$isServer
const hasOwnProperty = Object.prototype.hasOwnProperty
const camelizeRE = /-(\w)/g

export function noop() {}

export function hasOwn(obj, key) {
	return hasOwnProperty.call(obj, key)
}

export function extend(to, _from) {
	for (let key in _from) {
		to[key] = _from[key]
	}
	return to
}

export function toObject(arr) {
	let res = {}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			extend(res, arr[i])
		}
	}
	return res
}

export function isDef(value) {
	return value !== undefined && value !== null
}

export function isObj(x) {
	const type = typeof x
	return x !== null && (type === 'object' || type === 'function')
}

export function get(object, path) {
	const keys = path.split('.')
	let result = object

	keys.forEach(key => {
		result = isDef(result[key]) ? result[key] : ''
	})

	return result
}

export function camelize(str) {
	return str.replace(camelizeRE, (_, c) => {
		return c.toUpperCase()
	})
}

export function isAndroid() {
	/* istanbul ignore next */
	return isServer ? false : /android/.test(navigator.userAgent.toLowerCase())
}

export function range(num, min, max) {
	return Math.min(Math.max(num, min), max)
}

export function stripScript(content) {
	const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
	return result && result[2] ? result[2].trim() : ''
}

export function stripStyle(content) {
	const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/)
	return result && result[2] ? result[2].trim() : ''
}

export function stripTemplate(content) {
	content = content.trim()
	if (!content) {
		return content
	}
	return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}

export default {
	noop,
	hasOwn,
	extend,
	toObject,
	get,
	range,
	isObj,
	isDef,
	isServer,
	camelize,
	isAndroid,
	stripStyle,
	stripScript,
	stripTemplate
}
