<template>
  <section class="introduction">
    <div class="introduction__container">
      <!--          <h2 class="introduction__title">-->
      <!--            Конференция для javascript-разработчиков-->
      <!--          </h2>-->
      <p class="introduction__text">
        {{ $t("introduction.WebsIsAn") }}
      </p>
      <p class="introduction__text">
        {{ $t("introduction.WebsBringsTogether") }}
      </p>
      <p class="introduction__text">
        {{ $t("introduction.WebsProvidesWorkshops") }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Introduction",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.introduction {
  padding-top: 80px;
  padding-bottom: 50px;
}

.introduction__container {
  @include container;
}

.introduction__title {
  @include title;
  margin-bottom: 55px;
  @media all and (max-width: $screen-sm-max) {
    font-size: 18px;
  }
}

.introduction__text {
  @include clear-block;
  @include font(500, 20px, 24px, "Roboto");
  letter-spacing: 0.05em;
  color: #1b1e1d;
  @media all and (max-width: $screen-sm-max) {
    font-size: 18px;
  }
  &:not(:last-child) {
    margin-bottom: 40px;
  }
}
</style>
