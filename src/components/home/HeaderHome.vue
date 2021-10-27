<template>
  <header class="header header--index">
    <div class="header__container">
      <div class="header__logo-wrapper">
        <svg class="header__logo" width="108" height="31">
          <use xlink:href="#icon-logo"></use>
        </svg>
      </div>
      <nav class="header__menu">
        <ul class="header__nav">
          <li class="header__nav-item">
            <router-link
              :to="{ name: '', params: { lang: this.$i18n.locale } }"
              class="header__nav-link"
              >{{ $t("header.Main") }}</router-link
            >
          </li>
          <li class="header__nav-item">
            <router-link
              :to="{ name: 'Program', params: { lang: this.$i18n.locale } }"
              class="header__nav-link"
              >{{ $t("header.Program") }}</router-link
            >
          </li>
          <li class="header__nav-item">
            <router-link
              :to="{
                name: 'Registration',
                params: { lang: this.$i18n.locale },
              }"
              class="header__nav-link"
              >{{ $t("header.Registration") }}</router-link
            >
          </li>
          <li class="header__nav-item">
            <router-link
              :to="{ name: 'Contacts', params: { lang: this.$i18n.locale } }"
              class="header__nav-link"
            >
              {{ $t("header.Contacts") }}</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderHome",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.header {
  background-color: #000000;

  &--index {
    position: relative;
    z-index: 2;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
}

.header__container {
  @include container;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 95px;
  padding-right: 40px;
  padding-left: 40px;
  @media all and(max-width: $screen-sm-max) {
    min-height: 30px;
  }
}

.header__logo-wrapper {
  margin-right: 40px;
}

.header__logo {
  @include size(108px, 31px);
  @media all and(max-width: $screen-sm-max) {
    width: 30px;
    height: 8px;
  }
}

.header__menu {
  max-width: 800px;
  width: 100%;
}

.header__nav {
  @include clear-list;
  display: flex;
  justify-content: space-evenly;
}

.header__nav-item {
  &:not(:last-child) {
    margin-right: 5%;
  }
}

.header__nav-link {
  @include font(400, 19px, 25px, $main-font);
  color: #ffffff;
  @media all and(max-width: $screen-sm-max) {
    font-size: 9px;
    line-height: 12px;
  }
}
</style>
