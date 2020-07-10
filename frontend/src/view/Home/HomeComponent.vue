<template>
  <DashBoardComponent>
    <div slot="slot-pages" class="content-pages">
      <ListComponent :products="products" />
    </div>
  </DashBoardComponent>
</template>

<script>
import DashBoardComponent from "./DashBoardComponent";
import ListComponent from "../../components/ListComponent";
const axios = require("axios");

export default {
  name: "HomeComponent",
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      const response = await axios.get("http://127.0.0.1:8000/api/product");
      if (response.status == 200) {
        console.log(response.data);
        this.products = response.data;
      } else {
        console.error("Ocorreu um erro na API.");
      }
    }
  },

  components: {
    DashBoardComponent,
    ListComponent
  }
};
</script>

<style scoped>
</style>