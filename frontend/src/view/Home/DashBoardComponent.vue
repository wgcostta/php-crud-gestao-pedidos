<template>
  <div class="main">
    <div class="sidebar">
      <SideBarComponent />
    </div>
    <div class="content-right">
      <div class="navbar">
        <NavBarComponent />
      </div>
      <div class="pages"></div>
    </div>
  </div>
</template>

<script>
import SideBarComponent from "./SideBarComponent";
import NavBarComponent from "./NavBarComponent";

export default {
  name: "DashBoardComponent",
  components: {
    SideBarComponent,
    NavBarComponent
  }
};
</script>

<style lang="scss" src="./DashBoardComponent.scss" scoped />