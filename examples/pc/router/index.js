/*
 * @Author: Mark
 * @Date: 2019-06-26 00:30:25
 * @LastEditors: Mark
 * @LastEditTime: 2020-07-13 23:34:19
 * @Description: demo 路由
 */
import Vue from 'vue'
import Router from 'vue-router'
import NavConfig from '@examples/nav.config.json'
const navigatorLang = window.navigator.language.slice(0, 2)
const userLang = localStorage.getItem('ce-ui-language') || navigatorLang || 'zh'
const navExtendsConfig = [
  {
    path: '/zh',
    name: 'Home-zh',
    meta: {
      lang: 'zh'
    },
    components: require('@pc/views/index.vue')
  },
  {
    path: '/en',
    name: 'Home-en',
    meta: {
      lang: 'en'
    },
    components: require('@pc/views/index.vue')
  },
  {
    path: '/',
    meta: {
      lang: 'zh'
    },
    redirect: {
      name: 'Home-zh'
    }
  },
  {
    path: '*',
    meta: {
      lang: 'zh'
    },
    redirect: {
      name: 'Home-zh'
    }
  }
]

Vue.use(Router)

function registeredRoute(navConfig, lang) {
  const addParentRoute = (parentName, lang) => {
    const _parentName = parentName === 'components' ? 'docs' : parentName
    return {
      path: `/${lang}/${_parentName.toLowerCase()}`,
      meta: {
        lang
      },
      components: require(`../views/${_parentName.toLowerCase()}.vue`),
      children: []
    }
  }
  const addRoute = (item, lang) => {
    return {
      path: `${item.name.toLowerCase()}`,
      name: `${item.name}-${lang}`,
      meta: {
        lang
      },
      components: require(`../../docs/${lang}/${item.name.toLowerCase()}.md`)
    }
  }
  return Object.keys(navConfig[lang]).reduce((item, _routerName) => {
    const ParentRoute = addParentRoute(_routerName, lang)
    if (Array.isArray(navConfig[lang][_routerName])) {
      for (const _item of navConfig[lang][_routerName]) {
        if (Array.isArray(_item.items)) {
          for (const _item_ of _item.items) {
            ParentRoute.children.push(addRoute(_item_, lang))
          }
        } else if (Array.isArray(_item.groups)) {
          for (const _item_ of _item.groups) {
            if (Array.isArray(_item_.items)) {
              for (const __item__ of _item_.items) {
                ParentRoute.children.push(addRoute(__item__, lang))
              }
            }
          }
        }
      }
    }
    item.push(ParentRoute)
    return item
  }, [])
}
let routes = registeredRoute(NavConfig, userLang)
routes = [
  ...registeredRoute(NavConfig, 'zh'),
  ...registeredRoute(NavConfig, 'en')
].concat(navExtendsConfig)

const router = new Router({
  mode: 'hash', // hash模式
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
router.beforeEach((to, from, next) => {
  // TODO: 待调整路由守卫
  next()
})

export default router
