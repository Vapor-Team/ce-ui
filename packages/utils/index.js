import Vue from "vue"

const isServer = Vue.prototype.$isServer

const hasOwnProperty = Object.prototype.hasOwnProperty

export function noop() {}

export function hasOwn(obj, key) {
	return hasOwnProperty.call(obj, key)
}

function extend(to, _from) {
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

function isDef(value) {
	return value !== undefined && value !== null
}

function isObj(x) {
	const type = typeof x
	return x !== null && (type === "object" || type === "function")
}

function get(object, path) {
	const keys = path.split(".")
	let result = object

	keys.forEach(key => {
		result = isDef(result[key]) ? result[key] : ""
	})

	return result
}

const camelizeRE = /-(\w)/g

function camelize(str) {
	return str.replace(camelizeRE, (_, c) => {
		return c.toUpperCase()
	})
}

function isAndroid() {
	/* istanbul ignore next */
	return isServer ? false : /android/.test(navigator.userAgent.toLowerCase())
}

function range(num, min, max) {
	return Math.min(Math.max(num, min), max)
}

export {
	get,
	range,
	isObj,
	isDef,
	isServer,
	camelize,
	isAndroid
}
