# Development Guide
<!-- {.md} -->

----
<!-- {.md} -->

## Initialization project
<!-- {.md} -->

```js
git clone https://github.com/Vapor-Team/ce-ui.git

cd ce-ui

# Initialize project installation dependencies
npm run init

# Local Development Model
npm run dev

# Style development starts a service separately
npm run dev:style

```
<!-- {.md} -->

Browser access<!-- {.md} --> [http://localhost:8080](http://localhost:8080)<!-- {.md} --> You can see examples of all the components.

## Add new components and styles
<!-- {.md} -->
Please follow<!-- {.md} --> `packages` Add new components to folder structure under directory，If you need a new style, please `packages/theme-chalk/src` Add to.

## Add Component Samples and Documentation
<!-- {.md} -->
please<!-- {.md} --> `examples/demos` Add new component examples to the directory.Adding documents if needed, please `examples/docs` Add a new document，meanwhile in `nav.config.json` Adding new routes to preview.

## Publish NPM packages and documents
<!-- {.md} -->
```js
# Publish NPM Package
npm run release

# Publishing documents
npm run publish:docs
```
<!-- {.md} -->
Execute the command to see the corresponding script.
<!-- {.md} -->

## CHANGELOG
<!-- {.md} -->
Todo
<!-- {.md} -->