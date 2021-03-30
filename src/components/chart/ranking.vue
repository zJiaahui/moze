<template>
  <div>
    <div class="top3">
      <span class="top3-title">金额排行</span>
      <ul class="top3-list">
        <li v-for="(item,index) in getRanking" :key="index">
         <span> <icon :name="item.billTag.icon"></icon>
          {{item.billTag.text}}</span><span :class="{typered:item.billType=='支出'}">{{item.billType}}</span><span>{{item.billDate}}</span><span>￥{{item.billMoney}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import icon from "../icon";
import {mapGetters} from "vuex"
export default {
  name: "ranking",
  components: {

    icon
  },
  computed:{
    ...mapGetters(["getRanking"]),
  }

}
</script>

<style scoped lang="scss">

.top3 {
  margin-top: 10px;
  padding: 0 16px;

  width: 100%;

  > .top3-title {

    display: block;
    width: 100%;
    color: #d9d8d8;
    margin-right: 20px;
    border-bottom: 1px solid #4e4d4d;
  }
}
.top3-list > li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  color: #bab5b5;

  > ::v-deep .icon {
    font-size: 30px;
  }
  > :last-child{
    min-width: 80px;
    text-align: end;
  }

}
.typered{
  color: rgba(188, 79, 79, 1);
}
</style>