<template>
	<div class="demo-block">
		<ce-base class="demo-card">
			<div slot="content">这是卡片内容</div>
			<div slot="footer">
				<div class="ce-base-card__footer-content">这是底部内容</div>
			</div>
		</ce-base>
		<ce-base class="demo-card"
		         theme-type="primary">
			<div slot="content">这是卡片内容</div>
			<div slot="footer">
				<div class="ce-base-card__footer-content">这是底部内容</div>
			</div>
		</ce-base>
		<ce-loading></ce-loading>
	</div>
</template>
<script>
export default {
	name: "ce-base-demo-zh"
}
</script>
