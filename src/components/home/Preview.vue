<template>
  <section class="preview">
    <div class="preview__container">
      <div class="preview__wrapper">
        <div class="preview__text-wrapper">
          <div class="preview__info-wrapper">
            <div class="preview__first-line">
              <p class="preview__conf-small">{{ $t("preview.InternationalConference") }}</p>
              <p>IT</p>
            </div>
            <p>
              <span class="preview__purple">20</span
              ><span class="preview__blue">21</span>
            </p>
            <p>год</p>
          </div>
          <div class="preview__logo-wrapper">
            <svg class="preview__logo" width="720" height="340">
              <use xlink:href="#icon-logo"></use>
            </svg>
          </div>
        </div>
        <div class="preview__link-wrapper">
          <router-link :to="{ name: 'Registration', params: { lang: this.$i18n.locale } }" class="preview__link"
            >{{ $t("preview.RegisterNow") }}</router-link
          >
          <p class="preview__date">&lt; 10 {{ $t("preview.December") }}  ></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Preview",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.preview {
  position: relative;
  z-index: 1;
  margin-top: -111px;
  padding-top: 250px;
  padding-bottom: 30px;
  background: #4a4949 url("../../assets/1x/preview-bg-desktop@1x.png") no-repeat
    0 0;
  background-size: cover;

  @media all and(max-width: $screen-sm-max) {
    padding-top: 100px;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    @include size(100%, 100%);
    background-color: rgba($color: #4a4949, $alpha: 0.7);
  }
}

.preview__container {
  @include container;
}

.preview__text-wrapper {
  display: flex;
  margin-bottom: 50px;
}

.preview__info-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 50px;
  @include font(700, 64px, 75px, "Roboto");
  color: #ffffff;
  @media all and (max-width: $screen-sm-max) {
    @include font(700, 20px, 30px, "Roboto");
    align-items: inherit;
  }
}

.preview__info-wrapper p {
  @include clear-block;
}

.preview__first-line {
  display: flex;
  align-items: center;
  @media all and (max-width: $screen-sm-max) {
    display: block;
  }
}

p.preview__conf-small {
  max-width: 160px;
  margin-right: 10px;
  font-size: 20px;
  line-height: 23px;
  text-align: right;
  @media all and (max-width: $screen-sm-max) {
    text-align: left;
    @include font(400, 15px, 18px, "Roboto");
  }
}

.preview__first-line > p {
  font-weight: 400;
}

.preview__purple {
  color: $color-purple;
}

.preview__blue {
  color: $color-blue;
}

.preview__logo {
  @include size(100%, 340px);
}

.preview__link-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.preview__link {
  display: block;
  width: 530px;
  margin-bottom: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  @include font(500, 26px, 35px, "Roboto");
  text-align: center;
  color: #ffffff;
  background-color: #a95cf2;
  @media all and (max-width: $screen-sm-max) {
    width: 250px;
    padding-top: 5px;
    padding-bottom: 5px;
    @include font(500, 18px, 25px, "Roboto");
  }
}

.preview__date {
  @include clear-block;
  @include font(400, 24px, 28px, "Roboto");
  color: #a95cf2;
  @media all and (max-width: $screen-sm-max) {
    @include font(400, 17px, 28px, "Roboto");
  }
}
</style>
