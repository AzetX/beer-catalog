<template>
  <div class="catalog">
    <SearchFieldBeer />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchFieldBeer from "@/components/Catalog/SearchFieldBeer";
export default {
  name: "Catalog",
  components: {
    SearchFieldBeer,
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