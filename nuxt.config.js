import { readdirSync } from 'fs'
import path from 'path'
import purgecss from '@fullhuman/postcss-purgecss'
import Mode from 'frontmatter-markdown-loader/mode'

import siteConfig from './config/site'

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: siteConfig.siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteConfig.tagLine
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/globals',
    { src: '@/plugins/aos.client', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    '@nuxtjs/sitemap',
    'nuxt-responsive-loader',
    '@nuxtjs/axios'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }

      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'content'),
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.HTML, Mode.META]
          // markdownit: {
          //   injected: true,
          //   linkify: true,
          //   typographer: true,
          //   use: ['markdown-it-highlightjs']
          // }
        }
      })
    },
    postcss:
      process.env.NODE_ENV === 'production'
        ? {
            preset: {
              features: {
                customProperties: false
              }
            },
            plugins: [
              purgecss({
                content: [
                  './pages/**/*.vue',
                  './layouts/**/*.vue',
                  './components/**/*.vue'
                ],
                css: ['assets/scss/main.scss'],
                whitelist: [
                  'html',
                  'body',
                  'nuxt__build_indicator',
                  '__nuxt',
                  'svg',
                  'table',
                  'td',
                  'th',
                  'tr',
                  'tbody',
                  'thead',
                  'tfoot',
                  'code',
                  'pre',
                  'is-1',
                  'is-2',
                  'is-3',
                  'is-4',
                  'is-5',
                  'is-6',
                  'aos-init',
                  'aos-animate',
                  'data-aos-delay',
                  'data-aos-duration',
                  'fade-up',
                  'fade-left',
                  'fade-right',
                  'fade-up',
                  'zoom-in',
                  'zoom-out',
                  'active',
                  'is-active',
                  'is-floating',
                  'is-transparent',
                  'navbar',
                  'navbar-menu',
                  'c-navbar-menu',
                  'navbar-item',
                  'c-navbar-menu-item'
                ],
                whitelistPatterns: [/fa/, /table/g, /language/, /hljs/]
              })
            ]
          }
        : undefined
  },
  styleResources: {
    scss: ['./assets/scss/_vars.scss']
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faEnvelope', 'faTabletAlt', 'faGlobe', 'faFileCode', 'faCode']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faLinkedinIn', 'faFacebookF', 'faInstagram', 'faGithub']
      }
    ]
  },
  googleAnalytics: {
    id: siteConfig.googleAnalytics
  },
  responsiveLoader: {
    name: 'uploads/[name]-[width].[ext]',
    placeholder: true,
    sizes: [320, 640, 768, 960, 1024, 1280, 1600, 1920],
    // placeholder: true, // no placeholder will be generated
    quality: 65, // images are compressed with medium quality
    adapter: require('responsive-loader/sharp')
  },
  axios: {
    baseURL: '/',
    https: true,
    progress: true
  },
  sitemap: {
    hostname: siteConfig.fullUrl,
    exclude: ['/contact-success', '/contact-fail'],
    routes: getDirectories('./content/blog').map((dir) => `/blog/${dir}`)
  },
  generate: {
    routes() {
      return getDirectories('./content/blog').map((dir) => `/blog/${dir}`)
    }
  }
}
