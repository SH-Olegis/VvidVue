<template>
  <section class="attractions">
    <div class="attractions__container">
      <h2 class="attractions__title">Какие достопримечательности мы посетим</h2>
      <ul class="attractions__list">
        <li class="attractions__item attraction">
          <div class="attraction__img-wrapper">
            <img
              class="attraction__img"
              src="../../assets/1x/attractions-1-desktop@1x.png"
              width="500"
              height="350"
              alt="Фото каменной лестницы с видом на море"
            />
          </div>
          <div class="attraction__text-wrapper">
            <h3 class="attraction__title">Каменная лестница</h3>
            <p class="attraction__text">
              Лестницу построили на средства купца и мецената Г. Ф. Депальдо в
              1823 году. В длину сооружение достигает 113 метров, в ширину
              доходит до 7 метров и состоит из более 140 ступенек и 13 площадок.
              В 1870-х годах по краям высадили деревья, в 1930-х в результате
              реконструкции добавили статуи в античном стиле, а у основания
              разбили сквер с фонтанами. Последняя реставрация
              достопримечательности проводилась в 2006 году.
            </p>
          </div>
        </li>
        <li class="attractions__item attraction">
          <div class="attraction__img-wrapper">
            <img
              class="attraction__img"
              src="../../assets/1x/attractions-2-desktop@1x.png"
              width="500"
              height="350"
              alt="Дворец Алфераки"
            />
          </div>
          <div class="attraction__text-wrapper">
            <h3 class="attraction__title">Дворец Алфераки</h3>
            <p class="attraction__text">
              Сооружение в греческом стиле, богато украшенное декоративной
              лепниной в манере барокко. Здание возвели в середине XIX века для
              богатого горожанина Н. Д. Алфераки по проекту петербургского
              архитектора А. И. Штакеншнейдера. Уже в конце столетия при
              содействии А. П. Чехова на его территории была организована
              краеведческая экспозиция, которая продолжает работать до сих пор.
              В музее представлены ценнейшие археологические коллекции, находки
              XI–XIII веков, а также предметы интерьера дворянских усадеб.
            </p>
          </div>
        </li>
        <li class="attractions__item attraction">
          <div class="attraction__img-wrapper">
            <img
              class="attraction__img"
              src="../../assets/1x/attractions-3-desktop@1x.png"
              width="500"
              height="350"
              alt="Домик Чехова"
            />
          </div>
          <div class="attraction__text-wrapper">
            <h3 class="attraction__title">Домик Чехова</h3>
            <p class="attraction__text">
              Музей, занимающий небольшой флигель, где появился на свет А.П.
              Чехов. Постройка была сооружена в середине XIX столетия из
              глинобитного кирпича на придомовой территории, принадлежавшей
              купцу А. Д. Гнутову (флигель сдавался в аренду). Музейная
              экспозиция заработала в 1920-х годах, через пару лет после
              открытия выставки вокруг здания посадили вишневый сад. вишневый
              сад.
            </p>
          </div>
        </li>
        <li class="attractions__item attraction">
          <div class="attraction__img-wrapper">
            <img
              class="attraction__img"
              src="../../assets/1x/attractions-4-desktop@1x.png"
              width="500"
              height="350"
              alt="Дом Чайковского"
            />
          </div>
          <div class="attraction__text-wrapper">
            <h3 class="attraction__title">Дом Чайковского</h3>
            <p class="attraction__text">
              Кирпичный особняк конца XIX века, где в период 1883–94 года
              проживал Ипполит Чайковский – брат знаменитого композитора Петр
              Ильич посещал усадьбу несколько раз, о чем говори укрепленная на
              стене памятная табличка. После Революции здании поочередно
              размещались больница, библиотека концертный зал. Отдельную
              комнату-музей организовали в 1970-годах. Она работает как часть
              концертно-выставочного комплекса.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Attractions",
};
</script>

<style scoped lang="scss">
@import "@/index.scss";

.attractions {
  padding-top: 120px;
  padding-bottom: 80px;
}

.attractions__container {
  @include container;
}

.attractions__title {
  @include title;
  margin-bottom: 70px;
}

.attractions__list {
  @include clear-list;
  display: flex;
  flex-direction: column;
}

.attraction {
  display: flex;
  justify-content: space-between;

  &:nth-of-type(2n) .attraction__text-wrapper {
    color: #1b1c1c;
    background-color: #ffffff;
    border: 1px solid #cccccc;
  }

  &:not(:last-child) {
    margin-bottom: 100px;
  }

  // &:nth-of-type(2n) .attraction__text-wrapper {
  //   background-color: #1B1C1C;
  // }
}

.attraction__img-wrapper {
  flex-basis: 45%;
  display: flex;
  align-items: center;
  @include size(100%, auto);
  max-width: 500px;
  margin-right: 30px;
}

.attraction__img {
  @include size(500px, auto);
}

.attraction__text-wrapper {
  flex-basis: 55%;
  // max-width: 800px;
  padding: 32px 40px;
  @include font(400, 18px, 30px, "Roboto");
  letter-spacing: 0.03em;
  color: #ffffff;
  background-color: #1b1c1c;
}

.attraction__title {
  @include clear-block;
  margin-bottom: 15px;
  font-weight: 700;
}

.attraction__text {
  @include clear-block;
}
</style>
