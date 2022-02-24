<template>
  <section class="section-services section">
    <div class="container">
      <div
        class="section-services__content"
        data-aos="slide-right"
        data-aos-once="true"
        data-aos-easing="ease-in-out-back"
      >
        <section-header :title="'About'" :subtitle="'Senior Developer'" />
        <div class="columns is-multiline">
          <div class="column section-about__left is-9-widescreen">
            <title-divider-content :title="$siteConfig.myName">
              <p>
                {{ $siteConfig.content.about[0] }}
              </p>
              <br class="is-hidden-mobile" />
              <!-- <p>
                <span class="title is-6">Currently available</span> &nbsp; - for
                your next project.
              </p> -->
              <p data-aos="fade" data-aos-delay="300" data-aos-easing="ease-in">
                Finnish, English or Estonia.
              </p>
            </title-divider-content>
            <br class="is-hidden-mobile" />
            <social-icons class="has-margin-top-15-mobile"></social-icons>
          </div>
        </div>
      </div>

      <div
        class="section-services__skills"
        data-aos="slide-left"
        data-aos-delay="400"
        data-aos-once="true"
        data-aos-easing="ease-in-out-back"
      >
        <div
          v-for="skill in skills"
          :key="skill"
          class="section-services__skill"
        >
          <span>{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from './common/SectionHeader'
import TitleDividerContent from './common/TitleDividerContent'
import SocialIcons from './common/SocialIcons'

export default {
  components: {
    SectionHeader,
    TitleDividerContent,
    SocialIcons
  },
  data() {
    return {
      skills: [
        'C#',
        '.NET',
        'JavaScript',
        'TypeScript',
        'Vue.js',
        'React.js',
        'Node.js',
        'NoSQL',
        'SQL',
        'Azure/DevOps'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.section-services {
  background-color: $color-secondary;

  &__content {
    background-color: $color-secondary-light;
    border-radius: 30px;
    padding: 1rem;

    @include from($tablet) {
      padding: 1rem 3rem 0;
    }

    @include from($widescreen) {
      padding: 2rem 4rem 1rem;
    }
  }

  &__left {
    padding-bottom: 0;

    @include from($tablet) {
      padding-bottom: 3rem;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include from($desktop) {
      align-items: flex-end;
    }
  }

  .container {
    flex-grow: 0;
  }

  &__skills {
    margin-top: 1rem;
    text-align: center;
  }

  &__skill {
    color: $color-text-primary;
    margin-top: 0.5rem;
    display: inline-block;
    background-color: $color-secondary-light;
    margin-left: 0.3rem;
    padding: 0.2rem 0.5rem;
    border-radius: 3px;
    font-size: 0.6rem;

    @include from($tablet) {
      margin-top: 0.7rem;
      margin-left: 0.3rem;
      padding: 0.2rem 0.5rem;
      font-size: 0.8rem;
    }
  }
}
</style>
