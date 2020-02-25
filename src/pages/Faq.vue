<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">{{ post.node.title }}</h2>
        <div class="text-copy-secondary mb-4"></div>

        <div class="text-lg mb-4 font-thin" v-html="post.node.content"></div>
      </div>
      <!-- end post -->
      a
      <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/faq"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "index", order: ASC, perPage: 5, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        index
        title
        content
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from "../components/PaginationPosts";

export default {
  components: {
    PaginationPosts
  }
};
</script>
