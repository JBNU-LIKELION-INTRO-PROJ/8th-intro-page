<template>
  <Layout>
    <div class="wrapper">
      <div class="section first-section" id="projects">
        <div class="cover-black"></div>
        <div class="container">
          <catch-phrase />
          <p
            class="first-section__text lg:m-10 lg:text-3xl mb-10 text-xl font-semibold"
          >
            자신이 가지고 있는 <span class="text-orange">아이디어</span><br />
            멋쟁이 사자처럼에서 실현해 보세요!
          </p>
          <v-btn outlined x-large rounded color="primary" dark>
            <a
              @click.prevent="handleClick"
              class="text-white hover:text-white text-xl"
              href="http://"
              target="blank"
              >지원하기</a
            >
          </v-btn>
        </div>
      </div>
      <div class="section py-5" id="about">
        <p class="uppercase font-hairline lg:text-5xl text-3xl ml-5">
          Our Mission
        </p>

        <v-divider class="w-3/4 lg:pb-5 pb-4"></v-divider>

        <div class="flex-col h-full text-center lg:mb-5">
          <div
            class="lg:w-60vw h-30vh bg-no-repeat bg-center bg-cover w-full"
            style="background-image: url('https://raw.githubusercontent.com/CaesiumY/8th-intro-page/master/static/section2_pic1.jpg')"
          ></div>
          <p class="second-section__text text-xl m-4">
            저희 멋쟁이 사자처럼은
          </p>

          <div
            class="lg:w-60vw h-30vh bg-no-repeat bg-center bg-cover w-full"
            style="background-image: url('https://raw.githubusercontent.com/CaesiumY/8th-intro-page/master/static/section2_pic2.jpg')"
          ></div>
          <div class="second-section__text lg:text-xl text-xl text-center m-3">
            온라인과 오프라인 활동을 통해 뜻을 같이하는 팀을 만들어 자신이
            <span class="text-orange">
              만들고자 하는 서비스를 기획부터 프로그래밍까지
            </span>
            돕습니다.
          </div>
        </div>
      </div>
      <div class="section" id="contact">Third section</div>
    </div>
  </Layout>
</template>

<script>
import CatchPhrase from "../components/CatchPhrase";
export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    CatchPhrase
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
