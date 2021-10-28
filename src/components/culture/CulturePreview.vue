<template>
  <section class="culture-preview">
    <div class="culture-preview__container">
      <div class="culture-preview__content-wrapper">
        <div class="culture-preview__img-wrapper">
          <img
            class="culture-preview__img"
            src="../../assets/1x/culture-preview-desktop@1x.png"
            width="500"
            height="400"
            alt="Карта Таганрога с достопримечательностями"
          />
        </div>
        <div class="culture-preview__text-wrapper">
          <h1 class="culture-preview__title">{{ $t("culture.PreviewTitle") }}</h1>
          <p class="culture-preview__text">
            {{ $t("culture.PreviewText") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CulturePreview",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.culture-preview {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #1b1c1c;

  @media all and (max-width: $screen-sm) {
    padding-bottom: 60px;
  }
}

.culture-preview__container {
  @include container;
}

.culture-preview__content-wrapper {
  display: flex;
  justify-content: space-between;

  @media all and (max-width: $screen-sm) {
    flex-direction: column;
    align-items: center;
    gap: 70px;
  }
}

.culture-preview__img-wrapper {
  @include size(100%, auto);
  max-width: 500px;
  min-width: 400px;
  margin-right: 30px;

  @media all and (max-width: $screen-sm) {
    margin-right: 0;
    min-width: 320px;
  }
}

.culture-preview__img {
  @include size(500px, auto);
}

.culture-preview__text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 560px;
}

.culture-preview__title {
  @include clear-block;
  margin-bottom: 25px;
  @include font(400, 48px, 56px, "Roboto");
  color: #e1e4e4;

  @media all and (max-width: $screen-sm) {
    font-size: 36px;
    line-height: 46px;
  }
}

.culture-preview__text {
  @include clear-block;
  margin-bottom: 25px;
  @include font(400, 18px, 35px, "Roboto");
  letter-spacing: 0.03em;
  color: #e1e4e4;

  @media all and (max-width: $screen-sm) {
    font-size: 16px;
    line-height: 26px;
  }
}
</style>
