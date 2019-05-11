// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import VueI18n from "vue-i18n"
import App from "./App"
import router from "./router"
import enLocale from "@#/locale/lang/en-US"
import zhLocale from "@#/locale/lang/zh-CN"
import demoBlock from "./components/demo-block.vue"
import CeUi from "@#/index"
import "@#/theme-chalk/lib/ce-ui-index.css"

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(CeUi)
// TODO:待优化
const matchArr = window.location.href.match(/#\/(zh|en)/)
const urlLang = matchArr && matchArr[1]
const userLang = urlLang || window.localStorage.getItem("ce-ui-language")
const i18n = new VueI18n({
	locale: userLang,
	fallbackLocale: "zh",
	messages: {
		en: {
			...enLocale
		},
		zh: {
			...zhLocale
		}
	}
})

function importDemos(r) {
	// 在遍历的时候多注册一个 demoBlock组件
	return [
		demoBlock,
		...r.keys().map(key => {
			return r(key).default
		})
	]
}

importDemos(require.context("@/demos", true, /\.vue$/)).map(component => {
	return Vue.component(component.name, component)
})

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	i18n,
	...App
})
