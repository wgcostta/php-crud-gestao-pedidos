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
import Product from "../../services/productService";

export default {
  name: "HomeComponent",
  data() {
    return {
      products: []
    };
  },
  mounted() {
    Product.listar().then(resposta => {
      this.products = resposta.data;
    });
  },
  components: {
    DashBoardComponent,
    ListComponent
  }
};
</script>

<style scoped>
</style>