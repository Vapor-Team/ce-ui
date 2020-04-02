import enLocale from '@lib/locale/lang/en-US'
import zhLocale from '@lib/locale/lang/zh-CN'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// TODO:待优化
export const browserLanguage =
  window.navigator.userLanguage || window.navigator.language

export const Lang =
  browserLanguage.replace(/-.*/, '') ||
  window.localStorage.getItem('ce-ui-language')

const i18nConfig = new VueI18n({
  locale: Lang,
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
