<template>
  <section class="footer section">
    <div class="container">
      <div class="footer__center">
        <section-header
          :title="'Contact Me'"
          :subtitle="'This is a test form, do not use it.'"
        ></section-header>
        <contact-form />
      </div>

      <div class="level footer__bottom has-margin-top-60">
        <social-icons
          data-aos="zoom-in"
          data-aos-easing="ease-in-out-back"
          data-aos-offset="-300"
        />

        <div class="footer__copyright is-size-7 is-size-6-tablet">
          <p>
            {{ $siteConfig.layoutCommon.footerText }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SectionHeader from './common/SectionHeader'
import SocialIcons from './common/SocialIcons'
import ContactForm from './contact/ContactForm'

export default {
  name: 'LayoutFooter',
  components: { ContactForm, SocialIcons, SectionHeader }
}
</script>
<style scoped lang="scss">
.footer {
  width: 100%;
  flex-direction: row !important;
  background-color: $color-secondary;
  padding-bottom: 2rem;

  @include from($tablet) {
  }

  &__center {
    width: 100%;
  }

  &__bottom {
  }

  &__copyright {
    p {
      color: $color-text-primary-darker;
    }

    margin-top: 1rem;

    @include from($tablet) {
      margin-top: auto;
    }
  }
}
</style>
