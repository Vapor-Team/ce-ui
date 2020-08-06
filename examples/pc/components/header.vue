<template>
  <header id="J-page-header" :class="['page-header', 'collapse']">
    <div class="nav-container">
      <div class="nav-left">
        <div class="logo">
          <router-link :to="{ name: `Home-${lang}` }">
            <img class="logo-img" src="../assets/ce-logo.png" preload />
            <span>CE-UI | Vapor Team</span>
          </router-link>
        </div>
        <i class="icon icon-menu nav-icon" @click="toggleMenu"></i>
      </div>
      <div class="nav-right">
        <ul class="navbar">
          <li v-for="(item, index) in menus" :key="index">
            <router-link
              :to="{ path: item.path }"
              :class="{ 'router-link-active': item.active }"
              >{{ $t(item.link) }}</router-link
            >
          </li>
        </ul>
        <div class="btn-language" @click="switchLang()">
          {{ lang === 'EN' ? 'EN' : '中文' }}
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CHeader',
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale || 'zh'
    },
    isZh() {
      return this.$i18n.locale === 'zh' || this.$route.meta.lang === 'zh'
    },
    menus() {
      const path = this.$route.path
      return [
        {
          path: `/${this.lang}/guide/color`,
          link: 'docs.guide',
          active: path.includes('guide')
        },
        {
          path: `/${this.lang}/docs/introduction`,
          link: 'docs.component',
          active: path.includes('docs')
        },
        {
          path: `/${this.lang}/resource/design`,
          link: 'docs.resources',
          active: path.includes('resource')
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      const header = document.getElementById('J-page-header')
      if (this.isOpen) {
        this.isOpen = false
        header.classList.remove('open')
      } else {
        this.isOpen = true
        header.classList.add('open')
      }
    },
    switchLang() {
      const lang = this.isZh ? 'en' : 'zh'
      if (lang === this.lang) return
      this.$i18n.locale = lang
      localStorage.setItem('ce-ui-language', lang)
      if (this.$route.name === `Home-${lang}`) {
        this.$router.replace({ name: `Home-${lang}` })
      } else {
        this.$router.replace({
          name: `${this.$route.name.split('-')[0]}-${lang}`
        })
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~@theme/src/common/var'

.page-header
  position fixed
  top 0
  left 0
  width 100%
  height 80px
  background-color transparent
  z-index 100

  &.collapse
    background-color #fff
    box-shadow 0 10px 60px 0 rgba(29, 29, 31, 0.07)
    opacity 0.98

  &.open
    background-color #fff

.nav-container
  margin 0 auto
  width 90%
  color #1D1D1F

  .nav-left
    float left

    .logo
      position relative
      height 80px
      line-height 80px

      img
        position absolute
        top 50%
        margin-top -15px
        width 30px
        height 30px

      span
        margin-left 40px
        color rgb(2, 200, 247)
        font-weight bold
        font-size 16px

    .nav-icon
      display none
      position absolute
      top 50%
      right 0
      margin-top -10px
      font-size 20px

  .nav-right
    float right

    .navbar
      display inline-block
      margin 0
      padding 0
      height 80px
      font-size 16px
      line-height 80px
      list-style-type none

      a
        display inline-block
        color #1D1D1F

        &::after
          content ''
          display none
          position absolute
          bottom 0
          left 0
          height 2px
          width 100%
          background-color #6190E8

        &.router-link-active
          color $brand-blue-500

          &::after
            display inline-block

      li
        position relative
        display inline-block
        margin 0 24px
        cursor pointer

        transition color 0.3s
          a
            color $brand-blue-500

        &.disabled
          color #C9C9C9
          cursor not-allowed

    .btn-language
      display inline-block
      margin 0 24px
      padding 2px 12px
      border 1px solid #1D1D1F
      border-radius 2px
      cursor pointer
      transition color 0.3s, border 0.3s

      &:hover
        color $brand-blue-500
        border-color $brand-blue-500

@media screen and (max-width: $screen-sm-max)
  .page-header
    height 60px

    &.open
      .nav-right
        height 220px

  .nav-container
    width initial

    .nav-left
      position relative
      margin 0 20px
      float none
      text-align center

      .logo
        display inline-block
        height 60px
        line-height 60px

      .nav-icon
        display inline-block

    .nav-right
      float none
      height 0
      text-align center
      background-color #fff
      box-shadow 0 10px 60px 0 rgba(29, 29, 31, 0.07)
      transition all 0.3s
      overflow hidden

      .navbar
        display block
        height initial
        line-height 50px

        li
          display block

        a
          width 100%

          &.router-link-active::after
            display none

      .btn-language
        margin 16px
</style>
