<template>
  <div>
    <div class="month">
      <span class="month-prve" @click="changeMonth('prev')">&lt;</span>
      <span class="month-text">{{ monthText }}</span>
      <span class="month-next" @click="changeMonth('next')">&gt;</span></div>
<!--    <div class="chart">-->
<!--      <my-echarts :option="option"></my-echarts>-->
<!--    </div>-->
    <div class="top3">
      <span class="top3-title">目前月份记录</span>
      <ul class="top3-list">
        <li v-if="recordList.length<=0"  class="tip">
         暂无记录
        </li>
        <li v-for="(item,index) in recordList" :key="index">
         <span> <icon :name="item.billTag.icon"></icon>
          {{item.billTag.text}}</span><span :class="{typered:item.billType=='支出'}">{{item.billType}}</span><span>{{item.billDate}}</span><span>￥{{item.billMoney}}</span>
        </li>
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
      monthText: "",
      currentMonth: "",
      recordList:[],
      colors: ['#5470C6', '#91CC75', '#EE6666'],

      option: {
        color: ['#5470C6', '#91CC75', '#EE6666'],

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          top: "6%",
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
          // data: ['蒸发量', '降水量', '余额']
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
  },
  mounted() {
    this.getCurrentDate()
    this.$store.commit("getRecordByDate",this.currentMonth)
    this.recordList=this.$store.state.RecordByDate
  },
  methods: {
    changeMonth(type) {
      if(type=="next"){
        this.currentMonth.billYear= this.currentMonth.billMonth>=12?this.currentMonth.billYear+1:this.currentMonth.billYear
        this.currentMonth.billMonth= this.currentMonth.billMonth>=12?1:this.currentMonth.billMonth+1

      }else{
        this.currentMonth.billYear= this.currentMonth.billMonth<=1?this.currentMonth.billYear-1:this.currentMonth.billYear
        this.currentMonth.billMonth= this.currentMonth.billMonth<=1?12:this.currentMonth.billMonth-1
      }
      let {billYear, billMonth}=this.currentMonth
      let monthMaxDay = new Date(billYear, billMonth, 0).getDate()
      this.monthText =billYear+"/"+billMonth+"/"+1+"-"+billYear+"/"+billMonth+"/"+monthMaxDay

      this.$store.commit("getRecordByDate",this.currentMonth)
      this.recordList=this.$store.state.RecordByDate

    },
    getCurrentDate() {
      let date = new Date();
      let billYear = date.getFullYear();
      let billMonth = date.getMonth() + 1;
      let billDate = date.getDate();
      let monthMaxDay = new Date(billYear, billMonth, 0).getDate()
      this.currentMonth={billYear,billMonth}
      this.monthText =billYear+"/"+billMonth+"/"+1+"-"+billYear+"/"+billMonth+"/"+monthMaxDay
    },

  }
}
</script>

<style scoped lang="scss">
.chart {
  width: 100vm;
  height: 240px;
  margin: 0 16px;
}

.top3 {
  margin-top: 10px;
  padding: 4px 16px;
  width: 100%;
  > .top3-title {

    display: block;
    width: 100%;
    color: #d9d8d8;
    padding: 4px 0;
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
  &.tip{
    font-size: 20px;
    color: #64636c;
    font-weight: 700;
    display:flex;
    justify-content: center;
    text-align: center;
  }
  > ::v-deep .icon {
    font-size: 30px;
  }

  > :last-child {
    min-width: 80px;
    text-align: end;
  }

}

.month {
  color: white;
  padding: 20px 0;
  display: flex;
  justify-content: center;

  & > .month-text {
    width: 180px;
    text-align: center;
    margin: 0 16px;
  }

  & > .month-prve, & > .month-next {

    width: 30px;
    text-align: center;
  }
  & > .month-prve:active, & > .month-next:active{
    color: #8ECF52;
  }

}
</style>