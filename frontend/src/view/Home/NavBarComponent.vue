<template>
  <div class="navbar">
    <div class="alert">
      <AlertComponent :mensagem="mensagem" />
    </div>
  </div>
</template>

<script>
import AlertComponent from "../../components/AlertComponent";
export default {
  name: "NavBarComponent",
  data() {
    return {
      mensagem: ""
    };
  },
  components: {
    AlertComponent
  }
};
</script>

<style scoped>
img {
  max-width: 150px;
  max-height: 100px;
  width: auto;
  height: auto;
}
</style>