<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
#app
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  background-color #f8faff

/**
 * Vue transitions
 */
.fade-enter-active
  transition opacity 0.3s ease-out

.fade-leave-active
  transition opacity 0.2s ease-out

.fade-enter, .fade-leave-active
  opacity 0
</style>
