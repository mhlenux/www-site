export const state = () => ({
  blogPosts: [],
  data: {}
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setData(state, data) {
    state.data = data
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const files = await require.context('~/content/blog/', true, /\.md$/)
    const blogPosts = files.keys().map((key) => {
      const res = files(key)
      return {
        title: res.attributes.title,
        subtitle: res.attributes.subtitle,
        featureImage: res.attributes.featureImage,
        date: res.attributes.date,
        slug: key.slice(2, -9)
      }
    })

    const sorted = blogPosts.sort(function(a, b) {
      const c = new Date(a.date)
      const d = new Date(b.date)
      return c - d
    })
    await commit('setBlogPosts', sorted.reverse())
  },
  setData({ commit }, data) {
    commit('setData', data)
  }
}
