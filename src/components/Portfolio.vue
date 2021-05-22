<template>
  <section>
    <h2 class="photos-list__title">Портфолио</h2>
    <b-collapse
      class="card"
      animation="slide"
      v-for="(collapse, index) of collapses"
      :key="index"
      :open="isOpen == index"
      @open="isOpen = index"
    >
      <template #trigger="props">
        <div class="card-header" role="button">
          <p class="card-header-title">
            {{ collapse.title }}
          </p>
          <a class="card-header-icon">
            <b-icon
              :icon="props.open ? 'arrow-down' : 'arrow-right'"
              type="is-light"
              size="is-large"
            >
            </b-icon>
          </a>
        </div>
      </template>
      <div class="card-content">
        <div class="content">
          <Photos-list />
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>

import PhotosList from "./Photos-list";
export default {
  name: "Portfolio",
  data() {
    return {
      isOpen: 0,
      collapses: [
        {
          title: "Свадебное фото и видео",
        },
        {
          title: "Портретная съемка",
        },
        {
          title: "Сьемка видеоклипов",
        },
        {
          title: "Репортажная съемка",
        },
      ],
    };
  },

  components: {
    PhotosList,
  },
};
</script>

<style lang="scss" scoped>
.card-header {
  text-align: left;
}

.photos-list__title {
  font-size: 48px;
  line-height: 61px;
  text-align: center;
  letter-spacing: 5px;
  color: #e0dede;
  text-transform: uppercase;
  margin: 50px 0;
}

.card-header-title {
  color: #e0dede;
  text-transform: uppercase;
  font-size: 48px;
  line-height: 61px;
  letter-spacing: 5px;
  font-weight: 400;
  text-align: center;
}

.card {
  background-color: transparent;
  color: #e0dede;
  box-shadow: none;
  padding: 0 45px;
}

.card-header-icon {
  padding-right: 40px;
}

.collapse-card {
  text-align: left;
}
</style>
