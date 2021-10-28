<template>
  <section class="speakers">
    <div class="speakers__container">
      <ul class="speakers__list">
        <li class="speakers__item">
          <div class="speakers__speaker-img-wrapper">
            <img
              src="../../assets/1x/speaker1.png"
              width="250"
              height="250"
              alt="Фотография спикера"
              class="speakers__speaker-img"
            />
          </div>
          <p class="speakers__speaker-name">{{ $t("speakers.MaximSalnikov") }}</p>
          <p class="speakers__speaker-position">Microsoft</p>
        </li>
        <li class="speakers__item">
          <div class="speakers__speaker-img-wrapper">
            <img
              src="../../assets/1x/speaker2.png"
              width="250"
              height="250"
              alt="Фотография спикера"
              class="speakers__speaker-img"
            />
          </div>
          <p class="speakers__speaker-name">{{ $t("speakers.ArtyomHarutyunyan") }}</p>
          <p class="speakers__speaker-position">{{ $t("speakers.GCAstral") }}</p>
        </li>
        <li class="speakers__item">
          <div class="speakers__speaker-img-wrapper">
            <img
              src="../../assets/1x/speaker3.png"
              width="250"
              height="250"
              alt="Фотография спикера"
              class="speakers__speaker-img"
            />
          </div>
          <p class="speakers__speaker-name">{{ $t("speakers.RomanDvornov") }}</p>
          <p class="speakers__speaker-position">Wrike</p>
        </li>
        <li class="speakers__item">
          <div class="speakers__speaker-img-wrapper">
            <img
              src="../../assets/1x/speaker4.png"
              width="250"
              height="250"
              alt="Фотография спикера"
              class="speakers__speaker-img"
            />
          </div>
          <p class="speakers__speaker-name">{{ $t("speakers.AnatolyPopko") }}</p>
          <p class="speakers__speaker-position">{{ $t("speakers.DialogueInDark") }}</p>
        </li>
        <li class="speakers__item">
          <div class="speakers__speaker-img-wrapper">
            <img
              src="../../assets/1x/speaker5.png"
              width="250"
              height="250"
              alt="Фотография спикера"
              class="speakers__speaker-img"
            />
          </div>
          <p class="speakers__speaker-name">{{ $t("speakers.AndreyPechkurov") }}</p>
          <p class="speakers__speaker-position">Hazelcast</p>
        </li>
        <li class="speakers__item">
          <div class="speakers__speaker-img-wrapper">
            <img
              src="../../assets/1x/speaker6.png"
              width="250"
              height="250"
              alt="Фотография спикера"
              class="speakers__speaker-img"
            />
          </div>
          <p class="speakers__speaker-name">{{ $t("speakers.VasilikaKlimova") }}</p>
          <p class="speakers__speaker-position">Avaloq</p>
        </li>
        <li class="speakers__item">
          <div class="speakers__speaker-img-wrapper">
            <img
              src="../../assets/1x/speaker7.png"
              width="250"
              height="250"
              alt="Фотография спикера"
              class="speakers__speaker-img"
            />
          </div>
          <p class="speakers__speaker-name">{{ $t("speakers.JuliaMiocen") }}</p>
          <p class="speakers__speaker-position">{{ $t("speakers.Yandex") }}</p>
        </li>
        <li class="speakers__item">
          <div class="speakers__speaker-img-wrapper">
            <img
              src="../../assets/1x/speaker8.png"
              width="250"
              height="250"
              alt="Фотография спикера"
              class="speakers__speaker-img"
            />
          </div>
          <p class="speakers__speaker-name">{{ $t("speakers.AndreyMelikhov") }}</p>
          <p class="speakers__speaker-position">Arrival</p>
        </li>
        <li class="speakers__item">
          <div class="speakers__speaker-img-wrapper">
            <img
              src="../../assets/1x/speaker9.png"
              width="250"
              height="250"
              alt="Фотография спикера"
              class="speakers__speaker-img"
            />
          </div>
          <p class="speakers__speaker-name">{{ $t("speakers.DmitryNikolaev") }}</p>
          <p class="speakers__speaker-position">{{ $t("speakers.AliceAwardWinner") }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Speakers",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.speakers {
  position: relative;
  padding-top: 220px;
  padding-bottom: 80px;

  @media all and (max-width: $screen-sm-max) {
    padding-top: 100px;
  }

  &::before {
    content: "спикеры";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 51%;
    @include font(200, 140px, 170px, "Roboto");
    text-align: center;
    letter-spacing: 0.25em;
    color: #dcd8d8;
    transform: translateX(-50%);

    @media all and (max-width: $screen-sm-max) {
      top: 0;
      //left: 0;
      //right: 0;
      display: block;
      margin: 0 auto;
      font-weight: 200;
      font-size: 40px;
      line-height: 70px;
    }
  }
}

.speakers__container {
  @include container;
}

.speakers__list {
  @include clear-list;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;

  @media all and (max-width: $screen-sm-max) {
    justify-content: center;
  }
}

.speakers__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 29%;
  min-width: 250px;

  @media all and (max-width: $screen-sm-max) {
    margin-top: 10px;
  }

  //&:nth-of-type(n + 4) {
  //  margin-top: 60px;
  //}
}

.speakers__speaker-img-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  @include size(100%, auto);
  max-width: 250px;
  margin-bottom: 15px;

  @media all and (max-width: $screen-sm-max) {
    width: 100%;
    height: auto;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 50%;
    @include size(250px, 250px);
    background-color: #c4c4c4;
    border-radius: 50%;
    transform: translateX(-50%);
  }
}

.speakers__speaker-img {
  @include size(250px, auto);
  border-radius: 50%;
}

.speakers__speaker-name {
  @include clear-block;
  margin-bottom: 10px;
  @include font(700, 24px, 30px, "Roboto");
  color: #000000;
}

.speakers__speaker-position {
  @include clear-block;
  @include font(400, 18px, 23px, "Helvetica;");
  color: #808080;
}
</style>
