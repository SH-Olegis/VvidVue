<template>
  <section class="feedback">
    <div class="feedback__container">
      <div class="feedback__wrapper">
        <div class="feedback__info-wrapper">
          <h2 class="feedback__title">Есть вопросы?</h2>
          <form action="" class="feedback-form__form">
            <div class="feedback__inputs-wrapper">
              <div class="feedback-form__control">
                <label for="feedback-firstname">Имя</label>
                <input type="text" id="feedback-firstname" />
              </div>
              <div class="feedback-form__control">
                <label for="feedback-email">Email</label>
                <input type="text" id="feedback-email" />
              </div>
            </div>

            <div class="feedback-form__control feedback-form__textarea-control">
              <label for="message">Сообщение</label>
              <textarea id="message" rows="4"></textarea>
            </div>
            <div class="feedback-form__submit">
              <button
                class="feedback-form__btn feedback-form__btn_submit"
                type="submit"
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Feedback",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.feedback {
  margin-top: 100px;
  padding-top: 20px;
  padding-bottom: 25px;
  background-color: #84c2fc;

  @media all and (max-width: $screen-sm-max) {
    padding-top: 0;
    padding-bottom: 20px;
  }
}

.feedback__container {
  @include container;
}

.feedback__wrapper {
  display: flex;
  justify-content: center;

  @media all and (max-width: $screen-sm-max) {
    flex-wrap: wrap;
    padding: 30px;
  }
}

.feedback__info-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

.feedback__title {
  position: absolute;
  top: -100px;
  left: 50%;
  @include title;
  color: #39155d;
  transform: translateX(-50%);

  @media all and (max-width: $screen-sm-max) {
    font-size: 24px;
    line-height: 28px;
    margin: 0 0 5px;
  }
}

.feedback-form__form {
  width: 100%;
}

.feedback-form__btn {
  width: 212px;
  height: 56px;
  background: #ffffff;
  border: none;
  margin: 0 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
  cursor: pointer;

  @media all and(max-width: $screen-sm-max) {
    width: 160px;
  }

  &.active {
    background: rgb(3, 104, 204);
  }

  &_submit {
    width: 260px;
    height: 56px;
    background: rgb(3, 104, 204);
  }
}

.feedback__inputs-wrapper {
  display: flex;
  gap: 40px;
}

.feedback-form__control {
  > label {
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
  }

  > input,
  > textarea {
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

  > textarea {
    resize: none;
  }
}

.feedback-form__textarea-control {
  margin-top: 50px;
}

.feedback-form__submit {
  margin: 50px auto 0;
  width: max-content;
}
</style>
