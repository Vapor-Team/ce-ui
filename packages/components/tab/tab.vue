<!--
 * @Author: Mark
 * @Date: 2020-07-12 23:14:10
 * @LastEditors: Mark
 * @LastEditTime: 2020-08-13 23:39:54
 * @Description: tabs
-->
<template>
  <div
    :class="[
      'ce-tabs-box',
      {
        'is-radius': radius,
        'is-shadow': shadow,
        'is-border': border,
        ...tabPositionTabBoxCSS
      }
    ]"
  >
    <div :class="['ce-tabs-nav', { ...tabPositionTabNavCSS }]">
      <ce-tab-nav
        v-for="(item, key) in TabItems"
        :options="{
          name: item.name_,
          label: item.label,
          index: key
        }"
        :key="key"
        :ref="`tab-nav-item-${item.name_}`"
        v-on="{
          'tab-nav-click': onTabNavClick,
          'tab-nav-enter': onMouseEnter,
          'tab-nav-leave': onMouseLeave
        }"
      >
        <!-- TODO: 待判断性能 -->
        <component
          v-if="item.$slots.label"
          slot="label"
          :is="renderSlot(item.$slots.label)"
        ></component>
      </ce-tab-nav>
      <span
        :class="['ce-tab-nav-bar-line', { ...tabPositionTabNavBarCSS }]"
      ></span>
      <ce-tab-nav-bar
        :nav-bar-css="tabPositionTabNavBarCSS"
        :navBarStyle="tabNavBarStyle"
      ></ce-tab-nav-bar>
    </div>
    <div class="ce-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { TabNavEvent } from './type'
import { log } from '@lib/ts-utils/index'
import Component from 'vue-class-component'
import { CSSStyle, EmptyObject } from '@lib/ts-utils/types'
import { Emit, Prop, Model, ProvideReactive } from 'vue-property-decorator'

@Component({
  name: 'Tab',
  /**
   * 向子孙组件注入数据
   */
  inject: []
})
export default class Tab extends Vue {
  /**
   * is-shadow
   */
  @Prop({ required: false, default: true, type: Boolean })
  private shadow?: boolean
  /**
   * is-border
   */
  @Prop({ required: false, default: false, type: Boolean })
  private border?: boolean
  /**
   * is-radius
   */
  @Prop({ required: false, default: true, type: Boolean })
  private radius?: boolean
  /**
   * tab-position
   */
  @Prop({ required: false, default: 'top', type: String })
  private tabPosition?: string

  private TabItems: Array<any> = []
  public tabNavBarStyle: CSSStyle = {}

  @Emit('tab-nav-enter')
  private onMouseEnter(events: TabNavEvent): Promise<TabNavEvent> {
    return new Promise((reslove) => {
      reslove(events)
    })
  }

  @Emit('tab-nav-leave')
  private onMouseLeave(events: TabNavEvent): Promise<TabNavEvent> {
    return new Promise((reslove) => {
      reslove(events)
    })
  }

  // 定义v-model
  @Model('change', {
    type: [String, Number]
  })
  readonly value!: string | number

  @Emit('change')
  onCurrentNameChange(): string | number {
    return this.currentName
  }

  private get tabPositionTabBoxCSS(): EmptyObject<boolean> {
    let obj: EmptyObject<boolean> = {}
    switch (this.tabPosition) {
      case 'top':
        obj = { 'is-col': true }
        break
      case 'bottom':
        obj = { 'is-col-reserve': true }
        break
      case 'left':
        obj = { 'is-row': true }
        break
      case 'right':
        obj = { 'is-row-reserve': true }
        break
      default:
        obj = { 'is-col': true }
        break
    }
    return obj
  }

  private get tabPositionTabNavCSS(): EmptyObject<boolean> {
    let obj: EmptyObject<boolean> = {}
    switch (this.tabPosition) {
      case 'top':
        obj = { 'is-row': true }
        break
      case 'bottom':
        obj = { 'is-row-reserve': true }
        break
      case 'left':
        obj = { 'is-col': true, 'is-col-left': true }
        break
      case 'right':
        obj = { 'is-col': true, 'is-col-right': true }
        break
      default:
        obj = { 'is-row': true }
        break
    }
    return obj
  }

  private get tabPositionTabNavBarCSS(): EmptyObject<boolean> {
    let obj: EmptyObject<boolean> = {}
    switch (this.tabPosition) {
      case 'top':
      case 'bottom':
        obj = { 'is-row': true }
        break
      case 'left':
        obj = { 'is-col-left': true }
        break
      case 'right':
        obj = { 'is-col-right': true }
        break
      default:
        obj = { 'is-row': true }
        break
    }
    return obj
  }

  /**
   * 向子孙组件注入
   */
  @ProvideReactive('currentName') currentName: string | number = this.value

  mounted(): void {
    /**
     * 计算slots数据渲染nav
     */
    this.calcItemInstances()
    this.$nextTick().then(() => {
      // 设置nav-bar位置
      const el = this.$refs[`tab-nav-item-${this.currentName}`] as Vue[]
      if (el) this.setTabNavBarStyle(el[0].$el as HTMLElement)
      else
        log(
          'error',
          '`el` get failed! Because `currentName` is not in the data !'
        )
    })
  }

  updated(): void {
    this.calcItemInstances()
  }

  @Emit('tab-nav-click')
  private onTabNavClick(events: TabNavEvent): Promise<TabNavEvent> {
    if (this.currentName === events.name) {
      return new Promise((reslove) => {
        reslove(events)
      })
    }

    this.currentName = events.name
    this.onCurrentNameChange()
    /**
     * 设置nav-bar
     */
    const el = events.event.currentTarget as HTMLElement
    this.setTabNavBarStyle(el)
    return new Promise((reslove) => {
      reslove(events)
    })
  }

  private setTabNavBarStyle(el: HTMLElement) {
    if (el && el instanceof HTMLElement) {
      let obj: CSSStyle = {}
      switch (this.tabPosition) {
        case 'top':
        case 'bottom':
          obj = {
            width: `${el.clientWidth}px`,
            transform: `translateX(${el.offsetLeft}px)`
          }
          break
        case 'left':
          obj = {
            transform: `translate(1px, ${el.offsetTop}px)`
          }
          break
        case 'right':
          obj = {
            transform: `translate(-1px, ${el.offsetTop}px)`
          }
          break
        default:
          obj = {
            width: `${el.clientWidth}px`,
            transform: `translateX(${el.offsetLeft}px)`
          }
          break
      }
      this.tabNavBarStyle = obj
    }
  }

  /**
   * 计算tabItem数量
   */
  private calcItemInstances(isForceUpdate = false) {
    if (this.$slots.default) {
      /**
       * 获取slots
       */
      const TabItemsSlots = this.$slots.default.filter(
        (vnode) =>
          vnode.tag &&
          vnode.componentOptions &&
          vnode.componentOptions.tag === 'ce-tab-item'
      )
      const TabItems = TabItemsSlots.map(
        ({ componentInstance }, index: number) => {
          /**
           * name 未设置，设置成索引
           */
          if (componentInstance) {
            if (!Reflect.get(componentInstance, 'name')) {
              Reflect.set(componentInstance, 'name_', index)
            }
          }
          return componentInstance
        }
      )
      const tabItemChanged = !(
        TabItems.length === this.TabItems.length &&
        TabItems.every((tabItem, index) => tabItem === this.TabItems[index])
      )
      if (isForceUpdate || tabItemChanged) {
        this.TabItems = TabItems
      }
    } else if (this.TabItems.length !== 0) {
      this.TabItems = []
    }
  }

  /**
   * TODO: 可通过渲染注册组件返回的函数使用动态组件渲染
   */
  private renderSlot(slot: Vue.VNode[]): Vue.VueConstructor {
    return Vue.extend({
      render(createElement) {
        return createElement(
          'div', // 标签名称
          slot // VNode
        )
      }
    })
  }
}
</script>
