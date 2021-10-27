<template>
  <section class="about">
    <div class="about__container">
      <ul class="about__list">
        <li class="about__item">
          <h2 class="about__title">Где проходит</h2>
          <div class="about__card card">
            <div class="card__img-wrapper">
              <img
                src="../../assets/1x/card-1-desktop@1x.png"
                width="425"
                height="400"
                alt="Фотография Таганрога с большой высоты"
                class="card__img"
              />
            </div>
            <a href="./capital.html" class="card__link">Подробнее</a>
          </div>
        </li>
        <li class="about__item">
          <h2 class="about__title">Культурная программа</h2>
          <div class="about__card card">
            <div class="card__img-wrapper">
              <img
                src="../../assets/1x/card-2-desktop@1x.png"
                width="425"
                height="400"
                alt="Памятник Чехову на лавке"
                class="card__img"
              />
            </div>
            <a href="./culture.html" class="card__link">Подробнее</a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.about {
  position: relative;
  padding-top: 100px;
  padding-bottom: 130px;
  @media all and (max-width: $screen-sm-max) {
    padding-top: 40px;
    padding-bottom: 60px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    @include size(100%, 1px);
    background-color: #c4c4c4;

    @media all and (max-width: $screen-sm-max) {
      bottom: 0;
      right: 0;
      left: 0;
      width: 75%;
      margin: 0 auto;
    }
  }
}

.about__container {
  @include container;
}

.about__list {
  @include clear-list;
  display: flex;
  justify-content: space-between;

  @media all and (max-width: $screen-sm-max) {
    flex-wrap: wrap;
  }
}

.about__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 450px;

  &:first-of-type {
    margin-right: 30px;
    @media all and (max-width: $screen-sm-max) {
      margin-right: 0;
    }
  }
}

.about__title {
  @include title;
  max-width: 230px;
  margin-bottom: 40px;
  text-align: center;
  @media all and (max-width: $screen-sm-max) {
    font-size: 20px;
    line-height: 28px;
    margin: 15px 0 20px;
  }
}

.card {
  position: relative;
  height: auto;
  transition: all ease-in-out 0.25s;
  overflow: hidden;

  &:hover {
    &::before {
      opacity: 1;
    }

    & .card__img {
      transform: scale(1.05);
    }

    & .card__link {
      top: 50%;
      opacity: 1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    @include size(100%, 100%);
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.7)
    );
    opacity: 0;
    transition: all ease-in-out 0.25s;
  }
}

.card__img-wrapper {
  @include size(100%, auto);
  max-width: 425px;
}

.card__img {
  @include size(425px, auto);
  transition: all ease-in-out 0.25s;
}

.card__link {
  position: absolute;
  z-index: 1;
  top: 60%;
  left: 50%;
  display: block;
  @include font(500, 23px, 27px, "Roboto");
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #ffffff;
  opacity: 0;
  transform: translateX(-50%);
  transition: all ease-in-out 0.25s;
}
</style>
