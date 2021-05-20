<template>
  <div class="container is-fullhd columns " type="is-primary" id="main">
    <div class="column is-two-fifths">
      <b-image
        :src="require('../assets/img/main-photo.jpg')"
        alt="Мерзкое ебало Вишни"
        ratio="328by410"
        class="column__img"
      >
      </b-image>
    </div>
    <div class="column">
      <h1 class="column__title">Lorem ipsum</h1>
      <p class="column__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda
        animi soluta excepturi rem consequuntur illo quaerat laborum natus.
        Consequuntur magnam laborum non dignissimos, expedita placeat reiciendis
        recusandae blanditiis sunt.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#main {
  background-color: $primary;
  margin: 0 auto;
  padding: 30px 50px 40px 60px;
  color: $white;
}

.column__title {
  font-weight: normal;
  font-size: 64px;
  line-height: 82px;
  text-align: center;
  letter-spacing: 5px;
  margin: 50px 0 50px;
}

.column__content {
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  letter-spacing: 2px;
  padding: 30px;
}

.column__img {
    box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.25);
}
</style>
