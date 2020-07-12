<template>
  <div>
    <b-alert
      variant="warning"
      dismissible
      fade
      :show="mostrar"
      @dismissed="mostrar=false"
    >{{mensagem}}</b-alert>
  </div>
</template>
<script>
export default {
  name: "AlertComponent",
  props: { mensagem: String },
  data() {
    return {
      mostrar: false
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