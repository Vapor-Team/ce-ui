<template>
	<div class="wrapper">
		<m-header></m-header>
		<div class="ce-container row">
			<sidebar :list="navs"></sidebar>
			<div class="ce-markdown col-sm-24 col-md-18 col-lg-20">
				<transition
					name="fade"
					mode="out-in"
					@after-leave="afterLeave"
				>
					<router-view class="view"></router-view>
				</transition>
			</div>
		</div>
		<m-footer></m-footer>
	</div>
</template>

<style lang="stylus" scoped>
.wrapper
	background-color #F8FAFF

	.ce-container
		position relative
		margin 48px auto
		width 90%
		background-color #ffffff
		box-shadow 0 4px 30px 0 rgba(223, 225, 230, 0.5)

	.row
		display -webkit-box
		flex-direction row
		flex-wrap wrap

.ce-markdown
	padding 32px 48px 48px

	section
		margin 0 auto

.page-header
	position relative !important

.footer
	box-shadow 0 4px 30px 0 rgba(223, 225, 230, 0.8)
</style>

<script>
import MHeader from "../components/header"
import MFooter from "../components/footer"
import Sidebar from "../components/sidebar"
import navsConfig from "@/nav.config.json"

export default {
	components: {
		Sidebar,
		MHeader,
		MFooter
	},
	data() {
		return {
			navs: navsConfig.zh.components
		}
	},
	created() {
		console.log(this.navs)
	},
	methods: {
		afterLeave() {
			window.scrollTo(0, 0)
		}
	}
}
</script>
