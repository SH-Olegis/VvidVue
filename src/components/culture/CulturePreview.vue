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
          <h1 class="culture-preview__title">Культурная программа</h1>
          <p class="culture-preview__text">
            Во второй части нашей программы мы предлагаем вам посетить
            знаменитые места великолепного города Таганрог вместе с
            экскурсоводом и встретить закат у берегов Таганрогского залива.
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
}

.culture-preview__container {
  @include container;
}

.culture-preview__content-wrapper {
  display: flex;
  justify-content: space-between;
}

.culture-preview__img-wrapper {
  @include size(100%, auto);
  max-width: 500px;
  min-width: 400px;
  margin-right: 30px;
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
}

.culture-preview__text {
  @include clear-block;
  margin-bottom: 25px;
  @include font(400, 18px, 35px, "Roboto");
  letter-spacing: 0.03em;
  color: #e1e4e4;
}
</style>
