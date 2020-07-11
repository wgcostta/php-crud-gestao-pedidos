<template>
  <DashBoardComponent :showDismissibleAlert="showDismissibleAlert">
    <div slot="slot-pages" class="content-pages">
      <b-alert
        variant="warning"
        dismissible
        fade
        :show="showDismissibleAlert"
        @dismissed="showDismissibleAlert=false"
      >{{mensagem}}</b-alert>
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
                <b-form-group
                  class="input"
                  label-cols-sm="3"
                  label="Descrição:"
                  label-align-sm="right"
                  label-for="nested-city"
                >
                  <b-form-input
                    class="input"
                    v-model="product.nome"
                    placeholder="Descrição do Produto"
                    v-on:keyup.enter="$event.target.nextElementSibling.focus()"
                  />
                </b-form-group>
                <b-form-group
                  class="input"
                  label-cols-sm="3"
                  label="Peso:"
                  label-align-sm="right"
                  label-for="nested-city"
                >
                  <b-form-input
                    type="number"
                    v-model="product.peso"
                    placeholder="Peso"
                    v-on:keyup.enter="$event.target.nextElementSibling.focus()"
                  />
                </b-form-group>
                <b-form-group
                  class="input"
                  label-cols-sm="3"
                  label="Comprimento:"
                  label-align-sm="right"
                  label-for="nested-city"
                >
                  <b-form-input
                    type="number"
                    class="input"
                    v-model="product.comprimento"
                    placeholder="Comprimento"
                    v-on:keyup.enter="$event.target.nextElementSibling.focus()"
                  />
                </b-form-group>
                <b-form-group
                  class="input"
                  label-cols-sm="3"
                  label="Altura:"
                  label-align-sm="right"
                  label-for="nested-city"
                >
                  <b-form-input
                    type="number"
                    class="input"
                    v-model="product.altura"
                    placeholder="Altura"
                    v-on:keyup.enter="$event.target.nextElementSibling.focus()"
                  />
                </b-form-group>

                <b-form-group
                  class="input"
                  label-cols-sm="3"
                  label="Largura:"
                  label-align-sm="right"
                  label-for="nested-city"
                >
                  <b-form-input
                    type="number"
                    class="input"
                    v-model="product.largura"
                    placeholder="Largura"
                    v-on:keyup.enter="$event.target.nextElementSibling.focus()"
                  >{{product.largura}}</b-form-input>
                </b-form-group>
                <b-button variant="success" @click="salvar()">
                  Salvar
                  <b-icon icon="check2" aria-hidden="true"></b-icon>
                </b-button>
                <b-button variant="danger" @click="paginaPrincipal()">
                  Cancelar
                  <b-icon icon="chevron-bar-left" aria-hidden="true"></b-icon>
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
      showDismissibleAlert: false,
      mensagem: ""
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
    validarPeso() {
      this.mensagem = "";
      this.showDismissibleAlert = false;

      if (
        this.product.peso == "" ||
        this.product.nome == "" ||
        this.product.altura == "" ||
        this.product.comprimento == "" ||
        this.product.largura == ""
      ) {
        this.mensagem = "Todos os Campos devem ser informados";
      } else {
        if (this.product.peso > 30) {
          this.mensagem = "Peso deve ser até 30 kg";
          this.showDismissibleAlert = true;
        } else if (
          this.product.comprimento < 16 ||
          this.product.comprimento > 105
        ) {
          this.mensagem = "Informe um comprimento de 16 cm até 105 cm";
        } else if (this.product.largura < 11 || this.product.largura > 105) {
          this.mensagem = "Informe uma largura de 11 cm até 105 cm";
        } else if (this.product.altura < 2 || this.product.altura > 105) {
          this.mensagem = "Informe uma altura de 2 cm até 105 cm";
        } else {
          let dimensoes =
            Number(this.product.comprimento) +
            Number(this.product.largura) +
            Number(this.product.altura);
          if (dimensoes > 200) {
            this.mensagem =
              "A soma das dimensões não pode ultrapassar 200 cm. Dimensões atuais: " +
              dimensoes;
          }
        }
        /*- Comprimento: 16cm à 105cm; Altura: 2cm à 105cm; Largura: 11cm à 105cm;
        - Soma máxima das dimensões: 200cm.
        - Limite de peso: 30kg. */
      }

      if (this.mensagem != "") {
        this.showDismissibleAlert = this.mensagem != "";
        return false;
      } else return true;
    },
    salvar() {
      if (this.validarPeso()) {
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