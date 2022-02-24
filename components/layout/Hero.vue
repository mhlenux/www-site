<template>
  <section
    :class="{
      'hero has-padding-top-30-mobile has-margin-bottom-10 is-medium': true
    }"
  >
    <img :srcset="image" class="hero__bgimg" />
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-4 is-size-2-tablet">
          {{ title }}
        </h1>
        <div
          class="subtitle has-text-weight-light is-size-6 is-size-4-tablet is-marginless"
        >
          {{ subtitle }}
        </div>
        <br />
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    featureImage: { type: String, default: '' }
  },
  computed: {
    image() {
      return this.featureImage === ''
        ? ''
        : require(`~/${this.featureImage}}`).srcSet
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-size: cover !important;
  background-position: center;
  text-align: center;
  overflow: hidden;
  position: relative;

  &.hero:after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    position: absolute;
  }

  &__bgimg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.hero-body {
  position: relative;
  z-index: 2;
}

.title,
.subtitle,
.under-subtitle,
.under-subtitle strong {
  color: white;
}

/** Animations */

.title {
  animation: fadeInUp 500ms ease-out;
}

.subtitle {
  animation: fadeInUp 750ms ease-out;
}

.under-subtitle {
  animation: fadeInDown 1000ms ease-out;
}
</style>
