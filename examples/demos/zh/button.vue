<template>
  <div class="button-demo">
    <ce-button
      :type="type"
      :size="size"
      :disabled="disabled"
      :round="round"
      :circle="circle"
    >
      <slot></slot>
    </ce-button>
  </div>
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
  margin 10px 5px
</style>
