<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__logo-wrapper">
        <svg class="footer__logo" width="70" height="30">
          <use xlink:href="#icon-logo"></use>
        </svg>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.footer {
  padding-top: 15px;
  padding-bottom: 10px;
  background-color: #39155d;
}

.footer__container {
  @include container;
}
</style>
