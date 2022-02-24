<template>
  <div class="content">
    <h5 class="title has-text-white-bis">
      You're Awesome! Thank you for your submission!
    </h5>
    <p class="is-5 has-text-success">
      Message sent successfully!
    </p>
    <nuxt-link to="/">
      <button class="m-button m-button-bordered has-margin-top-30">
        Back to the Home
      </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  name: 'SubmissionSuccess'
}
</script>

<style scoped></style>
