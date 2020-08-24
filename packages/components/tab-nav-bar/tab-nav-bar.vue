<!--
 * @Author: Mark
 * @Date: 2020-07-12 23:14:10
 * @LastEditors: Mark
 * @LastEditTime: 2020-08-13 23:15:43
 * @Description: tab-nav-bar
-->
<template>
  <div
    :class="['ce-tabs-nav--nav-bar', { ...navBarCss }]"
    :style="{ ...navBarStyle }"
  ></div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { CSSStyle, EmptyObject } from '@lib/ts-utils/types'
@Component({
  name: 'TabNavBar'
})
export default class TabNavBar extends Vue {
  /**
   * nav-bar-CSS
   */
  @Prop({
    required: true,
    default: () => {
      return {}
    },
    type: Object
  })
  private navBarCss!: EmptyObject<boolean>
  /**
   * nav-bar-style
   */
  @Prop({
    required: true,
    default: () => {
      return {}
    },
    type: Object
  })
  private navBarStyle!: CSSStyle
}
</script>
