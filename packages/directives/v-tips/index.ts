/*
 * @Author: Mark
 * @Date: 2020-06-28 00:53:25
 * @LastEditors: Mark
 * @LastEditTime: 2020-06-28 21:49:08
 * @Description: v-tips
 * TODO: 待完善
 */
import { createPopper } from '@popperjs/core'
let popperInstance = null

export default {
  install(Vue: any) {
    Vue.directive('tips', {
      bind: function(el, binding, vnode) {
        const tooltip = document.createElement('div')
        const tooltipArrow = document.createElement('div')
        tooltip.innerHTML = binding.value
        tooltip.className = 'tooltip'
        tooltipArrow.className = 'arrow'
        tooltip.appendChild(tooltipArrow)
        el.appendChild(tooltip)
        function create() {
          popperInstance = createPopper(el, tooltip, {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [18, 8]
                }
              }
            ]
          })
        }
        function show() {
          tooltip.setAttribute('data-show', '')
          create()
        }

        function hide() {
          tooltip.removeAttribute('data-show')
        }

        const showEvents = ['mouseenter', 'focus']
        const hideEvents = ['mouseleave', 'blur']

        showEvents.forEach((event) => {
          el.addEventListener(event, show)
        })

        hideEvents.forEach((event) => {
          el.addEventListener(event, hide)
          if (popperInstance) {
            popperInstance.destroy()
            popperInstance = null
          }
        })

        // console.log('bind:el', el)
        // console.log('bind:binding', binding)
        // console.log('bind:vnode', vnode)
      },

      update: function(el, binding) {
        // console.log('update:el', el)
        // console.log('update:binding', binding)
      },

      unbind: function(el, binding) {
        if (popperInstance) {
          popperInstance.destroy()
          popperInstance = null
        }
        // console.log('unbind:el', el)
        // console.log('unbind:binding', binding)
        const showEvents = ['mouseenter', 'focus']
        const hideEvents = ['mouseleave', 'blur']

        showEvents.forEach((event) => {
          el.removeEventListener(event, () => {})
        })

        hideEvents.forEach((event) => {
          el.addEventListener(event, () => {})
        })
      }
    })
  }
}
