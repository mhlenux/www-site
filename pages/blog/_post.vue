<template>
  <div class="blog-post">
    <article class="container section">
      <div class="columns is-centered">
        <div class="column is-8">
          <section-header :title="title" :subtitle="subtitle">
            <span>Posted on: {{ formattedDate }}</span>
          </section-header>

          <div class="blog-post__content" v-html="content"></div>

          <nuxt-link
            class="button is-white is-outlined is-rounded is-medium"
            to="/blog"
            >Back to blog
          </nuxt-link>
          <comments :identifier="$route.params.post" />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import formatDate from '../../helpers/formatDate'
import Comments from '../../components/blog/Comments'
import { replaceTags } from '../../helpers/replaceTags'
import SectionHeader from '../../components/home/common/SectionHeader'

export default {
  name: 'Post',
  components: { Comments, SectionHeader },
  async asyncData(ctx) {
    const fileContent = await import(
      `~/content/blog/${ctx.params.post}/index.md`
    )
    return {
      title: fileContent.attributes.title,
      subtitle: fileContent.attributes.subtitle,
      featureImage: fileContent.attributes.featureImage,
      link: `${ctx.app.$siteConfig.fullUrl}${ctx.route.path}`,
      date: fileContent.attributes.date,
      content: replaceTags(fileContent.html, ctx.params.post)
    }
  },
  data() {
    return {}
  },
  computed: {
    formattedDate() {
      return formatDate(this.date)
    },
    ogImage() {
      const file = `${this.$siteConfig.fullUrl}/_nuxt/uploads/${this.featureImage}`
      return (
        file.substring(0, file.lastIndexOf('.')) +
        '-1280' +
        file.substring(file.lastIndexOf('.'))
      )
    }
  },
  head() {
    return {
      title: `${this.title} | ${this.$siteConfig.siteName}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.subtitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.subtitle
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.ogImage
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: this.$siteConfig.siteName
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.link
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.blog-post {
  &__content {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
}

.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  color: $color-text-primary !important;
}

.content blockquote {
  background-color: $color-secondary-light !important;
}
</style>
