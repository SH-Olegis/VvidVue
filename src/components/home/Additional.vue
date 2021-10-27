<template>
  <section class="additional">
    <div class="additional__container">
      <h3 class="additional__title">Кроме того в программе:</h3>
      <ul class="additional__list">
        <li class="additional__list-item">
          <p>Современные подходы для создания PWA приложений.</p>
        </li>
        <li class="additional__list-item">
          <p>Проблемы больших JSON и их решение.</p>
        </li>
        <li class="additional__list-item">
          <p>
            Как видят сайты незрячие люди и как мы можем облегчить их жизнь.
          </p>
        </li>
        <li class="additional__list-item">
          <p>Что у JS под капотом?</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Additional",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.additional {
  position: relative;
  padding-top: 215px;
  padding-bottom: 120px;
  @media all and (max-width: $screen-sm-max) {
    padding-top: 280px;
    padding-bottom: 55px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    @include size(100%, 1px);
    background-color: #c4c4c4;
  }
}

.additional__container {
  @include container;
}

.additional__title {
  @include title;
  margin-bottom: 50px;
  @media all and (max-width: $screen-sm-max) {
    font-size: 24px;
  }
}

.additional__list {
  @include clear-list;
  display: flex;
  flex-direction: column;
}

.additional__list-item {
  flex-basis: 100%;
  background-color: $color-blue;

  &:not(:last-child) {
    margin-bottom: 45px;
    @media all and (max-width: $screen-sm-max) {
      margin-bottom: 30px;
    }
  }
}

.additional__list-item p {
  @include clear-block;
  padding: 22px 50px;
  @include font(400, 18px, 22px, "Roboto");
  color: #ffffff;
  @media all and (max-width: $screen-sm-max) {
    padding: 22px 15px;
  }
}
</style>
