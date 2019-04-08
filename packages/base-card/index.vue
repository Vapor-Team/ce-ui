<template>
	<div :class="['ce-ui',cardThemeClass,cardSideClass]">
		<div class="ce-ui__title"
		     v-if="title">{{title}}</div>
		<div class="ce-ui__content">
			<slot name="content"></slot>
		</div>
		<div class="ce-ui__footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>
<script>
import create from "../utils/create-basic"
import VcLoading from "../loading/index.vue"
import VcChatIcon from "../icon/index.vue"
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
			return "ce-ui--" + this.themeType
		},
		cardSideClass() {
			return "ce-ui--" + this.sideType
		}
	},
	components: {
		VcLoading,
		VcChatIcon
	}
})
</script>
