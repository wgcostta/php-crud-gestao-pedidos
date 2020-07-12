<template>
  <div class="lists">
    <div class="top">
      <header>
        <h4>Listagem de Cotações</h4>
      </header>

      <div class="content">
        <table
          id="dtBasicExample"
          class="table table-striped table-sm"
          cellspacing="3"
          width="100%"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Serviço</th>
              <th scope="col">Valor Frete</th>
              <th scope="col">Prazo de Entrega</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="quotation in quotations" :key="quotation.id">
              <th scope="row">{{quotation.id}}</th>
              <td>{{quotation.nomeservico}}</td>
              <td>{{quotation.valorfrete}}</td>
              <td>{{quotation.prazoentrega}}</td>

              <td>
                <b-button @click="gerarCotacao(quotation)" variant="info" class="btn" pill>
                  <b-icon icon="cart-plus" aria-hidden="true" />' Nova cotação'
                </b-button>

                <b-button @click="remover(quotation)" variant="outline-danger" class="btn" pill>
                  <b-icon icon="trash" aria-hidden="true" />
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import Quotations from "../services/quotationService";
export default {
  name: "ListQuotationsComponent",

  data() {
    return { quotations: Array };
  },
  mounted() {
    Quotations.listar().then(resposta => {
      this.quotations = resposta.data;
    });
  },
  methods: {
    gerarCotacao(quotation) {
      this.$router.push("/quotations?id=" + quotation.id_orders);
    },

    remover(quotation) {
      if (confirm("Confirma a exclusão da Cotação?")) {
        Quotations.apagar(quotation)
          .then(resposta => {
            Quotations.listar()
              .then(resposta => {
                this.quotations = resposta.data;
              })
              .catch(e => {
                console.log(e);
              });
            console.log(resposta);
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
};
</script>

<style lang="scss" src="./ListComponent.scss" scoped />