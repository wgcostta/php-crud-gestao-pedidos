<template>
  <div class="main">
    <div class="sidebar">
      <SideBarComponent />
    </div>
    <div class="content-right">
      <div class="navbar">
        <NavBarComponent :showDismissibleAlert="showDismissibleAlert" />
      </div>
      <div class="pages">
        <slot name="slot-pages"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarComponent from "./SideBarComponent";
import NavBarComponent from "./NavBarComponent";

export default {
  name: "DashBoardComponent",
  data() {
    return {
      showDismissibleAlert: false
    };
  },
  components: {
    SideBarComponent,
    NavBarComponent
  }
};
</script>

<style lang="scss" src="./DashBoardComponent.scss" scoped />