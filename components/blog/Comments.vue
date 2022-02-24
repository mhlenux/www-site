<template>
  <div class="comments has-margin-top-40">
    <vue-disqus
      v-if="displayed"
      :shortname="$siteConfig.disqus"
      :identifier="identifier"
    />
  </div>
</template>
<script>
export default {
  name: 'Comments',
  props: {
    identifier: { type: String, required: true }
  },
  data() {
    return {
      displayed: true
    }
  }
}
</script>
