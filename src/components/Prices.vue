<template>
  <div class="prices-section container is-fullhd">
    <h2 class="prices-section__title">Цены</h2>
    <div class="columns container is-fullhd">
      <div class="column price-card">
        <h2 class="price-card__title">СВАДЕБНОЕ ФОТО И ВИДЕО</h2>
        <p class="price-card__content">
          Тариф "Минимум" - 20.000₽ - Встреча и консультация до события - Одна
          камера - Клип с режиссерской работой (дополнительная работа до банкета
          по продумыванию индивидуальных фишек, диалогов, вопросов, поиск
          уникальных мест и идей для пары, интервью с молодыми и гостями)
        </p>
        <p class="price-card__content">
          Тариф "Индивидуальный" - 35.000₽ - Встреча и консультация до события -
          Одна камера - Свадебный фильм (тосты, конкурсы, прогулка, церемония,
          важные моменты, танцы) ~30 мин, тизер 1 мин. - Клип с режиссерской
          работой (дополнительная работа до банкета по продумыванию
          индивидуальных фишек, диалогов, вопросов, поиск уникальных мест и идей
          для пары, интервью с молодыми и гостями)
        </p>
        <p class="price-card__content">
          ОСТАЛЬНЫЕ ТАРИФЫ УТОЧНЯЙТЕ ПО ТЕЛЕФОНУ
        </p>
      </div>
      <div class="column price-card">
        <h2 class="price-card__title">ПОРТРЕТНАЯ СЪЕМКА</h2>
        <p class="price-card__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="column price-card">
        <h2 class="price-card__title">СЪЕМКА ВИДЕОКЛИПОВ</h2>
        <p class="price-card__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="column price-card">
        <h2 class="price-card__title">РЕПОРТАЖНАЯ СЪЕМКА</h2>
        <p class="price-card__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <p class="note">
      ВАЖНО: ТРАНСФЕР ДО УДАЛЕННЫХ МЕСТ СЪЕМОК ОПЛАЧИВАЕТ ЗАКАЗЧИК!
    </p>
  </div>
</template>

<style lang="scss" scoped>
.prices-section {
  color: #cac9c9;
  padding: 60px 20px 30px 20px;
}

.prices-section__title {
  font-weight: 400;
  font-size: 48px;
  line-height: 61px;
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 80px;
  text-transform: uppercase;
}

.columns {
  margin: 0 20px;
}

.column {
  margin-right: 20px;
  border: 2px solid #fc8800;
  border-radius: 10px;
  padding: 0;
}

.column:last-child {
  margin-right: 0;
}

.note {
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  margin-top: 80px;
  letter-spacing: 2px;
}

.price-card__title {
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  letter-spacing: 5px;
}

.columns {
  margin: 0 auto;
}
</style>
