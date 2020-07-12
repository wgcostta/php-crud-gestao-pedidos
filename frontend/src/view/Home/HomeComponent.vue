<template>
  <DashBoardComponent>
    <div slot="slot-pages" class="content-pages">
      <div class="main">
        <div class="login">
          <div class="content-login">
            <span>
              <img
                src="https://images.tcdn.com.br/appstore/appstore/345/img/fretefacil.jpg"
                class="imgCentro"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  </DashBoardComponent>
</template>

<script>
import DashBoardComponent from "./DashBoardComponent";

export default {
  name: "HomeComponent",
  components: {
    DashBoardComponent
  }
};
</script>

<style lang="scss" src="./HomeComponent.scss" scoped />

