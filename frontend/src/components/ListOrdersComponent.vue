<template>
  <div class="lists">
    <div class="top">
      <p>Listagem de Pedidos</p>
      <hr />

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
              <th scope="col">Cep Origem</th>
              <th scope="col">Cep Destino</th>
              <th scope="col">Quantidade</th>

              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ordered in orders" :key="ordered.id">
              <th scope="row">{{ordered.id}}</th>
              <td>{{ordered.ceporigem}}</td>
              <td>{{ordered.cepdestino}}</td>
              <td>{{ordered.quantidade}}</td>

              <td>
                <b-button @click="gerarCotacao(ordered.id)" variant="info" class="btn" pill>
                  <b-icon icon="cart-plus" aria-hidden="true" />' Nova cotação'
                </b-button>
                <b-button @click="editar(ordered)" variant="outline-primary" class="btn" pill>
                  <b-icon icon="pencil-square" aria-hidden="true" />
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
export default {
  name: "ListOrdersComponent",
  props: { orders: Array },

  methods: {
    editar(ordered) {
      this.$router.push("/orders?idorder=" + ordered.id);
    },
    gerarCotacao(id) {
      if (id > 0) {
        this.$router.push("/quotations?id=" + id);
      }
    }
  }
};
</script>

<style lang="scss" src="./ListComponent.scss" scoped />