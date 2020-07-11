<template>
  <DashBoardComponent>
    <div slot="slot-pages" class="content-pages">
      <div class="main">
        <div class="login">
          <div class="content-login">
            <div class="col-12 col-md-6">
              <b-form-input class="input" v-model="frete.ceporigem" placeholder="CEP Origem"></b-form-input>

              <b-form-input class="input" v-model="frete.cepdestino" placeholder="Cep Destino"></b-form-input>

              <b-form-input class="input" v-model="frete.servico" placeholder="Serviço"></b-form-input>
              <b-form-input class="input" v-model="frete.largura" placeholder="largura"></b-form-input>
              <b-form-input class="input" v-model="frete.altura" placeholder="altura"></b-form-input>
              <b-form-input class="input" v-model="frete.comprimento" placeholder="comprimento"></b-form-input>
              <b-form-input class="input" v-model="frete.peso" placeholder="Peso"></b-form-input>
              <b-button variant="success" @click="enviar()">
                Enviar
                <b-icon icon="check2" aria-hidden="true"></b-icon>
              </b-button>
              <div class="content-login">
                <b-table striped hover :items="consulta"></b-table>
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
import Quotations from "../../services/quotationService";

export default {
  name: "QuotationsComponent",
  components: {
    DashBoardComponent
  },
  data() {
    return {
      consulta: [],
      quotation: {
        id: "",
        cepOrigem: "",
        cepDestino: "",
        altura: "",
        comprimento: "",
        largura: "",
        peso: ""
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
      }
    };
  },
  methods: {
    enviar() {
      Quotations.consultarFrete(this.frete)
        .then(resposta => {
          console.log(resposta);
          this.consulta = resposta.data;
          //this.frete = {};
        })
        .catch(e => {
          console.log(e.response);
          this.consulta = {};
          alert("Campos Obrigatórios não informados!");
        });
    }
  }
};
</script>

<style lang="scss" src="./QuotationsComponent.scss" scoped />