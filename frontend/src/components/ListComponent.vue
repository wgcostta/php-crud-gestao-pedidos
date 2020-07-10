<template>
  <div class="lists">
    <div class="top">
      <p>Produtos</p>
      <hr />

      <div class="content">
        <div>
          <b-table striped hover :items="items"></b-table>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Last</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <th scope="row">1</th>
              <td>{{product.id}}</td>
              <td>{{product.nome}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ListComponent",
  props: { products: Array },
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
  }
};
</script>

<style lang="scss" src="./ListComponent.scss" scoped />