<template>
  <svg class="icon" aria-hidden="true" @click="handleClick">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "../../assets/font/iconfont"
export default {
  name: "Icon",
  props: {
    name:{
      type:String
    }
  },
  methods:{
    handleClick(){
      this.$emit("click")
    }
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>