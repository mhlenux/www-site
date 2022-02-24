<template>
  <div class="section-header">
    <h2 class="section-header__title title is-size-4 is-size-2-tablet">
      {{ title }}
    </h2>
    <div class="title-divider"></div>
    <p class="section-header__subtitle subtitle is-size-6 is-size-5-tablet">
      {{ subtitle }}
    </p>
    <div class="section-header__slot">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SectionHeader',
  props: {
    title: { type: String, default: 'Default title' },
    subtitle: { type: String, default: 'Default subtitle' }
  }
}
</script>

<style scoped lang="scss">
.section-header {
  margin: 2rem auto;
  margin-bottom: 2rem;
  text-align: center;

  @include from($tablet) {
    margin: 1rem auto 3.5rem;
  }

  &__title {
    margin-bottom: 0rem;
    animation: fadeInUp 500ms ease-out;
  }

  &__subtitle {
    animation: fadeInDown 700ms ease-out;
  }

  &__slot {
    animation: fadeInUp 1000ms ease-out;
  }
}
</style>
