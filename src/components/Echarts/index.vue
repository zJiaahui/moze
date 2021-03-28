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
  name: "index",
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
      myChart.setOption({
        backgroundColor: '#353445',
        title: {
          text: ''
        },
        tooltip: {},
        grid: {
          left: "6%",
          right: "6%",
          top: "8%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: {
          // show:false,
         // name: "2021",//X轴名称
         // nameLocation: 'middle',//x轴名称位置
          // nameGap: 26,X轴名称距离
          data: ['金额'],//x轴刻度标签
          axisTick: { //x轴是否显示刻度
            show: false
          },
          axisLabel: {//是否显示X轴刻度标签
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {//是否显示背景网格
            show: false
          },
          axisLabel:{
            formatter: function (value, index) {
             if (value>=1000&&value<10000){
               return value/1000 + 'k';
             }else if (value>=10000&&value<100000000){
               return value/10000 + 'w';
             }else if(total>=100000000){
               return value/100000000 + '亿';
             }
             else{
               return value
             }
            }
          }
        },
        series: [
          {
            name: '支出',
            type: 'bar',
            data: [totalPay],

            emphasis: {
              focus: 'series',
              itemStyle: {
                color: "rgba(179,92,98,1)",
              },
              label: {
                show: true,
                formatter: '{c} 元'
              }
            },
            tooltip:{
              formatter: '{a}: {c} 元'
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  let colorList = ["rgba(179,92,98,0.5)", '#E67716', '#FBC300', '#11440f', '#32585a', '#00ff77'];
                  return colorList[params.dataIndex];
                },
                borderColor: "rgba(188, 79, 79, 1)",
                borderWidth: 1
              },

            }
          },
          {
            name: '余额',
            type: 'bar',
            data: [total],
            itemStyle: {
              normal: {
                color: function (params) {
                  let colorList = ['rgba(252,132,82,0.4)', '#FBC300', '#11440f', '#32585a', '#00ff77'];
                  return colorList[params.dataIndex];
                },
                borderColor: "rgba(262,138,2,1)",
                borderWidth: 1
              }
            },
            emphasis: {
              focus: 'series',
              itemStyle: {
                color: "rgba(252,132,82,0.6)",
              },
              label: {
                show: true,
                formatter: '{c} 元'
              }
            },
            tooltip:{
              formatter: '{a}: {c} 元'
            }
          },
          {
            name: '收入',
            type: 'bar',
            data: [totalRevenue],
            itemStyle: {
              normal: {
                color: function (params) {
                  let colorList = ['rgba(103,138,74,0.5)', '#11440f', '#32585a', '#00ff77'];
                  return colorList[params.dataIndex];
                },
                borderColor: "rgba(150,183,102, 1)",
                borderWidth: 1
              }
            },
            emphasis: {
              focus: 'series',
              itemStyle: {
                color: "rgba(103,138,74,1)",
              },
              label: {
                show: true,
                formatter: '{c} 元'
              }
            },
            tooltip:{
              formatter: '{a}: {c} 元'
            }


          }]
      });
    }
  }
}
</script>

<style scoped>
#main{
  margin-top: 20px;
  width: 100vw;
  height: 180px;
}
</style>