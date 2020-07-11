<template>
  <DashBoardComponent>
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
                <div class="row">
                  <h4>Cadastro de Pedidos</h4>
                </div>
                <div class="row">
                  <h5>{{product.nome}}</h5>
                </div>
              </header>
              <form @submit.prevent="salvar" class="form">
                <div class="row">
                  <b-form-group
                    class="label"
                    label-cols-sm="1"
                    label="CEP(Origem):"
                    label-align-sm="right"
                    label-for="nested-city"
                  />

                  <b-form-input
                    class="input"
                    type="number"
                    v-model="ordered.ceporigem"
                    placeholder="11111111"
                    v-on:keyup.enter="$event.target.nextElementSibling.focus()"
                  />
                </div>
                <div class="row">
                  <b-form-group
                    class="label"
                    label-cols-sm="1"
                    label="CEP(Destino):"
                    label-align-sm="right"
                    label-for="nested-city"
                  />

                  <b-form-input
                    class="input"
                    type="number"
                    v-model="ordered.cepdestino"
                    placeholder="11111111"
                    v-on:keyup.enter="$event.target.nextElementSibling.focus()"
                  />
                </div>
                <div class="row">
                  <b-form-group
                    class="label"
                    label-cols-sm="1"
                    label="Quantidade:"
                    label-align-sm="right"
                    label-for="nested-city"
                  />

                  <b-form-input
                    class="input"
                    type="number"
                    v-model="ordered.quantidade"
                    placeholder="Quantidade"
                    v-on:keyup.enter="$event.target.nextElementSibling.focus()"
                  />
                </div>
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
import Ordered from "../../services/orderedService";
export default {
  name: "OrdersComponent",
  components: {
    DashBoardComponent
  },
  data() {
    return {
      showDismissibleAlert: false,
      mensagem: "",
      product: {
        id: "",
        nome: "",
        peso: "",
        altura: "",
        comprimento: "",
        largura: ""
      },
      ordered: {
        id: "",
        id_product: "",
        ceporigem: "",
        cepdestino: "",
        quantidade: ""
      }
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
      this.mensagem = Ordered.validationOrdered(this.ordered);
      if (this.mensagem == "") {
        this.ordered.id_product = this.product.id;
        Ordered.salvar(this.ordered)
          .then(resposta => {
            console.log(resposta);
            // this.product = {};
            //this.paginaPrincipal();
            //  this.errors = {};
          })
          .catch(e => {
            console.log(e.response);
            alert("Campos Obrigatórios não informados!");
            this.errors = e.response.data.errors;
          });
      } else {
        this.showDismissibleAlert = this.mensagem != "";
      }
    }
  }
};
</script>

<style lang="scss" src="./OrdersComponent.scss" scoped />