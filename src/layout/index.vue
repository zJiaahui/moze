<template>
  <div class="layout">
    <app-main></app-main>
    <nav-bar></nav-bar>
  </div>

</template>

<script>
import appMain from "./components/AppMain";
import navBar from "./components/NavBar"

export default {
  name: "Layout",
  components: {
    appMain,
    navBar
  }
}
</script>

<style scoped lang="scss">
.layout{
  height: 100vh;
  background-color: red;
}

</style>