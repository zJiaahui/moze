<template>
  <div>
    <herder-bar :title="title"></herder-bar>
    <calendar></calendar>
  </div>
</template>

<script>
import herderBar from "../components/headerBar"
import calendar from "../components/calendar"
import {mapMutations} from "vuex";

export default {
  name: "add",
  data() {
    return {
    }
  },

  components: {
    herderBar,
    calendar
  },
  computed: {
    title() {
      let {billYear,billMonth, billDate}=this.$store.state.billCurrentDate
      return `${billYear}-${billMonth}-${billDate}`
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">

</style>