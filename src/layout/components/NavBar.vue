<template>
  <div class="nav">
    <router-link to="/total" >
      <div @click="handlerClick" data-name="total" :class="{active:activeName=='total'}">
        <icon name="total"></icon>
      </div>
    </router-link>
    <router-link to="/add">
      <div @click="handlerClick" data-name="add" :class="{active:activeName=='add'}">
      <icon name="addrecord"></icon>
      </div>
    </router-link>
    <router-link to="/chart">
      <div @click="handlerClick" data-name="chart" :class="{active:activeName=='chart'}">
      <icon name="chart"></icon>
      </div>
    </router-link>
  </div>
</template>

<script>
import icon from "./Icon"

export default {
  name: "navBar",
  data(){
    return{
      activeName:"total"
    }
  },
  components: {
    icon
  },
  methods: {
    handlerClick(e) {
     this.activeName= e.currentTarget.getAttribute("data-name")
    }
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
  & .active{
    color: #37b6ce;
  }
}
</style>