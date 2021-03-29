<template>
  <div>
    <header-bar title="账户报表"></header-bar>
    <ul class="items">
      <li v-for="(item,index) in navTitles" :key="index" :class="{active:currentIndex==index}"
          @click="changeCurrentIndex(index)">{{ item }}
      </li>
    </ul>


    <swiper
        ref="mySwiper"
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange">
      <swiper-slide>
        <all></all>
      </swiper-slide>
      <swiper-slide>
        <detailed></detailed>
      </swiper-slide>
      <swiper-slide>
        <category></category>
      </swiper-slide>
      <swiper-slide>
        <ranking></ranking>
      </swiper-slide>
    </swiper>

  </div>
</template>
<script>
import headerBar from "../components/headerBar"
import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import all from "../components/chart/all";
import detailed from "../components/chart/detailed";
import category from "../components/chart/category";
import ranking from "../components/chart/ranking";

export default {
  name: "Chart",
  data() {
    return {
      navTitles: ["总览", "明细", "类别", "排行"],
      currentIndex: 0
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    headerBar,
    all,
    detailed,
    category,
    ranking
  },
  methods: {
    changeCurrentIndex(index) {
      this.currentIndex = index
      this.$refs.mySwiper.$swiper.slideTo(index, 300, false);

    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange(swiper) {
      this.currentIndex = swiper.realIndex
    },
  },
};
</script>
<style scoped lang="scss">
.items {
  display: flex;
  justify-content: center;
  align-items: center;

  & > li {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4px;
    font-size: 14px;
    border-bottom: 2px solid transparent;
    color: #bab5b5;
  }

  & > .active {
    color: #37b6ce;
    border-bottom: 2px solid #37b6ce;
  }
}
</style>