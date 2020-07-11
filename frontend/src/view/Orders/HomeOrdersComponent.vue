<template>
  <DashBoardComponent>
    <div slot="slot-pages" class="content-pages">
      <ListOrdersComponent :orders="orders" />
    </div>
  </DashBoardComponent>
</template>

<script>
import DashBoardComponent from "../Home/DashBoardComponent";
import ListOrdersComponent from "../../components/ListOrdersComponent";
import Orders from "../../services/orderedService";

export default {
  name: "HomeOrdersComponent",

  data() {
    return { orders: [] };
  },
  mounted() {
    Orders.listar().then(resposta => {
      this.orders = resposta.data;
    });
  },
  components: {
    DashBoardComponent,
    ListOrdersComponent
  }
};
</script>

<style scoped>
</style>