
/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import { BaseCard, Button, Icon, Loading, TextCard } from './components'
const version = '0.0.1'
const components = [BaseCard, Button, Icon, Loading, TextCard]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
};
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
  TextCard
}
export default {
  install,
  version,
  BaseCard,
  Button,
  Icon,
  Loading,
  TextCard
}
