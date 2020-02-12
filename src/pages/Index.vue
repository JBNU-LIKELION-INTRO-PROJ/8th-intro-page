<template>
  <Layout>
    <div class="wrapper">
      <div class="section first-section" id="projects">
        <div class="cover-black"></div>
        <div class="container">
          <div
            class="perspective-text relative xl:left-4%  md:left-10% left-25% top-5%"
          >
            <div class="perspective-item">
              <p></p>
              <p>JBNU</p>
            </div>
            <div class="perspective-item">
              <p>HACK</p>
              <p>LIKE</p>
            </div>
            <div class="perspective-item">
              <p>YOUR</p>
              <p>LION</p>
            </div>
            <div class="perspective-item">
              <p>LIFE</p>
            </div>
          </div>

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
      <div class="section" id="about">Second section</div>
      <div class="section" id="contact">Third section</div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  },
  data() {
    return {};
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

.perspective-text {
  font-family: Arial;
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
  user-select: none;

  transform: translate(-70%, -50%);
}
.perspective-item {
  height: 50px;
  overflow: hidden;
  position: relative;
}
.perspective-item p {
  margin: 0;
  height: 70px;
  line-height: 50px;
  animation: pers-text ease 7s infinite;
  /* transition: all 0.6s ease-in-out; */
}
.perspective-item:nth-child(odd) {
  transform: skew(60deg, -30deg) scaleY(0.667);
}
.perspective-item:nth-child(even) {
  transform: skew(0deg, -30deg) scaleY(1.333);
}
/* .perspective-text:hover p {
  transform: translate(0, -50px);
} */
.perspective-item:nth-child(1) {
  left: 0px;
}
.perspective-item:nth-child(2) {
  left: 29px;
}
.perspective-item:nth-child(3) {
  left: 58px;
}
.perspective-item:nth-child(4) {
  left: 86px;
}

@keyframes pers-text {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-70px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
