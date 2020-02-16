<template>
  <ClientOnly>
    <swiper class="m-auto" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="flex flex-col md:flex-row flex-wrap">
        <div
          class="flex-auto font-thin p-5 lg:text-2xl border-right md:text-lg text-base flex-grow"
        >
          <div
            class="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            <animated-number :AnimationNumber="2019" />년
          </div>
          에
        </div>
        <div
          class="flex-auto font-thin p-5 lg:text-2xl border-right md:text-lg text-base flex-grow"
        >
          <div
            class="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            <animated-number :AnimationNumber="7" />기
          </div>
          로 선발된
        </div>
        <div
          class="flex-auto font-thin p-5 lg:text-2xl border-right md:text-lg text-base flex-grow"
        >
          <div
            class="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            <animated-number :AnimationNumber="30" />명
          </div>
          사자들이
        </div>
        <div
          class="flex-auto font-thin p-5 lg:text-2xl md:text-lg text-base flex-grow"
        >
          <div
            class="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            <animated-number :AnimationNumber="projects.length" />개
          </div>
          서비스를 만들었습니다.
        </div>
      </swiper-slide>

      <!-- Project Slides -->
      <swiper-slide
        class="flex flex-col"
        v-for="item in projects"
        :key="item.id"
      >
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-10 scale-up">
          <g-image
            class="w-full border-bottom bg-white"
            :src="item.profileImage"
            :alt="item.title"
          />
          <!-- 타이틀 -->
          <div class="px-6 py-4 bg-gray-100">
            <div class="font-bold text-xl mb-2 text-gray-900">
              {{ item.title }}
            </div>
            <!-- 설명 -->
            <p
              v-if="item.description"
              class="text-gray-700 text-base font-thin"
            >
              {{ item.description }}
            </p>
          </div>
          <!-- 링크 태그 -->
          <div class="px-6 py-2 bg-gray-100">
            <a
              v-if="item.github"
              class="inline-block bg-gray-200 rounded-full px-6 py-1 text-sm font-semibold text-gray-700 mr-2"
              :href="item.github"
              target="_blank"
            >
              <svg
                class="m-auto"
                width="20"
                height="19"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0c1.814 0 3.487.435 5.02 1.306a9.827 9.827 0 0 1 3.639 3.542A9.33 9.33 0 0 1 20 9.734c0 2.121-.636 4.03-1.908 5.723a9.783 9.783 0 0 1-4.928 3.518c-.234.042-.408.012-.52-.09a.49.49 0 0 1-.17-.38l.006-.969c.005-.621.007-1.19.007-1.705 0-.82-.226-1.42-.677-1.8.495-.05.94-.126 1.335-.228a5.4 5.4 0 0 0 1.223-.494 3.62 3.62 0 0 0 1.055-.843c.282-.334.512-.777.69-1.33.178-.554.267-1.19.267-1.909a3.7 3.7 0 0 0-1.028-2.61c.32-.77.286-1.631-.105-2.586-.243-.076-.594-.03-1.054.14-.46.168-.86.354-1.198.557l-.495.304a9.478 9.478 0 0 0-2.5-.33c-.86 0-1.693.11-2.5.33a11.6 11.6 0 0 0-.553-.342c-.23-.135-.593-.298-1.088-.488-.494-.19-.863-.247-1.106-.171-.391.955-.426 1.816-.105 2.585A3.7 3.7 0 0 0 3.62 9.227c0 .719.089 1.352.267 1.902.178.549.406.993.683 1.33.278.339.627.622 1.048.85a5.4 5.4 0 0 0 1.224.494c.395.102.84.178 1.335.228-.338.305-.551.74-.638 1.306a2.631 2.631 0 0 1-.586.19 3.782 3.782 0 0 1-.742.063c-.287 0-.57-.09-.853-.272a2.256 2.256 0 0 1-.723-.792 2.068 2.068 0 0 0-.631-.66c-.256-.168-.471-.27-.645-.304l-.26-.038c-.182 0-.308.02-.378.057-.07.038-.09.087-.065.146.026.06.065.118.117.178.053.059.109.11.17.152l.09.063c.192.085.38.245.567.482.187.236.324.452.41.646l.13.292c.113.32.304.58.574.78.269.198.56.325.872.38.312.054.614.084.905.088.29.004.532-.01.723-.044l.299-.05c0 .32.002.694.007 1.12l.006.692a.49.49 0 0 1-.17.38c-.112.101-.286.13-.52.089a9.783 9.783 0 0 1-4.928-3.518C.636 13.763 0 11.855 0 9.734a9.33 9.33 0 0 1 1.341-4.886 9.827 9.827 0 0 1 3.64-3.542C6.512.436 8.185 0 10 0zM3.79 13.98c.025-.058-.005-.11-.092-.151-.087-.026-.143-.017-.17.025-.025.06.005.11.092.152.078.05.134.042.17-.025zm.403.432c.06-.043.052-.11-.026-.203-.087-.076-.157-.089-.209-.038-.06.042-.052.11.026.203.087.084.157.097.209.038zm.39.57c.078-.06.078-.14 0-.24-.07-.11-.143-.136-.221-.077-.078.042-.078.118 0 .228.078.11.152.14.221.089zm.547.532c.07-.067.052-.148-.052-.24-.104-.102-.19-.115-.26-.039-.078.068-.061.148.052.241.104.102.19.114.26.038zm.742.317c.026-.093-.03-.16-.169-.203-.13-.033-.213-.004-.247.09-.035.092.021.155.169.19.13.05.213.025.247-.077zm.82.064c0-.11-.073-.157-.22-.14-.14 0-.209.047-.209.14 0 .11.074.156.221.139.14 0 .209-.046.209-.14zm.756-.127c-.017-.093-.096-.131-.234-.114-.14.025-.2.088-.183.19.018.101.096.135.235.101.139-.034.2-.093.182-.177z"
                  fill-rule="nonzero"
                />
              </svg>
              GitHub
            </a>
            <a
              v-if="item.link"
              class="inline-block bg-gray-200 rounded-full px-6 py-1 text-sm font-semibold text-gray-700 mr-2"
              :href="item.link"
              target="_blank"
            >
              <svg
                class="svg-icon m-auto"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  d="M16.469,8.924l-2.414,2.413c-0.156,0.156-0.408,0.156-0.564,0c-0.156-0.155-0.156-0.408,0-0.563l2.414-2.414c1.175-1.175,1.175-3.087,0-4.262c-0.57-0.569-1.326-0.883-2.132-0.883s-1.562,0.313-2.132,0.883L9.227,6.511c-1.175,1.175-1.175,3.087,0,4.263c0.288,0.288,0.624,0.511,0.997,0.662c0.204,0.083,0.303,0.315,0.22,0.52c-0.171,0.422-0.643,0.17-0.52,0.22c-0.473-0.191-0.898-0.474-1.262-0.838c-1.487-1.485-1.487-3.904,0-5.391l2.414-2.413c0.72-0.72,1.678-1.117,2.696-1.117s1.976,0.396,2.696,1.117C17.955,5.02,17.955,7.438,16.469,8.924 M10.076,7.825c-0.205-0.083-0.437,0.016-0.52,0.22c-0.083,0.205,0.016,0.437,0.22,0.52c0.374,0.151,0.709,0.374,0.997,0.662c1.176,1.176,1.176,3.088,0,4.263l-2.414,2.413c-0.569,0.569-1.326,0.883-2.131,0.883s-1.562-0.313-2.132-0.883c-1.175-1.175-1.175-3.087,0-4.262L6.51,9.227c0.156-0.155,0.156-0.408,0-0.564c-0.156-0.156-0.408-0.156-0.564,0l-2.414,2.414c-1.487,1.485-1.487,3.904,0,5.391c0.72,0.72,1.678,1.116,2.696,1.116s1.976-0.396,2.696-1.116l2.414-2.413c1.487-1.486,1.487-3.905,0-5.392C10.974,8.298,10.55,8.017,10.076,7.825"
                ></path>
              </svg>
              Link
            </a>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </ClientOnly>
</template>

<script>
import AnimatedNumber from "./AnimatedNumber";
import services from "../services";

export default {
  name: "SwiperSlider",
  data() {
    return {
      swiperOption: {
        // swiper 옵션, 콜백함수 모두 동일하게 사용
        slidesPerView: "auto",

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
      projects: services
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

.border-bottom {
  border-bottom: 1px solid #dfe2e6;
}

.scale-up:hover {
  transition: all ease-in-out 0.75s;
  transform: scale(1.1);
}

@media (min-width: 768px) {
  .border-right {
    border-right: 1px solid #dfe2e6;
  }
}
@media (max-width: 767px) {
  .border-right {
    border-bottom: 1px solid #dfe2e6;
  }
}
</style>

// global Style
<style>
.swiper-pagination-progressbar-fill {
  background: #f6921e !important;
}
</style>
