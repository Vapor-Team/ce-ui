<template>
  <div class="ce-sidebar col-sm-5 col-md-5 col-lg-4">
    <nav class="ce-nav">
      <template v-for="(item, index) in list">
        <h2 :key="index + 10" class="ce-nav__title">{{ item.title }}</h2>
        <ul :key="index" class="ce-nav__items">
          <template v-if="item.items">
            <li
              v-for="(navItem, key) in item.items"
              :key="key"
              class="ce-nav__item"
            >
              <router-link
                class="ce-nav__page"
                :to="navItem.name.toLowerCase()"
                >{{ navItem.title }}</router-link
              >
            </li>
          </template>
          <li
            v-for="(group, groupKey) in item.groups"
            :key="groupKey"
            class="ce-nav__item active"
          >
            <a class="ce-nav__group" @click="toggleMenu">
              {{ group.title }}
              <ce-icon class="ce-nav__arrow" name="back-3"></ce-icon>
            </a>
            <ul class="ce-nav__child-items">
              <li
                v-for="(navItem, navItemKey) in group.items"
                :key="navItemKey"
                class="ce-nav__child-item"
              >
                <router-link
                  v-if="lang === 'zh'"
                  class="ce-nav__component"
                  :to="navItem.name.toLowerCase()"
                >
                  {{ navItem.name }}
                  <span>{{ navItem.title }}</span>
                </router-link>
                <router-link
                  v-else
                  class="ce-nav__component"
                  :to="navItem.name.toLowerCase()"
                  >{{ navItem.title }}</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </template>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'CSidebar',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  watch: {
    $route: 'setLang'
  },
  data() {
    return {
      lang: 'zh'
    }
  },
  methods: {
    setLang() {
      this.lang = this.$route.meta.lang
    },
    toggleMenu(event) {
      const parentNode = event.target.parentNode
      if (parentNode.classList.contains('active')) {
        parentNode.classList.remove('active')
      } else {
        parentNode.classList.add('active')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@theme/src/mixins/var'

.ce-sidebar
  margin 32px 0
  padding 0
  max-width 264px
  min-width 200px
  color #3F536E
  background-color #fff
  border-right 1px solid rgb(236, 236, 236)
  z-index 99

.ce-nav
  font-size 14px

  &__title
    padding 0 24px 8px
    color #8DABC4
    font-size 12px
    font-weight bold
    letter-spacing 1px
    text-transform uppercase

  &__group
    display block
    position relative
    padding 6px 0 6px 24px
    color #2C405A
    font-weight normal

    &:hover
      color $brand-blue-700

    i
      position absolute
      top 50%
      right 16px
      margin-top -7px
      color #A8C6DF
      font-size 14px
      transition all 0.3s

    .active &
      font-weight bold

    .active & i
      transform rotate(-180deg)

  &__items
    margin 0 0 32px
    font-size 14px
    font-weight normal
    line-height 1.8

  &__item
    position relative

  &__child-items
    display none

    .active &
      display block

  &__page
    display block
    position relative
    padding 8px 24px
    color #3F536E
    font-weight normal
    line-height 1.5
    cursor pointer

    &:after
      content ''
      display none
      position absolute
      top 0
      left 0
      width 5px
      height 100%
      background rgba(109, 226, 254, 1)
      border-top-right-radius 4px
      border-bottom-right-radius 4px
      box-shadow 1px 0 12px 0 rgb(109, 226, 254)

    &:hover
      // color $brand-blue-400
      background-color rgba(236, 242, 252, 0.25)

    &.active, &.router-link-active
      background-color rgba(236, 242, 252, 0.2)

      &:after
        display inline-block

      &:hover
        // color #3F536E

  &__component
    display block
    position relative
    padding 6px 24px 6px 32px
    color #616367
    font-size 14px

    &:after
      content ''
      display none
      position absolute
      top 0
      left 0
      width 6px
      height 100%
      background rgba(109, 226, 254, 1)
      border-top-right-radius 4px
      border-bottom-right-radius 4px
      box-shadow 1px 0 12px 0 rgb(109, 226, 254)

    &:hover
      // color $brand-blue-400
      background-color rgba(236, 242, 252, 0.25)

    &.active, &.router-link-active
      background-color rgba(236, 242, 252, 0.2)

      &:after
        display inline-block

      &:hover
        color #3F536E

    span
      padding-left 6px
      font-size 12px
      opacity 0.6

.ce-nav__arrow
  position absolute
  transition all 0.3s linear
  top 10px
  right 12px
  width 16px
  opacity 0.25
  transform rotateZ(180deg)

  .active &
    transform rotateZ(270deg)

.at-nsc, .at-nsc:focus, .at-nsc:hover, .at-nsc:active, .at-nsc:visited
  color #fff
</style>
