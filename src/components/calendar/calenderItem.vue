<template>
  <div class="calendar">
    <div class="week">
      <span v-for="(item,index) in weeks" :key="index">周{{ item }}</span>
    </div>
    <div class="date">
    <span v-for="(item,index) in monthAllDayList"
          :class="{
          on_current_month:item.billType==='prev'||item.billType==='next',
          active:title==`${item.billYear}-${item.billMonth}-${item.billDate}` && (item.billType!=='prev'&&item.billType!=='next')}"
          :key="index"
          @click="handleSelectDate(item)"
    >
      {{ item.billDate == 1 ? item.billMonth + "月" : item.billDate }}
    </span>
    </div>
    <div class="tip">日历年份{{calenderY}}</div>
  </div>
</template>

<script>
export default {
  name: "calenderItem",
  props: {
    monthAllDayList: {
      type: Array
    }
  },
  data() {
    return {
      weeks: ['日', '一', '二', '三', '四', '五', '六'],

    }
  },
  computed: {
    title() {
      let {billYear, billMonth, billDate} = this.$store.state.billCurrentDate
      return `${billYear}-${billMonth}-${billDate}`
    },
    calenderY(){
     return this.monthAllDayList[8].billYear
    }
  },
  mounted() {

  },
  methods: {
    handleSelectDate(item) {
      this.$store.commit("setBillCurrentDate", item)
      this.$emit("changeSelectDate", item)
    }
  }
}
</script>

<style scoped lang="scss">
.calendar {
  position: relative;

  > .tip {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    color: rgba(225, 225, 225, 0.05);
    font-size: 30px;
    z-index: -1;
  }
}

.week {
  display: flex;
  color: white;
  flex-wrap: nowrap;
  justify-content: space-around;
}

.date {
  margin-top: 6px;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;

  & span:nth-child(7n+1) {
    color: #f88888;
  }

  & span:nth-child(7n) {
    color: #baf8ab;
  }

  & > span {
    box-sizing: border-box;
    width: 10.8857vw;
    height: 10.8857vw;
    margin: 1.6vw;
    text-align: center;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #cdcdd0;
    position: relative;
    font-weight: 700;
    //box-shadow: 0 0 1px rgba(128,128,128,0.5);
  }

  & > .active {
    border-radius: 50%;
    box-sizing: border-box;
    border: 4px solid #37b6ce;
    padding: 10px;
  }

  & > .on_current_month {
    color: #64636c !important;
    font-weight: 400;
    //box-shadow:none;
  }
}
</style>