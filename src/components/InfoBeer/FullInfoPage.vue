<template>
  <div>
    <div class="beer-name">{{ beerItem.name }}</div>
    <div class="beer-tagline">{{ beerItem.tagline }}</div>
    <div class="beer-img">
      <img :src="beerItem.image_url" alt="Beer:)" />
    </div>
    <div class="beer-description">
      {{ beerItem.description }}
    </div>
    <div class="beer-abv">Abv: {{ beerItem.abv }}</div>
    <div class="beer-ibu">Ibu: {{ beerItem.ibu }}</div>
    <div class="return-home">
      <button @click="returnCatalog" id="return-catalog"> Back Catalog </button>
    </div>
  </div>
</template>



<script>
export default {
  name: "FullInfoPage",
  props: {
    beerItem: Object,
  },
  data() {
    return {
      data: "",
    };
  },
  methods: {
    returnCatalog(){
      this.$router.push("/")
    }
  }
};
</script>


<style scoped>
</style>
