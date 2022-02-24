<template>
  <div class="column is-4">
    <nuxt-link :to="link">
      <div class="post-card card">
        <div class="post-card__image card-image">
          <figure class="image is-2by1">
            <img :srcset="image" />
          </figure>
        </div>
        <div class="post-card__content card-content">
          <div class="post-card__media media">
            <div class="media-content">
              <p class="post-card__date is-size-7">
                {{ getFormattedDate(date) }}
              </p>
              <h4 class="post-card__title title is-6">{{ title }}</h4>
            </div>
          </div>

          <p class="post-card__excerpt">
            {{ subtitle }}
          </p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import formatDate from '../../helpers/formatDate'

export default {
  name: 'PostCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    },
    featureImage: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  },
  computed: {
    image() {
      return this.featureImage === ''
        ? ''
        : require(`~/content${this.featureImage}`).srcSet
    }
  },
  methods: {
    getFormattedDate(date) {
      return formatDate(date)
    }
  }
}
</script>

<style lang="scss" scoped>
.subtitle {
  opacity: 0.5;
}
</style>

<style lang="scss">
.post-card {
  border-radius: 5px;
  &__image figure img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &__media {
    margin: 0 !important;
  }
  &__date {
    padding: 5px 0;
  }
  &__excerpt {
    padding: 10px 0 20px 0;
  }
}
</style>
