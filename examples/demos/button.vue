<template>
  <!-- <div class="button-demo"> -->
    <ce-button
      :type="type"
      :size="size"
      :disabled="disabled"
      :round="round"
      :circle="circle"
      :icon="icon"
      :shadow="shadow"
      :plain="plain"
      :square="square"
      :opacity="opacity"
      :loading="loading"
      :hollow="hollow"
      :autofocus="autofocus"
      :nativeType="nativeType"
    >
      <slot></slot>
    </ce-button>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'ce-button-zh',
  props: {
    type: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    size: {
      type: String
    },
    round: {
      type: Boolean
    },
    circle: {
      type: Boolean
    },
    icon: {
      type: String
    },
    shadow: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    hollow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  created() {}
}
</script>

<style lang="stylus">
.button-demo
  display inline-block
  margin 10px 5px
</style>
