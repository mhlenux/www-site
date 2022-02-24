<template>
  <nav
    :class="{
      'is-fixed-top': true,
      'is-floating': isFloating,
      'is-transparent': true,
      navbar: true,
      'is-active': active
    }"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand c-navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <div class="c-navbar-brand-item">
            <img :src="require('~/assets/logo.svg')" alt="" />
          </div>
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger c-navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="active = !active"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        :class="{
          'navbar-menu': true,
          'c-navbar-menu': true,
          'is-active': active
        }"
      >
        <div class="navbar-start c-navbar-start has-margin-left-40-desktop">
          <slot></slot>
        </div>

        <div class="navbar-end c-navbar-end">
          <div class="c-button-wrapper">
            <nuxt-link
              to="/blog"
              class="button is-rounded is-size-4 is-size-5-tablet"
            >
              Blog
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import floatingNavBar from '../../plugins/floatingNavbar.client'

export default {
  name: 'Navbar',
  data() {
    return {
      active: false
    }
  },
  computed: {
    isFloating() {
      if (!process.client) return false

      if (this.active) {
        return true
      } else {
        return window.innerWidth < 1024
      }
    }
  },
  mounted() {
    floatingNavBar()
  },
  methods: {}
}
</script>

<style lang="scss">
nav.navbar {
  height: 4rem;
  transition: all 0.3s;
  background-color: $color-secondary-dark;

  .button {
    background-color: rgba(255, 255, 255, 0.2) !important;
    color: $color-text-primary !important;
    border: none !important;

    &:hover {
      background-color: $white-bis !important;
      color: $color-secondary !important;
    }
  }

  @include from($tablet) {
    height: 5rem;
  }

  .c-navbar-burger {
    margin-top: 7px;
    color: $white-bis;
  }

  .c-navbar-brand {
    height: 100%;
  }

  .c-navbar-brand-item {
    padding-top: 10px;
    padding-left: 1rem;

    @include from($tablet) {
      padding-left: 2rem;
    }

    @include from($desktop) {
      padding-left: 0;
    }
  }

  .c-navbar-menu.is-active {
    background-color: $color-secondary;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    font-size: 1.5rem;

    .c-navbar-menu-item {
      margin-bottom: 0.5rem;
    }
  }

  .c-navbar-end {
  }

  .c-button-wrapper {
    margin-top: 4rem;

    @include from($desktop) {
      margin-top: 0.8rem;
    }
  }

  .c-navbar-menu-item {
    cursor: pointer;
    color: $white;
    border-bottom: 1px solid transparent;
  }

  /*
        COLORS
     */

  // Fixed navbar
  &.is-fixed-top {
    .c-navbar-brand-item {
    }

    .c-navbar-menu-item {
      // slider
      &:after {
        content: '';
        display: block;
        width: 0;
        min-width: 0;
        height: 1.6px;
        position: absolute;
        left: 0;
        bottom: 0;
        background: $white;
        transition: width 0.3s;
      }

      &:hover {
        transition: all 0.4s ease;

        // slider
        &:after {
          width: 100%;
        }
      }
    }
    padding-top: 5px;
  }

  // Floating navbar
  &.is-fixed-top.is-floating {
    background-color: $color-secondary;
    box-shadow: 0 2px 10px 3px rgba(0, 0, 0, 0.05);
    padding-top: 0;

    .c-navbar-menu-item {
      &.active {
        color: $color-primary;
      }

      &:hover {
        color: $color-primary;

        &:after {
          width: 0;
        }
      }
    }
  }
}
</style>
