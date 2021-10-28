<template>
  <ul>
    <li @click="show = !show" v-show="!show">
      {{ this.$i18n.locale }}
    </li>
    <li v-for="locale in locales"
        v-show="show"
        @click="switchLocale(locale)"
        :key="locale"
    >
      {{ locale }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  methods: {
    switchLocale(locale) {
      this.show = !this.show
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        const to = this.$router.resolve({ params: { locale } }); // <--------------------
        this.$router.push(to.location); // <--------------------
      }
    },
  },
  data() {
    return {
      show: false,
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
    };
  },
};
</script>

<style scoped  lang="scss">
@import "@/index.scss";

li {
  list-style: none;
  padding: 0 10px 0 20px;
  @include font(400, 19px, 25px, $main-font);
  color: #ffffff;
  background-color: transparent;
  border: 0;
  text-transform: capitalize;
  cursor: pointer;

  @media all and(max-width: $screen-sm-max) {
    padding: 0 10px;
    font-size: 9px;
    line-height: 12px;
  }
}

option {
  color: #000000;
}
</style>
