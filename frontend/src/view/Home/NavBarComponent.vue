<template>
  <div class="navbar">
    <img
      src="https://images.tcdn.com.br/static_inst/site/logos/tray-logo-trans.svg"
      class="img-fluid mb-1"
    />
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