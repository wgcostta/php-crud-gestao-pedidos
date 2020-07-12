<template>
  <DashBoardComponent>
    <div slot="slot-pages" class="content-pages">
      <div class="main">
        <div class="login">
          <div class="content-login">
            <table class="table table-striped table-sm" cellspacing="3" width="100%">
              <thead>
                <tr>
                  <th scope="col">Produto</th>
                  <th scope="col">Cep Origem</th>
                  <th scope="col">Cep Destino</th>
                </tr>
              </thead>
              <tbody>
                <th scope="row">{{ordered.nome}}</th>
                <td>{{ordered.ceporigem}}</td>
                <td>{{ordered.cepdestino}}</td>
              </tbody>
            </table>

            <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
            <b-button variant="primary" @click="enviar()">
              Solicitar Cotação
              <b-icon icon="check2" aria-hidden="true"></b-icon>
            </b-button>
            <table class="table table-striped table-sm" cellspacing="3" width="100%">
              <thead>
                <tr>
                  <th scope="col">Serviço</th>
                  <th scope="col">Valor do Frete</th>
                  <th scope="col">Prazo de Entrega</th>
                  <th scope="col">Retorno:</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="ret in consulta" :key="ret.code">
                  <th scope="row">{{ret.name}}</th>
                  <td>{{ret.price}}</td>
                  <td>{{ret.deadline}}</td>
                  <td>{{ret.error}}</td>
                </tr>
              </tbody>
            </table>
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
      retorno: {
        code: "",
        deadline: "",
        name: "",
        price: "",
        error: []
      },
      consulta: Array,
      quotation: {
        id: "",
        id_orders: "",
        codigoservico: "",
        valorfrete: "",
        prazoentrega: ""
      },
      ordered: {
        id: "",
        id_product: "",
        ceporigem: "",
        cepdestino: "",
        quantidade: "",
        nome: "",
        peso: "",
        altura: "",
        comprimento: "",
        largura: "",
        servico: ""
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
      this.ordered.servico = this.selected;

      Quotations.consultarFrete(this.ordered)
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
      if (!this.quotation.id) {
        for (var i = 0; i < this.consulta.length; i++) {
          this.quotation.id_orders = this.ordered.id;
          this.quotation.codigoservico = this.consulta[i].code;
          this.quotation.valorfrete = this.consulta[i].price;
          this.quotation.prazoentrega = this.consulta[i].deadline;

          if (i == 0) {
            Quotations.salvarSedex(this.quotation).then(resposta => {
              console.log(resposta);
            });
          } else {
            Quotations.salvarPac(this.quotation).then(resposta => {
              console.log(resposta);
            });
          }
        }
      }
    },
    carregarObjetos(id) {
      Ordered.carregar(id).then(resposta => {
        this.ordered = resposta.data[0];
        console.log(this.ordered);
      });
    }
  }
};
</script>

<style lang="scss" src="./QuotationsComponent.scss" scoped />