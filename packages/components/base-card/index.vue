<template>
	<div :class="['ce-base-card',cardThemeClass,cardSideClass]">
		<div class="ce-base-card__title"
		     v-if="titleShow">
			<span v-if="title">{{title}}</span>
			<template>
				<slot name="header"></slot>
			</template>
		</div>
		<div class="ce-base-card__content">
			<slot name="content"></slot>
		</div>
		<div class="ce-base-card__footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>
<script>
import create from "../../utils/create-basic"
export default create({
	name: "base",
	props: {
		title: String,
		themeType: {
			type: String,
			default: "default"
		},
		sideType: {
			type: String,
			default: "right"
		}
	},
	computed: {
		cardThemeClass() {
			return "ce-base-card--" + this.themeType
		},
		cardSideClass() {
			return "ce-base-card--" + this.sideType
		},
		titleShow() {
			let flag = false
			Object.keys(this.$slots).map(e => {
				if (e === "title") {
					flag = true
				} else {
					flag = false
				}
			})
			return flag
		}
	}
})
</script>
