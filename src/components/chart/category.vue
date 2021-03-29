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
  name: "category",
  components: {
    myEcharts,
    icon
  },
  data() {
    return {
      option : {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '10',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: '搜索引擎'},
              {value: 735, name: '直接访问'},
              {value: 580, name: '邮件营销'},
              {value: 484, name: '联盟广告'},
              {value: 300, name: '视频广告'}
            ]
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