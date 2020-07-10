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
import Product from "../../services/products";

export default {
  name: "HomeComponent",
  data() {
    return {
      products: []
    };
  },
  mounted() {
    Product.listar().then(resposta => {
      console.log(resposta);
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