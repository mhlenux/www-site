<template>
  <div>
    <navbar> </navbar>
    <nuxt class="has-margin-top-80" />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

export default {
  components: { Footer, Navbar }
}
</script>

<style></style>
