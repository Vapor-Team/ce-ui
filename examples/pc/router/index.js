/*
 * @Author: Mark
 * @Date: 2019-06-26 00:30:25
 * @LastEditors: Mark
 * @LastEditTime: 2020-07-01 00:10:15
 * @Description: demo 路由
 */
import Vue from 'vue'
import Router from 'vue-router'
import NavConfig from '@examples/nav.config.json'
Vue.use(Router)
function registeredRoute(navConfig) {
  const routes = []
  const parentRoutes = {}
  for (let lang of Object.keys(navConfig)) {
    const pageNav = navConfig[lang]
    for (const pageName in pageNav) {
      pageNav[pageName].forEach(nav => {
        const parentName = nav.name
        parentRoutes[`${parentName}-${lang}`] =
          parentRoutes[`${parentName}-${lang}`] ||
          addParentRoute(parentName, lang)
        if (nav.groups) {
          nav.groups.forEach(group => {
            group.items.forEach(item => {
              addRoute(parentName, item, lang)
            })
          })
        } else if (nav.items) {
          nav.items.forEach(item => {
            addRoute(parentName, item, lang)
          })
        }
      })
    }
  }
  for (const key in parentRoutes) {
    if (parentRoutes.hasOwnProperty(key)) {
      routes.push(parentRoutes[key])
    }
  }
  function addParentRoute(parentName, lang) {
    return {
      path: `/${lang}/${parentName.toLowerCase()}`,
      components: require(`../views/${parentName.toLowerCase()}${lang === 'zh' ? '' : `-${lang}`}.vue`),
      children: []
    }
  }
  function addRoute(parentName, item, lang) {
    parentRoutes[`${parentName}-${lang}`].children.push({
      path: `${item.name.toLowerCase()}`,
      name: `${item.name}-${lang}`,
      components: require(`../../docs/${lang}/${item.name.toLowerCase()}.md`)
    })
  }
  return routes
}

let routes = registeredRoute(NavConfig)
const navigatorLang = window.navigator.language.slice(0, 2)
const userLang = localStorage.getItem('ce-ui-language') || navigatorLang || 'zh'
const navExtendsConfig = [
  {
    path: '/zh',
    name: 'Home',
    components: require('@pc/views/index.vue')
  },
  {
    path: '/en',
    name: 'Home-en',
    components: require('@pc/views/index-en.vue')
  },
  {
    path: '/',
    redirect: {
      name: userLang === 'zh' ? 'Home' : `Home-${userLang}`
    }
  },
  {
    path: '*',
    redirect: {
      name: userLang === 'zh' ? 'Home' : `Home-${userLang}`
    }
  }
]
routes = routes.concat(navExtendsConfig)
/**
 * 路由注册
 */
for (let page of routes) {
  if (page.path === '/zh/guide') {
    page.children.push({
      path: '',
      name: 'Guide',
      redirect: {
        name: page.children[0].name
      }
    })
  } else if (page.path === '/en/guide') {
    page.children.push({
      path: '',
      name: 'Guide-en',
      redirect: {
        name: page.children[0].name
      }
    })
  } else if (page.path === '/zh/docs') {
    page.children.push({
      path: '',
      name: 'Docs',
      redirect: {
        name: page.children[0].name
      }
    })
  } else if (page.path === '/en/docs') {
    page.children.push({
      path: '',
      name: 'Docs-en',
      redirect: {
        name: page.children[0].name
      }
    })
  } else if (page.path === '/zh/resource') {
    page.children.push({
      path: '',
      name: 'Resource',
      redirect: {
        name: page.children[0].name
      }
    })
  } else if (page.path === '/en/resource') {
    page.children.push({
      path: '',
      name: 'Resource-en',
      redirect: {
        name: page.children[0].name
      }
    })
  }
}

export default new Router({
  mode: 'hash', // hash模式
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: '',
  // root: process.env.serverConfig.portalPrefix,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return { x: 0, y: 0 }
  }
})
