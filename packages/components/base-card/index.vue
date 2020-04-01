<template>
  <div :class="[ 'ce-base-card', 'ce-base-card--radius', cardThemeClass, ...boxShadow ]">
    <div
      v-if="$slots.header"
      class="ce-base-card__header"
    >
      <slot name="header"></slot>
    </div>
    <div
      class="ce-base-card__body"
      :style="bodyStyles"
    >
      <slot name="body"></slot>
    </div>
    <div
      v-if="$slots.footer"
      class="ce-base-card__footer ce-base-card__footer--content"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
import create from '../../utils/create-basic'
export default create({
	name: 'base-card',
	props: {
		themeType: {
			type: String,
			default: 'default'
		},
		bodyStyle: {
			type: Object,
			default: () => {
				return {}
			}
		},
		shadow: {
			type: String,
			default: 'always'
		}
	},
	computed: {
		cardThemeClass() {
			return 'ce-base-card--' + this.themeType
		},
		bodyStyles() {
			let defaultStyle = {}
			return { ...defaultStyle, ...this.bodyStyle }
		},
		boxShadow() {
			if (this.shadow) {
				if (this.shadow === 'always') {
					return ['is-always']
				} else if (this.shadow === 'never') {
					return ['is-never']
				} else if (this.shadow === 'hover') {
					return ['is-hover']
				} else {
					return ['is-always']
				}
			} else {
				return ['is-always']
			}
		}
	}
})
</script>
