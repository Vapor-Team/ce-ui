<!--
 * @Author: Mark
 * @Date: 2020-07-12 23:14:10
 * @LastEditors: Mark
 * @LastEditTime: 2020-08-13 23:15:11
 * @Description: tabs
-->
<template>
  <div
    v-show="isShowNode"
    :class="['ce-tabs-nav--item', { 'is-active': isActive }]"
    @click="tabNavClick($event, { ...options })"
    @mouseenter="tabNavEnter($event, { ...options })"
    @mouseleave="tabNavLeave($event, { ...options })"
  >
    <slot v-if="!isShowLabel" name="label"></slot>
    <span v-if="isShowLabel" class="ce-tabs-nav--title">{{
      options.label
    }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TabNavEvent, TabNavOptions } from '../tab/type'
import Component from 'vue-class-component'
import { Emit, Prop, InjectReactive } from 'vue-property-decorator'

@Component({
  name: 'TabNav'
})
export default class TabNav extends Vue {
  @Prop({
    required: false,
    default: () => {
      return {}
    }
  })
  options!: TabNavOptions
  @Emit('tab-nav-enter')
  private tabNavEnter(
    event: MouseEvent,
    data: TabNavOptions
  ): Promise<TabNavEvent> {
    return new Promise((reslove) => {
      reslove({ event, ...data })
    })
  }

  @Emit('tab-nav-leave')
  private tabNavLeave(
    event: MouseEvent,
    data: TabNavOptions
  ): Promise<TabNavEvent> {
    return new Promise((reslove) => {
      reslove({ event, ...data })
    })
  }

  @Emit('tab-nav-click')
  private tabNavClick(
    event: MouseEvent,
    data: TabNavOptions
  ): Promise<TabNavEvent> {
    return new Promise((reslove) => {
      reslove({ event, ...data })
    })
  }

  /**
   * 选中状态
   */
  @InjectReactive({ from: 'currentName' })
  currentName!: string | number

  get isActive(): boolean {
    return this.options.name === this.currentName
  }

  get isShowNode(): boolean {
    return Boolean(this.$slots.label || this.options.label)
  }

  get isShowLabel(): boolean {
    return Boolean(!this.$slots.label && this.options.label)
  }

  get label(): string {
    return this.options?.label || ''
  }
}
</script>
