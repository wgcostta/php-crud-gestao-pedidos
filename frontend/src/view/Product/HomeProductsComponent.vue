<template>
  <DashBoardComponent>
    <div slot="slot-pages" class="content-pages">
      <ListProductComponent :products="products" />
    </div>
  </DashBoardComponent>
</template>

<script>
import DashBoardComponent from "../Home/DashBoardComponent";
import ListProductComponent from "../../components/ListProductComponent";
import Product from "../../services/productService";

export default {
  name: "HomeProductsComponent",
  data() {
    return { products: [] };
  },
  mounted() {
    Product.listar().then(resposta => {
      this.products = resposta.data;
    });
  },
  components: {
    DashBoardComponent,
    ListProductComponent
  }
};
</script>

<style scoped>
</style>