<template>
  <div class="record">
    <header-bar title="增加记录">
      <icon slot="h-left" name='fanhui' @click="$router.replace('/add')"></icon>
      <icon slot="h-right" name='baocun' @click="handlePreservation"></icon>
    </header-bar>
    <div class="record-type">
      <div class="type-nav">
        <span v-for="(item,index) in type" :key="index" :class="{active:currentIndex==index}"
              @click=" handleType(item,index)">{{ item }}</span>
      </div>
      <div class="type-content">
        <div v-for="(item,index) in currentType" :key="index" class="type-content-item" @click="handleTypeItem(item,index)">
          <icon slot="h-left" :name='item.icon'></icon>
          <span :class="{'item-active':currentTypeItemIndex===index}"> {{ item.text }}</span>
        </div>
      </div>

      <div class="type-item-info">
        <div class="item-info-money">
          <input name="money" v-model="money" type="number" placeholder="金额">
          <span>元</span>
        </div>
        <div class="date">
          <input name="date" v-model="myDate" readonly>
          <input name="time" v-model="myTime" readonly>
        </div>
        <div class="date">
          <textarea name="remarks" v-model="myRemarks" class="remarks" placeholder="备注"></textarea>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import icon from "../components/icon"
import headerBar from "../components/headerBar"
import {billTypeList} from "../uitl/basedata"

export default {
  name: "addRecord",
  data() {
    return {
      type: ["收入", "支出"],
      currentIndex: 0,
      currentTypeItemIndex: 0,
      payType: [
        {
          icon: "canyin",
          text: "饮食"
        },
        {
          icon: "jiaotongfei",
          text: "交通"
        },
        {
          icon: "yule",
          text: "娱乐"
        },
        {
          icon: "gouwu1",
          text: "购物"
        },
        {
          icon: "yiyuan",
          text: "医院"
        },
        {
          icon: "jiating",
          text: "家庭"
        },
        {
          icon: "qita",
          text: "其他"
        }
      ],
      incomeType: [
        {
          icon: "gongzichaxun1",
          text: "工资"
        },
        {
          icon: "jinbi",
          text: "奖金"
        }, {
          icon: "biaoqiankuozhan_touzi-222",
          text: "投资"
        },
        {
          icon: "jinbi1",
          text: "利息"
        },
        {
          icon: "qita",
          text: "其他"
        },
      ],
      myTime: null,
      myDate: null,
      myRemarks: null,
      money: null,
    }
  },
  mounted() {
    this.myTime = this.getCurrentTime()
    this.myDate = this.$store.state.selectedDate ? this.$store.state.selectedDate : this.getNowFormatDate();
  },
  computed: {
    currentType() {
      return this.currentIndex == 0 ? this.payType : this.incomeType
    }
  },
  components: {
    headerBar,
    icon,
  },
  methods: {

    getNowFormatDate() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      return `${year}-${month}-${strDate}`
    },
    getCurrentTime() {
      const date = new Date()
      let hours = date.getHours()
      let minutes = date.getMinutes()
      if (hours < 10) {
        hours = "0" + hours
      }
      if (minutes < 10) {
        minutes = "0" + minutes
      }
      return `${hours}:${minutes}`
    },
    handleChange() {
      console.log(typeof this.myTime)
    },
    handlePreservation() {

      if (!this.money) {
        alert("请输入金额")
      }

    },
    handleType(item,index){
      this.currentIndex=index
      this.currentTypeItemIndex=0
    },
    handleTypeItem(item,index) {
      this.currentTypeItemIndex=index

    }
  }
}
</script>

<style scoped lang="scss">
.record {
  ::v-deep .h-left, ::v-deep .h-right {
    font-size: 30px;
    margin-top: -6px;
  }

  & > .record-type {
    & .type-item-info {
      text-align: center;
      padding: 16px;
      &>.item-info-money{
        position: relative;
        >span{
          position: absolute;
          right: 6px;
          top: 10px;
          color: white;

        }
      }
      & > .date {
        display: flex;
        margin-top: 10px;

        > input {
          color: white;
          margin: 0 2px;
        }

        > .remarks {
          width: 100%;
          background-color: transparent;
          height: 80px;
          border: 1px solid #ceced4;
          border-radius: 6px;
          padding: 16px;
          color: white;
          margin: 0 2px;
        }
      }

      & input {
        border: 1px solid #ceced4;
        height: 32px;
        border-radius: 6px;
        width: 100%;
        padding: 20px;
        color: white;
        margin: 0 2px;
      }
    }

    & > .type-nav {
      display: flex;
      color: #fff;
      justify-content: space-around;
      align-items: center;

      & > span {
        flex: 1;
        text-align: center;
        padding: 0 0 10px;
        box-sizing: border-box;
        border-bottom: 2px solid transparent;
      }

      & > .active {

        border-bottom: 2px solid #37b6ce;
      }
    }

    & > .type-content {
      margin-top: 20px;
      display: flex;
      width: 100vw;
      flex-wrap: wrap;
      color: #a39f9f;

      & > .type-content-item {
        width: 20vw;
        height: 20vw;
        display: flex;
        margin: 0 2.5vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 30px;

        & > .item-active {
        color: white;
          font-weight: 700;
        }

        & > span {
          font-size: 12px;
        }
      }
    }


  }
}

</style>