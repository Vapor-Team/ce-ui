/**
 * Create a basic component with common options
 */
import bem from '../mixins/bem'
import { isDef, nameConvert } from './index'
function install(this: any, vue: any) {
  const { name } = this
  vue.component(name, this.component)
}

function defaultProps(props: any) {
  Object.keys(props).forEach((key) => {
    if (props[key] === Array) {
      props[key] = {
        type: Array,
        default: () => {
          return []
        }
      }
    } else if (props[key] === Number) {
      props[key] = {
        type: Number,
        default: 0
      }
    }
  })
}

export default function(sfc: any) {
  sfc.name = 'ce-' + sfc.name
  sfc.install = sfc.install || install
  sfc.mixins = sfc.mixins || []
  sfc.mixins.push(bem)
  sfc.methods = sfc.methods || {}
  sfc.methods.isDef = isDef
  sfc.props && defaultProps(sfc.props)
  return sfc
}

export const CreateComponents = (sfc: any) => {
  return {
    name: `ce-${nameConvert(sfc.name, { separator: '-' })}`,
    install: sfc.install || install,
    component: sfc
  }
}
