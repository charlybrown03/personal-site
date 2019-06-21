import CompressionPlugin from 'compression-webpack-plugin'

export default {
  mode: 'universal',

  srcDir: './src',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Carlos Moreno Villodre',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Website' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://www.carlosmoreno.dev/' },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/_bitter-loader.scss',
  ],

  /*
   ** Global SCSS
   */
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss',
      '@/assets/scss/_font-weight.scss',
    ],
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-fontawesome',
    'nuxt-imagemin',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    [ '@nuxtjs/pwa', { icon: false } ],
    [ '@nuxtjs/google-analytics', {
      id: 'UA-120657145-2',
    } ],
    [ '@nuxtjs/google-tag-manager', {
      id: 'GTM-WVG6XJX',
    } ],
    [ 'nuxt-i18n',
      {
        defaultLocale: 'es',
        langDir: 'languages/',
        lazy: true,
        seo: false,
        locales: [
          { code: 'es', iso: 'es-ES', file: 'es/index.js' },
        ],
      },
    ],
  ],

  /*
   ** Sitemap configuration
   */
  sitemap: {
    hostname: 'https://www.carlosmoreno.dev',
    gzip: true,
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,

    extend (config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }

      if (!isDev) {
        config.plugins.push(new CompressionPlugin())
      }
    },
  },
}
