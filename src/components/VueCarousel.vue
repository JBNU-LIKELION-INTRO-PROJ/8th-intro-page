<template>
  <ClientOnly>
    <carousel>
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
    </carousel>
  </ClientOnly>
</template>

<script>
export default {
  name: "VueCarousel",
  components: {
    Carousel: () =>
      import("vue-carousel")
        .then(m => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then(m => m.Slide)
        .catch()
  }
};
</script>

<style scoped>
.VueCarousel-slide {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
