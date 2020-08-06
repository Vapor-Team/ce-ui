<!--
 * @Author: Mark
 * @Date: 2020-07-09 15:26:32
 * @LastEditors: Mark
 * @LastEditTime: 2020-08-06 23:58:48
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
      <use v-if="symbol && !$slots.default" :xlink:href="`#ce-icon--${name}`" />
      <slot v-else></slot>
    </svg>
    <i
      v-if="isNormal"
      :class="['ce-icon__font', 'ce-icon-' + name]"
      :style="{ color }"
    ></i>
  </span>
</template>
<script lang="ts">
import Vue from 'vue'
import '@theme/lib/icon/iconfont.min.js'
import Component from 'vue-class-component'
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
  @Prop({ required: true, type: String }) private name!: string
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
}
</script>
