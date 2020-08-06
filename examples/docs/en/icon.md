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
<template>
	<div>
		<ul class="icon-list">
			<li
				v-for="(item,key) in icons"
				:key="key"
				@mouseenter="onMouseenter(key)"
				@mouseleave="onMouseleave(key)"
			>
				<div class="demo-icon-wrap">
					<ce-icon :name="item.name.substring(8)" :size="item.size"></ce-icon>
					<span class="name">{{ item.name.substring(8) }}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
const iconList = require("../../icon-demo.json")

export default {
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
    height: 100%;
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

## code demo

<!-- {.md} -->

Mode two：<!-- {.md} -->
Use <!-- {.md} -->`class="ce-icon__font ce-icon-iPhone"` to declare the icon. Copy the name of the icon.
:::demo

```html
<template>
  <div class="demo">
    <i class="ce-icon__font size ce-icon-logo"></i>
    <i class="ce-icon__font size ce-icon-iPhone"></i>
    <i class="ce-icon__font size ce-icon-delete"></i>
  </div>
</template>

<style lang='stylus' scoped>
  .demo
    display block
    width 100%
    height 100%
  .size
    font-size 36px
</style>
```

```html
<template>
  <div class="demo">
    <i class="ce-icon__font ce-icon-logo"></i>
    <i class="ce-icon__font ce-icon-iPhone"></i>
    <i class="ce-icon__font ce-icon-delete"></i>
    </div>
</template>

<style lang='stylus' scoped>
  .demo
    display block
    width 100%
    height 100%
  .size
    font-size 36px
</style>
```

:::

## Attributes

<!-- {.md} -->

| param | Instructions | type   | Optional | Default |
|-------|--------------|--------|----------|---------|
| name  | Icon Name    | string | -        | -       |
| color | Icon Color   | string | -        | -       |
| size  | Icon Size    | number | -        | -       |
| symbol                                         |
| Multicolor or not (Open icons with `svg` tags) | ..           | boolean | `true`,`false` | `true`  |

## Icon Events

<!-- {.md} -->

| event name | Instructions     | callback param |
|------------|------------------|----------------|
| click      | click event      | (event: Event) |
| mouseenter | mouseenter event | (event: Event) |
| mouseleave | mouseleave event | (event: Event) |
