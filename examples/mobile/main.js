// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import CeUi from "@#/index"
import "@#/theme-chalk/lib/ce-ui-index.css"

Vue.use(CeUi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: "#mobile",
  router,
  render: h => {
    return h(App)
  }
})
