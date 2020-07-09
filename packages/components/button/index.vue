<template>
  <button
    @click="onClick"
    class="ce-button"
    :disabled="disabled || loading || iconloading"
    :autofocus="autofocus"
    :type="nativeType"
    :loadingscale="loading ? loadingscale : ''"
    :loadingbgc="loading ? loadingbgc : ''"
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
        'is-hollow': hollow,
        'is-loading': loading
      }
    ]"
  >
    <div
      v-if="loading"
      :id="loadersCss"
      :style="loadingStyle"
      class="ball-spin-fade-loader"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <i class="ce-icon-loading" v-if="iconloading"></i>
    <i class="ce-button__icon icon" :class="icon" v-if="icon && !loading"></i>
    <span :class="loading ? 'ce-button__text' : ''" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Emit, Prop } from 'vue-property-decorator'

@Component({
  name: 'Button'
})
export default class Button extends Vue {
  loadingStyle: object = {}
  loadersCss: string = new Date().getTime().toString()

  @Prop({ required: false, default: 'default', type: String })
  private type?: string
  @Prop({ required: false, default: 'default', type: String })
  private size?: string
  @Prop({ required: false, default: true, type: Boolean })
  private shadow?: boolean
  @Prop({ required: false, default: false, type: Boolean })
  private disabled!: boolean
  @Prop({ required: false, default: false, type: Boolean })
  private plain?: boolean
  @Prop({ required: false, default: false, type: Boolean })
  private square?: boolean
  @Prop({ required: false, default: false, type: Boolean })
  private opacity?: boolean
  @Prop({ required: false, default: true, type: Boolean })
  private round?: boolean
  @Prop({ required: false, default: false, type: Boolean })
  private circle?: boolean
  @Prop({ required: false, default: false, type: Boolean })
  private iconloading?: boolean
  @Prop({ required: false, default: false, type: Boolean })
  private loading?: boolean
  @Prop({ required: false, default: '', type: String }) private icon?: string
  @Prop({ required: false, default: false, type: Boolean })
  private autofocus?: boolean
  @Prop({ required: false, default: 'button', type: String })
  private nativeType?: string
  @Prop({ required: false, default: false, type: Boolean })
  private hollow?: boolean
  @Prop({ required: false, default: 0.5, type: Number })
  private loadingscale?: number
  @Prop({ required: false, default: '#fff', type: String })
  private loadingbgc?: string

  @Emit('click')
  onClick(event: MouseEvent): Promise<MouseEvent> {
    if (event instanceof MouseEvent) event.preventDefault()
    return new Promise((resolve) => {
      resolve(event)
    })
  }

  created() {
    this.loadersCss = new Date().getTime().toString()
    console.log(this.loadersCss)
  }

  mounted() {
    this.loadingStyle = {
      transform: `scale(${this.loadingscale})`
    }
    if (this.loading) {
      // console.log(this.loading)
      const loadersCssChildren: HTMLElement | null = document.getElementById(
        this.loadersCss
      )
      if (loadersCssChildren) {
        const list = loadersCssChildren.children
        for (let i = 0; i < list.length; i++) {
          const a = list[i] as HTMLElement
          // console.log(a, this.loadingbgc)
          if (this.loadingbgc) {
            a.style.background = this.loadingbgc
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.ce-icon-loading
  display inline-block
  line-height 1
  -webkit-animation loadingCircle 1s linear infinite
  animation loadingCircle 1s linear infinite

@keyframes loadingCircle
  0%
    transform rotate(0)

  100%
    transform rotate(1turn)

.padding-box
  padding 16px 25px
</style>
