<template>
  <section class="features">
    <div class="features__container">
      <h2 class="features__title">Что вас ждет:</h2>
      <ul class="features__list">
        <li class="features__list-item">
          <h3>Топовые спикеры</h3>
          <p>
            Лучшие спикеры из крупных IT-компаний поделятся своими best
            practices, которые сами используют в процессе разработки.
          </p>
        </li>
        <li class="features__list-item">
          <h3>Воркшопы</h3>
          <p>
            Узнаете больше о сложной анимации в CSS, разберётесь, что такое
            инверсия зависимостей, а также напишите своё приложение для
            голосовых ассистентов.
          </p>
        </li>
        <li class="features__list-item">
          <h3>Атмосфера</h3>
          <p>
            Сотни неравнодушных разработчиков и разработчиц встретятся вместе,
            чтобы посмотреть доклады от классных спикеров и поучаствовать в
            воркшопах.
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.features {
  position: relative;
  padding-top: 195px;
  padding-bottom: 50px;

  @media all and (max-width: $screen-sm-max) {
    padding-top: 240px;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -60px;
    left: 50%;
    @include size(100%, 120%);
    max-width: 2000px;
    background: #ffffff url("../../assets/features-bg.svg") no-repeat 0 0;
    background-size: cover;
    transform: translateX(-50%);
  }
}

.features__container {
  @include container;
}

.features__title {
  @include title;
  margin-bottom: 100px;
  text-align: right;
  color: #ffffff;
  @media all and (max-width: $screen-sm-max) {
    font-size: 36px;
    margin: 0 0 100px;
    text-align: center;
    color: #fff;
  }
}

.features__list {
  @include clear-list;
  display: flex;
  justify-content: space-between;
  @media all and (max-width: $screen-sm-max) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.features__list-item {
  flex-basis: 33%;
  max-width: 350px;
  padding: 25px 30px 35px;
  background-color: #ffffff;
  border: 1px solid #cccccc;

  @media all and (max-width: $screen-sm-max) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:not(:last-child) {
    margin-right: 20px;
    @media all and (max-width: $screen-sm-max) {
      // margin-right: 20px;
    }
  }
}

.features__list-item h3 {
  @include clear-block;
  margin-bottom: 20px;
  @include font(400, 28px, 32px, "Roboto");
  letter-spacing: 0.05em;
  color: #39155d;
}

.features__list-item p {
  @include clear-block;
  @include font(400, 18px, 25px, "Roboto");
  color: #000000;
}
</style>
