<template>
  <transition name="ce-loading-fade" @after-leave="handleAfterLeave">
    <ce-mask-content
      v-show="visible"
      :fullscreen="fullscreen"
      @mask-event="maskEvent"
    >
      <div class="ce-loading">
        <span v-if="!spinner" class="ce-loading__spinner"></span>
        <span v-else :class="spinner"></span>
        <span v-if="text" class="ce-loading__text">{{ text }}</span>
      </div>
    </ce-mask-content>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Emit } from 'vue-property-decorator'
import { MaskEvent } from '../mask/type'

@Component({
  name: 'Loading'
})
export default class Loading extends Vue {
  private customClass?: string = ''
  private fullscreen?: boolean = false
  private text?: string = ''
  private visible = false
  private spinner = null
  private background = null

  @Emit('mask-event')
  maskEvent(events: MaskEvent): Promise<MaskEvent> {
    return new Promise((reslove) => {
      reslove(events)
    })
  }

  @Emit('end')
  private handleAfterLeave(events: unknown): Promise<unknown> {
    return new Promise((reslove) => {
      reslove(events)
    })
  }

  public setText(text: string): void {
    this.text = text
  }
}
</script>
