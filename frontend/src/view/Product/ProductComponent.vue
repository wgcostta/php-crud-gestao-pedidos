<template>
  <DashBoardComponent>
    <div slot="slot-pages" class="content-pages">
      <div class="main">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <div class="login">
          <div class="content-login">
            <div>
              <header>
                <h5>Cadastro de Produtos</h5>
              </header>
              <!--<div class="mt-2">Nome do Produto: {{ text }}</div>-->
              <div class="form">
                <b-form-input class="input" v-model="text" placeholder="Descrição do Produto"></b-form-input>
                <b-form-input class="input" v-model="text" placeholder="Peso"></b-form-input>
                <b-form-input class="input" v-model="text" placeholder="Comprimento"></b-form-input>
                <b-form-input class="input" v-model="text" placeholder="Altura"></b-form-input>
                <b-form-input class="input" v-model="text" placeholder="Largura"></b-form-input>
                <b-button variant="danger">
                  Cancelar
                  <b-icon icon="chevron-bar-left" aria-hidden="true"></b-icon>
                </b-button>
                <b-button variant="success" @click="salvar()">
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
      </div>
    </div>
  </DashBoardComponent>
</template>

<script>
import DashBoardComponent from "../Home/DashBoardComponent";
export default {
  name: "ProductComponent",
  components: {
    DashBoardComponent
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    salvar() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="scss" src="./ProductComponent.scss" scoped />