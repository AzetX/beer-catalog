<template>
  <div>
    <select v-model="selected">
      <option v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>



<script>
export default {
  name: "FilterBeer",
  data() {
    return {
      options: ["Choose a value from the list...", "A-Z", "Z-A"],
    };
  },
};
</script>


<style>
</style>
