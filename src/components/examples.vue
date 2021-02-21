<template>
  <div>
    <p ref="dom-element">{{ someLeakyProperty }}</p>
    <p ref="dolement">{{ counter }}</p>
  </div>
</template>



<script>
export default {
  name: "Example",
  props: {
    title: Number,
  },
  data() {
    return {
      someLeakyProperty: "I leak memory if not cleaned up!",
      counter: this.title,
    };
  },
};
</script>


<style>
</style>
