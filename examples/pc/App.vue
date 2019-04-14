<template>
	<div id="app">
		<router-view></router-view>
		<!-- <mainHeader></mainHeader>
		<div class="container">
			<sideNav class="nav"></sideNav>
			<router-view class="view"></router-view>
		</div>
		<mainFooter></mainFooter>
		<div class="mobile-toggle-wrap"
		     @click="isMobileShow=true">
			<ce-icon class="mobile-toggle-wrap__icon"
			         :symbol="true"
			         :size="26"
			         name="iPhone"
			         color="#628cf5"></ce-icon>开启移动端预览
		</div>
		<mobile-frame v-if="isMobileShow"
		              :show.sync="isMobileShow"></mobile-frame> -->
	</div>
</template>

<script>

export default {
	name: "app"

}
</script>

<style lang="stylus">
@import './assets/css/index.styl'

.container
	margin 48px auto
	width 90%
	background-color #fff
	box-shadow 0 4px 30px 0 rgba(223, 225, 230, 0.5)

	.nav
		float left
		width 210px

	.view
		float left
		width calc(100% - 215px)
		padding 32px 48px 48px
		box-sizing border-box

.container:after
	content ''
	clear both
	display block

.mobile-toggle-wrap
	position absolute
	right 70px
	top 18px
	z-index 999
	display flex
	align-items center
	color #628cf5
	background-color #fff
	height 40px
	line-height 40px
	padding 0 20px
	border 1px solid #628cf5
	cursor pointer
	transition all 0.5s ease

	&:hover
		border-radius 14px
		opacity 0.7
</style>
