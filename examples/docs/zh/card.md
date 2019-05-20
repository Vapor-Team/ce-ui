# BaseCard 基础卡片

<!-- {.md} -->

---

<!-- {.md} -->

## 基础用法

<!-- {.md} -->

使用<!-- {.md} --> `slot="header"` 插槽来自定义卡片上部内容<!-- {.md} -->，
使用<!-- {.md} --> `slot="body"` 插槽来自定义卡片上部内容<!-- {.md} -->，
使用<!-- {.md} --> `slot="footer"` 插槽来自定义卡片底部内容<!-- {.md} -->。

:::demo Card 组件包括header和body部分，header部分需要有显式具名 slot 分发，同时也是可选的。

```html
<template>
  <div>
    <ce-base-card class="demo-card">
      <div slot="body">这是卡片内容</div>
      <div slot="footer">
        <div>这是底部内容</div>
      </div>
    </ce-base-card>
    <ce-base-card class="demo-card" theme-type="primary" shadow="hover">
      <div slot="header">
        <span>这是卡片头部</span>
      </div>
      <div slot="body">
        <span>这是卡片内容</span>
      </div>
      <div slot="footer">
        <div>这是底部内容</div>
      </div>
    </ce-base-card>
  </div>
</template>

<style lang="stylus" scoped>
.demo-card
  margin-right 50px
  vertical-align bottom
</style>
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

## Attributes

<!-- {.md} -->

| 参数       | 说明             | 类型     | 可选值                   | 默认值                   |
| ---------- | ---------------- | -------- | ------------------------ | ------------------------ |
| theme-type | 卡片主题色       | `String` | `default | primary`      | `default`                |
| body-style | 设置 body 的样式 | `Object` | --                       | `{ paddingTop: '20px' }` |
| shadow     | 设置阴影显示时机 | `String` | `always / hover / never` | `always`                 |
