/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import { BaseCard, Button, Icon, Loading, Tab, TabItem, TabNav, TabNavBar, TextCard } from './components'
import { VTips } from './directives'
const version = '0.0.1'
const components = [ BaseCard, Button, Icon, Loading, Tab, TabItem, TabNav, TabNavBar, TextCard ]
const directives = [ VTips ]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
  directives.forEach(Directive => {
    Vue.use(Directive)
  })
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  BaseCard,
  Button,
  Icon,
  Loading,
  Tab,
  TabItem,
  TabNav,
  TabNavBar,
  TextCard,
  VTips
}
export default {
  install,
  version,
  BaseCard,
  Button,
  Icon,
  Loading,
  Tab,
  TabItem,
  TabNav,
  TabNavBar,
  TextCard,
  VTips
}