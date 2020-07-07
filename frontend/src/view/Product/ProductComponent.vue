<template>
  <div class="main">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <div class="login">
      <div class="content-login">
        <div>
          <header>
            <h5>Cadastro de Produtos</h5>
          </header>
          <div class="mt-2">Nome do Produto: {{ text }}</div>
          <b-form-input class="input" v-model="text" placeholder="Enter your name"></b-form-input>
          <b-form-input class="input" v-model="text" placeholder="Enter your name"></b-form-input>
          <b-form-input class="input" v-model="text" placeholder="Enter your name"></b-form-input>
          <b-form-input class="input" v-model="text" placeholder="Enter your name"></b-form-input>
          <b-button variant="danger">
            Cancelar
            <b-icon icon="chevron-bar-left" aria-hidden="true"></b-icon>
          </b-button>
          <b-button variant="success">
            Salvar
            <b-icon icon="check2" aria-hidden="true"></b-icon>
          </b-button>
          <b-button variant="outline-info" class="mb-2">
            <b-icon icon="power" aria-hidden="true"></b-icon>Logout
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style lang="scss" src="./ProductComponent.scss" scoped />