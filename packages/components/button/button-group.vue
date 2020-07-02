<template>
  <div
    class="ce-button-group"
    :class="[
      size ? `ce-button-group--${size}` : '' 
    ]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component'
import  { Component, Vue, Emit, Prop } from 'vue-property-decorator'

@Component({
  name: 'ButtonGroup'
})

export default class ButtonGroup extends Vue {
  @Prop({ required: false, default: 'default', type: String}) private size ?: string
  @Prop({ required: false, default: -1, type: Number}) private gap ?: number
}
</script>