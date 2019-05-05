<template>
	<header
		id="J-page-header"
		:class="['page-header',collapse ? 'collapse' : '']"
	>
		<div class="nav-container">
			<div class="nav-left">
				<div class="logo">
					<router-link :to="{ name: lang === 'en' ? 'Home-en' : 'Home' }">
						<img
							class="logo-img"
							src="../assets/ce-logo.png"
							preload
						>
						<span>CE-UI | Vapor Team</span>
					</router-link>
				</div>
				<i
					class="icon icon-menu nav-icon"
					@click="toggleMenu"
				></i>
			</div>
			<div
				v-if="lang === 'en'"
				class="nav-right"
			>
				<ul class="navbar">
					<li>
						<router-link
							:to="{ name: 'Guide-en' }"
							:class="activeFlag1 ? 'router-link-active' : ''"
						>Guide</router-link>
					</li>
					<li>
						<router-link
							:to="{ name: 'Docs-en' }"
							:class="activeFlag2 ? 'router-link-active' : ''"
						>Component</router-link>
					</li>
					<li>
						<router-link
							:to="{ name: 'Resource-en' }"
							:class="activeFlag3 ? 'router-link-active' : ''"
						>Resource</router-link>
					</li>
				</ul>
				<div
					class="btn-language"
					@click="switchLang('zh')"
				>中文</div>
			</div>
			<div
				v-else
				class="nav-right"
			>
				<ul class="navbar">
					<li>
						<router-link
							:to="{ name: 'Guide' }"
							:class="[activeFlag1 ? 'router-link-active' : '']"
						>指南</router-link>
					</li>
					<li>
						<router-link
							:to="{ name: 'Docs' }"
							:class="[activeFlag2 ? 'router-link-active' : '']"
						>组件</router-link>
					</li>
					<li>
						<router-link
							:to="{ name: 'Resource' }"
							:class="[activeFlag3 ? 'router-link-active' : '']"
						>资源</router-link>
					</li>
				</ul>
				<div
					class="btn-language"
					@click="switchLang('en')"
				>EN</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	props: {
		collapse: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			isOpen: false,
			activeFlag1: false,
			activeFlag2: false,
			activeFlag3: false
		}
	},
	computed: {
		lang() {
			return this.$route.path.split("/")[1] || "zh"
		}
	},
	mounted() {
		if (!this.collapse) {
			window.addEventListener("scroll", this.headerCollapse)
		} else {
			window.removeEventListener("scroll", this.headerCollapse)
		}
		if (window.location.hash.indexOf("guide") !== -1) {
			this.activeFlag1 = true
			this.activeFlag2 = false
			this.activeFlag3 = false
		} else if (window.location.hash.indexOf("docs") !== -1) {
			this.activeFlag2 = true
			this.activeFlag1 = false
			this.activeFlag3 = false
		} else if (window.location.hash.indexOf("resource") !== -1) {
			this.activeFlag3 = true
			this.activeFlag1 = false
			this.activeFlag2 = false
		}
	},
	destroyed() {
		window.removeEventListener("scroll", this.headerCollapse)
	},
	methods: {
		toggleMenu() {
			const header = document.getElementById("J-page-header")

			if (this.isOpen) {
				this.isOpen = false
				header.classList.remove("open")
			} else {
				this.isOpen = true
				header.classList.add("open")
			}
		},
		headerCollapse() {
			const header = document.getElementById("J-page-header")
			const offsetTop = window.scrollY || 0

			if (offsetTop > 50) {
				header.classList.add("collapse")
			} else {
				header.classList.remove("collapse")
			}
		},
		switchLang(targetLang) {
			if (this.lang === targetLang) return
			this.$i18n.locale = targetLang
			localStorage.setItem("ce-ui-language", targetLang)
			if (this.$route.name === "Home") {
				this.$router.push({ name: "Home-en" })
			} else {
				this.$router.push(this.$route.path.replace(this.lang, targetLang))
			}
		}
	}
}
</script>

<style lang="stylus">
@import '../../../packages/theme-chalk/src/common/var'

.page-header
	position fixed
	top 0
	left 0
	width 100%
	height 80px
	background-color transparent
	transition all 0.3s
	z-index 100

	&.collapse
		background-color #fff
		box-shadow 0 10px 60px 0 rgba(29, 29, 31, 0.07)
		opacity 0.98

	&.open
		background-color #fff

.nav-container
	margin 0 auto
	width 90%
	color #1D1D1F

	.nav-left
		float left

		.logo
			position relative
			height 80px
			line-height 80px

			img
				position absolute
				top 50%
				margin-top -15px
				width 30px
				height 30px

			span
				margin-left 40px
				color rgb(2, 200, 247)
				font-weight bold
				font-size 16px

		.nav-icon
			display none
			position absolute
			top 50%
			right 0
			margin-top -10px
			font-size 20px

	.nav-right
		float right

		.navbar
			display inline-block
			margin 0
			padding 0
			height 80px
			font-size 16px
			line-height 80px
			list-style-type none

			a
				display inline-block
				color #1D1D1F

				&::after
					content ''
					display none
					position absolute
					bottom 0
					left 0
					height 2px
					width 100%
					background-color #6190E8

				&.router-link-active
					color $brand-blue-500

					&::after
						display inline-block

			li
				position relative
				display inline-block
				margin 0 24px
				cursor pointer

				transition color 0.3s
					a
						color $brand-blue-500

				&.disabled
					color #C9C9C9
					cursor not-allowed

		.btn-language
			display inline-block
			margin 0 24px
			padding 2px 12px
			border 1px solid #1D1D1F
			border-radius 2px
			cursor pointer
			transition color 0.3s, border 0.3s

			&:hover
				color $brand-blue-500
				border-color $brand-blue-500

@media screen and (max-width: $screen-sm-max)
	.page-header
		height 60px

		&.open
			.nav-right
				height 220px

	.nav-container
		width initial

		.nav-left
			position relative
			margin 0 20px
			float none
			text-align center

			.logo
				display inline-block
				height 60px
				line-height 60px

			.nav-icon
				display inline-block

		.nav-right
			float none
			height 0
			text-align center
			background-color #fff
			box-shadow 0 10px 60px 0 rgba(29, 29, 31, 0.07)
			transition all 0.3s
			overflow hidden

			.navbar
				display block
				height initial
				line-height 50px

				li
					display block

				a
					width 100%

					&.router-link-active::after
						display none

			.btn-language
				margin 16px
</style>
