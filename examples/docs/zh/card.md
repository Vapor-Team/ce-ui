# BaseCard 基础卡片

<!-- {.md} -->

---

<!-- {.md} -->

## 基础用法

<!-- {.md} -->

使用<!-- {.md} --> `slot="content"` 插槽来自定义卡片上部内容<!-- {.md} -->，
使用<!-- {.md} --> `slot="footer"` 插槽来自定义卡片底部内容<!-- {.md} -->。

:::demo

```html
<ce-base-demo-zh></ce-base-demo-zh>
```

```html
<ce-base class="demo-card">
  <div slot="header">
    <span>这是卡片头部内容</span>
  </div>
  <div slot="content">
    <span>这是卡片内容</span>
  </div>
  <div slot="footer">
    <span>这是底部内容</span>
  </div>
</ce-base>
```

:::

## Attributes

<!-- {.md} -->

| 参数       | 说明       | 类型     | 可选值              | 默认值                        |
| ---------- | ---------- | -------- | ------------------- | ----------------------------- |
| theme-type | 卡片主题色 | `String` | `default | primary` | `default`                     |
| radius     | 卡片圆角   | `Object` |                     | `{ enable: true, style: {} }` |
| shadow     | 卡片阴影   | `Object` |                     | `{ enable: true, style: {} }` |
