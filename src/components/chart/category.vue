<template>
  <div>
    <div class="chart">
      <my-echarts :option="option" @handleChartClick="handleChartClick"></my-echarts>
    </div>
    <div class="top3">
      <span class="top3-title">{{typeName}}列表</span>
      <ul class="top3-list">
        <li v-for="(item,index) in typeList" :key="index">
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
  name: "category",
  components: {
    myEcharts,
    icon
  },
  mounted() {
    this.typeList=this.revenueRerecord
  },
  computed: {
    ...mapGetters(["getMoney","revenueRerecord","expenditureRerecord"]),
    chartValue(){
      let {totalBalance, totalRevenue, totalExpenditure}=this.getMoney
      console.log(totalRevenue, totalExpenditure)
      let valueItem= [{value: totalRevenue,name:"收入"},{value: totalExpenditure,name:"支出"}]
      return valueItem;
    },
    option() {
      let option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            type: 'pie',
            radius: ['20%', '80%'],
            avoidLabelOverlap: false,
            itemStyle: {
              normal: {
                color: function (params) {
                  let colorList = ['rgba(103,138,74,1)',"rgba(188, 79, 79, 1)"];
                  return colorList[params.dataIndex];
                },
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
              }
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
              },
              normal: {
                color: function (params) {
                  let colorList = ['rgba(103,138,74,1)',"rgba(188, 79, 79, 1)"];
                  return colorList[params.dataIndex];
                },}
            },
            labelLine: {
              show: false
            },
            data: this.chartValue,
            tooltip:{
              formatter: '{b}: {c} 元 <br /> 占比: {d}%',

            },


          }
        ]
      }
      return option;
    }
  },
  methods:{
    handleChartClick(obj){
      //console.log(obj)
      this.typeName=obj.name
      this.typeList= obj.name=="收入"? this.revenueRerecord:this.expenditureRerecord
    }
  },
  data() {
    return {
      typeName:"收入",
      typeList:this.revenueRerecord
    }
  }
}
</script>

<style scoped lang="scss">
.chart {
  width: 100vm;
  height: 210px;
  margin: 0 16px;
}

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