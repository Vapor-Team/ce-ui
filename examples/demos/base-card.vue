<template>
	<div class="demo-block">
		<ce-base class="demo-card">
			<div slot="content">这是卡片内容</div>
			<div slot="footer">
				<div class="ce-ui__footer-content">这是底部内容</div>
			</div>
		</ce-base>
		<ce-base class="demo-card"
		                theme-type="primary">
			<div slot="content">这是卡片内容</div>
		</ce-base>
	</div>
</template>
<script>
export default {
	name: "ce-base-demo"
}
</script>
