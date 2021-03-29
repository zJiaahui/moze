<template>
  <div>
    <div class="chart-bar">
      <div class="type">
        <span class="pay"><span class="pay-yuan"></span>支出</span>
        <span class="earning"><span class="earning-yuan"></span>收入</span>
        <span class="balance"><span class="balance-yuan"></span>余额</span>
      </div>
      <div class="bar">
        <my-echarts></my-echarts>
      </div>
      <div class="type-money">
        <span class="pay">123123123123123</span>
        <span class="balance">余额</span>
        <span class="earning">收入</span>
      </div>
    </div>

    <div class="top3">
      <span class="top3-title">TOP5排行</span>
      <ul class="top3-list">
        <li>
          <icon name="canyin"></icon>
          <span>饮食</span><span>2021-3-29</span><span>300</span></li>
      </ul>
    </div>

  </div>
</template>

<script>
import myEcharts from "./components/myEcharts";
import icon from "../icon";

export default {
  name: "all",
  components: {
    myEcharts,
    icon,
  }

}
</script>

<style scoped lang="scss">
.chart-bar {
  display: flex;

  > .bar {
    flex: 1;
  }
}

.top3 {
  padding: 0 16px;
  height: 100px;
  width: 100%;

  > .top3-title {

    display: block;
    width: 100%;
    color: #d9d8d8;
    margin-right: 20px;
    border-bottom: 1px solid #4e4d4d;
  }
}

.type-money {
  padding: 14px 0;
  margin-right: 6px;
  width: 58px;
  font-size: 10px;
  color: #95949f;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;

  > .pay {
    color: rgba(179, 92, 98, 1);
  }

  > .balance {
    color: rgba(103, 138, 74, 1);
  }

  > .earning {
    color: rgba(262, 138, 2, 1);
  }
}

.type {
  padding: 14px 0;
  margin-left: 6px;
  width: 50px;
  font-size: 10px;
  color: #95949f;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > .balance {
    margin-left: 20px;
    margin-right: 5px;
    position: relative;

    > .balance-yuan {
      position: absolute;
      content: " ";
      display: inline;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      top: 5px;
      left: -10px;
      background: rgba(262, 138, 2, 1);

    }
  }

  > .pay {
    margin-left: 20px;
    margin-right: 5px;
    position: relative;

    > .pay-yuan {
      position: absolute;
      content: " ";
      display: inline;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      top: 5px;
      left: -10px;
      background: rgba(179, 92, 98, 1);
    }
  }

  > .earning {
    margin-left: 20px;
    margin-right: 5px;
    position: relative;

    > .earning-yuan {
      position: absolute;
      content: " ";
      display: inline;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      top: 5px;
      left: -10px;
      background: rgba(103, 138, 74, 1);
    }
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
</style>