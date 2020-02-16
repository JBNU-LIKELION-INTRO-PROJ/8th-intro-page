<template>
  <animated-number
    :value="this.AnimationNumber"
    :formatValue="formatToPrice"
    :duration="1000"
  />
</template>

<script>
import AnimatedNumber from "animated-number-vue";

export default {
  data() {
    return {
      value: 10
    };
  },
  props: {
    AnimationNumber: {
      type: Number,
      default: 0
    }
  },
  components: {
    AnimatedNumber
  },
  methods: {
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    }
  }
};
</script>

<style scoped></style>
