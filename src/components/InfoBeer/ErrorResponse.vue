<template>
  <div>
    <h1>Problems with data</h1>
    {{err}}
  </div>
</template>



<script>

export default {
  name: "ErrorResponse",
  props: {
    err: String
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
