/*
 * @Author: Mark
 * @Date: 2020-06-28 00:53:25
 * @LastEditors: Mark
 * @LastEditTime: 2021-01-08 16:45:55
 * @Description: v-loading
 */

import Loading from '@lib/components/loading/index'
import { GlobalInstance, LoadingInstance } from './type'
import Vue, { VueConstructor, VNodeDirective, VNode } from 'vue'
import { addClass, removeClass, afterLeave } from '@lib/ts-utils/dom'

const Loading_ = Vue.extend(Loading)
let globalInstance: GlobalInstance = {}
/**
 * 切换loading
 * @param instance
 * @param el
 * @param binding
 * @param vm
 */
const toggleLoading = (
  instance: LoadingInstance,
  el: Element,
  binding: VNodeDirective,
  vm: VNode
) => {
  const { modifiers, value } = binding
  if (value) {
    Vue.nextTick(() => {
      let el_ = el
      if (modifiers?.full) {
        el_ = document.body
      }
      if (!globalInstance.domVisible) {
        removeClass(el, 'ce-mask--father')
      }
      addClass(el, 'ce-mask--father')
      // 后期会扩展类似element-ui body操作
      insertDom(el_, instance, binding, vm)
    })
  } else {
    afterLeave(
      instance,
      () => {
        if (!globalInstance.hide) return
        globalInstance.domVisible = false
        globalInstance.hide = false
      },
      300,
      true
    )
    instance.visible = false
    globalInstance.hide = true
  }
}
/**
 * 插入dom
 * @param el
 * @param instance
 * @param binding
 * @param vm
 */
const insertDom = (
  el: Element,
  instance: LoadingInstance,
  binding: VNodeDirective,
  vm: VNode
) => {
  const { modifiers, value } = binding
  if (!value) return
  // 给父级元素挂载样式
  if (!globalInstance.domInserted) {
    console.log('111', modifiers)
    console.log('111', value)

    el.appendChild(instance.$el)
    // 标识已插入
    globalInstance.domInserted = true
    globalInstance.domVisible = true
    afterLeave(
      instance,
      () => {
        // 解除事件订阅
        instance.$destroy()
        // 修改关闭loading
        instance.visible = false
        // 隐藏
        addClass(instance.$el, 'ce-mask--hide')
        // 调用回调函数
        value.close.call(vm)
        setTimeout(() => {
          // 删除class
          removeClass(el, 'ce-mask--father')
          globalInstance?.el?.parentNode?.removeChild(globalInstance.el)
        }, 500)
      },
      +value?.delay || 0
    )
  }
  // 异步渲染，插入dom
  Vue.nextTick(() => {
    if (instance.domVisible) return
    if (instance.hide) {
      instance.$emit('after-leave')
    } else {
      instance.visible = true
    }
  })
}

export default {
  install(Vue: VueConstructor): void {
    Vue.directive('loading', {
      bind(el: Element, binding: VNodeDirective, VNode: VNode) {
        const { modifiers, value } = binding
        const { show, theme, text } = value
        if (!show) return
        const vm = VNode.context
        // 在挂载时，就将数据传递进去
        const Loading_Ins = new Loading_({
          el: document.createElement('div'),
          data: {
            fullscreen: modifiers?.full,
            theme,
            text: text || vm?.$t('loading.text'),
            visible: false
          }
        })
        globalInstance.instance = Loading_Ins
        globalInstance.el = Loading_Ins.$el
        toggleLoading(Loading_Ins, el, binding, VNode)
        console.log('bind:el', el)
        console.log('bind:binding', binding)
        console.log('bind:VNode', VNode)
      },
      inserted(el: Element, binding: VNodeDirective, VNode: VNode) {
        console.log('inserted:el', el)
        console.log('inserted:binding', binding)
        console.log('inserted:VNode', VNode)
      },
      update(el: Element, binding: VNodeDirective) {
        console.log('update:el', el)
        console.log('update:binding', binding)
      },

      unbind(el, binding) {
        if (globalInstance.domInserted) {
          removeClass(el, 'ce-mask--father')
          // 删除
          el?.parentNode?.removeChild(el)
          globalInstance = {}
        }

        console.log('unbind:el', el)
        console.log('unbind:binding', binding)
      }
    })
  }
}
