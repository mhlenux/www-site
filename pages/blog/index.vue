<template>
  <div class="blog">
    <section class="container section">
      <section-header
        :title="'Blog'"
        :subtitle="'News, Updates, Posts, Tech blogs'"
      />

      <h4>Category: All</h4>
      <posts-grid
        :posts="blogPosts"
        class="has-padding-top-30 has-padding-bottom-30"
      />
    </section>
  </div>
</template>

<script>
import PostsGrid from '../../components/blog/PostsGrid'
import SectionHeader from '../../components/home/common/SectionHeader'

export default {
  name: 'Blog',
  components: { PostsGrid, SectionHeader },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  },
  head() {
    return {
      title: `Blog | ${this.$siteConfig.siteName}`
    }
  }
}
</script>

<style lang="scss">
.blog {
  background-color: $color-secondary-dark;
}
</style>
