<template>
  <section class="account">
    <div class="account__container">
      <form action="" class="account__form acc-form">
        <div class="acc-form__top-wrapper">
          <div class="acc-form__avatar-wrapper">
            <img
              src="../../assets/1x/preview-bg-desktop@1x.png"
              width="343"
              height="343"
              alt="Ваш аватар"
              class="acc-form__avatar"
            />
            <div class="acc-form__avatar-load">
              <input
                id="avatar-upload"
                type="file"
                class="acc-form__avatar-load-input"
              />
              <label
                for="avatar-upload"
                class="acc-form__avatar-load-input-label"
                >Добавить</label
              >
            </div>
          </div>
          <div class="acc-form__speaker-info">
            <h2 class="acc-form__speaker-name">Беляков Максим Викторович</h2>
            <div class="acc-form__input-wrapper">
              <input
                type="tel"
                class="acc-form__input acc-form__speaker-phone"
                placeholder="Телефон:"
              />
            </div>
            <div class="acc-form__input-wrapper">
              <input
                type="email"
                class="acc-form__input acc-form__speaker-mail"
                placeholder="Почта:"
              />
            </div>
          </div>
        </div>
        <div class="acc-form__bottom-wrapper">
          <div class="acc-form__input-wrapper">
            <h3 class="acc-form__input-title">Тема вашего выступления:</h3>
            <input
              type="text"
              class="acc-form__input acc-form__speach-input"
              placeholder="Название:"
            />
          </div>
          <div class="acc-form__input-wrapper">
            <h3 class="acc-form__input-title">Формат выступления:</h3>
            <select
              name="speaker-format"
              class="acc-form__input acc-form__speach-input acc-form__select"
            >
              <option value="Доклад">&lt;Доклад></option>
              <option value="Практика">&lt;Практика></option>
            </select>
          </div>
          <div class="acc-form__input-wrapper">
            <h3 class="acc-form__input-title">Время выступления:</h3>
            <select
              name="speaker-time"
              class="acc-form__input acc-form__speach-input acc-form__select"
            >
              <option value="10:00-11:30">10:00 - 11:30</option>
              <option value="11:30-13:00">11:30 - 13:00</option>
              <option value="13:00-15:00">13:00 - 15:00</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Account",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.account {
  position: relative;
  padding-top: 110px;
  padding-bottom: 110px;
  background-color: #171515;

  //Дизайнер сделал это в пнг)))
  // &::before {
  //   content: '';
  //   position: absolute;
  //   z-index: 0;
  //   top: -60px;
  //   left: 50%;
  //   @include size(100%, 100%);
  //   max-width: 2000px;
  //   background: #ffffff url('.../../assets/account-bg.svg') no-repeat 0 0;
  //   background-size: cover;
  //   transform: translateX(-50%);
  // }
}

.account__container {
  @include container;
}

.acc-form {
  display: flex;
  flex-direction: column;
}

.acc-form__top-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 55px;
}

.acc-form__avatar-wrapper {
  position: relative;
  @include size(100%, auto);
  max-width: 343px;
  margin-right: 20px;
}

.acc-form__avatar-wrapper:hover .acc-form__avatar-load {
  background-color: rgba($color: #000000, $alpha: 0.5);
  transition: background-color 0.3s;
}

.acc-form__avatar-wrapper:hover .acc-form__avatar-load-input-label {
  color: rgba($color: #f6f5f5, $alpha: 1);
  transition: color 0.3s;
}

.acc-form__avatar {
  @include size(343, auto);
}

.acc-form__avatar-load {
  position: absolute;
  top: 0;
  left: 0;
  @include size(100%, 100%);
  background-color: rgba($color: #000000, $alpha: 0);
  transition: background-color 0.3s;
}

.acc-form__avatar-load-input {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

.acc-form__avatar-load-input-label {
  position: absolute;
  top: 50%;
  left: 50%;
  @include font(500, 28px, 34px, "Roboto");
  color: rgba($color: #f6f5f5, $alpha: 0);
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.acc-form__speaker-info {
  display: flex;
  flex-direction: column;
  flex-basis: 55%;
}

.acc-form__speaker-name {
  @include clear-block;
  margin-bottom: 50px;
  @include font(500, 28px, 34px, "Roboto");
  color: #f6f5f5;
}

.acc-form__speaker-phone,
.acc-form__speaker-mail {
  color: #f6f5f5;
}

.acc-form__bottom-wrapper {
  display: flex;
  flex-direction: column;

  & > .acc-form__input-wrapper {
    margin-bottom: 30px;
  }
}

.acc-form__input-wrapper {
  border-bottom: 1px solid lightgray;
}

.acc-form__input-title {
  @include clear-block;
  margin-bottom: 15px;
  @include font(500, 28px, 34px, "Roboto");
  color: #f6f5f5;
}

.acc-form__input {
  width: 100%;
  padding: 5px 15px;
  @include font(400, 20px, 25px, "Roboto");
  background-color: transparent;
  border: 0;

  &::placeholder {
    font-size: 18px;
  }
}

.acc-form__speach-input {
  color: $color-blue;
}

.acc-form__select {
  cursor: pointer;
}
</style>
