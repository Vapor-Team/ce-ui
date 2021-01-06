// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n'
import Clipboard from 'v-clipboard'
import CeUi from '@lib/index'
import '@theme/lib/index.css'
import '@pc/assets/css/index.styl'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
import '@vapor-team/iconfont/lib/index.css'
import '@vapor-team/iconfont/lib/iconfont.min.js'

Vue.config.productionTip = false
Vue.use(Clipboard)
Vue.use(CeUi)

function importDemos(component) {
  // 在遍历的时候多注册一个 demoBlock组件
  return [
    import('./components/demo-block.vue'),
    ...component.keys().map((key) => {
      return component(key)
    })
  ]
}
importDemos(require.context('@examples/demos', true, /\.vue$/, 'lazy')).forEach(
  (_) => {
    _.then((component) => {
      const component_ = component.default
      Vue.component(component_.name, component_)
    })
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  ...App
})
