# Quickstart

<!-- {.md} -->

---

<!-- {.md} -->

## Installation

<!-- {.md} -->

```bash
npm install ce-ui --save
```

<!-- {.md} -->

## Global component usage

<!-- {.md} -->

```javascript
import CeUi from "ce-ui"; // Introducing Component Library
```

<!-- {.md} -->

Introduce<!-- {.md} -->`px` or `vw` Layout style

```javascript
import "ce-ui/lib/theme-chalk/index.css"; // PX unit, suitable for PC terminal layout
```

Last,Global component usage<!-- {.md} -->

```javascript
Vue.use(CeUi);
```

<!-- {.md} -->

## On-demand use of individual components

<!-- {.md} -->

Components that can be registered locally,Scenarios suitable for use in combination with other frameworks

<!-- {.md} -->

```javascript
import { CeBase } from "CeUi";
Vue.use(CeBase);
```

<!-- {.md} -->

in template,Used<!-- {.md} --> `<ce-base></ce-base>` Use Components in a Custom Label Approach

```html
<template>
  <div>
    <ce-base>this id base card component</ce-base>
  </div>
</template>
```

<!-- {.md} -->
