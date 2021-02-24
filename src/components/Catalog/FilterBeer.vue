<template>
  <div>
    <select v-model="sortType" @change="sortingBeer(sortType)">
      <option disabled value="">Sorting list beer...</option>
      <option
        v-for="(option, index) in sortOptions"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>



<script>
import { mapActions } from "vuex";
export default {
  name: "FilterBeer",
  data() {
    return {
      sortType: "",
      sortOptions: [
        { text: "A-Z", value: "A-Z" },
        { text: "Z-A", value: "Z-A" },
      ],
    };
  },
  methods: {
    // ...mapMutations(["sorting"]),
    ...mapActions(["sortBeer"]),
    sortingBeer(sortType) {
      this.sortBeer(sortType);
    },
  },
};
</script>


<style>
</style>
