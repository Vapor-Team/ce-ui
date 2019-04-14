<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-logo">
        <img src="../assets/ce-logo.png" style="width:100%;" alt="">
      </div>
      <div class="footer-desc">
        <div class="footer-copyright">© Power By<a href="https://github.com/Vapor-Team" target="_blank">水蒸气团队</a></div>
      </div>
      <div class="github-logo"><a href="https://github.com/Vapor-Team/ce-ui" target="_blank">Github</a></div>
    </div>
  </footer>
</template>

<style lang="stylus" scoped>
.footer
  padding: 10px 0 10px;
  color: #6190E8;
  text-align: center;
  background-color: #fff;

  .container {
    position: relative;
    width: 90%
    box-shadow:0 0 0 0
    margin: 0 auto
  }
  &-logo {
    margin: 10px 0 14px;
    width: 40px;
    height: 40px;
    margin-left: 50px;
  }
  &-desc {
    text-align: left;
    font-size: 12px;
    color: #6190E8;
  }
  &-copyright {
    letter-spacing: 1px;
    font-weight: 300;

    a {
      color: #6190E8;
      text-decoration: none;
    }
  }
  .github-logo
    position: absolute
    right: 20px
    top: 20px
    width: 42px
    height: 42px
    background: url('../assets/github-logo.png') no-repeat
    background-size: 100%
    transition: transform .3s

    &:hover {
      transform: scale(1.1);
    }
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      text-indent: -9999px;
    }

@media screen and (max-width: $screen-sm-max) {
  .footer {
    padding: 20px 0;

    &-logo {
      margin: 8px 0;
      height: 20px;
      width: 100px;
    }
    &-desc {
      font-size: 10px;
    }
    .github-logo {
      top: 0;
      right: 0;
    }
  }
}
</style>
