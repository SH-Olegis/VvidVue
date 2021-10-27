<template>
  <section class="capital">
    <div class="capital__container">
      <div class="capital__video-wrapper">
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/rjLjkgPNe1g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p class="capital__text">
        Мы приглашаем вас посетить международную конференцию по Web-разработке в
        городе Таганрог.
      </p>
      <p class="capital__text">
        Премьера фильма «IT-столица России. Таганрог» под эгидой Института
        компьютерных технологий и информационной безопасности ЮФУ состоялась 7
        августа. Героями стали представители IT-бизнеса - выпускники Южного
        федерального университета и власти г. Таганрога.
      </p>
      <p class="capital__text">
        Этот город закладывался его основателем Петром 1 как будущая столица
        России. Однако, в 1698 г. этого не случилось. Мог ли предполагать
        Великий Царь, что спустя 300 с небольшим лет этот город столицей
        все-таки станет.
      </p>
      <p class="capital__text">Друзья, добро пожаловать в Таганрог.</p>
      <p class="capital__text">Добро пожаловать в IT-столицу России.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Capital",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.capital {
  padding-top: 80px;
  padding-bottom: 110px;
  background-color: #282828;
  @media all and(max-width: $screen-sm-max) {
    padding-top: 20px;
    padding-bottom: 10px;
  }
}

.capital__container {
  @include container;
  @media all and(max-width: $screen-sm-max) {
    padding-left: 30px;
    padding-right: 30px;
  }
}

.capital__video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  margin-bottom: 60px;
  padding-top: 56.25%;
}

.capital__video-wrapper iframe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.capital__text {
  @include clear-block;
  margin-bottom: 35px;
  @include font(400, 22px, 29px, $main-font);
  color: #ffffff;
  @media all and(max-width: $screen-sm-max) {
    font-size: 12px;
    line-height: 17px;
  }
}
</style>
