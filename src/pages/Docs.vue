<template>
  <Layout>
  <div class="cards flex flex-wrap bg-center bg-cover text-center">
    
    <div class="card1 max-w-xs rounded overflow-hidden shadow-xl m-6 flex-auto">
      <img class="w-screen h-64" src="../../static/1601s.jpg" alt="profile of jhp">
      <div class="px-4 py-2 mb-1">
        <div class="font-semibold text-xl font-sans text-lg mb-1 text-orange-800">박종현</div>
        <p class="text-gray-700 text-xs tracking-wide ">8기 대표 &bull;기획 담당 </p>
      </div>
      <div class="px-4 py-2 flex mb-4">
        <a class="w-1/2 h-8 text-orange-800 bg-transparent hover: font-semibold hover:text-blue-500 px-2 py-1 border hover:border-transparent rounded"  href="https://github.com/PeterPPark">Github</a>
        <a class="w-1/2 h-8 text-orange-800 bg-transparent hover: font-semibold hover:text-blue-500 px-2 py-1 border hover:border-transparent rounded"  href="https://www.notion.so/jbnulikelion8/8-notion-6bdc700dfc3b43199dfaf1a8987f90a4">brunch</a>
      </div>
    </div>

    <div class="card2 max-w-xs rounded overflow-hidden shadow-xl m-6 flex-auto">
      <img class="w-screen h-64" src="../../static/kkm.jpg" alt="profile of gkm">
      <div class="px-4 py-2 mb-1">
        <div class="font-semibold text-xl font-sans text-lg mb-1 text-orange-800">구경민</div>
        <p class="text-gray-700 text-xs tracking-wide ">8기 부대표 &bull;데이터 담당 </p>
      </div>
      <div class="px-4 py-2 flex mb-2">
        <a class="flex-1 h-8 text-orange-800 bg-transparent hover: font-semibold hover:text-blue-500 px-2 py-1 border hover:border-transparent rounded"  href="https://github.com/Ant9615">Github</a>
      </div>
    </div>
    <div class="card3 max-w-xs w-1/2 rounded overflow-hidden shadow-xl m-6 flex-auto">
      <img class="w-screen h-64" src="https://image.chosun.com/sitedata/image/201812/04/2018120400079_0.jpg" alt="profile of lbk">
      <div class="px-4 py-2 mb-1">
        <div class="font-semibold text-xl font-sans text-lg mb-1 text-orange-800">이범기</div>
        <p class="text-gray-700 text-xs tracking-wide ">8기 운영진 &bull;예산 담당 </p>
      </div>
      <div class="px-4 py-2 flex">
        <a class="flex-1 h-8 text-orange-800 bg-transparent hover: font-semibold hover:text-blue-500 px-2 py-1 border hover:border-transparent rounded" href="https://github.com/orgs/JBNU-LIKELION-INTRO-PROJ/people/baaaam771">Github</a>
      </div>
    </div>
    <div class="card4 max-w-xs w-1/2 rounded overflow-hidden shadow-xl m-6 flex-auto">
      <img class="w-screen h-64" src="https://lh3.googleusercontent.com/proxy/cbkvZYt-EfLvFJi0YYM3ONxtCWW_41Pkwt6C_PCeLQ15fhPYCUl7Kpa3q8T9B4xHTUTXoucdWUyXwY2R27K79MkrSVSYCEh0DQre6dzRfrefhlfqHZbOtx2as_WxMK35fpVF-6Q" alt="profile of khh">
      <div class="px-4 py-2 mb-1">
        <div class="font-semibold text-xl font-sans text-lg mb-1 text-orange-800">김현희</div>
        <p class="text-gray-700 text-xs tracking-wide ">8기 운영진 &bull;개발 담당 </p>
      </div>
      <div class="px-4 py-2 flex">
        <a class="flex-1 h-8 text-orange-800 bg-transparent hover: font-semibold hover:text-blue-500 px-2 py-1 border hover:border-transparent rounded"  href="https://github.com/su-mmer">Github</a>
      </div>
    </div>
    <div class="card5 max-w-xs w-1/2 rounded overflow-hidden shadow-xl m-6 flex-auto">
      <img class="w-screen h-64" src="https://img.hani.co.kr/imgdb/resize/2017/0914/150523852061_20170914.JPG" alt="profile of jjh">
      <div class="px-4 py-2 mb-1">
        <div class="font-semibold text-xl font-sans text-lg mb-1 text-orange-800">장준혁</div>
        <p class="text-gray-700 text-xs tracking-wide ">8기 운영진 &bull;홍보 담당 </p>
      </div>
      <div class="px-4 py-2 flex">
        <a class="flex-1 h-8 text-orange-800 bg-transparent hover: font-semibold hover:text-blue-500 px-2 py-1 border hover:border-transparent rounded"  href="https://github.com/CitrusSoda">Github</a>
      </div>
    </div>
    <div class="card6 max-w-xs w-1/2 rounded overflow-hidden shadow-xl m-6 flex-auto">
      <img class="w-screen h-64" src="https://avatars2.githubusercontent.com/u/35517199?s=460&v=4" alt="profile of ycs">
      <div class="px-4 py-2 mb-1">
        <div class="font-semibold text-xl font-sans text-lg mb-1 text-orange-800">윤창식</div>
        <p class="text-gray-700 text-xs tracking-wide ">7기 대표 &bull;개발 담당 </p>
      </div>
      <div class="px-4 py-2 flex mb-4">
        <a href="https://github.com/CaesiumY" class="w-1/2 h-8 text-orange-800 bg-transparent hover: font-semibold hover:text-blue-500 px-2 py-1 border hover:border-transparent rounded ">
          Github</a>
        <a class="w-1/2 h-8 text-orange-800 bg-transparent hover: font-semibold hover:text-blue-500 px-2 py-1 border hover:border-transparent rounded" href="https://caesiumy.github.io"> 
        blog</a>
      </div>
    </div>
  </div>
  </Layout>
</template>

<page-query>
query Documentation {
  docs: allDocumentation (sortBy: "date", order: DESC) {
    edges {
      node {
        id
        path
        title
        excerpt
      }
    }
  }
}
</page-query>

<style>


</style>

<script>
export default {
  metaInfo: {
    title: 'Members'
  }
}
</script>

