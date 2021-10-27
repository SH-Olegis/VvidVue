<template>
  <section class="wish">
    <div class="wish__container">
      <div class="wish__wrapper">
        <div class="wish__img-wrapper">
          <img
            src="../../assets/1x/wish-desktop@1x.png"
            width="300"
            height="250"
            alt="Фотография выступающего спикера"
            class="wish__img"
          />
        </div>
        <div class="wish__info-wrapper">
          <h2 class="wish__title">Вы хотите стать спикером?</h2>
          <p class="wish__text">
            Если вы разработчик и хотите выступить и поделиться своим опытом,
            заполните форму до 11 ноября.
          </p>
          <a href="./registration.html" class="wish__link">Подробнее</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Wish",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.wish {
  padding-top: 50px;
  padding-bottom: 150px;
  @media all and (max-width: $screen-sm-max) {
    padding-top: 0;
    padding-bottom: 20px;
  }
}

.wish__container {
  position: relative;
  @include container;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    @include size(75%, 350px);
    background-color: #c7e7fc;
    transform: translate(-50%, -50%);

    @media all and (max-width: $screen-sm-max) {
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      transform: inherit;
    }
  }
}

.wish__wrapper {
  display: flex;
  @media all and (max-width: $screen-sm-max) {
    flex-wrap: wrap;
    padding: 30px;
  }
}

.wish__img-wrapper {
  display: flex;
  align-items: center;
  @include size(100%, auto);
  max-width: 300px;
  margin-right: 50px;
}

.wish__img {
  @include size(300px, auto);
}

.wish__info-wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

.wish__title {
  @include title;
  margin-bottom: 45px;
  @media all and (max-width: $screen-sm-max) {
    font-size: 24px;
    line-height: 28px;
    margin: 0 0 5px;
  }
}

.wish__text {
  @include clear-block;
  max-width: 550px;
  margin-bottom: 40px;
  @include font(500, 18px, 30px, "Roboto");
  color: #000000;
  @media all and (max-width: $screen-sm-max) {
    font-size: 12px;
  }
}

.wish__link {
  width: 250px;
  padding-top: 10px;
  padding-bottom: 10px;
  @include font(500, 18px, 23px, "Roboto");
  text-align: center;
  color: #ffffff;
  background-color: $color-blue;
  @media all and (max-width: $screen-sm-max) {
    font-size: 12px;
  }
}
</style>
