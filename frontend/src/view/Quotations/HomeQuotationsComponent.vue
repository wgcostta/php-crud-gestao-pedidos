<template>
  <DashBoardComponent>
    <div slot="slot-pages" class="content-pages">
      <ListQuotationsComponent />
    </div>
  </DashBoardComponent>
</template>

<script>
import DashBoardComponent from "../Home/DashBoardComponent";
import ListQuotationsComponent from "../../components/ListQuotationsComponent";

export default {
  name: "HomeQuotationsComponent",

  components: {
    DashBoardComponent,
    ListQuotationsComponent
  }
};
</script>

<style scoped>
</style>