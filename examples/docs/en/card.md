# BaseCard

<!-- {.md} -->

---

<!-- {.md} -->

## Basic

<!-- {.md} -->

Use<!-- {.md} --> `slot="content"` Slot Customize the top content of the card<!-- {.md} -->，
Use<!-- {.md} --> `slot="footer"` Slot Customize the bottom content of the card<!-- {.md} -->。

<ce-base-demo-en></ce-base-demo-en>

::: demo

```html
<ce-base class="demo-card">
  <div slot="content">BaseCard content</div>
  <div slot="footer">
    <div class="ce-base-card__footer-content">BaseCard Footer Content</div>
  </div>
</ce-base>
<ce-base class="demo-card" theme-type="primary">
  <div slot="content">BaseCard Content</div>
</ce-base>
```

:::

## Attributes

<!-- {.md} -->

| Property      | Description       | Type     | Accepted Values              | Default    |
| --------- | ---------- | -------- | ------------------- | --------- |
| themeType | card theme color | `String` | `default | primary` | `default` |
