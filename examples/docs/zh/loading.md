# Loading 加载中组件

<!-- {.md} -->

---

<!-- {.md} -->

## 基础用法

<!-- {.md} -->

:::demo

```html
<template>
  <div style="width: 300px; height: 300px" v-loading="{ show: isShow, close, delay: 2000 }">
    <span>ssssssssss</span>
  </div>
</template>

<style lang="stylus" scoped>
.demo-card
  margin-right 50px
  vertical-align bottom
</style>
<script>
export default {
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    Event({ type, data }) {
      console.log(type, data)
    },
    close() {
      console.log(this)
    }
  },
  mounted() {
    /* setTimeout(() => { this.isShow = false; }, 3000) */
  }
}
</script>
```

```html
<ce-base-card class="demo-card">
  <div slot="header">
    <span>这是卡片头部内容</span>
  </div>
  <div slot="body">
    <span>这是卡片内容</span>
  </div>
  <div slot="footer">
    <span>这是底部内容</span>
  </div>
</ce-base-card>
```

:::
