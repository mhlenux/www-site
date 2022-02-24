/* Common Footer. This is not in use in our Single Page Home */

<template>
  <footer class="footer has-margin-top-60">
    <social-icons
      data-aos="zoom-in"
      data-aos-easing="ease-in-out-back"
      data-aos-offset="-300"
    />

    <div class="footer__copyright">
      <p>
        {{ $siteConfig.layoutCommon.footerText }}
      </p>
    </div>
  </footer>
</template>

<script>
import SocialIcons from '../home/common/SocialIcons'

export default {
  name: 'Footer',
  components: { SocialIcons }
}
</script>

<style scoped lang="scss">
.footer {
  text-align: center;
  width: 100%;
  flex-direction: row !important;
  background-color: $color-secondary;
  padding-bottom: 2rem;

  &__copyright {
    p {
      color: $color-text-primary-darker;
      margin-top: 0.5rem;
      font-size: 0.6rem;

      @include from($tablet) {
        font-size: 0.75rem;
      }
    }
  }
}
</style>
