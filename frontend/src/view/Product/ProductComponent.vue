<template>
  <DashBoardComponent :showDismissibleAlert="showDismissibleAlert">
    <div slot="slot-pages" class="content-pages">
      <div class="main">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <div class="login">
          <div class="content-login">
            <div>
              <header>
                <h5>Cadastro de Produtos</h5>
              </header>
              <ul>
                <li v-for="(erro, index) of errors" :key="index">
                  campo
                  <b>{{erro.field}}</b>
                  - {{erro.defaultMessage}}
                </li>
              </ul>
              <form @submit.prevent="salvar" class="form">
                <b-form-input
                  class="input"
                  v-model="product.nome"
                  placeholder="Descrição do Produto"
                ></b-form-input>
                <b-form-input class="input" v-model="product.peso" placeholder="Peso"></b-form-input>
                <b-form-input class="input" v-model="product.altura" placeholder="Comprimento"></b-form-input>
                <b-form-input class="input" v-model="product.comprimento" placeholder="Altura"></b-form-input>
                <b-form-input class="input" v-model="product.largura" placeholder="Largura"></b-form-input>
                <b-button variant="danger" @click="paginaPrincipal()">
                  Cancelar
                  <b-icon icon="chevron-bar-left" aria-hidden="true"></b-icon>
                </b-button>
                <b-button variant="success" @click="salvar()">
                  Salvar
                  <b-icon icon="check2" aria-hidden="true"></b-icon>
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
        id: "",
        nome: "",
        peso: "",
        altura: "",
        comprimento: "",
        largura: ""
      },
      errors: [],
      showDismissibleAlert: false
    };
  },
  mounted() {
    if (this.$route.query.id > 0) {
      Product.carregar(this.$route.query.id).then(resposta => {
        console.log(resposta);
        this.product = resposta.data;
      });
    }
  },
  methods: {
    salvar() {
      if (!this.product.id) {
        Product.salvar(this.product)
          .then(resposta => {
            console.log(resposta);
            this.product = {};
            this.showDismissibleAlert = true;
            this.paginaPrincipal();
            this.errors = {};
          })
          .catch(e => {
            console.log(e.response);
            alert("Campos Obrigatórios não informados!");
            this.errors = e.response.data.errors;
          });
      } else {
        Product.atualizar(this.product)
          .then(resposta => {
            console.log(resposta);
            this.product = {};
            this.errors = {};
            alert("Atualizado com sucesso!");
            this.paginaPrincipal();
          })
          .catch(e => {
            this.errors = e.response.data.errors;
            alert("Campos Obrigatórios não informados!");
          });
      }
    },

    editar(product) {
      this.product = product;
    },

    paginaPrincipal() {
      this.$router.push(
        { name: "home" },
        { queryParams: this.showDismissibleAlert }
      );
    }
  }
};
</script>

<style lang="scss" src="./ProductComponent.scss" scoped />