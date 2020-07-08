<template>
  <DashBoardComponent>
    <div slot="slot-pages" class="content-pages"></div>
  </DashBoardComponent>
</template>

<script>
import DashBoardComponent from "./DashBoardComponent";
const axios = require("axios");

export default {
  name: "HomeComponent",
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.status == 200) {
        this.uses = response.data;
      } else {
        console.error("Ocorreu um erro na API.");
      }
    }
  },

  components: {
    DashBoardComponent
  }
};
</script>

<style scoped>
</style>