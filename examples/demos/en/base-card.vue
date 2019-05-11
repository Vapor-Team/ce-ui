<template>
	<div class="demo-block">
		<ce-base class="demo-card">
			<div slot="content">this is card content</div>
			<div slot="footer">
				<div class="ce-base-card__footer-content">this is bottom content</div>
			</div>
		</ce-base>
		<ce-base class="demo-card"
		         theme-type="primary">
			<div slot="content">this is card content</div>
			<div slot="footer">
				<div class="ce-base-card__footer-content">this is bottom content</div>
			</div>
		</ce-base>
		<ce-loading></ce-loading>
	</div>
</template>
<script>
export default {
	name: "ce-base-demo-en"
}
</script>
