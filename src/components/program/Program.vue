<template>
  <section class="program">
    <div class="program__menu-wrapper">
      <ul class="program__menu js-toggle-programs">
        <li class="program__menu-item">
          <button
            :class="[{ active: program }, 'program__menu-btn js-btn-toggle']"
            type="button"
            aria-label="Переключить содержание на доклады"
            data-toggle-selector="reports"
            @click="program = true"
          >
            {{ $t("schedule.Report") }}
          </button>
        </li>
        <li class="program__menu-item">
          <button
            :class="[{ active: !program }, 'program__menu-btn js-btn-toggle']"
            type="button"
            aria-label="Переключить содержание на воркшопы"
            data-toggle-selector="workshops"
            @click="program = false"
          >
            {{ $t("schedule.Workshop") }}
          </button>
        </li>
      </ul>
    </div>
    <div class="program__container">
      <div class="program__reports reports toggle" id="reports" v-if="program">
        <ul class="reports__list">
          <li class="reports__list-item speaker">
            <div class="speaker__avatar-wrapper">
              <img
                src="../../assets/1x/speaker1.png"
                width="150"
                height="150"
                alt="Фотография докладчика"
                class="speaker__avatar"
              />
              <p class="speaker__name">{{ $t("speakers.MaximSalnikov") }}</p>
              <p class="speaker__position">Microsoft</p>
            </div>
            <div class="speaker__info">
              <p class="speaker__theme">
                {{ $t("schedule.AutomatingAService") }}
              </p>
              <p class="speaker__theme-description">
                {{ $t("program.DeployedService") }}
              </p>
            </div>
          </li>
          <li class="reports__list-item speaker">
            <div class="speaker__avatar-wrapper">
              <img
                src="../../assets/1x/speaker2.png"
                width="150"
                height="150"
                alt="Фотография докладчика"
                class="speaker__avatar"
              />
              <p class="speaker__name">{{ $t("speakers.ArtyomHarutyunyan") }}</p>
              <p class="speaker__position">ГК «Астрал»</p>
            </div>
            <div class="speaker__info">
              <p class="speaker__theme">{{ $t("schedule.StateManagerArchitecture") }}</p>
              <p class="speaker__theme-description">
                {{ $t("program.StateManagement") }}
              </p>
            </div>
          </li>
          <li class="reports__list-item speaker">
            <div class="speaker__avatar-wrapper">
              <img
                src="../../assets/1x/speaker3.png"
                width="150"
                height="150"
                alt="Фотография докладчика"
                class="speaker__avatar"
              />
              <p class="speaker__name">{{ $t("speakers.RomanDvornov") }}</p>
              <p class="speaker__position">Wrike</p>
            </div>
            <div class="speaker__info">
              <p class="speaker__theme">JSON: push the limits</p>
              <p class="speaker__theme-description">
                {{ $t("program.TheJSONFormat") }}
              </p>
            </div>
          </li>
          <li class="reports__list-item speaker">
            <div class="speaker__avatar-wrapper">
              <img
                src="../../assets/1x/speaker4.png"
                width="150"
                height="150"
                alt="Фотография докладчика"
                class="speaker__avatar"
              />
              <p class="speaker__name">{{ $t("speakers.AnatolyPopko") }}</p>
              <p class="speaker__position">{{ $t("speakers.DialogueInDark") }}</p>
            </div>
            <div class="speaker__info">
              <p class="speaker__theme">
                {{ $t("schedule.BlindPersonUser") }}
              </p>
              <p class="speaker__theme-description">
                {{ $t("program.OtlichayetsyaLiTo") }}
              </p>
            </div>
          </li>
          <li class="reports__list-item speaker">
            <div class="speaker__avatar-wrapper">
              <img
                src="../../assets/1x/speaker5.png"
                width="150"
                height="150"
                alt="Фотография докладчика"
                class="speaker__avatar"
              />
              <p class="speaker__name">{{ $t("speakers.AndreyPechkurov") }}</p>
              <p class="speaker__position">Hazelcast</p>
            </div>
            <div class="speaker__info">
              <p class="speaker__theme">
                {{ $t("schedule.ES6CollectionsUsing") }}
              </p>
              <p class="speaker__theme-description">
                {{ $t("program.TheJSdevelopers") }}
              </p>
            </div>
          </li>
          <li class="reports__list-item speaker">
            <div class="speaker__avatar-wrapper">
              <img
                src="../../assets/1x/speaker6.png"
                width="150"
                height="150"
                alt="Фотография докладчика"
                class="speaker__avatar"
              />
              <p class="speaker__name">{{ $t("speakers.VasilikaKlimova") }}</p>
              <p class="speaker__position">Avaloq</p>
            </div>
            <div class="speaker__info">
              <p class="speaker__theme">{{ $t("program.ExpandingReality") }}</p>
              <p class="speaker__theme-description">
                {{ $t("program.HowLongHave") }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="program__workshops workshops toggle" id="workshops" v-else>
        <ul class="workshops__list">
          <li class="workshops__list-item specialist">
            <div class="specialist__avatar-wrapper">
              <img
                src="../../assets/1x/speaker7.png"
                width="150"
                height="150"
                alt="Фотография докладчика"
                class="specialist__avatar"
              />
              <p class="specialist__name">{{ $t("speakers.JuliaMiocen") }}</p>
              <p class="specialist__position">{{ $t("speakers.Yandex") }}</p>
            </div>
            <div class="specialist__info">
              <p class="specialist__theme">
                {{ $t("schedule.StickStickCucumber") }}
                [{{ $t("schedule.Workshop") }}]
              </p>
              <p class="specialist__theme-description">
                {{ $t("program.HowToAssemble") }}
              </p>
            </div>
          </li>
          <li class="workshops__list-item specialist">
            <div class="specialist__avatar-wrapper">
              <img
                src="../../assets/1x/speaker8.png"
                width="150"
                height="150"
                alt="Фотография докладчика"
                class="specialist__avatar"
              />
              <p class="specialist__name">{{ $t("speakers.AndreyMelikhov") }}</p>
              <p class="specialist__position">Arrival</p>
            </div>
            <div class="specialist__info">
              <p class="specialist__theme">
                {{ $t("schedule.DependencyInversionTheory") }} [{{ $t("schedule.Workshop") }}]
              </p>
              <p class="specialist__theme-description">
                {{ $t("program.LetsFigure") }}
              </p>
            </div>
          </li>
          <li class="workshops__list-item specialist">
            <div class="specialist__avatar-wrapper">
              <img
                src="../../assets/1x/speaker9.png"
                width="150"
                height="150"
                alt="Фотография докладчика"
                class="specialist__avatar"
              />
              <p class="specialist__name">{{ $t("speakers.DmitryNikolaev") }}</p>
              <p class="specialist__position">{{ $t("speakers.AliceAwardWinner") }}</p>
            </div>
            <div class="specialist__info">
              <p class="specialist__theme">
                {{ $t("schedule.CreationOfApplications") }} [{{ $t("schedule.Workshop") }}]
              </p>
              <p class="specialist__theme-description">
                {{ $t("program.WhatIsTheMost") }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Program",
  data() {
    return {
      program: true,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.program {
  background: #ffffff url(../../assets/1x/program-bg-desktop@1x.png) no-repeat 0
    0;
  background-size: cover;
}

.program__menu-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 18px;
  background-color: rgba($color: #000000, $alpha: 0.7);
}

.program__menu {
  position: relative;
  @include clear-list;
  display: flex;
  justify-content: space-between;
  width: 200px;
  @media all and(max-width: $screen-sm-max) {
    justify-content: space-evenly;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 47.5%;
    @include size(40px, 2px);
    background-color: #ffffff;
    transform: translateX(-50%) rotate(90deg);
    @media all and(max-width: $screen-sm-max) {
      width: 20px;
      height: 1px;
    }
  }
}

.program__menu-btn {
  position: relative;
  padding: 0;
  @include font(400, 19px, 31px, $main-font);
  color: #ffffff;
  background-color: transparent;
  border: 0;
  @media all and(max-width: $screen-sm-max) {
    font-size: 10px;
    line-height: 20px;
  }
  &:hover {
    cursor: pointer;
  }

  &.active {
    &:hover {
      cursor: default;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 1px;
      left: 0;
      @include size(100%, 1px);
      background-color: #ffffff;
    }
  }
}

.program__container {
  @include container;
  padding-top: 70px;
  padding-bottom: 70px;
  @media all and(max-width: $screen-sm-max) {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.speaker {
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 1fr 3fr;
  gap: 10%;

  @media all and(max-width: $screen-lg) {
    grid-template-columns: 1fr 2fr;
  }

  @media all and(max-width: $screen-sm-max) {
    flex-wrap: wrap;
    justify-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5%;
  }

  @media all and(max-width: $screen-xs) {
    grid-template-rows: 1fr 2fr;
  }

  //&:not(:last-child) {
  //margin-bottom: 70px;
  //@media all and(max-width: $screen-sm-max) {
  //  margin-bottom: 30px;
  //}
  //}
}

.speaker__avatar-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include size(100%, auto);
  // max-width: 320px;
  margin-right: 20px;
}

.speaker__avatar {
  @include size(55%, auto);
  margin-bottom: 10px;
  border-radius: 50%;

  @media all and(max-width: $screen-sm-max) {
    @include size(110px, 110px);
  }
}

.speaker__name {
  @include clear-block;
  max-width: 100%;
  margin-bottom: 3px;
  @include font(400, 18px, 23px, $main-font);
  text-align: center;
  color: #000000;
  @media all and(max-width: $screen-sm-max) {
    font-size: 12px;
    line-height: 17px;
    margin-top: 7px;
  }
}

.speaker__position {
  @include clear-block;
  color: #808080;
}

.speaker__info {
  display: flex;
  flex-direction: column;
  width: 100%;
  @include font(400, 14px, 24px, $main-font);
  color: #000000;
  @media all and(max-width: $screen-sm-max) {
    margin-top: 10px;
    width: auto;
    font-size: 11px;
    line-height: 18px;
  }
}

.speaker__info p {
  @include clear-block;
  width: fit-content;
}

p.speaker__theme {
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
}

.speakers {
  position: relative;
  padding-top: 220px;
  padding-bottom: 80px;

  &::before {
    content: "спикеры";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 51%;
    @include font(200, 150px, 170px, "Roboto");
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
  @media all and (max-width: $screen-sm-max) {
    justify-content: center;
  }
}

.speakers__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 33.3%;
  min-width: 250px;

  @media all and (max-width: $screen-sm-max) {
    margin-top: 10px;
  }

  &:nth-of-type(n + 4) {
    margin-top: 60px;
  }
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

.reports {
  position: relative;
  padding: 50px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    @include size(100%, 100%);
    background-color: rgba($color: #ffffff, $alpha: 0.9);
    border-radius: 0 150px;
    @media all and(max-width: $screen-sm-max) {
      border-radius: 0 50px;
    }
  }
}

.reports__list {
  position: relative;
  z-index: 1;
  @include clear-list;
  display: flex;
  flex-direction: column;
  gap: 70px;

  @media all and(max-width: $screen-sm-max) {
    gap: 60px;
  }
}

.workshops {
  position: relative;
  padding: 50px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    @include size(100%, 100%);
    background-color: rgba($color: #ffffff, $alpha: 0.9);
    border-radius: 0 150px;
    @media all and(max-width: $screen-sm-max) {
      border-radius: 0 50px;
    }
  }
}

.workshops__list {
  position: relative;
  z-index: 1;
  @include clear-list;
  display: flex;
  flex-direction: column;
  gap: 70px;

  @media all and(max-width: $screen-sm-max) {
    gap: 60px;
  }
}

.specialist {
  display: grid;
  justify-content: space-between;
  //align-items: center;
  grid-template-columns: 1fr 3fr;
  gap: 10%;

  @media all and(max-width: $screen-lg) {
    grid-template-columns: 1fr 2fr;
  }

  @media all and(max-width: $screen-sm-max) {
    flex-wrap: wrap;
    justify-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5%;
  }

  @media all and(max-width: $screen-xs) {
    grid-template-rows: 1fr 2fr;
  }

  //&:not(:last-child) {
  //  margin-bottom: 70px;
  //  @media all and(max-width: $screen-sm-max) {
  //    margin-bottom: 30px;
  //  }
  //}
}

.specialist__avatar-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include size(100%, auto);
  // max-width: 320px;
  margin-right: 20px;
}

.specialist__avatar {
  @include size(55%, auto);
  margin-bottom: 10px;
  border-radius: 50%;

  @media all and(max-width: $screen-sm-max) {
    @include size(110px, 110px);
  }
}

.specialist__name {
  @include clear-block;
  max-width: 100%;
  margin-bottom: 3px;
  @include font(400, 18px, 23px, $main-font);
  text-align: center;
  color: #000000;
  @media all and(max-width: $screen-sm-max) {
    font-size: 12px;
    line-height: 17px;
    margin-top: 7px;
  }
}

.specialist__position {
  @include clear-block;
  color: #808080;
}

.specialist__info {
  display: flex;
  flex-direction: column;
  width: 100%;
  @include font(400, 14px, 24px, $main-font);
  color: #000000;
  @media all and(max-width: $screen-sm-max) {
    margin-top: 10px;
    width: auto;
    font-size: 11px;
    line-height: 18px;
  }
}

.specialist__info p {
  @include clear-block;
  width: fit-content;
}

p.specialist__theme {
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
}
</style>
