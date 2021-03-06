export default {
  target: 'static',

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
      { rel: 'preconnect', href: 'https://www.google-analytics.com', crossorigin: true },
      { rel: 'preload', as: 'font', type: 'font/woff2', href: 'fonts/bitter-v14-latin-regular.woff2' },
      { rel: 'preload', as: 'font', type: 'font/woff2', href: 'fonts/bitter-v14-latin-700.woff2' },
      { rel: 'preload', as: 'font', type: 'font/woff2', href: 'fonts/bitter-v14-latin-italic.woff2' },
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
      '@/assets/scss/_icon-mixin.scss',
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
    [ 'nuxt-fontawesome', {
      imports: [ {
        set: '@fortawesome/free-brands-svg-icons',
        icons: [ 'faFacebookF', 'faGithub', 'faInstagram', 'faLinkedinIn', 'faTwitter' ],
      } ],
    } ],
    'nuxt-imagemin',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    [ '@nuxtjs/google-tag-manager', {
      id: 'GTM-WVG6XJX',
    } ],
    [ 'nuxt-i18n',
      {
        baseUrl: 'https://carlosmoreno.dev',
        defaultLocale: 'es',
        vueI18nLoader: true,
        seo: true,
        locales: [
          { code: 'es', iso: 'es-ES' },
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

    postcss: {
      preset: {
        autoprefixer: {
        },
      },
    },

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
    },
  },
}
