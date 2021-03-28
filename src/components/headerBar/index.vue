<template>
  <div>
    <header class="header">
      <span class="h-left">
      <slot name="h-left"></slot>
      </span>
      <h1>{{title}}</h1>
      <span class="h-right">
         <slot name="h-right"></slot>
      </span>
    </header>
  </div>
</template>

<script>
import icon from "../icon"

export default {
  name: "headerBar",
  components: {
    icon
  },
  props:{
    title:{
      type:String
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  color: white;
  font-size: 18px;
  padding: 16px;
  justify-content: center;

  .h-left, .h-right {
    width: 34px;
  }

  & > h1 {
    text-align: center;
    flex-grow: 1;
    color: white;
    font-size: 18px;
  }
}
</style>