<template>
  <div class="layout">
    <div class="main">
      <app-main></app-main>
    </div>
    <div class="nav">
      <nav-bar></nav-bar>
    </div>
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
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-grow: 1;
  background-color:  #353445;
  > .main {
    flex-grow: 1;
    padding-bottom: 60px;
    background-color:  #353445;
  }
  >.nav{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
  }
}

</style>