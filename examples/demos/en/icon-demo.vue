<template>
  <div class="demo-block">
    <ul class="icon-list">
      <li
        v-for="(item,key) in icons"
        :key="key"
        @mouseenter="onMouseenter(key)"
        @mouseleave="onMouseleave(key)"
      >
        <div class="demo-icon-wrap">
          <ce-icon :name="item.name.substring(8)" :size="item.size"></ce-icon>
          <span class="name">{{item.name.substring(8)}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const iconList = require('@examples/icon-demo.json')

export default {
  name: 'ce-icon-demo1-en',
  data() {
    return {
      icons: iconList.map(e => {
        return {
          name: e,
          size: 32
        }
      })
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
