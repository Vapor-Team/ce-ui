<!--
 * @Author: Mark
 * @Date: 2020-07-09 15:26:32
 * @LastEditors: Mark
 * @LastEditTime: 2021-03-09 14:01:46
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
      <use v-if="symbol && !$slots.default" :xlink:href="getIcoName" />
      <slot v-else></slot>
    </svg>
    <i
      v-if="isNormal"
      :class="['ce-icon__font', getIcoName]"
      :style="{ color }"
    ></i>
  </span>
</template>
<script lang="ts">
import Vue from 'vue'
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
   * prefix 自定义时使用
   */
  @Prop({ required: false, default: '', type: String })
  private prefix?: string

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

  private get getIcoName(): string {
    let str = ''
    let prefixName = this.prefix ? this.prefix : 'ce-icon--'
    if (this.type === 'filled') str = `#${prefixName}${this.name}`
    if (this.type === 'sharp' || this.type === 'outline') {
      str = `#${prefixName}${this.name}-${this.type}`
    }
    if (this.type === 'logo') {
      str = `#${prefixName}${this.type}-${this.name}`
    }
    return str
  }
}
</script>
