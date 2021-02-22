<template>
  <div class="catalog">
    <SearchFieldBeer />
    <FilterBeer />
    <BeerList />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchFieldBeer from "@/components/Catalog/SearchFieldBeer";
import FilterBeer from "@/components/Catalog/FilterBeer";
import BeerList from "@/components/Catalog/BeerList";

export default {
  name: "Catalog",
  components: {
    SearchFieldBeer,
    FilterBeer,
    BeerList,
  },
  data() {
    return {
      data: "",
    };
  },
};
</script>

<style scoped>
</style>