<template>
  <div class="nav">
    <router-link to=""><icon name="total"></icon></router-link>
    <router-link to=""><icon name="addrecord"></icon></router-link>
    <router-link to=""><icon name="chart"></icon></router-link>
  </div>
</template>

<script>
import icon from "./Icon"
export default {
  name: "navBar",
  components:{
    icon
  }
}
</script>

<style scoped lang="scss">
.nav {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  line-height: 34px;
  font-size: 34px;
  color: #fff;
  background-color: #23222e;
}
</style>