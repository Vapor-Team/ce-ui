<template>
  <div class="btn-group-demo">
    <ce-button-group :size="size" :gap="gap">
      <slot></slot>
    </ce-button-group>
  </div>
</template>

<script>
export default {
  name: 'ce-button-group-zh',
  props: {
    size: {
      type: String
    },
    gap: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {}
  },
  created() {}
}
</script>

<style lang="stylus" scoped>
.btn-group-demo
  margin 10px
</style>
