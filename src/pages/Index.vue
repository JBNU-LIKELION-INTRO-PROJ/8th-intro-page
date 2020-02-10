<template>
  <Layout>
    <div class="wrapper">
      <div class="section first-section" id="projects">
        <div class="cover-black">
          <div class="perspective-text justify-center">
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
  }
};
</script>

<style scoped>
.section {
  height: 100vh;
}

.first-section {
  background-image: url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  height: 88vh;
}

.cover-black {
  background: rgba(25, 25, 25, 0.6);
  position: absolute;
  width: 100%;
  height: inherit;
  text-align: center;
  color: white;
}

.perspective-text {
  font-family: Arial;
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
  user-select: none;
  position: absolute;
  top: 40%;
  left: 50%;
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
</style>
