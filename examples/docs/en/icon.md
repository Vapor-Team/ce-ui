# Icon

<!-- {.md} -->

---

<!-- {.md} -->

## Icon sample

<!-- {.md} -->

<ce-icon-demo-en></ce-icon-demo-en>

## How to use

<!-- {.md} -->

One way：<!-- {.md} -->
Reference through the <!-- {.md} --> `ce-icon` tag

:::demo

```html
<ce-icon-demo1-zh></ce-icon-demo1-zh>
```

```html
<template>
  <div class="demo">
    <ce-icon name="iPhone" :size="size"></ce-icon>
    <ce-icon name="logo" :size="size"></ce-icon>
    <ce-icon name="delete" :size="size"></ce-icon>
  </div>
</template>

<style>
  .demo {
    display: block;
    width: 100%;
    height: 200%;
  }
</style>

<script>
  export default {
    data() {
      return {
        size: 16
      }
    }
  }
</script>
```

:::

## How to use

<!-- {.md} -->

Mode two：<!-- {.md} -->
Use <!-- {.md} -->`class="ce-icon__font ce-icon-iPhone"` to declare the icon. Copy the name of the icon.
:::demo

```html
<ce-icon-demo1-zh></ce-icon-demo1-zh>
```

```html
<template>
  <div class="demo">
    <i class="ce-icon__font ce-icon-logo"></i>
    <i class="ce-icon__font ce-icon-iPhone"></i>
    <i class="ce-icon__font ce-icon-delete"></i>
    </div>
</template>

<style>
  .demo {
    display: block;
    width: 100%;
    height: 200%;
  }
</style>
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
