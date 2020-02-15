<template>
  <swiper class="m-auto" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item in index" :key="item"
      >I'm Slide {{ item }}</swiper-slide
    >
    <!-- <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide> -->
    <!-- Optional controls -->

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperOption: {
        // swiper 옵션, 콜백함수 모두 동일하게 사용
        slidesPerView: "auto",
        loop: true,

        pagination: {
          type: "progressbar",
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      index: 4,
      projects: [
        {
          id: 1,
          title: "알려줘 전북대",
          profileImage: "",
          link: ""
        },
        {
          id: 2,
          title: "알려줘 전북대",
          profileImage: "",
          link: ""
        },
        {
          id: 3,
          title: "알려줘 전북대",
          profileImage: "",
          link: ""
        },
        {
          id: 4,
          title: "알려줘 전북대",
          profileImage: "",
          link: ""
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style scoped>
.swiper-container {
  height: 75vh;
  width: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  /* background-color: #eee; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.swiper-button-next,
.swiper-button-prev {
  color: #f6921e;
}
</style>

// global Style
<style>
.swiper-pagination-progressbar-fill {
  background: #f6921e !important;
}
</style>
