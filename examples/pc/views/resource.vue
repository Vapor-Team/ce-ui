<template>
  <div class="wrapper">
    <c-header></c-header>
    <div class="ce-container row">
      <c-sidebar :list="nav"></c-sidebar>
      <div class="ce-markdown col-sm-13 col-md-15 col-lg-17">
        <transition
          name="fade"
          mode="out-in"
          @after-leave="afterLeave"
        >
          <router-view class="view"></router-view>
        </transition>
      </div>
    </div>
    <c-footer></c-footer>
  </div>
</template>

<style lang="stylus" scoped>
.wrapper
  background-color #F8FAFF
  width 100%

  .ce-container
    position relative
    margin 48px auto
    width 90%
    margin-top 130px
    margin-bottom 150px
    background-color #ffffff
    box-shadow 0 4px 30px 0 rgba(223, 225, 230, 0.5)

  .row
    display -webkit-box
    flex-direction row
    flex-wrap wrap

.ce-markdown
  padding 32px 43px 43px
  width 100%

  section
    margin 0 auto

.footer
  position fixed
  left 0
  right 0
  bottom 0

/**
 * Vue transitions
 */
.fade-enter-active
  transition opacity 0.3s ease-out

.fade-leave-active
  transition opacity 0.2s ease-out

.fade-enter, .fade-leave-active
  opacity 0

@media screen and (max-width: 768px)
  .wrapper
    .row
      flex-direction row
      flex-wrap nowrap
      display flex
</style>

<script>
import CHeader from '../components/header'
import CFooter from '../components/footer'
import CSidebar from '../components/sidebar'
import navConfig from '@examples/nav.config.json'

export default {
  components: {
    CSidebar,
    CHeader,
    CFooter
  },
  data() {
    return {
      nav: navConfig.zh.resource
    }
  },
  methods: {
    afterLeave() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
