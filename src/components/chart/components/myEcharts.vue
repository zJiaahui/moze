<template>
  <div class="main" ref="main"></div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import {
  BarChart,LineChart,PieChart
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
    [TitleComponent, TooltipComponent, GridComponent, BarChart,LineChart, CanvasRenderer,PieChart]
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
    option:{
      type:Object
    }
  },
  mounted() {
    this.drawLine(this.total,this.totalRevenue,this.totalPay)
  },
  methods: {
    drawLine(total,totalRevenue,totalPay) {
      // 接下来的使用就跟之前一样，初始化图表，设置配置项
      let myChart = echarts.init(this.$refs.main);
      myChart.on("click", (obj)=>{
        this.$emit("handleChartClick",obj)
      }); //里面有两个参数 第一个参数是你要的事件是什么 第二参数是 点击事件
      myChart.setOption(
          this.option
      )
    }
  }
}
</script>

<style scoped>
.main{

  width: 100%;
  height: 100%;
}
</style>