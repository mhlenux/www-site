<template>
  <div class="title-divider-content">
    <h4 class="title is-size-6 is-size-4-tablet">{{ title }}</h4>
    <div class="title-divider"></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TitleDividerContent',
  props: {
    title: { type: String, default: 'Default Title' }
  }
}
</script>
<style scoped lang="scss">
.title-divider-content {
  h4 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0.5rem;
  }
}
</style>
