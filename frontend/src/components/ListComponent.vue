<template>
  <div class="lists">
    <div class="top">
      <p>Produtos</p>
      <hr />

      <div class="content">
        <table class="table table-striped">
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
                <b-button @click="editar(product)" variant="outline-primary" class="btneditar">
                  <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
                </b-button>
                <b-button @click="remover(product)" variant="outline-danger" class="btndeletar">
                  <b-icon icon="trash" aria-hidden="true"></b-icon>
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
    editar(product) {
      this.$router.push("/product?id=" + product.id);
    },
    remover(product) {
      if (confirm("Deseja excluir o produto?")) {
        Product.apagar(product)
          .then(resposta => {
            Product.listar()
              .then(resposta => {
                this.products = resposta.data;
              })
              .catch(e => {
                console.log(e);
              });
            console.log(resposta);
            Product.listar().then(resposta => {
              console.log(resposta);
            });
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }

  // <div>
  //<b-table striped hover :items="products"></b-table>
  //</div>
};
</script>

<style lang="scss" src="./ListComponent.scss" scoped />