<template>
  <div class="sidebar">
    <div class="top">
      <span></span>
    </div>
    <mdb-side-nav-2 :data="navigation" v-model="show" over>
      <div slot="header" class="d-flex flex-column align-items-center mt-4">
        <div>
          <b-list-group>
            <b-list-group-item router-link :to="{ name: 'home' }" class="list">Inicio</b-list-group-item>
            <b-list-group-item router-link :to="{ name: 'product' }" class="list">Cadastrar Produtos</b-list-group-item>
            <b-list-group-item router-link :to="{ name: 'orders' }" class="list">Pedidos</b-list-group-item>
            <b-list-group-item router-link :to="{ name: 'quotations' }" class="list">Cotações</b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </mdb-side-nav-2>
  </div>
</template>

<script>
export default {
  name: "SideBarComponent"
};
</script>

<style lang="scss" src="./SideBarComponent.scss" scoped />