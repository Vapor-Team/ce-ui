/*
 * @Author: Mark
 * @Date: 2020-06-28 00:53:25
 * @LastEditors: Mark
 * @LastEditTime: 2021-03-08 11:21:26
 * @Description: v-tips
 * TODO: 待完善
 */

import { createPopper } from '@popperjs/core'
import type { Placement, Options } from '@popperjs/core'
import Vue, { VNodeDirective, VueConstructor } from 'vue'

let popperInstance: any = null
export default {
  install(Vue: VueConstructor): void {
    Vue.directive('tips', {
      bind(el: Element, binding: VNodeDirective) {
        const { value } = binding
        const { text } = value
        if (!text) return

        // 创建容器
        const tooltip = document.createElement('span')
        const container = document.createDocumentFragment()
        const tooltipArrow = document.createElement('span')
        tooltip.innerHTML = value.text
        tooltip.className = 'v-tooltip'
        tooltipArrow.className = 'v-tooltip__arrow'
        tooltipArrow.setAttribute('data-popper-arrow', '')
        tooltip.appendChild(tooltipArrow)
        container.appendChild(tooltip)
        el.appendChild(container)

        /**
         * 创建
         */
        const create = () => {
          popperInstance = createPopper(el, tooltip, {
            placement: (value?.placement as Placement) || 'auto', // 选择放置位置
            strategy: 'fixed',
            modifiers: [
              // 设置offset值
              {
                name: 'offset',
                options: {
                  offset: ({ placement, popper }: { [key: string]: any }) => {
                    // 选择放置位置, 计算偏移值，y和x
                    switch (placement) {
                      case 'auto':
                        return [18, popper.height / 2]
                      case 'auto-start':
                        return [18, popper.height / 2]
                      case 'auto-end':
                        return [18, popper.height / 2]

                      case 'bottom':
                        return [18, popper.height / 2]
                      case 'bottom-start':
                        return [18, popper.height / 2]
                      case 'bottom-end':
                        return [18, popper.height / 2]

                      case 'top':
                        return [0, popper.height / 3]
                      case 'top-start':
                        return [0, popper.height / 3]
                      case 'top-end':
                        return [0, popper.height / 3]

                      case 'right':
                        return [0, popper.height / 3]
                      case 'right-start':
                        return [0, popper.height / 3]
                      case 'right-end':
                        return [0, popper.height / 3]

                      case 'left':
                        return [2, popper.height / 4]
                      case 'left-start':
                        return [0, popper.height / 3]
                      case 'left-end':
                        return [0, popper.height / 3]
                      default:
                        return []
                    }
                  }
                }
              },
              {
                name: 'topLogger',
                enabled: true,
                phase: 'main',
                fn({ state }) {
                  console.log(state)
                  if (state.placement === 'top') {
                    console.log('Popper is on the top')
                  }
                }
              },
              // 小三角
              {
                name: 'arrow',
                options: {
                  element: tooltipArrow
                }
              },
              {
                name: 'applyArrowHide',
                enabled: true,
                phase: 'write',
                fn({ state }) {
                  const { arrow } = state.elements
                  if (arrow) {
                    if (state?.modifiersData?.arrow?.centerOffset !== 0) {
                      arrow.setAttribute('data-hide', '')
                    } else {
                      arrow.removeAttribute('data-hide')
                    }
                  }
                }
              },
              {
                name: 'preventOverflow',
                options: {
                  tetherOffset: ({ popper }: { [key: string]: any }) =>
                    popper.width / 2
                }
              },
              {
                // 这决定了是否使用 gpu 加速的样式来定位弹出窗口。
                name: 'computeStyles',
                options: {
                  gpuAcceleration: true, // true by default
                  adaptive: false, // true by default
                  roundOffsets: true
                }
              },
              {
                name: 'flip',
                options: {
                  fallbackPlacements: ['top', 'bottom'],
                  allowedAutoPlacements: ['top', 'bottom'],
                  altBoundary: true,
                  rootBoundary: el
                }
              }
            ]
          } as Options)
        }

        const show = () => {
          tooltip.setAttribute('data-show', '')
          create()
        }

        const hide = () => {
          tooltip.removeAttribute('data-show')
        }

        const chaneText = () => {
          
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
      },

      update(el: Element, binding: VNodeDirective) {
        if (
          binding.oldValue.placement === binding.value.placement ||
          binding.oldValue.text === binding.value.text
        )
          return
        else {
          console.log('22')
        }
      },

      unbind(el: Element, binding: VNodeDirective) {
        if (popperInstance) {
          popperInstance.destroy()
          popperInstance = null
        }
        const showEvents = ['mouseenter', 'focus']
        const hideEvents = ['mouseleave', 'blur']

        showEvents.forEach((event) => {
          el.removeEventListener(event, () => {
            return {}
          })
        })

        hideEvents.forEach((event) => {
          el.addEventListener(event, () => {
            return {}
          })
        })
      }
    })
  }
}
