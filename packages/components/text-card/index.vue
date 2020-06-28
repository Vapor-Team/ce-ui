<template>
  <ce-base-card v-bind="propsData">
    <span
      v-if="$slots.content"
      slot="body"
    >{{ message }}</span>
    <slot name="content"></slot>
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
