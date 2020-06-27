<template>
  <div :class="[ 'ce-base-card', 'ce-base-card--radius', cardThemeClass, ...boxShadow ]">
    <div
      v-if="$slots.header"
      class="ce-base-card__header"
    >
      <slot name="header"></slot>
    </div>
    <div
      v-if="$slots.body"
      class="ce-base-card__body"
      :style="{...bodyStyles}"
    >
      <slot name="body"></slot>
    </div>
    <div
      v-if="$slots.footer"
      class="ce-base-card__footer ce-base-card__footer--content"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Emit, Prop } from 'vue-property-decorator'
import { CSSStyle } from './type'
@Component({
  name: 'ce-base-card'
})
export default class BaseCard extends Vue {
  @Prop({ required: false, default: 'default', type: String }) private type?: string
  @Prop({ required: false, default: () => {}, type: Object }) private styles?: CSSStyle
  @Prop({ required: false, default: 'always', type: String }) private shadow?: string
  private get cardThemeClass() {
    return 'ce-base-card--' + this.type
  }
  private get bodyStyles(): CSSStyle {
    let defaultStyles = {}
    return { ...defaultStyles, ...this.styles }
  }
  private get boxShadow(): Array<string> {
    if (this.shadow) {
      if (this.shadow === 'always') {
        return ['is-always']
      } else if (this.shadow === 'never') {
        return ['is-never']
      } else if (this.shadow === 'hover') {
        return ['is-hover']
      } else {
        return ['is-always']
      }
    } else {
      return ['is-always']
    }
  }
}
</script>
