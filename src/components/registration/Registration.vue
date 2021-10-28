<template>
  <section class="registration">
    <!-- <div class="registration__info">
      <div class="registration__text">
        <p>
          Конференция WebS состоится 10 декабря в Таганроге, Россия. Сейчас
          формируем программу и ищем спикеров.
        </p>
      </div>
      <div class="registration__text">
        <p>
          Если вы Web - разработчик и у вас есть желание выступить с
          докладом и поделиться своими знаниями, ждем ваших ответов ниже.
          После заполнения заявки мы сообщим вам о ее получении и о том,
          сколько времени нам потребуется на ее рассмотрение.
        </p>
      </div>
      <div class="registration__text">
        <p>
          Крайний срок: 11&nbsp;июля&nbsp;2021&nbsp;г. Если у вас есть
          вопросы, напишите нам: Webs@gmail.com Ждем ваших интересных бесед.
        </p>
      </div>
    </div> -->
    <div class="registration-form">
      <h3 class="registration-form__title">{{ $t("header.Registration") }}</h3>
      <div class="registration-form__switch js-toggle-form-reg">
        <button
            @click="speaker = false"
          :class="[{active: !speaker},'registration-form__btn js-btn-toggle']"
        >
          {{ $t("registration.Guest") }}
        </button>
        <button
            @click="speaker = true"
            :class="[{active: speaker},'registration-form__btn js-btn-toggle']"
        >
          {{ $t("registration.Speaker") }}
        </button>
      </div>
      <form action="" class="registration-form__form">
        <div class="registration-form__user-form">
          <div class="registration-form__speaker-form toggle" id="guest" v-if="!speaker">
            <div class="registration-form__control">
              <label for="firstname">{{  $t("registration.Name") }}</label>
              <input type="text" id="firstname" />
            </div>
            <div class="registration-form__control">
              <label for="lastname">{{  $t("registration.Surname") }}</label>
              <input type="text" id="lastname" />
            </div>
            <div class="registration-form__control">
              <label for="email">E-mail</label>
              <input type="email" id="email" />
            </div>
          </div>
          <div class="registration-form__speaker-form toggle" id="speaker" v-else>
            <div class="registration-form__control">
              <label for="firstname">{{  $t("registration.Name") }}</label>
              <input type="text" id="firstname" />
            </div>
            <div class="registration-form__control">
              <label for="lastname">{{  $t("registration.Surname") }}</label>
              <input type="text" id="lastname" />
            </div>
            <div class="registration-form__control">
              <label for="phone">{{ $t("registration.Telephone") }}</label>
              <input type="tel" id="phone" />
            </div>
            <div class="registration-form__control">
              <label for="email">E-mail</label>
              <input type="email" id="email" />
            </div>
            <div class="registration-form__control">
              <label for="password">{{ $t("registration.Password") }}</label>
              <input type="password" id="password" />
            </div>
          </div>

          <div class="registration-form__submit">
            <button
              class="registration-form__btn registration-form__btn_submit"
              type="submit"
            >
              {{ $t("feedback.Submit") }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      speaker: false
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.registration {
  min-height: 100%;
  padding-top: 70px;
  padding-bottom: 120px;

  @media all and(max-width: $screen-sm-max) {
    padding-top: 0;
  }
}

.registration__info {
  display: flex;
  margin-bottom: 70px;
  @media all and(max-width: $screen-sm-max) {
    display: block;
    margin-bottom: 15px;
  }
}

.registration__text {
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 20px 30px;
  text-align: left;

  &:first-of-type {
    justify-content: flex-end;
    background-color: rgba($color: #55c2ff, $alpha: 0.95);
    @media all and(max-width: $screen-sm-max) {
      justify-content: normal;
    }
    & > p {
      max-width: 190px;
      @media all and(max-width: $screen-sm-max) {
        max-width: none;
      }
    }
  }

  &:nth-of-type(2) {
    max-width: 38%;
    background-color: rgba($color: #663c88, $alpha: 0.95);
    @media all and(max-width: $screen-sm-max) {
      max-width: none;
    }
  }

  &:last-of-type {
    justify-content: flex-start;
    background-color: rgba($color: #ff5fef, $alpha: 0.95);

    & > p {
      max-width: 190px;
      @media all and(max-width: $screen-md-max) {
        max-width: none;
      }
    }
  }
}

.registration__text > p {
  @include clear-block;
  @include font(400, 16px, 21px, $main-font);
  color: #ffffff;
  @media all and(max-width: $screen-sm-max) {
    font-size: 11px;
    line-height: 20px;
  }
}

.registration-form {
  padding: 40px 160px 80px 130px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #171717;
  max-width: 850px;
  @media all and(max-width: $screen-sm-max) {
    padding: 10px 30px 30px;
  }
}

.registration-form__form {
  width: 100%;
}

.registration-form__title {
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
}

.registration-form__switch {
  @media all and(max-width: $screen-sm-max) {
    display: flex;
  }
}

.registration-form__btn {
  width: 212px;
  height: 56px;
  background: #ffffff;
  border: none;
  margin: 0 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #000000;
  cursor: pointer;

  @media all and(max-width: $screen-sm-max) {
    width: 160px;
  }

  &.active {
    background: #ea46da;
  }

  &_submit {
    width: 260px;
    height: 56px;
    background: #ea46da;
  }
}

.registration-form__control {
  & {
    margin-top: 50px;
  }

  > label {
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
  }

  > input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent !important;
    outline: none;
    padding: 10px;
    font-size: 16px;
    line-height: 18px;
    color: #ffffff !important;
  }
}

.registration-form__submit {
  margin: 50px auto 0;
  width: max-content;
}
</style>
