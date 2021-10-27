<template>
  <section class="schedule">
    <div class="schedule__container">
      <h2 class="schedule__title">Программа</h2>
      <table class="schedule__timetable timetable">
        <tr class="timetable__row">
          <td class="timetable__title">
            Автоматизируем сервис-воркер с Workbox 6
          </td>
          <td class="timetable__time">12:10</td>
          <td class="timetable__kind timetable__kind--report">
            &lt;&nbsp;Доклад&nbsp;>
          </td>
        </tr>
        <tr class="timetable__row">
          <td class="timetable__title">
            Палка, палка, огуречик. Рисуем персонажную анимацию на CSS
          </td>
          <td class="timetable__time">12:10–14:10</td>
          <td class="timetable__kind timetable__kind--workshop">
            &lt;&nbsp;Воркшоп&nbsp;>
          </td>
        </tr>
        <tr class="timetable__row">
          <td class="timetable__title">Архитектура менеджера состояния</td>
          <td class="timetable__time">12:55</td>
          <td class="timetable__kind timetable__kind--report">
            &lt;&nbsp;Доклад&nbsp;>
          </td>
        </tr>
        <tr class="timetable__row">
          <td class="timetable__title">JSON: push the limits</td>
          <td class="timetable__time">13:40</td>
          <td class="timetable__kind timetable__kind--report">
            &lt;&nbsp;Доклад&nbsp;>
          </td>
        </tr>
        <tr class="timetable__row">
          <td class="timetable__title">
            Теория и практика dependency inversion
          </td>
          <td class="timetable__time">14:30–16:30</td>
          <td class="timetable__kind timetable__kind--workshop">
            &lt;&nbsp;Воркшоп&nbsp;>
          </td>
        </tr>
        <tr class="timetable__row">
          <td class="timetable__title">
            Пользовательский опыт незрячего человека
          </td>
          <td class="timetable__time">15:00</td>
          <td class="timetable__kind timetable__kind--report">
            &lt;&nbsp;Доклад&nbsp;>
          </td>
        </tr>
        <tr class="timetable__row">
          <td class="timetable__title">
            ES6-коллекции на примере V8: у ней внутре неонка
          </td>
          <td class="timetable__time">15:45</td>
          <td class="timetable__kind timetable__kind--report">
            &lt;&nbsp;Доклад&nbsp;>
          </td>
        </tr>
        <tr class="timetable__row">
          <td class="timetable__title">Расширяем реальность</td>
          <td class="timetable__time">16:30</td>
          <td class="timetable__kind timetable__kind--report">
            &lt;&nbsp;Доклад&nbsp;>
          </td>
        </tr>
        <tr class="timetable__row">
          <td class="timetable__title">
            Создание приложений для голосовых ассистентов: тренды, возможности,
            разработка
          </td>
          <td class="timetable__time">16:45–18:45</td>
          <td class="timetable__kind timetable__kind--workshop">
            &lt;&nbsp;Воркшоп&nbsp;>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "Schedule",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.schedule {
  position: relative;
  padding-top: 250px;
  padding-bottom: 150px;
  @media all and (max-width: $screen-sm-max) {
    padding-top: 40px;
    padding-bottom: 25px;
  }
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    @include size(100%, 310px);
    background: #ffffff url("../../assets/schedule-bg.svg") no-repeat 0 0;
    background-size: contain;
  }
}

.schedule__container {
  @include container;
}

.schedule__title {
  @include title;
  margin-bottom: 95px;
  text-align: center;
  color: #39155d;
  @media all and (max-width: $screen-sm-max) {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 45px;
  }
}

.timetable {
  width: 100%;
  border-collapse: collapse;
}

.timetable__row {
  display: flex;
  justify-content: space-between;
  padding: 25px 75px 20px 40px;
  background-color: #ffffff;
  @media all and (max-width: $screen-sm-max) {
    padding: 15px;
    justify-content: unset;
    align-items: center;
  }

  &:nth-of-type(2n + 1) {
    background-color: #c7e7fc;

    & > .timetable__title {
      font-weight: 700;
      color: #1b1e1d;
    }
  }
}

.timetable__title {
  flex-basis: 63%;
  @include font(400, 18px, 30px, "Roboto");
  color: #000000;

  @media all and (max-width: $screen-sm-max) {
    flex-basis: 40%;
    font-size: 16px;
  }
}

.timetable__time,
.timetable__kind {
  display: flex;
  align-items: center;

  @include font(500, 16px, 20px, "Roboto");
  color: #000000;

  @media all and (max-width: $screen-sm-max) {
    font-size: 16px;
    line-height: 18px;
  }

  &--report {
    color: $color-blue;
  }

  &--workshop {
    color: $color-purple;
  }
}

.timetable__time {
  flex-basis: 18%;
  @media all and (max-width: $screen-sm-max) {
    flex-basis: 20%;
  }
}

.timetable__kind {
  flex-basis: 19%;

  @media all and (max-width: $screen-sm-max) {
    flex-basis: 40%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
