<template>
  <div class="list-beers">
    <div class="beer-info" v-for="beer in allBeers" :key="beer.id">
      <BeerItem v-bind:beer="beer" />
    </div>
  </div>
</template>


<script>
import BeerItem from "./ItemBeer";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BeerList",
  components: {
    BeerItem,
  },
  computed: {
    ...mapGetters(["allBeers"]),
  },
  methods: {
    ...mapActions(["fetchBeers"]),
  },
  async mounted() {
    this.fetchBeers();
  },
};
</script>


<style scoped>
</style>