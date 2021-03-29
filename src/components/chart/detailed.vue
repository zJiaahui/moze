<template>
  <div>
  <div class="chart">
    <my-echarts :option="option"></my-echarts>
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
  name: "detailed",
  components: {
    myEcharts,
    icon
  },
  data() {
    return {
      colors :['#5470C6', '#91CC75', '#EE6666'],

      option:{
        color: ['#5470C6', '#91CC75', '#EE6666'],

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          top: "5%",
          left: '2%',
          right: '2%',
          bottom: '0%',
          containLabel: true
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['蒸发量', '降水量', '平均温度']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            splitLine: {//是否显示背景网格
              show: false,
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '蒸发量',
            splitLine: {//是否显示背景网格
              show: false,
            },

          },
          {
            type: 'value',
            name: '降水量',

          },
          {
            type: 'value',
            name: '温度',

          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '降水量',
            type: 'bar',

            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '平均温度',
            type: 'line',

            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.chart {
  width: 100vm;
  height: 200px;
  margin: 0 16px;
}
.top3 {
  margin-top: 10px;
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