<template>
  <div>
    <header-bar title="账户总览">
      <icon slot="h-left" :name='this.eyeOpen ? "eye-open" : "eye-close"' @click="handleClick"></icon>
    </header-bar>
    <div class="total-panel">
      <div class="total-panel-title">
        <span class="total-label">余  额</span>
        <span class="title-cny">CNY</span>
      </div>
      <div class="total-panel-number">
        <template v-if="eyeOpen">
          {{ formatTotal(totalBalance) }}￥
        </template>
        <template v-else>
          身家过亿
        </template>
      </div>
    </div>
    <e-chart :totalPay="totalExpenditure" :totalRevenue="totalRevenue" :total="totalBalance"></e-chart>
    <div class="type">
      <span class="pay"><span class="pay-yuan"></span>总支出</span>
      <span class="balance"><span class="balance-yuan"></span>总余额</span>
      <span class="earning"><span class="earning-yuan"></span>总收入</span>
    </div>
  </div>
</template>

<script>
import icon from "../components/icon"
import headerBar from "../components/headerBar"
import eChart from "../components/Echarts"
import {mapState} from "vuex"

export default {
  name: "total",
  data() {
    return {
      //总余额
      totalBalance: 0,
      //总收入
      totalRevenue: 0,
      //总支出
      totalExpenditure: 0,
    }
  },
  computed: {
    ...mapState(["billRecordList", "eyeOpen"]),
    balance() {


    }
  },
  components: {
    headerBar,
    icon,
    eChart
  },
  created() {
    this.billRecordList.forEach((item) => {
      if (item.billType == "支出") {
        this.totalExpenditure += item.billMoney-0
      }else if (item.billType == "收入"){
        this.totalRevenue+=item.billMoney-0
      }

    })
    this.totalBalance = this.totalRevenue-this.totalExpenditure
    console.log(this.totalExpenditure)
    console.log(this.totalRevenue)
    console.log(this.totalBalance)

  },

  methods: {
    handleClick() {

      this.$store.commit("setEye")

    },
    formatTotal(total) {
      if (total >= 1000000 && total < 100000000) {
        return total / 10000 + "w"
      } else if (total >= 100000000) {
        return total / 100000000 + "亿"
      } else {
        return total
      }
    }
  }
}
</script>

<style scoped lang="scss">
.total-panel {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  width: 100vw;

  height: 80px;
  padding-top: 30px;

  &-title {
    display: flex;
    color: white;
    flex-direction: column;

    & > .title-cny {
      font-size: 20px;
      font-weight: 700;

    }

    & > .total-label {
      background-color: rgba(262, 138, 2, 1);
      text-align: center;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 700;
      margin-top: 5px;
    }

  }

  > .total-panel-number {
    height: 50px;
    line-height: 50px;
    color: #8ECF52;
    padding-left: 16px;
    font-size: 42px;
    font-weight: 700;

  }

}

.type {
  font-size: 10px;
  color: #95949f;
  text-align: center;

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
</style>