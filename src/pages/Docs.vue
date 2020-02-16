<template>
  <Layout>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="max-w-xs w-1/2 rounded overflow-hidden shadow-xl m-auto">
    <img class="w-screen" src="../../blog/images/1601s.jpg" alt="profile of jhp">
    <div class="px-4 py-2 mb-1">
      <div class="font-semibold text-xl font-serif-Cambria text-lg mb-1 text-blue-400">박종현</div>
      <p class="text-gray-700 text-xs tracking-wide ">8기 멋사 대표 &bull;기획 담당 </p>
    </div>
    <div class="px-4 py-2 flex">
      <svg class="h-5 w-5 "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>
      <p class="text-xs mx-1"><a href="https://github.com/PeterPPark">brunch</a></p>
      <svg class="h-5 w-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
      <p class="text-xs"><a href="https://www.notion.so/jbnulikelion8/8-notion-6bdc700dfc3b43199dfaf1a8987f90a4">information</a></p>
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

