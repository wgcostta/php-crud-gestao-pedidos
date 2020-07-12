<template>
  <div v-if="mensagem != ''">
    <b-alert
      class="alert"
      variant="warning"
      dismissible
      fade
      :show="mostrar"
      @dismissed="mostrar=true"
    >{{mensagem}}</b-alert>
  </div>
</template>
<script>
export default {
  name: "AlertComponent",
  props: { mensagem: String },
  data() {
    return {
      mostrar: true
    };
  },
  mounted() {
    if (this.mensagem != "") {
      this.mostrar = true;
    }
  }
};
</script>
<style lang="scss" src="./AlertComponent.scss" scoped />