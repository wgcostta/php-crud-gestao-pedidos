<template>
  <DashBoardComponent>
    <div slot="slot-pages" class="content-pages">
      <AlertComponent :mensagem="mensagem" />
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
import AlertComponent from "../../components/AlertComponent";

export default {
  name: "QuotationsComponent",
  components: {
    DashBoardComponent,
    AlertComponent
  },
  mounted() {
    if (this.$route.query.id > 0) {
      this.carregarObjetos(this.$route.query.id);
    }
  },

  data() {
    return {
      mensagem: "",
      retorno: {
        code: "",
        deadline: "",
        name: "",
        price: "",
        error: []
      },
      consulta: Array,
      quotationpac: {
        id: "",
        id_orders: "",
        codigoservico: "",
        valorfrete: "",
        prazoentrega: ""
      },
      quotationsedex: {
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
          this.memsagem = "Campos Obrigatórios não informados!";
        });
    },
    salvar() {
      if (!this.quotationpac.id) {
        this.quotationpac.id_orders = this.ordered.id;
        this.quotationpac.codigoservico = this.consulta[0].code;
        this.quotationpac.valorfrete = this.consulta[0].price;
        this.quotationpac.prazoentrega = this.consulta[0].deadline;
        console.log(this.quotationpac);
        Quotations.salvarPac(this.quotationpac).then(resposta => {
          console.log(resposta);
          if (this.consulta.length > 1) {
            this.quotationsedex.id_orders = this.ordered.id;
            this.quotationsedex.codigoservico = this.consulta[1].code;
            this.quotationsedex.valorfrete = this.consulta[1].price;
            this.quotationsedex.prazoentrega = this.consulta[1].deadline;
            console.log(this.quotationsedex);
            Quotations.salvarSedex(this.quotationsedex).then(resposta => {
              console.log(resposta);
            });
          }
        });
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