<template>
  <div class="nav">
    <router-link to="/total">
      <div @click="handlerClick" data-name="total" :class="{active:activeName=='total'}">
        <icon name="total"></icon>
      </div>
    </router-link>
    <router-link to="/add">
      <div @click="handlerClick" data-name="add" :class="{active:activeName=='add'}">
        <span v-if="activeName=='add'" @click="handlerAdd">
          <router-link to="/add/record">
          <icon :name="'ziyuan'"></icon>
            </router-link>
        </span>
        <span v-else>
          <icon :name="'addrecord'"></icon>
        </span>
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
import icon from "../../components/icon"
import {mapState, mapMutations} from "vuex"

export default {
  name: "navBar",
  data() {
    return {
      activeName: "total"
    }
  },
  computed: {
    ...mapState(["navActive"]),
  },
  mounted() {
    this.activeName = this.navActive
  },
  components: {
    icon
  },
  methods: {
    ...mapMutations(["setNavActive"]),
    handlerClick(e) {
      this.setNavActive(e.currentTarget.getAttribute("data-name"))
      this.activeName = e.currentTarget.getAttribute("data-name")
    },
    handlerAdd(){
      this.$emit("handlerAdd")
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
  font-size: 30px;
  color: #fff;
  background-color: #23222e;

  & .active {
    color: #37b6ce;
  }
}
</style>