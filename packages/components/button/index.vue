<template>
  <div
    @click="$emit('click')"
    class="ce-button"
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
        'is-circle': circle
      }
    ]"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Emit, Prop } from 'vue-property-decorator'

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
}
</script>
