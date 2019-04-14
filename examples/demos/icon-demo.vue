<template>
	<div class="demo-block">
		<ul class="icon-list">
			<li v-for="(item,key) in icons"
			    :key="key"
			    @mouseenter="onMouseenter(key)"
			    @mouseleave="onMouseleave(key)">
				<div class="demo-icon-wrap">
					<ce-icon :name="item.name.substring(8)"
					         :size="item.size"></ce-icon>
					<span class="name">{{item.name.substring(8)}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
const iconList = require("../icon-demo.json")

export default {
	name: "ce-icon-demo1",
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

<style lang="stylus">
.icon-list
	overflow hidden
	list-style none !important
	padding 0
	border solid 1px #eaeefb
	border-radius 4px

.icon-list li
	float left
	width 16.66%
	text-align center
	height 120px
	line-height 120px
	color #666
	font-size 13px
	transition color 0.15s linear
	border-right 1px solid #eee
	border-bottom 1px solid #eee
	margin-right -1px
	margin-bottom -1px

	.demo-icon-wrap
		display inline-block
		line-height normal
		vertical-align middle
		font-family 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif
		color #626673

		.big
			font-size 64px

	.ce-icon
		display block
		margin-bottom 15px

	&:hover
		color rgb(92, 182, 255)
</style>
