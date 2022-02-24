<template>
  <div class="posts-grid">
    <div class="columns is-centered is-multiline">
      <post-card
        v-for="(post, index) in posts"
        :key="index"
        :title="post.title"
        :subtitle="post.subtitle"
        :tags="post.tags"
        :feature-image="`/blog/${post.slug}/${post.featureImage}`"
        :link="`/blog/${post.slug}`"
        :date="post.date"
      />
    </div>
  </div>
</template>

<script>
import PostCard from './PostCard'

export default {
  name: 'PostsGrid',
  components: { PostCard },
  props: {
    posts: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
