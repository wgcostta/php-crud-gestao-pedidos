<template>
  <div class="lists">
    <div class="top">
      <header>
        <h4>Listagem de Produtos</h4>
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
              <th scope="col">Nome</th>
              <th scope="col">Peso</th>
              <th scope="col">Altura</th>
              <th scope="col">Comprimento</th>
              <th scope="col">Largura</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <th scope="row">{{product.id}}</th>
              <td>{{product.nome}}</td>
              <td>{{product.peso}}</td>
              <td>{{product.altura}}</td>
              <td>{{product.comprimento}}</td>
              <td>{{product.largura}}</td>
              <td>
                <b-button @click="gerarPedido(product)" variant="info" class="btn" pill>
                  <b-icon icon="cart-plus" aria-hidden="true" />Gerar Pedido
                </b-button>
                <b-button @click="editar(product)" variant="outline-primary" class="btn" pill>
                  <b-icon icon="pencil-square" aria-hidden="true" />
                </b-button>
                <b-button @click="remover(product)" variant="outline-danger" class="btn" pill>
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
import Product from "../services/productService";
export default {
  name: "ListComponent",
  props: { products: Array },

  methods: {
    gerarPedido(product) {
      this.$router.push("/orders?id=" + product.id);
    },
    editar(product) {
      this.$router.push("/product?id=" + product.id);
    },
    remover(product) {
      Product.remover(product)
        .then(resposta => {
          if (resposta.statuscode == 200) {
            Product.listar()
              .then(resposta => {
                this.products = resposta.data;
              })
              .catch(e => {
                console.log(e);
              });
          }
        })
        .catch(e => {
          console.log(e);
          alert("Produto com pedidos vinculados");
        });
    }
  }
};
</script>

<style lang="scss" src="./ListComponent.scss" scoped />