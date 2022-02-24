<template>
  <div class="content">
    <h5 class="title has-text-white-bis">
      Oops, looks like something went wrong!
    </h5>
    <p class="is-5 has-text-danger">
      Your message was not sent. Please use other methods, to get your message
      across, Thanks!
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
  name: 'SubmissionFail',
  layout: 'empty'
}
</script>
<style scoped></style>
