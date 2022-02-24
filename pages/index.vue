<template>
  <div class="page-home">
    <navbar>
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="{
          active: activeSection === index,
          'navbar-item c-navbar-menu-item': true
        }"
        @click="scrollToSection(index)"
      >
        {{ item }}
      </div>
    </navbar>
    <div class="sections-menu">
      <span
        v-for="(offset, index) in offsets"
        :key="index"
        class="menu-point"
        :class="{ active: activeSection === index }"
        @click="scrollToSection(index)"
      >
      </span>
    </div>

    <section-home-hero class="fullpage" @movedown="moveUp" />
    <section-about class="fullpage" />
    <section-latest-posts class="fullpage" />

    <section-contact-me class="fullpage" />
  </div>
</template>

<script>
/* TODO: fullScroll.vue needs to be refactored from this ,that handles full
screen scrolling. @movedown event is coupled with fullScroll, needs to be
solved. */

import SectionHomeHero from '../components/home/SectionHomeHero'
import SectionAbout from '../components/home/SectionAbout'
import SectionContactMe from '../components/home/SectionContactMe'
import Navbar from '../components/layout/Navbar'
// import SectionLatestPosts from '../components/home/SectionLatestPosts'

export default {
  layout: 'home',
  components: {
    SectionContactMe,
    // SectionLatestPosts,
    SectionHomeHero,
    SectionAbout,
    Navbar
  },
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      // items: ['Home', 'About', 'Latest Posts', 'Contact Me']
      items: ['Home', 'About', 'Contact Me']
    }
  },
  mounted() {
    this.init()
  },
  destroyed() {
    window.removeEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }) // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM) // Mozilla Firefox
    window.removeEventListener('touchstart', this.touchStart) // mobile devices
    window.removeEventListener('touchmove', this.touchMove) // mobile devices
  },
  methods: {
    init() {
      this.calculateSectionOffsets()
      // Mozilla Firefox
      window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM)
      // Other browsers
      window.addEventListener('mousewheel', this.handleMouseWheel, {
        passive: false
      })
    },
    calculateSectionOffsets() {
      const sections = document.getElementsByTagName('section')
      const length = sections.length
      for (let i = 0; i < length; i++) {
        const sectionOffset = sections[i].offsetTop
        this.offsets.push(sectionOffset)
      }
    },
    handleMouseWheel(e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp()
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown()
      }
      e.preventDefault()
      return false
    },
    handleMouseWheelDOM(e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp()
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown()
      }
      return false
    },
    moveDown() {
      this.inMove = true
      this.activeSection--
      if (this.activeSection < 0) this.activeSection = this.offsets.length - 1
      this.scrollToSection(this.activeSection, true)
    },
    moveUp() {
      this.inMove = true
      this.activeSection++
      if (this.activeSection > this.offsets.length - 1) this.activeSection = 0
      this.scrollToSection(this.activeSection, true)
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false
      this.activeSection = id
      this.inMove = true
      document.getElementsByTagName('section')[id].scrollIntoView({
        behavior: 'smooth'
      })
      setTimeout(() => {
        this.inMove = false
      }, 400)
    },
    touchStart(e) {
      e.preventDefault()
      this.touchStartY = e.touches[0].clientY
    },
    touchMove(e) {
      if (this.inMove) return false
      e.preventDefault()
      const currentY = e.touches[0].clientY
      if (this.touchStartY < currentY) {
        this.moveDown()
      } else {
        this.moveUp()
      }
      this.touchStartY = 0
      return false
    }
  },
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  }
}
</script>

<style scoped lang="scss">
.fullpage {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.sections-menu {
  z-index: 999;
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: none;

  @include from($desktop) {
    display: block;
  }
}

.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #fff;
  display: block;
  margin: 1rem 0;
  opacity: 0.6;
  transition: 0.4s ease all;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}
</style>
