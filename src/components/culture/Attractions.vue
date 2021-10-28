<template>
  <section class="attractions">
    <div class="attractions__container">
      <h2 class="attractions__title">{{ $t("culture.MainTitle") }}</h2>
      <ul class="attractions__list">
        <li class="attractions__item attraction">
          <div class="attraction__img-wrapper">
            <img
              class="attraction__img"
              src="../../assets/1x/attractions-1-desktop@1x.png"
              width="500"
              height="350"
              alt="Фото каменной лестницы с видом на море"
            />
          </div>
          <div class="attraction__text-wrapper">
            <h3 class="attraction__title">{{ $t("culture.FirstTitle") }}</h3>
            <p class="attraction__text">{{ $t("culture.FirstText") }}</p>
          </div>
        </li>
        <li class="attractions__item attraction">
          <div class="attraction__img-wrapper">
            <img
              class="attraction__img"
              src="../../assets/1x/attractions-2-desktop@1x.png"
              width="500"
              height="350"
              alt="Дворец Алфераки"
            />
          </div>
          <div class="attraction__text-wrapper">
            <h3 class="attraction__title">{{ $t("culture.SecondTitle") }}</h3>
            <p class="attraction__text">{{ $t("culture.SecondText") }}</p>
          </div>
        </li>
        <li class="attractions__item attraction">
          <div class="attraction__img-wrapper">
            <img
              class="attraction__img"
              src="../../assets/1x/attractions-3-desktop@1x.png"
              width="500"
              height="350"
              alt="Домик Чехова"
            />
          </div>
          <div class="attraction__text-wrapper">
            <h3 class="attraction__title">{{ $t("culture.ThirdTitle") }}</h3>
            <p class="attraction__text">{{ $t("culture.ThirdText") }}</p>
          </div>
        </li>
        <li class="attractions__item attraction">
          <div class="attraction__img-wrapper">
            <img
              class="attraction__img"
              src="../../assets/1x/attractions-4-desktop@1x.png"
              width="500"
              height="350"
              alt="Дом Чайковского"
            />
          </div>
          <div class="attraction__text-wrapper">
            <h3 class="attraction__title">{{ $t("culture.FourthTitle") }}</h3>
            <p class="attraction__text">{{ $t("culture.FourthText") }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Attractions",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.attractions {
  padding-top: 120px;
  padding-bottom: 80px;

  @media all and (max-width: $screen-sm) {
    padding-top: 60px;
    padding-bottom: 40px;
  }
}

.attractions__container {
  @include container;
}

.attractions__title {
  @include title;
  margin-bottom: 70px;

  @media all and (max-width: $screen-sm) {
    margin-bottom: 40px;
    font-size: 25px;
    line-height: 36px;
  }
}

.attractions__list {
  @include clear-list;
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media all and (max-width: $screen-sm) {
    gap: 60px;
  }
}

.attraction {
  display: flex;
  justify-content: space-between;

  &:nth-of-type(2n) .attraction__text-wrapper {
    color: #1b1c1c;
    background-color: #ffffff;
    border: 1px solid #cccccc;
  }

  @media all and (max-width: $screen-sm) {
    flex-direction: column;
    align-items: center;
  }
}

.attraction__img-wrapper {
  flex-basis: 45%;
  display: flex;
  align-items: center;
  @include size(100%, auto);
  max-width: 500px;
  margin-right: 30px;

  @media all and (max-width: $screen-sm) {
    justify-content: center;
    margin-right: 0;
  }
}

.attraction__img {
  @include size(500px, auto);

  @media all and (max-width: $screen-sm) {
    margin-right: 0;
  }
}

.attraction__text-wrapper {
  flex-basis: 55%;
  // max-width: 800px;
  padding: 32px 40px;
  @include font(400, 18px, 30px, "Roboto");
  letter-spacing: 0.03em;
  color: #ffffff;
  background-color: #1b1c1c;
}

.attraction__title {
  @include clear-block;
  margin-bottom: 15px;
  font-weight: 700;
}

.attraction__text {
  @include clear-block;

  @media all and (max-width: $screen-sm) {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
