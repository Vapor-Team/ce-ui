# BaseCard

<!-- {.md} -->

---

<!-- {.md} -->

## Basic

<!-- {.md} -->

Use<!-- {.md} --> `slot="header"` Slot Customize the top header of the card<!-- {.md} -->，
Use<!-- {.md} --> `slot="body"` Slot Customize the top content of the card<!-- {.md} -->，
Use<!-- {.md} --> `slot="footer"` Slot Customize the bottom content of the card<!-- {.md} -->。

:::demo

```html
<template>
  <div>
    <ce-base-card class="demo-card">
      <div slot="body">this is card content</div>
      <div slot="footer">
        <div>this is card footer content</div>
      </div>
    </ce-base-card>
    <ce-base-card class="demo-card" theme-type="primary" shadow="hover">
      <div slot="header">
        <span>this is card header content</span>
      </div>
      <div slot="body">
        <span>this is card content</span>
      </div>
      <div slot="footer">
        <div>this is card footer content</div>
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
    <span>BaseCard Header Content</span>
  </div>
  <div slot="body">
    <span>BaseCard Content</span>
  </div>
  <div slot="footer">
    <span>BaseCard Footer Content</span>
  </div>
</ce-base-card>
```

:::

## Attributes

<!-- {.md} -->

| Property       | Description             | Type     | Accepted Values                   | Default                   |
| ---------- | ---------------- | -------- | ------------------------ | ------------------------ |
| theme-type | Card theme color       | `String` | `default | primary`      | `default`                |
| body-style | Setting the body style | `Object` | --                       | `{ paddingTop: '20px' }` |
| shadow     | Setting Shadow Display Timing | `String` | `always / hover / never` | `always`                 |