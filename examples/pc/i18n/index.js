import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from '@lib/locale/lang/en-US'
import zhLocale from '@lib/locale/lang/zh-CN'

Vue.use(VueI18n)

// TODO:待优化
export const matchArr = window.location.href.match(/#\/(zh|en)/)
export const urlLang = matchArr && matchArr[1]
export const userLang = urlLang || window.localStorage.getItem('ce-ui-language')

const i18nConfig = new VueI18n({
	locale: userLang,
	fallbackLocale: 'zh',
	messages: {
		en: {
			...enLocale
		},
		zh: {
			...zhLocale
		}
	}
})

export default i18nConfig
