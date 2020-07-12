<template>
  <div class="navbar">
    <b-alert
      :show="showDismissibleAlert"
      variant="success"
      @dismissed="showDismissibleAlert=true"
    >Salvo com sucesso!</b-alert>
  </div>
</template>

<script>
export default {
  name: "NavBarComponent",
  data() {
    return {
      showDismissibleAlert: false
    };
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