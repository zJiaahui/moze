<template>
  <div>
    <div class="slider">

      <swiper
          ref="mySwiper"
          :slides-per-view="3"
          :space-between="50"
          :observer="true"
          @swiper="onSwiper"

          @slideChangeTransitionEnd="slideChangeTransitionEnd"
          @slideChange="onSlideChange">
        <swiper-slide v-for="(item,index) in calendarMonthList" :key="index">
          <calender-item :monthAllDayList="item" @changeSelectDate="changeSelectDate"></calender-item>
        </swiper-slide>

<!--        <swiper-slide>-->
<!--          <calender-item :monthAllDayList="calendarMonthList[0]" @changeSelectDate="changeSelectDate"></calender-item>-->
<!--        </swiper-slide>-->
<!--        <swiper-slide>-->
<!--          <calender-item :monthAllDayList="calendarMonthList[1]" @changeSelectDate="changeSelectDate"></calender-item>-->
<!--        </swiper-slide>-->
<!--        <swiper-slide>-->
<!--          <calender-item :monthAllDayList="calendarMonthList[2]" @changeSelectDate="changeSelectDate"></calender-item>-->
<!--        </swiper-slide>-->
      </swiper>


    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import calenderItem from "./calenderItem";

export default {
  name: "calendar",
  components: {
    Swiper,
    SwiperSlide,
    calenderItem
  },
  data() {
    return {
      billCurrentDate: {},
      calendarMonthList: [],
     // currentIndex:1
    }
  },
  computed:{
    title() {
      return `${this.billCurrentDate.billYear}-${this.billCurrentDate.billMonth}-${this.billCurrentDate.billDate}`;
    }
  },
  mounted() {
    this.init(this.getCurrentDate())
    this.$refs.mySwiper.$swiper.slideTo(1, 0);
  },
  methods: {
    changeSelectDate(item){
      if (item.billType!=="current"){
        this.init(item)
      }
    },
    init(currentDate) {
      this.calendarMonthList=[]
      this.billCurrentDate = currentDate
      //根据当前日期获得前中后三个月月对象
      let {prevMonth, currentMonth, nextMonth} = this.getCurrentPrevNextMonth(this.billCurrentDate)
      this.calendarMonthList.push(this.initCalendarMonth(prevMonth))
      this.calendarMonthList.push(this.initCalendarMonth(currentMonth))
      this.calendarMonthList.push(this.initCalendarMonth(nextMonth))
     // console.log(this.calendarMonthList[0])


    },
    getCurrentPrevNextMonth(billCurrentDate) {
      let currentMonth = billCurrentDate
      //当前选中月的上个月
      let prevMonth = {
        billYear: billCurrentDate.billMonth <= 1 ? billCurrentDate.billYear - 1 : billCurrentDate.billYear,
        billMonth: billCurrentDate.billMonth <= 1 ? 12 : billCurrentDate.billMonth - 1,
        billDate: 1
      }
      //当前选中月的下个月
      let nextMonth = {
        billYear: billCurrentDate.billMonth >= 12 ? billCurrentDate.billYear + 1 : billCurrentDate.billYear,
        billMonth: billCurrentDate.billMonth >= 12 ? 1 : billCurrentDate.billMonth + 1,
        billDate: 1
      }
      return {prevMonth, currentMonth, nextMonth}
    },
    initCalendarMonth(billCurrentDate) {
      //获得选中日期的月日历·
      let calendarMonth = []
      //当前选中的月对象
      let {prevMonth, currentMonth, nextMonth} = this.getCurrentPrevNextMonth(billCurrentDate)

      //获取当前选中月的天数
      let monthMaxDay = new Date(currentMonth.billYear, currentMonth.billMonth, 0).getDate()
      //获取当前选中月的上个月天数
      let monthPrevMaxDay = new Date(prevMonth.billYear, prevMonth.billMonth, 0).getDate()
      //获取当前选中月的第一天是星期几   获取星期几的时候月份要是那个本来就少一1的月份也就是传入从0开始的月份
      let currentMonthFirstDay = new Date(currentMonth.billYear, currentMonth.billMonth - 1, 1).getDay();
      //获取当前选中月的最后一天是星期几
      let currentMonthLastDay = new Date(currentMonth.billYear, currentMonth.billMonth - 1, monthMaxDay).getDay();


      // console.log("当前月多少天", monthMaxDay)
      // console.log("上个月多少天", monthPrevMaxDay)
      // console.log("当月第一天星期几", currentMonthFirstDay)
      // console.log("当月最后一天星期几", currentMonthLastDay)


      for (let i = 0; i < currentMonthFirstDay; i++) {
        calendarMonth.unshift(
            {
              billYear: prevMonth.billYear,
              billMonth: prevMonth.billMonth,
              billDate: monthPrevMaxDay - i,
              billType: "prev"
            }
        )

      }
      for (let i = 1; i <= monthMaxDay; i++) {
        calendarMonth.push({
          billYear: currentMonth.billYear,
          billMonth: currentMonth.billMonth,
          billDate: i,
          billType: "current"
        })
      }

      let nextDay=currentMonthFirstDay>4? 6 - currentMonthLastDay: 6 - currentMonthLastDay+7
      for (let i = 0; i < nextDay; i++) {
        calendarMonth.push(
            {
              billYear: nextMonth.billYear,
              billMonth: nextMonth.billMonth,
              billDate: i+1,
              billType: "next"
            }
        )

      }
      return calendarMonth


    },
    getCurrentDate() {
      let date = new Date();
      let billYear = date.getFullYear();
      let billMonth = date.getMonth() + 1;
      let billDate = date.getDate();
      return {billYear, billMonth, billDate};
    },

    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange(swiper) {
     // this.currentIndex = swiper.realIndex
      if (swiper.realIndex===2){
      let item= this.calendarMonthList[2]
     // console.log("当前",item)
      let {prevMonth, currentMonth, nextMonth} = this.getCurrentPrevNextMonth(item[8])

      this.calendarMonthList=[...this.calendarMonthList.slice(1),this.initCalendarMonth(nextMonth)]
      console.log(this.calendarMonthList)
      }
      if (swiper.realIndex===0){
        let item= this.calendarMonthList[0]
      //  console.log("当前",item)
        let {prevMonth, currentMonth, nextMonth} = this.getCurrentPrevNextMonth(item[8])

        this.calendarMonthList=[this.initCalendarMonth(prevMonth),...this.calendarMonthList.slice(0, 2)]
        console.log(this.calendarMonthList)
      }
      swiper.slideTo(1, 0);
    },
    slideChangeTransitionEnd(swiper){
     // console.log(swiper.swipeDirection)
      if (swiper.swipeDirection === 'next') {
      //swiper.slideTo(1, 0);
       // alert(swiper.activeIndex);


      }
      if (swiper.swipeDirection === 'prev') {

       // swiper.slideTo(1, 0);
      }

    }
  }


}
</script>

<style scoped lang="scss">


</style>