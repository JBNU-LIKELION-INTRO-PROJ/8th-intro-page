<template>
  <Layout>
    <div class="wrapper">
      <div class="section" id="project">First section</div>
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
    return {
      options: {
        licenseKey: "YOUR_KEY_HEERE",
        menu: "#menu",
        anchors: ["page1", "page2", "page3"],
        sectionsColor: ["#41b883", "#ff5f45", "#0798ec"]
      }
    };
  }
};
</script>

<style scoped>
.section {
  height: 100vh;
}
</style>
