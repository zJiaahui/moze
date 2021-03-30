<template>
  <div>
    <div class="chart-bar">
      <div class="type">
        <span class="pay"><span class="pay-yuan"></span>支出</span>
        <span class="earning"><span class="earning-yuan"></span>收入</span>
        <span class="balance"><span class="balance-yuan"></span>余额</span>
      </div>
      <div class="bar">
        <my-echarts :option="option"></my-echarts>
      </div>
      <div class="type-money">
        <span class="pay"> ￥{{ getMoney.totalExpenditure }}</span>
        <span class="earning">￥{{getMoney.totalRevenue}}</span>
        <span class="balance">￥{{getMoney.totalBalance}}</span>
      </div>
    </div>

    <div class="top3">
      <span class="top3-title">TOP3 收入</span>
      <ul class="top3-list">
        <li v-for="(item,index) in revenueRerecordTop3" :key="index">
          <span><icon :name="item.billTag.icon"></icon>
          {{item.billTag.text}}</span><span>{{item.billDate}}</span><span>￥{{item.billMoney}}</span>
        </li>
      </ul>
      <br/>
      <span class="top3-title">TOP3 支出</span>
      <ul class="top3-list">
        <li v-for="(item,index) in expenditureRerecordTop3" :key="index">
         <span> <icon :name="item.billTag.icon"></icon>
          {{item.billTag.text}}</span><span>{{item.billDate}}</span><span>￥{{item.billMoney}}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import myEcharts from "./components/myEcharts";
import icon from "../icon";
import {mapGetters} from "vuex"

export default {
  name: "all",
  components: {
    myEcharts,
    icon,
  },
  computed: {
    ...mapGetters(["getMoney","revenueRerecordTop3","expenditureRerecordTop3"]),
    option(){
     let option={
        backgroundColor: '#353445',
            legend: {},
        grid: {
          top: "0%",
              left: '3%',
              right: '3%',
              bottom: '0%',
              containLabel: true
        },
        xAxis: {
          show: false,
              type: 'value',
              axisTick: {show: false},//x轴是否显示刻度
          axisLabel: {show: false},//是否显示X轴刻度标签
          splitLine: {show: false},//是否显示背景网格
        },
        yAxis: {
          show: false,
              axisTick: {show: false},//x轴是否显示刻度
          axisLabel: {show: false},//是否显示X轴刻度标签
          splitLine: {show: false},//是否显示背景网格
          data: ['金额'],
        },
        series: [
          {
            name: '支出',
            type: 'bar',
            data: [this.getMoney.totalExpenditure],
            barWidth: "4%",
            itemStyle: {
              borderRadius: 10,
              color: "rgba(179, 92, 98, 1)",
            },
          },
          {
            name: '收入',
            type: 'bar',
            data: [this.getMoney.totalRevenue],
            barWidth: "4%",
            itemStyle: {
              borderRadius: 10,
              color: "rgba(103, 138, 74, 1)",
            },

          }
          ,
          {
            name: '总计',
            type: 'bar',
            data: [Math.abs(this.getMoney.totalBalance)],
            barGap: '500%',
            barWidth: "4%",
            itemStyle: {
              borderRadius: 10,
              color: "rgba(262, 138, 2, 1)",
            },

          }
        ]
      }
      return option
    }
  }
}
</script>

<style scoped lang="scss">
.chart-bar {
  display: flex;

  > .bar {
    height: 120px;
    flex: 1;
  }
}

.top3 {
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
    color: rgba(262, 138, 2, 1);
  }
  > .earning {
    color: rgba(103, 138, 74, 1);
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

  > ::v-deep span .icon {
    font-size: 30px;
    vertical-align: middle;
  }

  > :last-child {
    min-width: 80px;
    text-align: end;
  }

}
</style>