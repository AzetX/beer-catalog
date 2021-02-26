<template>
  <div class="info-beer">
    <h1>Information about beer</h1>
    <div class="full-info-page" v-if="reqResponse === 201">
      <FullInfoPage v-bind:beerItem="beerItemInfo[0]" />
    </div>
    <div class="error-response" v-else>
      <ErrorResponse v-bind:err="beerItemInfo"/>
    </div>
  </div>
</template>



<script>
import { mapGetters } from "vuex";
import FullInfoPage from "../components/InfoBeer/FullInfoPage";
import ErrorResponse from "../components/InfoBeer/ErrorResponse";

export default {
  name: "InfoBeer",
  components: {
    FullInfoPage,
    ErrorResponse,
  },
  data() {
    return {
      data: "",
    };
  },
  computed: {
    ...mapGetters(["beerItemInfo", "reqResponse"]),
  },
};
</script>


<style scoped>
</style>
