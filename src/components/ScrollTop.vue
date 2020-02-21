<template>
  <button
    class="scrolltop fixed w-10 right-20 bottom-80 focus:outline-none p-1"
    v-scroll-to="'#menu'"
  >
    <svg
      viewBox="0 0 28 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      xml:space="preserve"
    >
      <path
        d="M26.297 20.797l-2.594 2.578c-0.391 0.391-1.016 0.391-1.406 0l-8.297-8.297-8.297 8.297c-0.391 0.391-1.016 0.391-1.406 0l-2.594-2.578c-0.391-0.391-0.391-1.031 0-1.422l11.594-11.578c0.391-0.391 1.016-0.391 1.406 0l11.594 11.578c0.391 0.391 0.391 1.031 0 1.422z"
      ></path>
    </svg>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.scrolltop {
  cursor: pointer;
  z-index: 11;
}
</style>
