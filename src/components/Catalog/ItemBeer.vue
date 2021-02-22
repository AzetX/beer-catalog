<template>
  <div>
    <div class="beer-img">
      <img :src="beer.image_url" alt="Beer:)" />
    </div>
    <div class="beer-description">
      {{ beer.description }}
    </div>
    <div class="beer-name">
      {{ beer.name }}
    </div>
    <div class="beer-name">
      {{ priceBeer + "$" }}
    </div>
    <div class="beer-buy">
      <label for="checkbox" v-if="checked">Delete </label>
      <label for="checkbox" v-else>Add </label>
      <input type="checkbox" id="checkbox" v-model="checked" />
    </div>
  </div>
</template>




<script>
export default {
  name: "BeerItem",
  props: {
    beer: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      checked: false, //for input
    };
  },
  computed: {
    priceBeer() {
      return Math.floor(Math.random() * (300 - 50) + 50);
    },
  },
};
</script>


<style scoped>
</style>