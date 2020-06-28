/**
 * Create a basic component with common options
 */
import { nameConvert } from './index'
/**
 * 创建组件方法
 * @param sfc
 * TODO: sfc类型待调整
 */
export const CreateComponents = (sfc: any) => {
  return {
    name: `ce-${nameConvert(sfc.extendOptions.name, { separator: '-' })}`,
    install:
      sfc.install ||
      function(this: any, vue: any) {
        // TODO: this类型待调整
        const { name } = this
        vue.component(name, this.component)
      },
    component: sfc
  }
}
