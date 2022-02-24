<template>
  <div class="social-icons">
    <a class="icon" :href="$siteConfig.socialLinks.email" target="_blank">
      <font-awesome-icon
        :class="`icon is-medium`"
        :icon="['fas', 'envelope']"
      />
    </a>
    <a class="icon" :href="$siteConfig.socialLinks.instagram" target="_blank">
      <font-awesome-icon
        :class="`icon is-medium`"
        :icon="['fab', 'instagram']"
      />
    </a>
    <a class="icon" :href="$siteConfig.socialLinks.linked" target="_blank">
      <font-awesome-icon
        :class="`icon is-medium`"
        :icon="['fab', 'linkedin-in']"
      />
    </a>
    <a class="icon" :href="$siteConfig.socialLinks.github" target="_blank">
      <font-awesome-icon :class="`icon is-medium`" :icon="['fab', 'github']" />
    </a>
  </div>
</template>
<script>
export default {
  name: 'SocialIcons'
}
</script>

<style scoped lang="scss">
.social-icons {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 11rem;

  .icon {
    width: 1.7rem;
    height: 1.7rem;
    color: $color-text-primary;
  }
}
</style>
