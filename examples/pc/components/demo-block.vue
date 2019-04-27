<template>
	<div class="docs-demo-wrapper">
		<transition name="text-slide">
			<div class="demo-container">
				<div>
					<div class="docs-demo docs-demo--expand">
						<div class="highlight-wrapper">
							<slot name="highlight"></slot>
						</div>
					</div>
				</div>
			</div>
		</transition>
		<div
			class="docs-trans docs-demo__triangle"
			@click="toggle"
		>
			<transition name="arrow-slide">
				<ce-icon
					name="code"
					:size="16"
				></ce-icon>
			</transition>
			<transition name="text-slide">
				<span v-show="hovering">{{ controlText }}</span>
			</transition>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import Vue from "vue"
export default {
	data() {
		return {
			isExpand: false
		}
	},
	methods: {
		toggle() {
			this.isExpand = !this.isExpand
		}
	}
}
</script>

<style lang="stylus" scoped>
.docs-demo-wrapper
	width 100%

	& .text-slide-enter, & .text-slide-leave-active
		opacity 0
		transform translateX(10px)

.demo-container
	transition max-height 1s ease
	overflow hidden

.docs-demo
	width 100%
	height auto
	box-sizing border-box
	font-size 14px
	background-color #f7f7f7
	border 1px solid #e2ecf4
	border-top none

	pre, code
		font-family Consolas, Menlo, Courier, monospace
		line-height 22px
		border none

.docs-trans
	width 100%
	text-align center
	display inline-block
	color #c5d9e8
	font-size 12px
	padding 10px 0
	background-color #fafbfc
	margin-bottom 10px

.docs-demo__code, .highlight-wrapper, .docs-demo__meta
	padding 0 20px
	overflow-y auto

.docs-demo__code
	border-bottom 1px solid #eee

.docs-demo.docs-demo--expand .docs-demo__meta
	border-bottom 1px dashed #e9e9e9

.docs-demo.docs-demo--expand .docs-demo__triangle
	transform rotate(180deg)

.highlight-wrapper
	display none

	p, pre
		margin 0

	.hljs
		padding 0

.docs-demo.docs-demo--expand .highlight-wrapper
	display block

.docs-demo__code__mobi
	height 620px
	margin 20px 0

.docs-demo__code__mobi__header
	border-radius 4px 4px 0 0
	background -webkit-linear-gradient(rgba(55, 55, 55, 0.98), #545456)
	background linear-gradient(rgba(55, 55, 55, 0.98), #545456)
	text-align center
	padding 8px

	img
		width 100%

	.url-box
		height 28px
		line-height 28px
		color #fff
		padding 0 3px
		background-color #a2a2a2
		margin 10px auto 0
		border-radius 4px
		white-space nowrap
		overflow-x auto

.docs-demo__code__mobi__content
	iframe
		width 100%
		border 0
		height 548px
</style>

