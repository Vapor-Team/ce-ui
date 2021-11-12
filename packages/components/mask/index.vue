<template>
  <div
    :class="['ce-mask', themeCss, { 'is-full': fullscreen }]"
    @click.prevent="maskEvent({ event: $event, type: 'click' })"
    @mousewheel.prevent="maskEvent({ event: $event, type: 'mousewheel' })"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { MaskEvent } from './type'
import { Emit, Prop } from 'vue-property-decorator'
@Component({
  name: 'MaskContent'
})
export default class MaskContent extends Vue {
  @Prop({ required: false, default: false, type: Boolean })
  private fullscreen?: boolean

  @Prop({ required: false, type: String })
  private theme?: string

  private get themeCss(): string {
    let str = 'is-black'
    switch (this.theme) {
      case 'light':
        str = 'is-light'
        break
      case 'black':
        str = 'is-black'
        break

      default:
        str = 'is-black'
        break
    }
    console.log('222', str)
    return str
  }

  @Emit('mask-event')
  maskEvent(data: MaskEvent): Promise<MaskEvent> {
    return new Promise((reslove) => {
      reslove(data)
    })
  }
}
</script>
