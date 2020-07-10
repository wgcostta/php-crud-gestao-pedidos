<template>
  <DashBoardComponent>
    <div slot="slot-pages" class="content-pages">
      <div class="row">
        <div class="col-12 col-md-6">
          <ListComponent />
        </div>
      </div>
    </div>
  </DashBoardComponent>
</template>


<script>
import DashBoardComponent from "../Home/DashBoardComponent";
import ListComponent from "../../components/ListComponent";

export default {
  name: "QuotationsComponent",
  components: {
    DashBoardComponent,
    ListComponent
  }
};
</script>

<style scoped>
</style>