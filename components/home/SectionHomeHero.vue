<template>
  <section
    class="section-hero section has-padding-top-100 has-padding-top-80-tablet"
  >
    <div class="container is-full-width">
      <div class="columns">
        <div class="column">
          <h1 class="section-hero__title title">
            {{ $siteConfig.content.hero[0] }}
          </h1>
          <p class="section-hero__subtitle subtitle is-size-6 is-size-5-tablet">
            {{ $siteConfig.content.hero[1] }}
          </p>
          <button
            class="
              section-hero__button
              button
              is-white is-outlined is-rounded is-size-6 is-size-5-tablet
            "
            @click="$emit('movedown')"
          >
            About
          </button>
        </div>
        <div class="column is-4">
          <div class="section-hero__img" data-aos="zoom-out">
            <img src="~assets/img/bg-hero-image.svg" alt="" />
          </div>
        </div>
      </div>
      <!-- <p>
        <span class="title is-6">Currently available</span> &nbsp; - asdasdasd
      </p> -->
    </div>
  </section>
</template>
<script>
export default {
  name: 'SectionHero'
}
</script>
<style scoped lang="scss">
.section-hero {
  padding-top: 5rem;
  @include from($tablet) {
    padding-top: 0;
  }

  .container {
    flex-grow: 0;
  }

  &__img {
    display: inline-block;
    width: 100%;
    text-align: right;

    img {
      max-width: 15rem;
      @include from($tablet) {
        max-width: 100%;
      }
    }
  }

  &__title {
    font-size: 2rem;
    letter-spacing: 1px;
    line-height: 100%;
    margin: 0;

    @include from($tablet) {
      font-size: 3rem;
    }
  }

  &__subtitle {
    margin-top: 1rem !important;
    margin-bottom: 2rem !important;
    line-height: 150%;

    @include from($tablet) {
      margin-top: 1.5rem !important;
      margin-bottom: 3rem !important;
    }

    @include from($widescreen) {
      margin-top: 1.9rem !important;
      margin-bottom: 3.8rem !important;
    }
  }

  &__button {
    margin-bottom: 2rem;
    @include from($desktop) {
      margin-bottom: 0;
    }
  }
}
</style>
