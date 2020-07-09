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
      ...enLocale,
      docs: {
        welcome: 'A Lightweight and Modular Front-End UI Library',
        GET_STARTED: 'GET STARTED',
        guide: 'Guide',
        guideDesc:
          'Understand the design guidelines, makes design and prototype more simple and accessible for all project members.',
        view: 'View Details',
        component: 'Component',
        componentDesc:
          'Base on Vue.js, experience interaction details by strolling through\ncomponent demos.Use the components singleton or global is free.',
        resources: 'Resources',
        resourcesDesc:
          'Provide the design resources, product managers can make prototype\nmore simple and efficient.Save time and improve work efficiency.'
      }
    },
    zh: {
      ...zhLocale,
      docs: {
        welcome: '一款轻量级、模块化的前端 UI 组件库',
        GET_STARTED: '开始使用',
        guide: '指南',
        guideDesc:
          '了解设计指南，利用统一的规范进行设计赋能，帮助产品设计师，前端工程师，后台工程师迅速搭建中后台产品。',
        view: '查看详情',
        component: '组件',
        componentDesc:
          '基于 Vue 的 UI 组件化，可以通过组件的 Demo\n体验交互细节，开发中既可以根据需要单独引用，也可以使用全局方式引入所有组件。',
        resources: '资源',
        resourcesDesc:
          '提供视觉稿原稿下载，产品可直接用 Sketch\n工具快速搭建高保真的产品原型稿，减少沟通成本，提升工作效率。'
      }
    }
  }
})

export default i18nConfig
