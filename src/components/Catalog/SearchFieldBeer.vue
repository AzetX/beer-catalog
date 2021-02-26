<template>
  <div class="search-field-beer">
    <label for="search-bear">Find your beer</label>
    <input
      type="text"
      placeholder="Search product..."
      id="search-bear"
      v-model="beerItem"
      @change="searchingBeer(beerItem)"
    />
    <p>{{ beerItem }}</p>
  </div>
</template>



<script>
import { mapActions } from "vuex";
export default {
  name: "SearchFieldBeer",
  data() {
    return {
      beerItem: "", //for input
    };
  },
  methods: {
    ...mapActions(["searchBeer"]),
    searchingBeer(beerItem) {
      this.searchBeer(beerItem);
      this.$router.push("infoBeer");
      this.beerItem = "";
    },
  },
};
</script>


<style scoped>
</style>
