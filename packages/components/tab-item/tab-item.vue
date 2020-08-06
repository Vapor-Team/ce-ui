<!--
 * @Author: Mark
 * @Date: 2020-07-12 23:14:10
 * @LastEditors: Mark
 * @LastEditTime: 2020-08-06 21:05:06
 * @Description: tabs-item
-->
<template>
  <div
    v-show="isActive"
    :class="{ 'ce-tab-item-content': true, 'is-active': isActive }"
  >
    <transition name="fade">
      <div v-show="isActive">
        <slot
          v-bind="{
            $slots,
            data: {
              active: isActive,
              name: name_,
              label
            }
          }"
        ></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Prop, Vue, InjectReactive } from 'vue-property-decorator'
import { log } from '@lib/ts-utils/index'
@Component({
  name: 'TabItem'
})
export default class TabItem extends Vue {
  @Prop({
    required: false,
    type: String,
    default: ''
  })
  private label?: string
  /**
   * 标识名称
   */
  @Prop({
    required: false,
    type: [String, Number],
    default: ''
  })
  private name!: string | number
  private name_: string | number = this.name
  /**
   * 选中状态
   */
  @InjectReactive({ from: 'currentName' })
  currentName!: string | number

  private get isActive(): boolean {
    return this.name_ === this.currentName
  }

  created(): void {
    for (let key of ['label', 'name']) {
      if (!Reflect.get(this, key)) {
        log('warn', `'tab-item' not set ${key}`)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.fade-enter-active
  transition all 0.3s linear

.fade-leave-active
  transition all 0.3s linear

.fade-enter, .fade-leave-active
  opacity 0
</style>
