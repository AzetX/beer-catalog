<template>
  <div class="search-field-beer">
    <label for="search-bear">Find your beer</label>
    <input
      type="text"
      placeholder="Search product..."
      id="search-bear"
      v-model="searchBeer"
    />
    <p>{{ searchBeer }}</p>
  </div>
</template>



<script>
export default {
  name: "SearchFieldBeer",
  data() {
    return {
      searchBeer: "", //for input
    };
  },
};
</script>


<style scoped>
</style>
