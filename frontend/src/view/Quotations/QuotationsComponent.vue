<template>
  <DashBoardComponent>
    <div slot="slot-pages" class="content-pages">
      <div class="main">
        <div class="login">
          <div class="content-login">
            <table
              id="dtBasicExample"
              class="table table-striped table-sm"
              cellspacing="3"
              width="100%"
            >
              <thead>
                <tr>
                  <th scope="col">Produto</th>
                  <th scope="col">Cep Origem</th>
                  <th scope="col">Cep Destino</th>
                </tr>
              </thead>
              <tbody>
                <th scope="row">{{product.nome}}</th>
                <td>{{ordered.ceporigem}}</td>
                <td>{{ordered.cepdestino}}</td>
              </tbody>
            </table>

            <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
            <b-button variant="primary" @click="enviar()">
              Solicitar Cotação
              <b-icon icon="check2" aria-hidden="true"></b-icon>
            </b-button>
            <b-table striped hover :items="consulta"></b-table>
          </div>
        </div>
      </div>
    </div>
  </DashBoardComponent>
</template>


<script>
import DashBoardComponent from "../Home/DashBoardComponent";
import Quotations from "../../services/quotationService";
import Ordered from "../../services/orderedService";
import Product from "../../services/productService";

export default {
  name: "QuotationsComponent",
  components: {
    DashBoardComponent
  },
  mounted() {
    if (this.$route.query.id > 0) {
      this.carregarObjetos(this.$route.query.id);
    }
  },
  data() {
    return {
      consulta: [],
      quotation: {
        id: "",
        id_orders: "",
        codigoservico: "",
        valorfrete: "",
        prazoentrega: ""
      },
      frete: {
        ceporigem: "",
        cepdestino: "",
        servico: "",
        largura: "",
        altura: "",
        comprimento: "",
        peso: "",
        quantidade: 1
      },
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
      },
      selected: "",
      options: [
        { value: "", text: "Sedex e PAC" },
        { value: "04014", text: "SEDEX" },
        { value: "04510", text: "PAC" }
      ]
    };
  },
  methods: {
    enviar() {
      this.frete.servico = this.selected;
      console.log(this.frete);
      Quotations.consultarFrete(this.frete)
        .then(resposta => {
          console.log(resposta);
          this.consulta = resposta.data;
          this.salvar();
        })
        .catch(e => {
          console.log(e.response);
          this.consulta = {};
          alert("Campos Obrigatórios não informados!");
        });
    },
    salvar() {
      console.log(this.quotation);
    },
    carregarObjetos(id) {
      Ordered.carregar(id).then(resposta => {
        console.log(resposta);
        this.ordered = resposta.data;

        if (this.ordered.id_product > 0) {
          Product.carregar(this.ordered.id_product).then(resposta => {
            console.log(resposta);
            this.product = resposta.data;

            this.frete.ceporigem = this.ordered.ceporigem;
            this.frete.cepdestino = this.ordered.cepdestino;
            this.frete.servico = "";
            this.frete.largura = this.product.largura;
            this.frete.altura = this.product.altura;
            this.frete.comprimento = this.product.comprimento;
            this.frete.peso = this.product.peso;
            this.frete.quantidade = this.ordered.quantidade;
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" src="./QuotationsComponent.scss" scoped />