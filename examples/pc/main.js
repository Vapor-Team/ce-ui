// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import VueI18n from "vue-i18n"
import enLocale from "@#/locale/lang/en-US"
import zhLocale from "@#/locale/lang/zh-CN"
import demoBlock from "./components/demo-block.vue"
import CeUi from "@#/index"
import "@#/theme-chalk/lib/ce-ui-index.css"

const matchArr = window.location.href.match(/#\/(zh|en)/)
const urlLang = matchArr && matchArr[1]
const userLang = urlLang || window.localStorage.getItem("ce-ui-language")

Vue.use(VueI18n)
const i18n = new VueI18n({
	locale: userLang,
	fallbackLocale: "en",
	messages: {
		"en": {
			...enLocale
		},
		"zh": {
			...zhLocale
		}
	}
})

function importDemos(r) {
	return r.keys().map(key => {
		return r(key).default
	})
}

importDemos(require.context("@/demos", true, /\.vue$/)).map(component => {
	return Vue.component(component.name, component)
})

Vue.component("demo-block", demoBlock)

Vue.use(CeUi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	i18n,
	...App
})
