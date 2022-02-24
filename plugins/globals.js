import Vue from 'vue'
import VueDisqus from 'vue-disqus'
import SiteConfig from '../config/site'

Vue.use(VueDisqus)

export default ({ app }, inject) => {
  inject('siteConfig', SiteConfig)
}
