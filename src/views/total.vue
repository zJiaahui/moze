<template>
<div>
  <header-bar>
    <icon slot="h-left" :name="iconName"  @click="handleClick"></icon>
  </header-bar>
</div>
</template>

<script>
import icon from "../components/icon"
import headerBar from "../components/headerBar"
export default {
  name: "total",
  data(){
    return{
      eyeOpen:true,
      iconName:"eye-close"
    }
  },
  components: {
    headerBar,
    icon
  },
  methods:{
    handleClick(){
      this.iconName=this.eyeOpen?"eye-open":"eye-close"
      this.eyeOpen=!this.eyeOpen
    }
  }
}
</script>

<style scoped lang="scss">

</style>