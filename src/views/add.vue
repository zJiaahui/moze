<template>
  <div>
    <herder-bar :title="title"></herder-bar>
    <calendar @handleDate="handleDate"></calendar>
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
      currentDate: {},
    }
  },
  computed:{
    title(){
      return this.currentDate.year+"年"+this.currentDate.month+"月"+this.currentDate.date+"日"
    }
  },
  components: {
    herderBar,
    calendar
  },

  methods: {
    ...mapMutations(["setSelectedDate"]),
    handleDate(Date) {

      this.currentDate = Date
      this.setSelectedDate(`${Date.year}-${Date.month}-${Date.date}`)

    },
  }
}
</script>

<style scoped lang="scss">

</style>