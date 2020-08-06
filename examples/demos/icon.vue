<template>
  <div class="icon-box">
    <ce-tab
      @tab-nav-click="onTabNavClick"
      @tab-nav-enter="onMouseenter1"
      @tab-nav-leave="onMouseleave1"
      v-model="currentName"
    >
      <ce-tab-item v-for="(item, key) in icons" :key="key" :label="item.name">
        <!-- label -->
        <!-- <div slot="label">
          <ce-icon :name="'logo'" :size="36"></ce-icon>
          <span> {{ item.name }}</span>
        </div> -->
        <!-- 内容 -->
        <template>
          <ul :class="{ 'icon-list': true }">
            <li
              v-for="(_, _key) in item.list"
              :key="_key"
              @click.stop="copy(_.name)"
              @mouseenter="onMouseenter(key, _key)"
              @mouseleave="onMouseleave(key, _key)"
            >
              <div class="demo-icon-wrap">
                <ce-icon class="icon" :name="_.name" :size="_.size"></ce-icon>
                <span class="name" v-tips="_.name">{{ _.name }}</span>
              </div>
            </li>
          </ul>
        </template>
      </ce-tab-item>
    </ce-tab>
  </div>
</template>

<script>
import iconList from '@examples/icon.json'
export default {
  name: 'ce-icon-demo',
  props: {
    icons: {
      type: Object,
      default: () => {
        return Object.keys(iconList).reduce((item, key, index) => {
          item[key] = {
            name: key,
            active: index === 0,
            list: iconList[key].map((e) => {
              return {
                name: e,
                size: 32
              }
            })
          }
          return item
        }, {})
      }
    }
  },
  data() {
    return {
      currentName: 0
    }
  },
  watch: {
    currentName() {
      console.log(this.currentName)
    }
  },
  methods: {
    copy(value) {
      this.$clipboard(value)
    },
    onMouseenter1(key) {
      // console.log(key)
    },
    onMouseleave1(key) {
      // console.log(key)
    },
    onMouseenter(key, index) {
      this.icons[key].list[index].size = 64
    },
    onMouseleave(key, index) {
      this.icons[key].list[index].size = 32
    },
    onTabNavClick(e) {
      console.log('调用组件', e)
      console.log('调用组件1', this.currentName)
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
      transition font-size 0.2s linear

    .big
      font-size 64px

    .name
      font-size 14px
      text-overflow ellipsis
      white-space nowrap
      overflow hidden
      width 80px
      overflow hidden
      display inline-block

  .ce-icon
    display block
    margin-bottom 15px
</style>
