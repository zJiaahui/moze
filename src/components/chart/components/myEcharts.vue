<template>
  <div id="main"></div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import {
  BarChart
} from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {
  CanvasRenderer
} from 'echarts/renderers';

// 注册必须的组件
echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]
);

export default {
name: "myEcharts",
  props:{
    total:{
      type:Number,
      default:0
    },
    totalRevenue:{
      type:Number,
      default:0
    },
    totalPay:{
      type:Number,
      default:0
    },
  },
  mounted() {

    this.drawLine(this.total,this.totalRevenue,this.totalPay)
  },
  methods: {
    drawLine(total,totalRevenue,totalPay) {
      // 接下来的使用就跟之前一样，初始化图表，设置配置项
      let myChart = echarts.init(document.getElementById('main'));
      myChart.setOption(
      {
        backgroundColor: '#353445',
        title: {

        },
        tooltip: {
          // trigger: 'axis',
          //     axisPointer: {
          //   type: 'shadow'
          // }
        },
        legend: {
          data: ['2011年', '2012年']
        },
        grid: {
          top: "0%",
          left: '3%',
          right: '4%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          show: false,
          type: 'value',
          axisTick: { //x轴是否显示刻度
            show: false
          },
          axisLabel: {//是否显示X轴刻度标签
            show: false
          },
          splitLine: {//是否显示背景网格
            show: false,
          },
        },
        yAxis: {
          show: false,

          splitLine: {show: false},
          axisTick: { //x轴是否显示刻度
            show: false
          },
          axisLabel: {//是否显示X轴刻度标签
            show: false
          },
          data: ['金额'],
        },
        series: [
          {
            name: '支出',
            type: 'bar',

            data: [18203, 23489, 29034, 104970, 131744, 630230],
            barWidth: "4%",
            itemStyle:{
              borderRadius:10,
              color:"rgba(179, 92, 98, 1)",
            },


          },
          {
            name: '收入',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807],
            barWidth: "4%",
            itemStyle:{
              borderRadius:10,
              color:"rgba(103, 138, 74, 1)",
            },

          }
          ,
          {
            name: '总计',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807],
            barGap:'500%',
            barWidth: "4%",
            itemStyle:{
              borderRadius:10,
              color:"rgba(262, 138, 2, 1)",
            },

          }
        ]

      })
    }
  }
}
</script>

<style scoped>
#main{

  width: 100%;
  height: 120px;
}
</style>