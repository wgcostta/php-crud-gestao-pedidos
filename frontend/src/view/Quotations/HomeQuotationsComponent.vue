<template>
  <DashBoardComponent :showDismissibleAlert="showDismissibleAlert">
    <div slot="slot-pages" class="content-pages">
      <ListComponent :products="products" />
    </div>
  </DashBoardComponent>
</template>

<script>
import DashBoardComponent from "../Home/DashBoardComponent";
import ListComponent from "../../components/ListComponent";
import Product from "../../services/productService";

export default {
  name: "HomeQuotationsComponent",

  data() {
    return { showDismissibleAlert: false, products: [] };
  },
  mounted() {
    Product.listar().then(resposta => {
      this.products = resposta.data;
    });
  },
  components: {
    DashBoardComponent,
    ListComponent
  },
  methods: {
    ngOnInit() {
      // se possivel, capture o parametro
      this.showDismissibleAlert = this.$router.queryParamMap.map(
        params => params.get("showDismissibleAlert") || "None"
      );
    }
  }
};
</script>

<style scoped>
</style>