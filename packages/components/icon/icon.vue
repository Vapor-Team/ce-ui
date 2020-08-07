<!--
 * @Author: Mark
 * @Date: 2020-07-09 15:26:32
 * @LastEditors: Mark
 * @LastEditTime: 2020-08-07 13:07:10
 * @Description: icon 组件，组件可自定义svg图标
-->

<template>
  <span
    class="ce-icon"
    :style="{ fontSize: size + 'px' }"
    @click="onClick($event)"
    @mouseenter="onMouseenter($event)"
    @mouseleave="onMouseleave($event)"
  >
    <svg v-if="!isNormal" class="ce-icon__symbol" aria-hidden="true">
      <use
        v-if="symbol && !$slots.default"
        :xlink:href="getIcoName(name, type, '#')"
      />
      <slot v-else></slot>
    </svg>
    <i
      v-if="isNormal"
      :class="['ce-icon__font', getIcoName(name, type)]"
      :style="{ color }"
    ></i>
  </span>
</template>
<script lang="ts">
import Vue from 'vue'
import '@theme/lib/icon/iconfont.min.js'
import Component from 'vue-class-component'
import { IconType } from '@lib/ts-utils/types'
import { Emit, Prop } from 'vue-property-decorator'

@Component({
  name: 'Icon'
})
export default class Icon extends Vue {
  /**
   * is-symbol
   */
  @Prop({ required: false, default: true, type: Boolean })
  private symbol!: boolean
  /**
   * icon-name
   */
  @Prop({ required: false, type: String, default: '' }) private name!: string
  /**
   * font-size
   */
  @Prop({ required: false, default: 16, type: Number || String })
  private size?: number | string
  /**
   * font-color
   */
  @Prop({ required: false, default: '#222', type: String })
  private color?: string
  /**
   * icon-type
   */
  @Prop({ required: false, default: 'outline', type: String })
  private type?: IconType
  /**
   * is-normal
   */
  private get isNormal(): boolean {
    return Boolean(!this.symbol)
  }

  @Emit('click')
  onClick(event: MouseEvent): Promise<MouseEvent> {
    if (event instanceof MouseEvent) event.preventDefault()
    return new Promise((reslove) => {
      reslove(event)
    })
  }

  @Emit('enter')
  onMouseenter(event: MouseEvent): Promise<MouseEvent> {
    if (event instanceof MouseEvent) event.preventDefault()
    return new Promise((reslove) => {
      reslove(event)
    })
  }

  @Emit('leave')
  onMouseleave(event: MouseEvent): Promise<MouseEvent> {
    if (event instanceof MouseEvent) event.preventDefault()
    return new Promise((reslove) => {
      reslove(event)
    })
  }

  getIcoName(name: string, type: string, prefix = ''): string {
    let str = ''
    if (type === 'filled') str = `#ce-icon--${name}`
    if (type === 'sharp' || type === 'outline') {
      str = `#ce-icon--${name}-${type}`
    }
    if (type === 'logo') {
      str = `${prefix}ce-icon--${type}-${name}`
    }
    return str
  }
}
</script>
