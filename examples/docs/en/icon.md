# Icon

<!-- {.md} -->

---

<!-- {.md} -->

## Icon sample

<!-- {.md} -->

<ce-icon-demo></ce-icon-demo>

## How to use

<!-- {.md} -->

One way：<!-- {.md} -->
Reference through the <!-- {.md} --> `ce-icon` tag

<ce-icon-demo1></ce-icon-demo1>
::: demo

```html
<ce-icon name="iPhone" :size="16"></ce-icon>
<ce-icon name="logo" :size="16"></ce-icon>
<ce-icon name="delete" :size="16"></ce-icon>
```

:::

## How to use

<!-- {.md} -->

Mode two：<!-- {.md} -->
Use <!-- {.md} -->`class="ce-icon__font ce-icon-iPhone"` to declare the icon. Copy the name of the icon.
<ce-icon-demo1></ce-icon-demo1>
::: demo

```html
<i class="ce-icon__font ce-icon-logo"></i>
<i class="ce-icon__font ce-icon-iPhone"></i>
<i class="ce-icon__font ce-icon-delete"></i>
```

:::

## Attributes

<!-- {.md} -->

| param                                          | Instructions | type    | Optional       | Default |
| ---------------------------------------------- | ------------ | ------- | -------------- | ------- |
| name                                           | Icon Name    | string  | -              | -       |
| color                                          | Icon Color   | string  | -              | -       |
| size                                           | Icon Size    | number  | -              | -       |
| symbol                                         |
| Multicolor or not (Open icons with `svg` tags) | ..           | boolean | `true`,`false` | `true`  |

## Icon Events

<!-- {.md} -->

| event name | Instructions     | callback param |
| ---------- | ---------------- | -------------- |
| click      | click event      | (event: Event) |
| mouseenter | mouseenter event | (event: Event) |
| mouseleave | mouseleave event | (event: Event) |
