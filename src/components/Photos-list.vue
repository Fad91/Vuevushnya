<template>
  <b-carousel-list v-model="test" :data="items" :items-to-show="3">
    <template #item="list">
      <div class="card">
        <div class="card-image">
          <figure class="image is-square is-fullwidth">
           <img :src="list.image"/>
          </figure>
        </div>
      </div>
    </template>
  </b-carousel-list>
</template>

<script>
export default {
  data() {
    return {
      test: 0,
      items: [
        {
          image: require("../assets/img/wedding-photo1.jpg"),
        },
        {  
          image: require("../assets/img/wedding-photo2.jpg"),
        },
        {
          image: require("../assets/img/wedding-photo3.jpg"),
        },
        {
          image: "https://buefy.org/static/img/placeholder-1280x960.png",
        },
        {
          image: "https://buefy.org/static/img/placeholder-1280x960.png",
        },
        {
          image: "https://buefy.org/static/img/placeholder-1280x960.png",
        },
        {
          image: "https://buefy.org/static/img/placeholder-1280x960.png",
        },
        {
          image: "https://buefy.org/static/img/placeholder-1280x960.png",
        },
      ],
    };
  },
};
</script>
