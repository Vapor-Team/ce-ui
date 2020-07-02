<template>
  <button
    @click="onClick"
    class="ce-button"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'ce-button--' + type : '',
      size ? 'ce-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-plain': plain,
        'is-square': square,
        'is-shadow': shadow,
        'is-opacity': opacity,
        'is-round': round,
        'is-circle': circle,
        'is-hollow': hollow
      }
    ]">
    <i class="ce-icon-loading" v-if="loading"></i>
    <i class="ce-button__icon icon" :class="icon" v-if="icon && !loading"></i>
    <span class="ce-button__text" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component'
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'

@Component({
  name: 'Button'
})
export default class Button extends Vue {
  @Prop({ required: false, default: 'default', type: String }) private type?: string
  @Prop({ required: false, default: 'default', type: String }) private size?: string
  @Prop({ required: false, default: true, type: Boolean }) private shadow?: boolean
  @Prop({ required: false, default: false, type: Boolean }) private disabled?: boolean
  @Prop({ required: false, default: false, type: Boolean }) private plain?: boolean
  @Prop({ required: false, default: false, type: Boolean }) private square?: boolean
  @Prop({ required: false, default: false, type: Boolean }) private opacity?: boolean
  @Prop({ required: false, default: true, type: Boolean }) private round?: boolean
  @Prop({ required: false, default: false, type: Boolean }) private circle?: boolean
  @Prop({ required: false, default: false, type: Boolean}) private loading?: boolean
  @Prop({ required: false, default: '', type: String}) private icon?: string
  @Prop({ required: false, default: false, type: Boolean}) private autofocus?: boolean
  @Prop({ required: false, default: 'button', type: String}) private nativeType?: string
  @Prop({ required: false, default: false, type: Boolean }) private hollow?: boolean

  get buttonDisabled () {
    return this.disabled
  }
  // get styleList () {
  //   let userStyle = {}

  //   if (this.style) {
  //     userStyle = this.style
  //   }

  //   return Object.assign(userStyle, {
  //     'marginRight': `${this.$parent.gap}px`
  //   })
  // }
  @Emit('click')
  onClick (event: MouseEvent): Promise<any> {
    if (event instanceof MouseEvent) event.preventDefault()
    return new Promise((resolve) => {
      resolve(event)
    })
  }
}
</script>
