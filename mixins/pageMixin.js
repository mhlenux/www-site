import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['data']),
    pageName() {
      return this.$options.name
    },
    /**
     * @return {boolean}
     */
    IsSinglePost() {
      return this.$options.name.toUpperCase() === 'POST'
    }
  },
  methods: {
    image(img) {
      return require(`~/assets${img}`).srcSet
    }
  }
}
