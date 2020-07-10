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
              <form @submit.prevent="salvar" class="form">
                <input type="text" name="email" id="email" />
                <b-form-input
                  class="input"
                  v-model="product.nome"
                  placeholder="Descrição do Produto"
                ></b-form-input>
                <b-form-input class="input" v-model="product.peso" placeholder="Peso"></b-form-input>
                <b-form-input class="input" v-model="product.altura" placeholder="Comprimento"></b-form-input>
                <b-form-input class="input" v-model="product.comprimento" placeholder="Altura"></b-form-input>
                <b-form-input class="input" v-model="product.largura" placeholder="Largura"></b-form-input>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashBoardComponent>
</template>

<script>
import DashBoardComponent from "../Home/DashBoardComponent";
import Product from "../../services/productService";
export default {
  name: "ProductComponent",
  components: {
    DashBoardComponent
  },
  data() {
    return {
      product: {
        nome: "",
        peso: "",
        altura: "",
        comprimento: "",
        largura: ""
      }
    };
  },
  methods: {
    salvar() {
      Product.salvar(this.product).then(response => {
        if (response.status == 200) {
          this.$router.push({ name: "home" });
        } else {
          alert("Ocorreu um erro ao salvar o produto");
          console.error("Ocorreu um erro na API.");
        }
      });
    }
  }
};
</script>

<style lang="scss" src="./ProductComponent.scss" scoped />