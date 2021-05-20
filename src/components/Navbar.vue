<template>
  <b-navbar class="container is-fullhd" type="is-black">
    <template #start>
      <b-navbar-item href="#">
        Главная
      </b-navbar-item>
      <b-navbar-item href="#">
        Портфолио
      </b-navbar-item>
      <b-navbar-item href="#">
        Цены
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item href="#">
        Оставить заявку
        <span>
          <b-icon icon="email"></b-icon>
          </span>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style lang="scss">
.container {
  box-shadow: 0 0 15px -1px rgba(0, 0, 0, 0.151);
}
</style>
