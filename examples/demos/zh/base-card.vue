<template>
  <div>
    <ce-base-card class="demo-card">
      <div slot="body">这是卡片内容</div>
      <div slot="footer">
        <div>这是底部内容</div>
      </div>
    </ce-base-card>
    <ce-base-card class="demo-card" theme-type="primary" shadow="hover">
      <div slot="header">
        <span>这是卡片头部</span>
      </div>
      <div slot="body">
        <span>这是卡片内容</span>
      </div>
      <div slot="footer">
        <div>这是底部内容</div>
      </div>
    </ce-base-card>
  </div>
</template>

<style lang="stylus" scoped>
.demo-card
  margin-right 50px
  vertical-align bottom
</style>

<script>
export default {
	name: "ce-base-demo-zh"
}
</script>
