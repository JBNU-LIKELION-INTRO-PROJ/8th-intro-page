<template>
  <Layout>
    <div
      class="cards flex flex-wrap flex-col md:flex-row lg:flex-grow text-center max-w-6xl m-auto my-10"
    >
      <div
        v-for="item in content"
        :key="item.id"
        class="card max-w-xs rounded overflow-hidden shadow-xl flex-auto bg-gray-100"
      >
        <div class="overflow-hidden h-80">
          <g-image
            class="card-image w-screen w-full border-bottom bg-white"
            :src="item.image"
            :alt="item.name"
          />
        </div>
        <div class="px-4 py-2 mb-1">
          <div
            class="font-semibold text-xl font-sans text-lg mb-1 text-gray-900"
          >
            {{ item.name }}
          </div>
          <p class="text-gray-700 text-xs tracking-wide text-gray-700">
            {{ item.role }} &bull;{{ item.position }}
          </p>
        </div>
        <div class="px-4 py-2 flex mb-4 justify-center">
          <a
            v-if="item.links.github"
            class="soft-transition w-1/2 h-8 text-gray-800 hover:text-orange-300 hover: font-semibold px-2 py-1 border rounded bg-gray-200 mx-5"
            :href="item.links.github"
            target="_blank"
            >Github</a
          >
          <a
            v-if="item.links.brunch"
            class="soft-transition w-1/2 h-8 text-gray-800 hover:text-orange-300 hover: font-semibold px-2 py-1 border rounded bg-gray-200 mx-5"
            :href="item.links.brunch"
            target="_blank"
            >Brunch</a
          >
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          id: 1,
          name: "박종현",
          image:
            "https://github.com/JBNU-LIKELION-INTRO-PROJ/8th-intro-page/blob/master/static/profileImages/1601s.jpg?raw=true",
          role: "8기 대표",
          position: "기획 담당",
          links: {
            github: "https://github.com/PeterPPark",
            brunch: "https://brunch.co.kr/@petepp"
          }
        },

        {
          id: 3,
          name: "김현희",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9f/Kim_Dami_20180830.jpg",
          role: "8기 운영진",
          position: "개발 담당",
          links: {
            github: "https://github.com/su-mmer",
            brunch: ""
          }
        },
        {
          id: 4,
          name: "장준혁",
          image:
            "https://img.hani.co.kr/imgdb/resize/2017/0914/150523852061_20170914.JPG",
          role: "8기 운영진",
          position: "홍보 담당",
          links: {
            github: "https://github.com/CitrusSoda",
            brunch: ""
          }
        },
        {
          id: 5,
          name: "이범기",
          image:
            "https://image.chosun.com/sitedata/image/201812/04/2018120400079_0.jpg",
          role: "8기 운영진",
          position: "재무 담당",
          links: {
            github: "https://github.com/baaaam771",
            brunch: ""
          }
        },
        {
          id: 6,
          name: "윤창식",
          image: "https://avatars2.githubusercontent.com/u/35517199?s=460&v=4",
          role: "7기 대표",
          position: "개발 담당",
          links: {
            github: "https://github.com/CaesiumY",
            brunch: ""
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
.card {
  margin: 1rem auto;
}

.card-image {
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.soft-transition {
  transition: all 0.15s ease-in-out;
}

.soft-transition:hover {
  transition: all ease-in-out 0.25s;
  transform: scale(1.2);
}
</style>
