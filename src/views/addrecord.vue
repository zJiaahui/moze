<template>
  <div class="record">
    <header-bar title="增加记录">
      <icon slot="h-left" name='fanhui' @click="$router.replace('/add')"></icon>
      <icon slot="h-right" name='baocun' @click="handlePreservation"></icon>
    </header-bar>
    <div class="record-type">
      <div class="type-nav">
        <span v-for="(item,index) in type" :key="index" :class="{active:currentIndex==index}"
              @click="currentIndex=index">{{ item }}</span>

      </div>
      <div class="type-content">
        <div v-for="(item,index) in currentType" :key="index" class="type-content-item">
          <icon slot="h-left" :name='item.icon'></icon>
          <span> {{ item.text }}</span>

        </div>
      </div>

      <div class="type-item-info">
        <div>
          <input type="number" placeholder="金额">
        </div>
        <div class="date">
          <input type="date">
          <input type="date">
        </div>
        <div class="date">
          <input class="remarks" placeholder="备注">

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import icon from "../components/icon"
import headerBar from "../components/headerBar"

export default {
  name: "addRecord",
  data() {
    return {
      type: ["收入", "支出"],
      currentIndex: 0,
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
      ]

    }
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
    handlePreservation() {

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

      & > .date {
        display: flex;
        margin-top: 10px;
        >input{
          color: white;
        }
        >.remarks{
          height: 80px;
        }
      }

      & input {
        border: 1px solid #ceced4;
        height: 32px;
        border-radius: 6px;
        width: 100%;
        padding: 16px;
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
      color: white;

      & > .type-content-item {
        width: 20vw;
        height: 20vw;
        display: flex;
        margin: 0 2.5vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 30px;

        & > span {
          font-size: 12px;
        }
      }
    }


  }
}

</style>