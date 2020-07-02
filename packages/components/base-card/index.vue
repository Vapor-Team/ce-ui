<template>
  <div
    :class="cardCSS"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
  >
    <div
      v-if="$slots.header || $slots.title || title || extra || $slots.extra"
      class="ce-base-card__header"
    >
      <slot
        v-if="$slots.header"
        name="header"
      ></slot>
      <div
        v-if="!$slots.header && ($slots.title || title)"
        class="ce-base-card__header__title"
      >
        <slot
          v-if="$slots.title"
          name="title"
        ></slot>
        <h4>{{ title }}</h4>
      </div>
      <div
        v-if="!$slots.header && ($slots.extra || extra)"
        class="ce-base-card__header__extra"
      >
        <slot
          v-if="$slots.extra"
          name="extra"
        ></slot>
        <span class="ce-base-card__header__extra--text">{{ extra }}</span>
      </div>
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
  name: 'BaseCard'
})
export default class BaseCard extends Vue {
  @Prop({ required: false, default: 'default', type: String }) private type?: string
  @Prop({ required: false, default: () => {}, type: Object }) private styles!: CSSStyle
  @Prop({ required: false, default: 'always', type: String }) private shadow?: string
  @Prop({ required: false, default: '', type: String }) private extra?: string
  @Prop({ required: false, default: '', type: String }) private title?: string
  @Prop({ required: false, default: true, type: Boolean }) private border!: boolean
  @Prop({ required: false, default: true, type: Boolean }) private radius!: boolean
  private get cardThemeClass() {
    return 'ce-base-card--' + this.type
  }
  private get bodyStyles(): CSSStyle {
    let defaultStyles = {}
    return { ...defaultStyles, ...this.styles }
  }
  private get boxShadow(): string {
    let css = ''
    switch (this.shadow) {
      case 'always':
        css = 'is-shadow-always'
        break
      case 'never':
        css = 'is-shadow-never'
        break
      case 'hover':
        css = 'is-shadow-hover'
        break
      default:
        css = 'is-shadow-always'
        break
    }
    return css
  }
  private get cardCSS(): { [key: string]: Boolean } {
    return {
      'ce-base-card': true,
      'ce-base-card--border': this.border,
      'ce-base-card--radius': this.radius,
      [this.cardThemeClass]: true,
      [this.boxShadow]: true
    }
  }
  @Emit('enter')
  private onMouseenter(event: MouseEvent): Promise<any> {
    if (event instanceof MouseEvent) event.preventDefault()
    return new Promise((reslove) => {
      reslove(event)
    })
  }
  @Emit('leave')
  private onMouseleave(event: MouseEvent): Promise<any> {
    if (event instanceof MouseEvent) event.preventDefault()
    return new Promise((reslove) => {
      reslove(event)
    })
  }
}
</script>
