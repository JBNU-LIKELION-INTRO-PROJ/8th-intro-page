<template>
  <ClientOnly>
    <swiper class="m-auto" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="flex">
        <div class="font-thin p-10 text-2xl border-right">
          <div class="font-semibold text-4xl m-10">
            <animated-number :AnimationNumber="2019" />년
          </div>
          에
        </div>
        <div class="font-thin p-10 text-2xl border-right">
          <div class="font-semibold text-4xl m-10">
            <animated-number :AnimationNumber="7" />기
          </div>
          로 선발된
        </div>
        <div class="font-thin p-10 text-2xl border-right">
          <div class="font-semibold text-4xl m-10">
            <animated-number :AnimationNumber="30" />명
          </div>
          사자들이
        </div>
        <div class="font-thin p-10 text-2xl">
          <div class="font-semibold text-4xl m-10">
            <animated-number :AnimationNumber="this.index" />개
          </div>
          서비스를 만들었습니다.
        </div>
      </swiper-slide>

      <swiper-slide v-for="item in index" :key="item"
        >I'm Slide {{ item }}</swiper-slide
      >

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </ClientOnly>
</template>

<script>
import AnimatedNumber from "./AnimatedNumber";

export default {
  name: "SwiperSlider",
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
    swiper: () =>
      import("vue-awesome-swiper")
        .then(m => m.swiper)
        .catch(),
    swiperSlide: () =>
      import("vue-awesome-swiper/src")
        .then(m => m.swiperSlide)
        .catch(),
    AnimatedNumber
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {}
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
  /* background-color: #fafafa; */
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

.border-right {
  border-right: 1px solid #dfe2e6;
}
</style>

// global Style
<style>
.swiper-pagination-progressbar-fill {
  background: #f6921e !important;
}
</style>
