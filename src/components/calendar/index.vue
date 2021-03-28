<template>
  <div>
    <div class="slider">
      <div class="">
        <div class="week">
          <span v-for="(item,index) in weeks" :key="index">周{{ item }}</span>
        </div>
        <div class="date">
      <span v-for="(item,index) in calendarMonth" :key="index"
            :class="{active:currentDate.date==item.date&&currentDate.month==item.month,on_current_month:currentDate.month!=item.month}"
            @click="handleClick(item)"
      >{{ item.date === 1 ? item.month + "月" : item.date }}</span>
        </div>
      </div>

  
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar",
  data() {
    return {
      currentDate: {},
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      calendarMonth: []
    }
  },
  computed: {
    title() {
      return this.currentDate.year + "年" + this.currentDate.month + "月" + this.currentDate.date + "日"
    }
  },
  mounted() {
    this.currentDate = this.getNowFormatDate()
    this.initCalendarMonth(this.currentDate.year, this.currentDate.month)
    this.$emit("handleDate", this.currentDate)
  },
  methods: {
    handleClick(Date) {
      if (Date.month != this.currentDate.month) {
        this.initCalendarMonth(Date.year, Date.month)
      }
      this.currentDate = Date
      this.$emit("handleDate", this.currentDate)
    },
    getNowFormatDate() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      return {year, month, date: strDate};
    },
    //获得指定年月日是星期几
    getDay(year, month, date) {
      return new Date(year, month, date).getDay();
    },
    //获得指定年月的最多天数
    getCurrentMonthMaxDay(year, month) {
      return new Date(year, month, 0).getDate()
    },
    initCalendarMonth(year, month) {
      this.calendarMonth = []
      //一个月中的天数
      let monthMaxDay = this.getCurrentMonthMaxDay(year, month)
      //上一个月有多少天
      let monthPrevMaxDay = this.getCurrentMonthMaxDay(year, month - 1)
      //这个月第一天是星期几
      let currentMonth1day = this.getDay(year, month - 1, 1)
      let currentMonthLastDay = this.getDay(year, month - 1, monthMaxDay)

      for (let i = 0; i < currentMonth1day; i++) {
        this.calendarMonth.unshift(
            {
              year: month <= 1 ? year - 1 : year,
              month: month <= 1 ? 12 : month - 0 - 1,
              date: monthPrevMaxDay - i
            }
        )

      }
      for (let i = 1; i <= monthMaxDay; i++) {
        this.calendarMonth.push({
          year: year,
          month: month,
          date: i
        })
      }
      for (let i = 0; i < 6 - currentMonthLastDay; i++) {
        this.calendarMonth.push(
            {
              year: month >= 12 ? year + 1 : year,
              month: month >= 12 ? 1 : month - 0 + 1,
              date: 1 + i
            }
        )

      }

    },

  }
}
</script>

<style scoped lang="scss">
.week {
  display: flex;
  color: white;
  justify-content: space-around;
}

.slider {
  display: flex;
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
    color: #b6b5bd;
    position: relative;
  }

  & > .active {
    border-radius: 50%;
    box-sizing: border-box;
    border: 4px solid #37b6ce;
    padding: 10px;
  }

  & > .on_current_month {
    color: #64636c !important;
  }
}
</style>