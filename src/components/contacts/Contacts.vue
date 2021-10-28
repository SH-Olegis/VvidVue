<template>
  <section class="contacts">
    <div class="contacts__container">
      <ul class="contacts__list">
        <h1 class="contacts__title">{{ $t("contacts.Title") }}</h1>
        <li class="contacts__item author">
          <div class="author__avatar-wrapper">
            <img
                src="../../assets/1x/contacts-paramonov.jpg"
                width="340"
                height="260"
                alt="Аватар автора"
                class="author__avatar"
            />
          </div>
          <div class="author__info">
            <p class="author__name">{{ $t("contacts.Paramonov") }}</p>
            <p class="author__post">{{ $t("contacts.ParamonovPost") }}</p>
            <a href="mailto:paramonov@sfedu.ru" class="author__email">
              paramonov@sfedu.ru
            </a>
            <a href="tel:+79612929169" class="author__phone">89612929169</a>
          </div>
        </li>
        <li class="contacts__item author">
          <div class="author__avatar-wrapper">
            <img
                src="../../assets/1x/contacts-shevchenko.jpg"
                width="340"
                height="260"
                alt="Аватар автора"
                class="author__avatar"
            />
          </div>
          <div class="author__info">
            <p class="author__name">{{ $t("contacts.Shevchenko") }}</p>
            <p class="author__post">{{ $t("contacts.ShevchenkoPost") }}</p>
            <a href="mailto:shevchenko@sfedu.ru" class="author__email">
              shevchenko@sfedu.ru
            </a>
            <a href="tel:+79612929169" class="author__phone">89612929169</a>
          </div>
        </li>
        <li class="contacts__item author">
          <div class="author__avatar-wrapper">
            <img
              src="../../assets/1x/contacts-almaz.jpg"
              width="340"
              height="260"
              alt="Аватар автора"
              class="author__avatar"
            />
          </div>
          <div class="author__info">
            <p class="author__name">{{ $t("contacts.Almaz") }}</p>
            <p class="author__post">{{ $t("contacts.AlmazPost") }}</p>
            <a href="mailto:almaz@sfedu.ru" class="author__email"
              >almaz@sfedu.ru</a
            >
            <a href="tel:+79612929169" class="author__phone">89612929169</a>
          </div>
        </li>
        <li class="contacts__item author">
          <div class="author__avatar-wrapper">
            <img
              src="../../assets/1x/contacts-kostikova.jpg"
              width="340"
              height="260"
              alt="Аватар автора"
              class="author__avatar"
            />
          </div>
          <div class="author__info">
            <p class="author__name">{{ $t("contacts.Kostikova") }}</p>
            <p class="author__post">{{ $t("contacts.KostikovaPost") }}</p>
            <a href="mailto:kostikova@sfedu.ru" class="author__email">
              kostikova@sfedu.ru</a
            >
            <a href="tel:+79612929169" class="author__phone">89612929169</a>
          </div>
        </li>
        <li class="contacts__item author">
          <div class="author__avatar-wrapper">
            <img
                src="../../assets/1x/contacts-donskaya.jpg"
                width="340"
                height="260"
                alt="Аватар автора"
                class="author__avatar"
            />
          </div>
          <div class="author__info">
            <p class="author__name">{{ $t("contacts.Donskaya") }}</p>
            <p class="author__post">{{ $t("contacts.DonskayaPost") }}</p>
            <a href="mailto:donskaya@sfedu.ru" class="author__email"
            >donskaya@sfedu.ru</a
            >
            <a href="tel:+79612929169" class="author__phone">89612929169</a>
          </div>
        </li>
        <li class="contacts__item author">
          <div class="author__avatar-wrapper">
            <img
                src="../../assets/1x/contacts-kuzubova.jpg"
                width="340"
                height="260"
                alt="Аватар автора"
                class="author__avatar"
            />
          </div>
          <div class="author__info">
            <p class="author__name">{{ $t("contacts.Kuzubova") }}</p>
            <p class="author__post">{{ $t("contacts.KuzubovaPost") }}</p>
            <a href="mailto:kuzubova@sfedu.ru" class="author__email">
              kuzubova@sfedu.ru
            </a>
            <a href="tel:+79612929169" class="author__phone">89612929169</a>
          </div>
        </li>
        <li class="contacts__item author">
          <div class="author__avatar-wrapper">
            <img
              src="../../assets/1x/contacts-boldirev.jpg"
              width="340"
              height="260"
              alt="Аватар автора"
              class="author__avatar"
            />
          </div>
          <div class="author__info">
            <p class="author__name">{{ $t("contacts.Boldirev") }}</p>
            <p class="author__post">{{ $t("contacts.BoldirevPost") }}</p>
            <a href="mailto:boldurev@sfedu.ru" class="author__email"
              >boldurev@sfedu.ru</a
            >
            <a href="tel:+79612929169" class="author__phone">89612929169</a>
          </div>
        </li>
        <li class="contacts__item author">
          <div class="author__avatar-wrapper">
            <img
              src="../../assets/1x/contacts-oleinikov.jpg"
              width="340"
              height="260"
              alt="Аватар автора"
              class="author__avatar"
            />
          </div>
          <div class="author__info">
            <p class="author__name">{{ $t("contacts.Oleinikov") }}</p>
            <p class="author__post">{{ $t("contacts.OleinikovPost") }}</p>
            <a href="mailto:oleinikov@sfedu.ru" class="author__email">
              oleinikov@sfedu.ru
            </a>
            <a href="tel:+79612929169" class="author__phone">89612929169</a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacts",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.contacts {
  padding-bottom: 70px;
  background: #ffffff url(../../assets/1x/contacts-bg-desktop@1x.png) no-repeat
    0 0;
  background-size: cover;
}

.contacts__container {
  @include container;
  position: relative;
  padding-top: 70px;
  @media all and(max-width: $screen-sm-max) {
    padding-top: 0;
  }
}

.contacts__title {
  display: none;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 17px;
  line-height: 23px;
  color: #000000;
  text-align: center;
  @media all and(max-width: $screen-sm-max) {
    display: block;
    margin-bottom: 35px;
  }
}

.contacts__list {
  position: relative;
  z-index: 1;
  @include clear-list;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  padding: 20px 40px;
  @media all and(max-width: $screen-sm-max) {
    padding-top: 0;
    padding-bottom: 55px;
  }
}

.author {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media all and(max-width: $screen-sm-max) {
    flex-direction: column;
  }
  &:not(:last-child) {
    margin-bottom: 70px;
    @media all and (max-width: $screen-sm-max) {
      margin-bottom: 15px;
    }
  }
}

.author__avatar-wrapper {
  position: relative;
  @include size(100%, auto);
  max-width: 260px;
  margin-right: 20px;
  @media all and(max-width: $screen-sm-max) {
    width: 200px;
    margin-right: 0;
  }
}

.author__avatar {
  @include size(340px, auto);
  border-radius: 45px;
  @media all and(max-width: $screen-sm-max) {
    border-radius: 13px;
    background: #c4c4c4;
    box-shadow: 2px 2px 3px rgba(57, 21, 93, 0.5);
  }
}

.author__info {
  display: flex;
  flex-direction: column;
  width: 475px;
  @include font(400, 28px, 39px, $main-font);
  color: #000000;
  @media all and(max-width: $screen-sm-max) {
    width: auto;
    font-size: 9px;
    line-height: 12px;
    text-align: center;
    margin-top: 15px;
  }
}

.author__info > p,
.author__info > a {
  @include clear-block;
  width: fit-content;
  margin-bottom: 1px;
  @media all and(max-width: $screen-sm-max) {
    width: auto;
  }
}

.author__info > a {
  position: relative;
  @include clear-block;
  margin-bottom: 1px;
  color: #000000;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    @include size(100%, 2px);
    background-color: lightgray;
    @media all and(max-width: $screen-sm-max) {
      content: none;
    }
  }

  &:hover {
    &::after {
      display: none;
    }
  }
}
</style>
