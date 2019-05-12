<template>
  <div class="button-demo">
    <ce-button :type="type" :size="size" :disabled="disabled">
      <slot></slot>
    </ce-button>
  </div>
</template>

<script>
export default {
  name: "ce-button-zh",
  props: {
    type: {
      type: String
    },
    disabled: {
      type: String
    },
    size: {
      type: String
    }
  },
  data () {
    return {

    }
  },
  created () {

  }
}
</script>

<style lang="stylus">
.button-demo
  display flex
  margin 10px 5px
</style>
