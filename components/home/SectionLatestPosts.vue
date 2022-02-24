<template>
  <section class="section-blog section">
    <div class="container section-blog__content">
      <common-section-header
        :title="'Latest posts'"
        :subtitle="'News, updates, posts'"
      ></common-section-header>
      <div class="columns is-vcentered latest-posts">
        <posts-grid
          v-if="blogPosts"
          data-aos="slide-left"
          data-aos-delay="400"
          data-aos-once="true"
          data-aos-easing="ease-in-out-back"
          :posts="blogPosts"
          class="slide-right"
        />
      </div>
    </div>
  </section>
</template>
<script>
import PostsGrid from '../blog/PostsGrid'
import CommonSectionHeader from './common/SectionHeader'

export default {
  name: 'SectionBlog',
  components: { CommonSectionHeader, PostsGrid },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts.slice(0, 3)
    }
  }
}
</script>

<style scoped lang="scss">
.section-blog {
  background-color: $color-secondary-dark;
  &__content {
  }

  .container {
    flex-grow: 0;
  }
}
</style>
