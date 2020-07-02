/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import { BaseCard, Button, ButtonGroup, Icon, Loading, TextCard } from './components'
import { VTips } from './directives'
const version = '0.0.1'
const components = [ BaseCard, Button, ButtonGroup, Icon, Loading, TextCard ]
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
  ButtonGroup,
  Icon,
  Loading,
  TextCard,
  VTips
}
export default {
  install,
  version,
  BaseCard,
  Button,
  ButtonGroup,
  Icon,
  Loading,
  TextCard,
  VTips
}