<template>
  <Layout>
    <div class="wrapper">
      <!-- First Section -->
      <div class="section first-section" id="projects">
        <div class="cover-black"></div>
        <div class="container">
          <catch-phrase />
          <p
            class="first-section__text lg:m-10 lg:text-3xl mb-10 text-xl font-semibold select-none"
          >
            자신이 가지고 있는
            <span class="text-orange">아이디어</span><br />
            <span class="hover:text-orange soft-transition"
              >멋쟁이 사자처럼</span
            >에서 실현해 보세요!
          </p>
          <a
            @click.prevent="handleClick"
            class="soft-transition border-2 border-white text-white hover:text-gray-900 hover:bg-white text-xl px-6 py-2 rounded-full"
            href="http://"
            target="blank"
            >지원하기</a
          >
        </div>
      </div>
      <!-- Second Section -->
      <div class="section py-5" id="about">
        <p
          class="uppercase font-hairline lg:text-5xl text-3xl ml-5 tracking-widest"
        >
          Our Mission
        </p>

        <hr class="w-3/4 pb-4" />
        <!-- 2-1 Section -->
        <div class="lg:flex lg:my-10">
          <!-- 2-1 Section bg pic -->
          <div
            class="lg:w-60vw xl:h-35vh h-30vh bg-no-repeat bg-center bg-cover w-full xl:bg-bottom-m6"
            style="background-image: url('https://raw.githubusercontent.com/CaesiumY/8th-intro-page/master/static/section2_pic1.jpg')"
          ></div>
          <!-- 2-1 Section text -->

          <p
            class="second-section__text text-center text-2xl lg:text-4xl font-thin m-5 self-center lg:m-auto"
          >
            저희
            <span class="font-semibold hover:text-orange soft-transition"
              >멋쟁이 사자처럼</span
            >은
          </p>
        </div>

        <!-- 2-2 Section -->
        <hr class="w-3/4 float-right hidden md:block" />

        <div class="lg:flex lg:flex-row-reverse lg:mt-20">
          <!-- 2-2 Section bg pic -->
          <div
            class="lg:w-60vw xl:h-35vh h-30vh bg-no-repeat bg-center bg-cover w-full xl:bg-bottom-m12"
            style="background-image: url('https://raw.githubusercontent.com/CaesiumY/8th-intro-page/master/static/section2_pic2.jpg')"
          ></div>
          <!-- 2-2 Section text -->
          <div
            class="second-section__text xl:text-2xl text-xl text-center self-center font-thin m-5 lg:m-auto lg:max-w-2xl"
          >
            온라인과 오프라인 활동을 통해 팀을 만들어, 자신이 만들고자 하는
            서비스를
            <span class="hover:text-orange soft-transition font-bold">
              기획부터 프로그래밍까지
            </span>
            할 수 있도록 돕습니다.
          </div>
        </div>
      </div>
      <div class="section py-5 flex-col content-center mb-5" id="contact">
        <p
          class="uppercase font-hairline lg:text-5xl text-3xl ml-5 mb-3 tracking-widest"
        >
          Services
        </p>

        <swiper-slider />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  services: allService(sortBy: "id", order: ASC) {
    totalCount
    edges {
      node {
        id
        title
        profileImage
        github
        link
        description
      }
    }
  }
}
</page-query>

<script>
import CatchPhrase from "../components/CatchPhrase";
import SwiperSlider from "../components/SwiperSlider";

export default {
  components: {
    CatchPhrase,
    SwiperSlider
  },
  data() {
    return {
      isActive: false
    };
  },

  methods: {
    handleClick(e) {
      alert("아직 지원 기간이 아닙니다.");
    }
  }
};
</script>

<style scoped>
.section {
  height: 100vh;
}

.first-section {
  background-image: url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80");
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  animation: fadeIn 0.9s ease-in-out forwards;
  display: flex;
}

.cover-black {
  background: rgba(25, 25, 25, 0.6);
  position: absolute;
  width: 100%;
  height: inherit;
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
  z-index: 10;
  flex-direction: column;
  align-items: center;
}

.soft-transition {
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.scale-up:hover {
  transform: scale(1.2);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.second-section__text {
  word-break: keep-all;
}
</style>
