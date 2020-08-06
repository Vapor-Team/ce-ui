<template>
  <ul class="icon-list">
    <li
      v-for="(item, key) in icons"
      :key="key"
      @mouseenter="onMouseenter(key)"
      @mouseleave="onMouseleave(key)"
    >
      <div class="demo-icon-wrap">
        <ce-icon
          class="icon"
          :name="item.name | getIconName"
          :size="item.size"
        ></ce-icon>
        <span class="name">{{ item.name | getIconName }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import iconList from '@examples/icon.json'
export default {
  name: 'ce-icon-demo',
  filters: {
    getIconName(value) {
      return value
        ? value
            .split('-')
            .splice(2)
            .join('-')
        : ''
    }
  },
  props: {
    icons: {
      type: Array,
      default: () => {
        return iconList.map((e) => {
          return {
            name: e,
            size: 32
          }
        })
      }
    }
  },
  methods: {
    onMouseenter(key) {
      this.icons[key].size = 64
    },
    onMouseleave(key) {
      this.icons[key].size = 32
    }
  }
}
</script>

<style lang="stylus">
.icon-list
  overflow hidden
  list-style none !important
  padding 10px !important

  & li
    float left
    width 16.66%
    text-align center
    height 120px
    line-height 120px !important
    color #666
    font-size 13px
    transition color 0.15s linear
    margin-right -1px
    margin-bottom -1px

    &:hover
      cursor pointer
      border-radius 6px
      box-shadow 2px 2px 12px rgba(0, 0, 0, 0.085)
      background-color rgb(255, 255, 255, 1)

  .demo-icon-wrap
    display inline-block
    line-height normal
    vertical-align middle
    font-family 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif
    color #626673

    .icon
      transition font-size 0.3s linear

    .big
      font-size 64px

    .name
      font-size 14px

  .ce-icon
    display block
    margin-bottom 15px
</style>
