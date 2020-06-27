<template>
  <div
    :class="b([type, colorType])"
    :style="style"
  >
    <span :class="b('spinner', type)">
      <i
        v-for="(item, index) in (type === 'spinner' ? 12 : 0)"
        :key="index"
      />
      <svg
        v-if="type === 'circular'"
        :class="b('circular')"
        viewBox="25 25 50 50"
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
        />
      </svg>
    </span>
    <svg
      class="disk"
      viewBox="25 25 50 50"
    >
      <circle
        cx="50"
        cy="50"
        r="20"
        fill="none"
      />
    </svg>
  </div>
</template>
<script lang="ts">
const DEFAULT_COLOR = '#2150D8'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Emit, Prop } from 'vue-property-decorator'

@Component({
  name: 'ce-loading'
})
export default class Loading extends Vue {
  @Prop({ required: false, default: '#222', type: String }) private size?: string
  @Prop({ required: false, default: 'circular', type: String }) private color?: string
  @Prop({ required: false, default: DEFAULT_COLOR, type: String })
  private type?: string
  get colorType(): string {
    const { color } = this
    return color === 'white' || color === 'black' ? color : ''
  }
  style(): any {
    return {
      color: this.color === 'black' ? DEFAULT_COLOR : this.color,
      width: this.size,
      height: this.size
    }
  }
}
</script>
