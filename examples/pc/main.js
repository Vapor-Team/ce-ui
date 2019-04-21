// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import demoBlock from "./components/demo-block.vue"
import CeUi from "../../packages/index"
import VueI18n from "vue-i18n"
import enLocale from "../../packages/locale/lang/en-US"
import zhLocale from "../../packages/locale/lang/zh-CN"
import "../../packages/theme-chalk/lib/ce-ui-index.css"

Vue.use(VueI18n)
const i18n = new VueI18n({
	locale: "en",
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
const Demos = []

function importDemos(r) {
	r.keys().forEach(key => {
		Demos.push(r(key).default)
	})
}

importDemos(require.context("@/demos", true, /\.vue$/))

Demos.map(component => {
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
