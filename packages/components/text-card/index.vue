<template>
  <ce-base-card v-bind="propsData">
    <span
      v-if="$slots.content || message"
      slot="body"
    >{{ message }}</span>
    <slot
      v-if="$slots.content && !message"
      name="content"
      slot="body"
    ></slot>
  </ce-base-card>
</template>
<script lang="ts">
import Vue from 'vue'
import { filterData } from '@lib/ts-utils/index'
import Component from 'vue-class-component'
import { Emit, Prop } from 'vue-property-decorator'

@Component({
  name: 'TextCard'
})
export default class TextCard extends Vue {
  @Prop({ required: false, default: '', type: String }) private message?: string
  get propsData(): { [key: string]: any } {
    return filterData(this.$props, (key) => {
      return key !== 'message'
    })
  }
}
</script>
